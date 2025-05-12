import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegionsModule } from './regions/regions.module';
import { AuthModule } from './auth/auth.module';
import { VisualizationModule } from './visualization/visualization.module';

@Module({
  imports: [PrismaModule, RegionsModule, AuthModule, VisualizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
