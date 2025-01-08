import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('dat-ve')
  @ApiOperation({ summary: 'Đặt vé' })
  createTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.createTicket(createTicketDto);
  }

  @Get('lay-thong-tin-phong-ve')
  @ApiOperation({ summary: 'Lấy thông tin phòng vé' })
  findAll(@Query('maLichChieu') maLichChieu: number) {
    return this.ticketService.findAll(maLichChieu);
  }

  @Post('tao-lich-chieu')
  @ApiOperation({ summary: 'Tạo lịch chiếu' })
  createSchedule(@Body() createScheduleDto: CreateScheduleDto) {
    return this.ticketService.createSchedule(createScheduleDto);
  }
}
