import { ApiProperty } from '@nestjs/swagger';

class DatasetDto {
    @ApiProperty({ example: 'Clients Surveyed', description: 'Label for the dataset' })
    label: string;

    @ApiProperty({ example: 'rgba(78, 115, 223, 0.5)', description: 'Background color for chart display' })
    backgroundColor: string;

    @ApiProperty({ example: 'rgba(78, 115, 223, 1)', description: 'Border color for chart display' })
    borderColor: string;

    @ApiProperty({ example: [2437, 9356, 6453], description: 'Values for each region' })
    data: number[];
}

export class BribeDataDto {
    @ApiProperty({ 
        example: ['Teso', 'Ankole', 'Kigezi'],
        description: 'Region names'
    })
    labels: string[];

    @ApiProperty({
        type: [DatasetDto],
        description: 'Datasets with various bribe metrics'
    })
    datasets: DatasetDto[];
} 