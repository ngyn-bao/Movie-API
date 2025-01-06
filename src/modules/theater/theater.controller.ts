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

@Controller('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Get('he-thong-rap')
  findHeThongRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findHeThongRap(maHeThongRap);
  }

  @Get('cum-rap')
  findCumRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findCumRap(maHeThongRap);
  }

  @Get('thong-tin-lich-chieu-rap')
  findLichChieuRap(@Query('maHeThongRap') maHeThongRap: number) {
    return this.theaterService.findLichChieuRap(maHeThongRap);
  }

  @Get('thong-tin-lich-chieu-phim')
  findLichChieuPhim(@Query('maPhim') maPhim: number) {
    return this.theaterService.findLichChieuPhim(maPhim);
  }
}
