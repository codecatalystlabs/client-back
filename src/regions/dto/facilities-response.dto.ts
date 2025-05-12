import { ApiProperty } from '@nestjs/swagger';

export class FacilitiesResponseDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    message: string;

    @ApiProperty({
        type: [String],
        example: ['Facility 1', 'Facility 2'],
        description: 'List of facilities in the specified district'
    })
    data: string[];
}
