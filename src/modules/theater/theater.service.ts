import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class TheaterService {
  constructor(private readonly prisma: PrismaService) {}

  async findHeThongRap(maHeThongRap: number) {
    if (!maHeThongRap)
      throw new BadRequestException('Mã hệ thống rạp không được bỏ trống!');

    const heThongRap = await this.prisma.heThongRap.findUnique({
      where: {
        ma_he_thong_rap: +maHeThongRap,
      },
      include: {
        CumRap: {
          include: {
            RapPhim: true,
          },
        },
      },
    });

    if (!heThongRap) throw new NotFoundException('Không tìm thấy thông tin!');

    return heThongRap;
  }

  async findCumRap(maHeThongRap: number) {
    if (!maHeThongRap)
      throw new BadRequestException('Mã hệ thống rạp không được bỏ trống!');

    const cumRap = await this.prisma.cumRap.findMany({
      where: { ma_he_thong_rap: +maHeThongRap },
      include: { HeThongRap: true },
    });

    if (!cumRap) throw new NotFoundException('Không tìm thấy thông tin!');
    return cumRap;
  }

  async findLichChieuRap(maHeThongRap: number) {
    if (!maHeThongRap)
      throw new BadRequestException('Mã hệ thống rạp không được bỏ trống!');

    const lichChieuRap = this.prisma.heThongRap.findUnique({
      where: { ma_he_thong_rap: +maHeThongRap },
      include: {
        CumRap: {
          include: {
            RapPhim: {
              include: {
                LichChieu: {
                  include: {
                    Phim: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!lichChieuRap) throw new NotFoundException('Không tìm thấy thông tin!');

    return lichChieuRap;
  }

  async findLichChieuPhim(maPhim: number) {
    if (!maPhim) throw new BadRequestException('Mã phim không được bỏ trống!');

    const existMovie = await this.prisma.phim.findUnique({
      where: { ma_phim: +maPhim },
    });
    if (!existMovie) throw new NotFoundException('Không tìm thấy phim!');

    const lichChieuPhim = await this.prisma.lichChieu.findMany({
      where: { ma_phim: +maPhim },
      include: {
        Phim: true,
      },
    });

    if (!lichChieuPhim)
      throw new NotFoundException('Không tìm thấy thông tin!');
    return lichChieuPhim;
  }
}
