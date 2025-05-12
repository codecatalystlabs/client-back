import { Module } from '@nestjs/common';
import { VisualizationService } from './visualization.service';
import { VisualizationController } from './visualization.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [VisualizationController],
    providers: [VisualizationService],
    exports: [VisualizationService],
})
export class VisualizationModule { } 