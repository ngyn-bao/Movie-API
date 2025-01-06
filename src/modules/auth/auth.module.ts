import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt.auth.guard';
import { PrismaService } from '../../common/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtService, JwtAuthGuard],
})
export class AuthModule {}
