import { ApiProperty } from '@nestjs/swagger';

export class RegionsResponseDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    message: string;

    @ApiProperty({
        type: [String],
        example: ['Central Region', 'Eastern Region'],
        description: 'List of available regions'
    })
    data: string[];
} 