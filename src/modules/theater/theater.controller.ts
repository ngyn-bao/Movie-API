import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TheaterService } from './theater.service';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Get('he-thong-rap')
  @ApiOperation({ summary: 'Láy danh sách hệ thống rạp' })
  findHeThongRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findHeThongRap(maHeThongRap);
  }

  @Get('cum-rap')
  @ApiOperation({ summary: 'Lấy danh sách cụm rạp theo hệ thống rạp' })
  findCumRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findCumRap(maHeThongRap);
  }

  @Get('thong-tin-lich-chieu-rap')
  @ApiOperation({ summary: 'Lấy thông tin lịch chiếu rạp' })
  findLichChieuRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findLichChieuRap(maHeThongRap);
  }

  @Get('thong-tin-lich-chieu-phim')
  @ApiOperation({ summary: 'Lấy thông tin lịch chiếu phim' })
  findLichChieuPhim(@Query('maPhim') maPhim: number) {
    return this.theaterService.findLichChieuPhim(maPhim);
  }
}
