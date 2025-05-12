import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SatisfactionRecordDto } from './dto/all-satisfaction-data.dto';
import { DashboardFilterDto } from './dto/dashboard-filter.dto';
import { Prisma } from '@prisma/client';

// Define interfaces for typed data structures
interface MonthData {
    totalClients: number;
    satisfiedClients: number;
}

interface RegionMonthData {
    [region: string]: {
        [month: string]: MonthData;
    };
}

@Injectable()
export class VisualizationService {
    constructor(private prisma: PrismaService) { }

    async getSatisfactionByLevel(filters?: { region?: string; district?: string; facility?: string }) {
        // Build the WHERE clause with filters
        let whereClause = 'hlevel IS NOT NULL AND hlevel != ""';
        let params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Get all distinct facility levels with applied filters
        const query = `
            SELECT hlevel, COUNT(*) as total_clients, 
                   SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) as satisfied_clients
            FROM satisfaction
            WHERE ${whereClause}
            GROUP BY hlevel
            ORDER BY hlevel
        `;

        const levels = await this.prisma.$queryRawUnsafe(query, ...params);

        // Calculate satisfaction rates
        const labels: string[] = [];
        const result: number[] = [];

        for (const level of levels as any[]) {
            const levelName = level.hlevel;
            const totalClients = Number(level.total_clients);
            const satisfiedClients = Number(level.satisfied_clients);

            // Calculate satisfaction rate
            const satisfactionRate = totalClients > 0
                ? parseFloat(((satisfiedClients / totalClients) * 100).toFixed(2))
                : 0;

            labels.push(levelName);
            result.push(satisfactionRate);
        }

        // Sort levels by satisfaction rate in descending order (highest first)
        const combined = labels.map((label, index) => ({
            label,
            rate: result[index],
        }));

        combined.sort((a, b) => b.rate - a.rate);

        // Return sorted labels and data
        return {
            status: 'success',
            labels: combined.map(c => c.label),
            data: combined.map(c => c.rate),
        };
    }

    async getSatisfactionByServicepoint(filters?: { region?: string; district?: string; facility?: string }) {
        // Build the WHERE clause with filters
        let whereClause = 'servicepoint IS NOT NULL AND servicepoint != ""';
        let params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Get all distinct service points with applied filters
        const query = `
            SELECT servicepoint, COUNT(*) as total_clients, 
                   SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) as satisfied_clients
            FROM satisfaction
            WHERE ${whereClause}
            GROUP BY servicepoint
            ORDER BY servicepoint
        `;

        const servicepoints = await this.prisma.$queryRawUnsafe(query, ...params);

        // Calculate satisfaction rates
        const labels: string[] = [];
        const result: number[] = [];

        for (const servicepoint of servicepoints as any[]) {
            const servicepointName = servicepoint.servicepoint;
            const totalClients = Number(servicepoint.total_clients);
            const satisfiedClients = Number(servicepoint.satisfied_clients);

            // Calculate satisfaction rate
            const satisfactionRate = totalClients > 0
                ? parseFloat(((satisfiedClients / totalClients) * 100).toFixed(2))
                : 0;

            labels.push(servicepointName);
            result.push(satisfactionRate);
        }

        // Sort service points by satisfaction rate in descending order (highest first)
        const combined = labels.map((label, index) => ({
            label,
            rate: result[index],
        }));

        combined.sort((a, b) => b.rate - a.rate);

        // Return sorted labels and data
        return {
            status: 'success',
            labels: combined.map(c => c.label),
            data: combined.map(c => c.rate),
        };
    }

    async getDissatisfactionPareto(filters?: { region?: string; district?: string; facility?: string }) {
        // Build the WHERE clause with filters
        let whereClause = '1=1'; // Base condition
        let params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Define queries for each factor
        const buildFactorQuery = (field: string) => {
            return `
                SELECT COUNT(*) as count
                FROM satisfaction
                WHERE ${whereClause} AND ${field} IN ('1', '2', 'No')
            `;
        };

        // Execute queries for each factor
        const costQuery = buildFactorQuery('cost_of_services');
        const medicinesQuery = buildFactorQuery('availability_of_medicines');
        const timelinessQuery = buildFactorQuery('timeliness_of_services');
        const servicesQuery = buildFactorQuery('availability_of_services');
        const privacyQuery = buildFactorQuery('privacy');
        const cleanlinessQuery = buildFactorQuery('cleanliness');
        const accessQuery = buildFactorQuery('g_access_to_services');
        const timeGivenQuery = buildFactorQuery('needed_time_given');
        const respectQuery = buildFactorQuery('respect');

        // Get counts for each factor
        const costResult = await this.prisma.$queryRawUnsafe(costQuery, ...params);
        const medicinesResult = await this.prisma.$queryRawUnsafe(medicinesQuery, ...params);
        const timelinessResult = await this.prisma.$queryRawUnsafe(timelinessQuery, ...params);
        const servicesResult = await this.prisma.$queryRawUnsafe(servicesQuery, ...params);
        const privacyResult = await this.prisma.$queryRawUnsafe(privacyQuery, ...params);
        const cleanlinessResult = await this.prisma.$queryRawUnsafe(cleanlinessQuery, ...params);
        const accessResult = await this.prisma.$queryRawUnsafe(accessQuery, ...params);
        const timeGivenResult = await this.prisma.$queryRawUnsafe(timeGivenQuery, ...params);
        const respectResult = await this.prisma.$queryRawUnsafe(respectQuery, ...params);

        // Extract counts
        const costCount = Number((costResult as any[])[0]?.count || 0);
        const medicinesCount = Number((medicinesResult as any[])[0]?.count || 0);
        const timelinessCount = Number((timelinessResult as any[])[0]?.count || 0);
        const servicesCount = Number((servicesResult as any[])[0]?.count || 0);
        const privacyCount = Number((privacyResult as any[])[0]?.count || 0);
        const cleanlinessCount = Number((cleanlinessResult as any[])[0]?.count || 0);
        const accessCount = Number((accessResult as any[])[0]?.count || 0);
        const timeGivenCount = Number((timeGivenResult as any[])[0]?.count || 0);
        const respectCount = Number((respectResult as any[])[0]?.count || 0);

        // Create factors array
        const factors = [
            { factor: "Cost of services", count: costCount },
            { factor: "Medicines availability", count: medicinesCount },
            { factor: "Timeliness of services", count: timelinessCount },
            { factor: "Provision of all services", count: servicesCount },
            { factor: "Privacy", count: privacyCount },
            { factor: "Overall cleanliness", count: cleanlinessCount },
            { factor: "Health worker availability", count: accessCount },
            { factor: "Access to medical info", count: timeGivenCount },
            { factor: "Respect", count: respectCount }
        ];

        // Sort by count in descending order
        factors.sort((a, b) => b.count - a.count);

        // Calculate total count
        const totalCount = factors.reduce((sum, factor) => sum + factor.count, 0);

        // Calculate percentages and cumulative percentages
        let cumulativePercentage = 0;
        const result = factors.map(factor => {
            const percentage = totalCount > 0
                ? parseFloat(((factor.count / totalCount) * 100).toFixed(2))
                : 0;
            cumulativePercentage += percentage;
            return {
                factor: factor.factor,
                count: factor.count,
                percentage,
                cumulative_percentage: parseFloat(cumulativePercentage.toFixed(2))
            };
        });

        // Ensure the last cumulative percentage is exactly 100%
        if (result.length > 0) {
            result[result.length - 1].cumulative_percentage = 100;
        }

        return {
            status: "success",
            total: totalCount,
            data: result
        };
    }

