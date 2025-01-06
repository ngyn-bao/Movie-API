import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  controllers: [TicketController],
  providers: [TicketService, PrismaService, JwtStrategy],
})
export class TicketModule {}
