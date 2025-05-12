import { ApiProperty } from '@nestjs/swagger';

export class LevelsResponseDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    message: string;

    @ApiProperty({
        type: [String],
        example: ['Level 1', 'Level 2'],
        description: 'List of levels for the specified facility'
    })
    data: string[];
} 