    async getBribeByRegion(filters?: { region?: string; district?: string; facility?: string }) {
        // Build the base WHERE clause with filters
        let baseWhereClause = '1=1'; // Base condition
        let params: any[] = [];

        // Add facility filter if provided
        if (filters?.facility) {
            baseWhereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Add district filter if provided
        if (filters?.district) {
            baseWhereClause += ' AND district = ?';
            params.push(filters.district);
        }

        // Note: We don't add region filter here since we're querying across regions
        // But if a specific region is requested, we'll filter the results later

        // Get distinct regions
        const regionsQuery = `
            SELECT DISTINCT region 
            FROM satisfaction 
            WHERE region IS NOT NULL AND region != ''
            ORDER BY region ASC
        `;

        const regionResults = await this.prisma.$queryRawUnsafe(regionsQuery);
        let regions = (regionResults as any[]).map(r => r.region);

        // If region filter is provided, only keep that region
        if (filters?.region) {
            regions = regions.filter(r => r === filters.region);
        }

        // Structure for the response
        const labels: string[] = [];
        const clientsSurveyed: number[] = [];
        const reportedPayingBribes: number[] = [];
        const percentageReportedBribes: number[] = [];

        // For each region, get the data
        for (const region of regions) {
            // Clone the params for each query
            const regionParams = [...params];
            let regionWhereClause = baseWhereClause + ' AND region = ?';
            regionParams.push(region);

            // Get clients surveyed
            const surveyedQuery = `
                SELECT COUNT(*) as total
                FROM satisfaction
                WHERE ${regionWhereClause}
            `;
            const surveyedResult = await this.prisma.$queryRawUnsafe(surveyedQuery, ...regionParams);
            const totalSurveyed = Number((surveyedResult as any[])[0]?.total || 0);

            // Get bribes reported
            const bribeQuery = `
                SELECT COUNT(*) as total
                FROM satisfaction
                WHERE ${regionWhereClause} AND bribe = 'Yes'
            `;
            const bribeResult = await this.prisma.$queryRawUnsafe(bribeQuery, ...regionParams);
            const totalBribes = Number((bribeResult as any[])[0]?.total || 0);

            // Calculate percentage
            const percentage = totalSurveyed > 0
                ? parseFloat(((totalBribes / totalSurveyed) * 100).toFixed(2))
                : 0;

            // Add to response arrays
            labels.push(region);
            clientsSurveyed.push(totalSurveyed);
            reportedPayingBribes.push(totalBribes);
            percentageReportedBribes.push(percentage);
        }

        return {
            labels,
            datasets: [
                {
                    label: "Clients Surveyed",
                    backgroundColor: "rgba(78, 115, 223, 0.5)",
                    borderColor: "rgba(78, 115, 223, 1)",
                    data: clientsSurveyed
                },
                {
                    label: "Reported Paying Bribes",
                    backgroundColor: "rgba(28, 200, 138, 0.5)",
                    borderColor: "rgba(28, 200, 138, 1)",
                    data: reportedPayingBribes
                },
                {
                    label: "% Clients Reported Paying Bribes",
                    backgroundColor: "rgba(54, 185, 204, 0.5)",
                    borderColor: "rgba(54, 185, 204, 1)",
                    data: percentageReportedBribes
                }
            ]
        };
    }

    async getTrendsData(filters?: { region?: string; district?: string; facility?: string }) {
        // Build WHERE clause
        const whereConditions = [];
        const params: any[] = [];

        // Base conditions
        whereConditions.push('region IS NOT NULL');
        whereConditions.push('reporting_period IS NOT NULL');

        // Add filter conditions
        if (filters?.region) {
            whereConditions.push('region = ?');
            params.push(filters.region);
        }
        if (filters?.district) {
            whereConditions.push('district = ?');
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereConditions.push('facility = ?');
            params.push(filters.facility);
        }

        // Build WHERE clause
        const whereClause = whereConditions.join(' AND ');

        // Track recent 6 months
        const recentMonths = new Set<string>();
        const now = new Date();
        for (let i = 0; i < 6; i++) {
            const d = new Date(now);
            d.setMonth(d.getMonth() - i);
            const monthKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            recentMonths.add(monthKey);
        }

        // Get all regions needed for this report (filtered by the conditions)
        const regionsQuery = `
            SELECT DISTINCT region 
            FROM satisfaction 
            WHERE ${whereClause}
            ORDER BY region ASC
        `;

        const regionsResult = await this.prisma.$queryRawUnsafe(regionsQuery, ...params);
        const regions = (regionsResult as any[]).map(r => r.region);

        // Get data for the regions and filter by the last 6 months
        const dataQuery = `
            SELECT 
                region,
                DATE_FORMAT(reporting_period, '%Y-%m') AS month,
                COUNT(*) AS total_clients,
                SUM(CASE WHEN service_against_will = 'Yes' THEN 1 ELSE 0 END) AS satisfied_clients
            FROM satisfaction
            WHERE ${whereClause}
            GROUP BY region, month
            ORDER BY region, month
        `;

        const rawData = await this.prisma.$queryRawUnsafe(dataQuery, ...params);

        // Process the raw data
        const regionMonthData: RegionMonthData = {};
        const monthSet = new Set<string>();

        // Process each data record
        (rawData as any[]).forEach(record => {
            const region = record.region;
            const month = record.month;
            const totalClients = Number(record.total_clients);
            const satisfiedClients = Number(record.satisfied_clients);

            // Only process data for the 6 recent months
            if (!recentMonths.has(month)) return;

            // Add month to set of months
            monthSet.add(month);

            // Initialize region data if not exists
            if (!regionMonthData[region]) {
                regionMonthData[region] = {};
            }

            // Initialize month data for this region
            regionMonthData[region][month] = {
                totalClients,
                satisfiedClients
            };
        });

        // Get the months that actually have data, limited to the 6 most recent months
        const months = Array.from(monthSet).sort();

        // Convert to the required format
        const data = [];

        // For each region, create an entry with satisfaction rates by month
        regions.forEach(region => {
            const regionData: { [key: string]: string | number } = { region };

            // Add satisfaction rate for each of the months
            months.forEach(month => {
                if (regionMonthData[region]?.[month]) {
                    const { totalClients, satisfiedClients } = regionMonthData[region][month];
                    const rate = totalClients > 0
                        ? parseFloat(((satisfiedClients / totalClients) * 100).toFixed(2))
                        : 0;
                    regionData[month] = rate;
                } else {
                    // If no data for this month, set to 0
                    regionData[month] = 0;
                }
            });

            data.push(regionData);
        });

        return {
            status: 'success',
            months,
            data,
        };
    }

    async getSatisfactionByRegionAndMonth(filters?: { region?: string; district?: string; facility?: string }) {
        // Get data for the last 12 months
        const elevenMonthsAgo = new Date();
        elevenMonthsAgo.setMonth(elevenMonthsAgo.getMonth() - 11);
        elevenMonthsAgo.setDate(1); // Set to first day of the month

        // Generate list of months
        const months: string[] = [];
        const currentDate = new Date();
        for (let i = 0; i < 12; i++) {
            const date = new Date(currentDate);
            date.setMonth(date.getMonth() - i);
            months.unshift(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`);
        }

        // Build WHERE clause with filters
        let whereClause = 'reporting_period >= ? AND region IS NOT NULL';
        const params: any[] = [elevenMonthsAgo];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        interface RawDataItem {
            region: string;
            month: string;
            total_clients: number;
            satisfied_clients: number;
        }

        // Execute query with parameters
        const query = `
            SELECT 
                region,
                DATE_FORMAT(reporting_period, '%Y-%m') AS month,
                COUNT(*) AS total_clients,
                SUM(CASE WHEN service_against_will = 'Yes' THEN 1 ELSE 0 END) AS satisfied_clients
            FROM satisfaction
            WHERE ${whereClause}
            GROUP BY region, month
            ORDER BY region, month
        `;

        const rawData = await this.prisma.$queryRawUnsafe<RawDataItem[]>(query, ...params);

        // Transform the data
        const regionData = new Map<string, Record<string, any>>();

        // Get all regions from the results
        const regions = Array.from(new Set(rawData.map(item => item.region)));

        // Initialize all regions with null values for all months
        regions.forEach(region => {
            const regionObj: Record<string, any> = { region };
            months.forEach(month => {
                regionObj[month] = null;
            });
            regionData.set(region, regionObj);
        });

        // Fill in the actual data
        rawData.forEach(item => {
            const region = item.region;
            const month = item.month;
            const totalClients = Number(item.total_clients);
            const satisfiedClients = Number(item.satisfied_clients);

            if (regionData.has(region)) {
                const regionObj = regionData.get(region);
                if (regionObj) {
                    // Calculate satisfaction percentage
                    const satisfactionPercentage = totalClients > 0
                        ? parseFloat(((satisfiedClients / totalClients) * 100).toFixed(2))
                        : null;
                    regionObj[month] = satisfactionPercentage;
                }
            }
        });

        return {
            status: 'success',
            months,
            data: Array.from(regionData.values())
        };
    }

    async getDashboardData(filters?: { region?: string; district?: string; facility?: string }) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

        // Helper function to calculate metrics with filters
        const calculateMetrics = async (startDate: Date, endDate: Date) => {
            let whereClause = 'reporting_period >= ? AND reporting_period < ?';
            let params: any[] = [startDate, endDate];

            // Add filters to the where clause
            if (filters?.region) {
                whereClause += ' AND region = ?';
                params.push(filters.region);
            }
            if (filters?.district) {
                whereClause += ' AND district = ?';
                params.push(filters.district);
            }
            if (filters?.facility) {
                whereClause += ' AND facility = ?';
                params.push(filters.facility);
            }

            // Build and execute the query
            const query = `
                SELECT 
                    COUNT(*) as total_clients,
                    SUM(CASE WHEN service_against_will = 'Yes' THEN 1 ELSE 0 END) as satisfied_clients,
                    SUM(CASE WHEN demo_gender = 'Male' THEN 1 ELSE 0 END) as male_entries,
                    SUM(CASE WHEN demo_gender = 'Female' THEN 1 ELSE 0 END) as female_entries,
                    COUNT(DISTINCT CASE WHEN bribe = 'Yes' THEN facility END) as facilities_asking_bribes,
                    AVG(CAST(cost_of_services AS DECIMAL(10,2))) as average_cost,
                    (SUM(CASE WHEN availability_of_medicines = 'Yes' THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(*), 0)) as medicine_availability,
                    SUM(CASE WHEN timeliness_of_services = 'Yes' THEN 1 ELSE 0 END) as timely_encounters
                FROM satisfaction
                WHERE ${whereClause}
            `;

            const data = await this.prisma.$queryRawUnsafe(query, ...params);

            const result = data[0] as any;
            const totalClients = Number(result.total_clients) || 0;
            const satisfiedClients = Number(result.satisfied_clients) || 0;

            return {
                total_clients: totalClients,
                satisfied_clients: satisfiedClients,
                overall_satisfaction: totalClients > 0 ? parseFloat(((satisfiedClients / totalClients) * 100).toFixed(2)) : 0,
                male_entries: Number(result.male_entries) || 0,
                female_entries: Number(result.female_entries) || 0,
                facilities_asking_bribes: Number(result.facilities_asking_bribes) || 0,
                average_cost: parseFloat((Number(result.average_cost) || 0).toFixed(2)),
                medicine_availability: parseFloat((Number(result.medicine_availability) || 0).toFixed(2)),
                timely_encounters: Number(result.timely_encounters) || 0,
                entries_today: totalClients
            };
        };

        // Calculate metrics for different time periods with filters
        const todayData = await calculateMetrics(
            today,
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
        );

        const thisMonthData = await calculateMetrics(
            firstDayOfMonth,
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
        );

        const lastMonthData = await calculateMetrics(
            firstDayOfLastMonth,
            lastDayOfLastMonth
        );

        const cumulativeData = await calculateMetrics(
            new Date(0),
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
        );

        return {
            status: 'success',
            today: todayData,
            this_month: thisMonthData,
            last_month: lastMonthData,
            cumulative: cumulativeData
        };
    }

    async getSatisfactionTrend(filters?: { region?: string; district?: string; facility?: string }) {
        // Generate labels for the last 12 months
        const labels: string[] = [];
        const currentDate = new Date();

        // Build WHERE clause with filters
        let whereClause = `reporting_period >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 12 MONTH), '%Y-%m-01') 
                          AND reporting_period < DATE_FORMAT(CURDATE(), '%Y-%m-01')`;
        const params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // SQL query to get last 12 months' satisfaction data with filters
        const query = `
            SELECT 
                DATE_FORMAT(reporting_period, '%Y-%m') AS period,
                COUNT(*) AS total_entries,
                SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) AS satisfied_clients
            FROM satisfaction
            WHERE ${whereClause}
            GROUP BY period
            ORDER BY period ASC
        `;

        const satisfactionData = await this.prisma.$queryRawUnsafe(query, ...params);

        // Extract labels and calculate satisfaction rates
        const data: number[] = [];

        for (const item of satisfactionData as any[]) {
            labels.push(item.period);
            const totalEntries = Number(item.total_entries);
            const satisfiedClients = Number(item.satisfied_clients);

            // Calculate satisfaction rate with 2 decimal places
            const satisfactionRate = totalEntries > 0
                ? parseFloat(((satisfiedClients / totalEntries) * 100).toFixed(2))
                : 0;

            data.push(satisfactionRate);
        }

        return {
            labels,
            datasets: [
                {
                    label: "Satisfaction Rate (%)",
                    data,
                    fill: false,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.1
                }
            ]
        };
    }

    async getIndicatorsData(filters?: { region?: string; district?: string; facility?: string }) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // Initialize the indicators data structure
        const indicatorsData = {
            "Cleanliness": { today: 0, this_month: 0, cumulative: 0 },
            "Timeliness": { today: 0, this_month: 0, cumulative: 0 },
            "Privacy": { today: 0, this_month: 0, cumulative: 0 },
            "Respect": { today: 0, this_month: 0, cumulative: 0 },
            "Availability of Medicine": { today: 0, this_month: 0, cumulative: 0 },
            "Availability of Services": { today: 0, this_month: 0, cumulative: 0 },
            "Access to Services": { today: 0, this_month: 0, cumulative: 0 },
            "Needed Time Given": { today: 0, this_month: 0, cumulative: 0 },
            "Cost of Services": { today: 0, this_month: 0, cumulative: 0 },
            "Bribe": { today: 0, this_month: 0, cumulative: 0 },
            "Service Against Will": { today: 0, this_month: 0, cumulative: 0 },
            "Overall Satisfaction": { today: 0, this_month: 0, cumulative: 0 }
        };

        // Build the WHERE clause with filters
        let whereClause = '';
        const params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Get data for today with filters
        const todayQuery = `
            SELECT 
                AVG(CASE WHEN cleanliness = '5' THEN 100
                         WHEN cleanliness = '4' THEN 75
                         WHEN cleanliness = '3' THEN 50
                         WHEN cleanliness = '2' THEN 25
                         WHEN cleanliness = '1' THEN 0
                         ELSE NULL END) AS cleanliness_score,
                         
                AVG(CASE WHEN timeliness_of_services = '5' THEN 100
                         WHEN timeliness_of_services = '4' THEN 75
                         WHEN timeliness_of_services = '3' THEN 50
                         WHEN timeliness_of_services = '2' THEN 25
                         WHEN timeliness_of_services = '1' THEN 0
                         ELSE NULL END) AS timeliness_score,
                         
                AVG(CASE WHEN privacy = '5' THEN 100
                         WHEN privacy = '4' THEN 75
                         WHEN privacy = '3' THEN 50
                         WHEN privacy = '2' THEN 25
                         WHEN privacy = '1' THEN 0
                         ELSE NULL END) AS privacy_score,
                         
                AVG(CASE WHEN respect = '5' THEN 100
                         WHEN respect = '4' THEN 75
                         WHEN respect = '3' THEN 50
                         WHEN respect = '2' THEN 25
                         WHEN respect = '1' THEN 0
                         ELSE NULL END) AS respect_score,
                         
                AVG(CASE WHEN availability_of_medicines = '5' THEN 100
                         WHEN availability_of_medicines = '4' THEN 75
                         WHEN availability_of_medicines = '3' THEN 50
                         WHEN availability_of_medicines = '2' THEN 25
                         WHEN availability_of_medicines = '1' THEN 0
                         ELSE NULL END) AS medicine_score,
                         
                AVG(CASE WHEN availability_of_services = '5' THEN 100
                         WHEN availability_of_services = '4' THEN 75
                         WHEN availability_of_services = '3' THEN 50
                         WHEN availability_of_services = '2' THEN 25
                         WHEN availability_of_services = '1' THEN 0
                         ELSE NULL END) AS services_score,
                         
                AVG(CASE WHEN g_access_to_services = '5' THEN 100
                         WHEN g_access_to_services = '4' THEN 75
                         WHEN g_access_to_services = '3' THEN 50
                         WHEN g_access_to_services = '2' THEN 25
                         WHEN g_access_to_services = '1' THEN 0
                         ELSE NULL END) AS access_score,
                         
                AVG(CASE WHEN needed_time_given = '5' THEN 100
                         WHEN needed_time_given = '4' THEN 75
                         WHEN needed_time_given = '3' THEN 50
                         WHEN needed_time_given = '2' THEN 25
                         WHEN needed_time_given = '1' THEN 0
                         ELSE NULL END) AS time_given_score,
                         
                AVG(CASE WHEN cost_of_services = '5' THEN 100
                         WHEN cost_of_services = '4' THEN 75
                         WHEN cost_of_services = '3' THEN 50
                         WHEN cost_of_services = '2' THEN 25
                         WHEN cost_of_services = '1' THEN 0
                         ELSE NULL END) AS cost_score,
                         
                (SUM(CASE WHEN bribe = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN bribe IS NOT NULL THEN 1 ELSE NULL END)) AS bribe_score,
                 
                (SUM(CASE WHEN service_against_will = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN service_against_will IS NOT NULL THEN 1 ELSE NULL END)) AS against_will_score,
                 
                (SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN satifisaction IS NOT NULL THEN 1 ELSE NULL END)) AS satisfaction_score
                 
