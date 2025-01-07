import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService, CloudinaryService],
})
export class MovieModule {}
