import { ApiProperty } from '@nestjs/swagger';

export class WordCloudDto {
    @ApiProperty({ description: 'Status of the response' })
    status: string;

    @ApiProperty({ description: 'Total number of phrases' })
    total_phrases: number;

    @ApiProperty({ 
        description: 'Word cloud data with phrases and their frequencies',
        type: 'object',
        additionalProperties: { type: 'number' }
    })
    data: Record<string, number>;
} 