            FROM satisfaction
            WHERE reporting_period >= ?${whereClause}
        `;

        const todayParams = [today, ...params];
        const todayData = await this.prisma.$queryRawUnsafe(todayQuery, ...todayParams);

        // Get data for this month with filters
        const monthQuery = `
            SELECT 
                AVG(CASE WHEN cleanliness = '5' THEN 100
                         WHEN cleanliness = '4' THEN 75
                         WHEN cleanliness = '3' THEN 50
                         WHEN cleanliness = '2' THEN 25
                         WHEN cleanliness = '1' THEN 0
                         ELSE NULL END) AS cleanliness_score,
                         
                AVG(CASE WHEN timeliness_of_services = '5' THEN 100
                         WHEN timeliness_of_services = '4' THEN 75
                         WHEN timeliness_of_services = '3' THEN 50
                         WHEN timeliness_of_services = '2' THEN 25
                         WHEN timeliness_of_services = '1' THEN 0
                         ELSE NULL END) AS timeliness_score,
                         
                AVG(CASE WHEN privacy = '5' THEN 100
                         WHEN privacy = '4' THEN 75
                         WHEN privacy = '3' THEN 50
                         WHEN privacy = '2' THEN 25
                         WHEN privacy = '1' THEN 0
                         ELSE NULL END) AS privacy_score,
                         
