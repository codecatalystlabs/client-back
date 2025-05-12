import { ApiProperty } from '@nestjs/swagger';

export class DistrictsResponseDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    message: string;

    @ApiProperty({
        type: [String],
        example: ['District 1', 'District 2'],
        description: 'List of districts in the specified region'
    })
    data: string[];
} 