import { Module } from '@nestjs/common';
import { TheaterService } from './theater.service';
import { TheaterController } from './theater.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [TheaterController],
  providers: [TheaterService, PrismaService],
})
export class TheaterModule {}