                AVG(CASE WHEN respect = '5' THEN 100
                         WHEN respect = '4' THEN 75
                         WHEN respect = '3' THEN 50
                         WHEN respect = '2' THEN 25
                         WHEN respect = '1' THEN 0
                         ELSE NULL END) AS respect_score,
                         
                AVG(CASE WHEN availability_of_medicines = '5' THEN 100
                         WHEN availability_of_medicines = '4' THEN 75
                         WHEN availability_of_medicines = '3' THEN 50
                         WHEN availability_of_medicines = '2' THEN 25
                         WHEN availability_of_medicines = '1' THEN 0
                         ELSE NULL END) AS medicine_score,
                         
                AVG(CASE WHEN availability_of_services = '5' THEN 100
                         WHEN availability_of_services = '4' THEN 75
                         WHEN availability_of_services = '3' THEN 50
                         WHEN availability_of_services = '2' THEN 25
                         WHEN availability_of_services = '1' THEN 0
                         ELSE NULL END) AS services_score,
                         
                AVG(CASE WHEN g_access_to_services = '5' THEN 100
                         WHEN g_access_to_services = '4' THEN 75
                         WHEN g_access_to_services = '3' THEN 50
                         WHEN g_access_to_services = '2' THEN 25
                         WHEN g_access_to_services = '1' THEN 0
                         ELSE NULL END) AS access_score,
                         
                AVG(CASE WHEN needed_time_given = '5' THEN 100
                         WHEN needed_time_given = '4' THEN 75
                         WHEN needed_time_given = '3' THEN 50
                         WHEN needed_time_given = '2' THEN 25
                         WHEN needed_time_given = '1' THEN 0
                         ELSE NULL END) AS time_given_score,
                         
                AVG(CASE WHEN cost_of_services = '5' THEN 100
                         WHEN cost_of_services = '4' THEN 75
                         WHEN cost_of_services = '3' THEN 50
                         WHEN cost_of_services = '2' THEN 25
                         WHEN cost_of_services = '1' THEN 0
                         ELSE NULL END) AS cost_score,
                         
                (SUM(CASE WHEN bribe = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN bribe IS NOT NULL THEN 1 ELSE NULL END)) AS bribe_score,
                 
                (SUM(CASE WHEN service_against_will = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN service_against_will IS NOT NULL THEN 1 ELSE NULL END)) AS against_will_score,
                 
                (SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN satifisaction IS NOT NULL THEN 1 ELSE NULL END)) AS satisfaction_score
                 
            FROM satisfaction
            WHERE reporting_period >= ?${whereClause}
        `;

        const monthParams = [firstDayOfMonth, ...params];
        const monthData = await this.prisma.$queryRawUnsafe(monthQuery, ...monthParams);

        // Get cumulative data with filters
        const cumulativeQuery = `
            SELECT 
                AVG(CASE WHEN cleanliness = '5' THEN 100
                         WHEN cleanliness = '4' THEN 75
                         WHEN cleanliness = '3' THEN 50
                         WHEN cleanliness = '2' THEN 25
                         WHEN cleanliness = '1' THEN 0
                         ELSE NULL END) AS cleanliness_score,
                         
                AVG(CASE WHEN timeliness_of_services = '5' THEN 100
                         WHEN timeliness_of_services = '4' THEN 75
                         WHEN timeliness_of_services = '3' THEN 50
                         WHEN timeliness_of_services = '2' THEN 25
                         WHEN timeliness_of_services = '1' THEN 0
                         ELSE NULL END) AS timeliness_score,
                         
                AVG(CASE WHEN privacy = '5' THEN 100
                         WHEN privacy = '4' THEN 75
                         WHEN privacy = '3' THEN 50
                         WHEN privacy = '2' THEN 25
                         WHEN privacy = '1' THEN 0
                         ELSE NULL END) AS privacy_score,
                         
                AVG(CASE WHEN respect = '5' THEN 100
                         WHEN respect = '4' THEN 75
                         WHEN respect = '3' THEN 50
                         WHEN respect = '2' THEN 25
                         WHEN respect = '1' THEN 0
                         ELSE NULL END) AS respect_score,
                         
                AVG(CASE WHEN availability_of_medicines = '5' THEN 100
                         WHEN availability_of_medicines = '4' THEN 75
                         WHEN availability_of_medicines = '3' THEN 50
                         WHEN availability_of_medicines = '2' THEN 25
                         WHEN availability_of_medicines = '1' THEN 0
                         ELSE NULL END) AS medicine_score,
                         
                AVG(CASE WHEN availability_of_services = '5' THEN 100
                         WHEN availability_of_services = '4' THEN 75
                         WHEN availability_of_services = '3' THEN 50
                         WHEN availability_of_services = '2' THEN 25
                         WHEN availability_of_services = '1' THEN 0
                         ELSE NULL END) AS services_score,
                         
                AVG(CASE WHEN g_access_to_services = '5' THEN 100
                         WHEN g_access_to_services = '4' THEN 75
                         WHEN g_access_to_services = '3' THEN 50
                         WHEN g_access_to_services = '2' THEN 25
                         WHEN g_access_to_services = '1' THEN 0
                         ELSE NULL END) AS access_score,
                         
                AVG(CASE WHEN needed_time_given = '5' THEN 100
                         WHEN needed_time_given = '4' THEN 75
                         WHEN needed_time_given = '3' THEN 50
                         WHEN needed_time_given = '2' THEN 25
                         WHEN needed_time_given = '1' THEN 0
                         ELSE NULL END) AS time_given_score,
                         
                AVG(CASE WHEN cost_of_services = '5' THEN 100
                         WHEN cost_of_services = '4' THEN 75
                         WHEN cost_of_services = '3' THEN 50
                         WHEN cost_of_services = '2' THEN 25
                         WHEN cost_of_services = '1' THEN 0
                         ELSE NULL END) AS cost_score,
                         
                (SUM(CASE WHEN bribe = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN bribe IS NOT NULL THEN 1 ELSE NULL END)) AS bribe_score,
                 
                (SUM(CASE WHEN service_against_will = 'No' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN service_against_will IS NOT NULL THEN 1 ELSE NULL END)) AS against_will_score,
                 
                (SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) * 100.0 / 
                 COUNT(CASE WHEN satifisaction IS NOT NULL THEN 1 ELSE NULL END)) AS satisfaction_score
                 
            FROM satisfaction
            WHERE 1=1${whereClause}
        `;

        const cumulativeData = await this.prisma.$queryRawUnsafe(cumulativeQuery, ...params);

        // Process the data
        const processResult = (result: any) => {
            return {
                cleanliness: Math.round(result.cleanliness_score || 0),
                timeliness: Math.round(result.timeliness_score || 0),
                privacy: Math.round(result.privacy_score || 0),
                respect: Math.round(result.respect_score || 0),
                medicine: Math.round(result.medicine_score || 0),
                services: Math.round(result.services_score || 0),
                access: Math.round(result.access_score || 0),
                time_given: Math.round(result.time_given_score || 0),
                cost: Math.round(result.cost_score || 0),
                bribe: Math.round(result.bribe_score || 0),
                against_will: Math.round(result.against_will_score || 0),
                satisfaction: Math.round(result.satisfaction_score || 0)
            };
        };

        const todayScores = processResult(todayData[0]);
        const monthScores = processResult(monthData[0]);
        const cumulativeScores = processResult(cumulativeData[0]);

        // Populate the indicators data
        indicatorsData["Cleanliness"].today = todayScores.cleanliness;
        indicatorsData["Cleanliness"].this_month = monthScores.cleanliness;
        indicatorsData["Cleanliness"].cumulative = cumulativeScores.cleanliness;

        indicatorsData["Timeliness"].today = todayScores.timeliness;
        indicatorsData["Timeliness"].this_month = monthScores.timeliness;
        indicatorsData["Timeliness"].cumulative = cumulativeScores.timeliness;

        indicatorsData["Privacy"].today = todayScores.privacy;
        indicatorsData["Privacy"].this_month = monthScores.privacy;
        indicatorsData["Privacy"].cumulative = cumulativeScores.privacy;

        indicatorsData["Respect"].today = todayScores.respect;
        indicatorsData["Respect"].this_month = monthScores.respect;
        indicatorsData["Respect"].cumulative = cumulativeScores.respect;

        indicatorsData["Availability of Medicine"].today = todayScores.medicine;
        indicatorsData["Availability of Medicine"].this_month = monthScores.medicine;
        indicatorsData["Availability of Medicine"].cumulative = cumulativeScores.medicine;

        indicatorsData["Availability of Services"].today = todayScores.services;
        indicatorsData["Availability of Services"].this_month = monthScores.services;
        indicatorsData["Availability of Services"].cumulative = cumulativeScores.services;

        indicatorsData["Access to Services"].today = todayScores.access;
        indicatorsData["Access to Services"].this_month = monthScores.access;
        indicatorsData["Access to Services"].cumulative = cumulativeScores.access;

        indicatorsData["Needed Time Given"].today = todayScores.time_given;
        indicatorsData["Needed Time Given"].this_month = monthScores.time_given;
        indicatorsData["Needed Time Given"].cumulative = cumulativeScores.time_given;

        indicatorsData["Cost of Services"].today = todayScores.cost;
        indicatorsData["Cost of Services"].this_month = monthScores.cost;
        indicatorsData["Cost of Services"].cumulative = cumulativeScores.cost;

        indicatorsData["Bribe"].today = todayScores.bribe;
        indicatorsData["Bribe"].this_month = monthScores.bribe;
        indicatorsData["Bribe"].cumulative = cumulativeScores.bribe;

        indicatorsData["Service Against Will"].today = todayScores.against_will;
        indicatorsData["Service Against Will"].this_month = monthScores.against_will;
        indicatorsData["Service Against Will"].cumulative = cumulativeScores.against_will;

        indicatorsData["Overall Satisfaction"].today = todayScores.satisfaction;
        indicatorsData["Overall Satisfaction"].this_month = monthScores.satisfaction;
        indicatorsData["Overall Satisfaction"].cumulative = cumulativeScores.satisfaction;

        return {
            status: "success",
            data: indicatorsData
        };
    }

    async getServicePointCounts(filters?: { region?: string; district?: string; facility?: string }) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // Build the WHERE clause with filters
        let whereClause = '1=1';
        const params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Get all service points with applied filters
        const servicePointsQuery = `
            SELECT DISTINCT servicepoint 
            FROM satisfaction 
            WHERE ${whereClause} AND servicepoint IS NOT NULL AND servicepoint != ''
            ORDER BY servicepoint ASC
        `;

        const servicePointsResult = await this.prisma.$queryRawUnsafe(servicePointsQuery, ...params);
        const servicePoints = (servicePointsResult as any[]).map(sp => sp.servicepoint);

        // Initialize response counts data structure
        const servicepointPercentages: Record<string, { today: number, this_month: number, cumulative: number }> = {};

        servicePoints.forEach(sp => {
            servicepointPercentages[sp] = { today: 0, this_month: 0, cumulative: 0 };
        });

        // Get counts for today with filters
        const todayWhere = `${whereClause} AND reporting_period >= ? AND servicepoint IS NOT NULL AND servicepoint != ''`;
        const todayParams = [...params, today];

        const todayCountsQuery = `
            SELECT 
                servicepoint,
                COUNT(*) as count
            FROM satisfaction
            WHERE ${todayWhere}
            GROUP BY servicepoint
        `;

        const todayCounts = await this.prisma.$queryRawUnsafe(todayCountsQuery, ...todayParams);

        // Get counts for this month with filters
        const monthWhere = `${whereClause} AND reporting_period >= ? AND servicepoint IS NOT NULL AND servicepoint != ''`;
        const monthParams = [...params, firstDayOfMonth];

        const monthCountsQuery = `
            SELECT 
                servicepoint,
                COUNT(*) as count
            FROM satisfaction
            WHERE ${monthWhere}
            GROUP BY servicepoint
        `;

        const monthCounts = await this.prisma.$queryRawUnsafe(monthCountsQuery, ...monthParams);

        // Get cumulative counts with filters
        const cumulativeWhere = `${whereClause} AND servicepoint IS NOT NULL AND servicepoint != ''`;

        const cumulativeCountsQuery = `
            SELECT 
                servicepoint,
                COUNT(*) as count
            FROM satisfaction
            WHERE ${cumulativeWhere}
            GROUP BY servicepoint
        `;

        const cumulativeCounts = await this.prisma.$queryRawUnsafe(cumulativeCountsQuery, ...params);

        // Get total counts for each period to calculate percentages
        const totalTodayQuery = `
            SELECT COUNT(*) as total
            FROM satisfaction
            WHERE ${whereClause} AND reporting_period >= ?
        `;

        const totalMonthQuery = `
            SELECT COUNT(*) as total
            FROM satisfaction
            WHERE ${whereClause} AND reporting_period >= ?
        `;

        const totalCumulativeQuery = `
            SELECT COUNT(*) as total
            FROM satisfaction
            WHERE ${whereClause}
        `;

        const totalTodayCount = await this.prisma.$queryRawUnsafe(totalTodayQuery, ...todayParams);
        const totalMonthCount = await this.prisma.$queryRawUnsafe(totalMonthQuery, ...monthParams);
        const totalCumulativeCount = await this.prisma.$queryRawUnsafe(totalCumulativeQuery, ...params);

        // Extract the total counts
        const todayTotal = Number((totalTodayCount as any[])[0]?.total || 0);
        const monthTotal = Number((totalMonthCount as any[])[0]?.total || 0);
        const cumulativeTotal = Number((totalCumulativeCount as any[])[0]?.total || 0);

        // Process today's percentages
        (todayCounts as any[]).forEach(item => {
            if (servicepointPercentages[item.servicepoint]) {
                const count = Number(item.count);
                servicepointPercentages[item.servicepoint].today = todayTotal > 0
                    ? parseFloat(((count / todayTotal) * 100).toFixed(1))
                    : 0;
            }
        });

        // Process this month's percentages
        (monthCounts as any[]).forEach(item => {
            if (servicepointPercentages[item.servicepoint]) {
                const count = Number(item.count);
                servicepointPercentages[item.servicepoint].this_month = monthTotal > 0
                    ? parseFloat(((count / monthTotal) * 100).toFixed(1))
                    : 0;
            }
        });

        // Process cumulative percentages
        (cumulativeCounts as any[]).forEach(item => {
            if (servicepointPercentages[item.servicepoint]) {
                const count = Number(item.count);
                servicepointPercentages[item.servicepoint].cumulative = cumulativeTotal > 0
                    ? parseFloat(((count / cumulativeTotal) * 100).toFixed(1))
                    : 0;
            }
        });

        return {
            status: "success",
            data: servicepointPercentages
        };
    }

    async getOverallSatisfaction(filters?: { region?: string; district?: string; facility?: string }) {
        // Build the WHERE clause with filters
        let whereClause = '1=1'; // The original query had WHERE 1=1
        let params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Construct the query
        const query = `
            SELECT 
                SUM(CASE WHEN satifisaction = 'Yes' THEN 1 ELSE 0 END) AS satisfied,
                SUM(CASE WHEN satifisaction = 'No' THEN 1 ELSE 0 END) AS dissatisfied
            FROM satisfaction
            WHERE ${whereClause}
        `;

        // Execute the query with parameters
        const satisfactionData = await this.prisma.$queryRawUnsafe(query, ...params);

        // Extract the counts
        const satisfied = Number((satisfactionData as any[])[0]?.satisfied || 0);
        const dissatisfied = Number((satisfactionData as any[])[0]?.dissatisfied || 0);

        return {
            labels: ['Satisfied', 'Dissatisfied'],
            datasets: [
                {
                    label: 'Overall Satisfaction',
                    data: [satisfied, dissatisfied],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        };
    }

    async getAllSatisfactionData(filters?: { region?: string; district?: string; facility?: string }, page = 1, limit = 100) {
        // Build the WHERE clause with filters
        let whereClause = '1=1'; // Base condition
        let params: any[] = [];

        // Add filters to the where clause
        if (filters?.region) {
            whereClause += ' AND region = ?';
            params.push(filters.region);
        }
        if (filters?.district) {
            whereClause += ' AND district = ?';
            params.push(filters.district);
        }
        if (filters?.facility) {
            whereClause += ' AND facility = ?';
            params.push(filters.facility);
        }

        // Calculate pagination parameters
        const offset = (page - 1) * limit;

        // Count total records matching the filters
        const countQuery = `
            SELECT COUNT(*) as total
            FROM satisfaction
            WHERE ${whereClause}
        `;
        const countResult = await this.prisma.$queryRawUnsafe(countQuery, ...params);
        const total = Number((countResult as any[])[0]?.total || 0);

        // Calculate total pages
        const totalPages = Math.ceil(total / limit);

        // Get paginated data
        const dataQuery = `
            SELECT *
            FROM satisfaction
            WHERE ${whereClause}
            ORDER BY reporting_period DESC
            LIMIT ? OFFSET ?
        `;

        const dataParams = [...params, limit, offset];
        const rawData = await this.prisma.$queryRawUnsafe(dataQuery, ...dataParams) as SatisfactionRecordDto[];

        return {
            status: 'success',
            total,
            page,
            limit,
            total_pages: totalPages,
            data: rawData
        };
    }

    async getWordCloud(filters: DashboardFilterDto) {
        const where: any = {
            AND: [
                { comments: { not: null } },
                { comments: { not: '' } }
            ]
        };

        if (filters.region) {
            where.region = filters.region;
        }
        if (filters.district) {
            where.district = filters.district;
        }
        if (filters.facility) {
            where.facility = filters.facility;
        }

        const comments = await this.prisma.satisfaction.groupBy({
            by: ['comments'],
            where,
            _count: {
                comments: true
            },
            orderBy: {
                _count: {
                    comments: 'desc'
                }
            },
            take: 100
        });

        const wordCloudData: Record<string, number> = {};
        let totalPhrases = 0;

        comments.forEach(item => {
            if (item.comments) {
                wordCloudData[item.comments.toLowerCase()] = item._count.comments;
                totalPhrases += item._count.comments;
            }
        });

        return {
            status: 'success',
            total_phrases: totalPhrases,
            data: wordCloudData
        };
    }
} 