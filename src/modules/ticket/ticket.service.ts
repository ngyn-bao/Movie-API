import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(body: CreateTicketDto) {
    const { ma_lich_chieu, danhSachVe } = body;
    await Promise.all(
      danhSachVe.map((ve) => {
        // console.log(ve);
        return this.prisma.datVe.create({
          data: {
            ma_lich_chieu: ma_lich_chieu,
            ma_ghe: ve.ma_ghe,
            tai_khoan: ve.tai_khoan,
          },
        });
      }),
    );
    return { ma_lich_chieu, danhSachVe: danhSachVe || [] };
  }

  async findAll(maLichChieu: number) {
    const lichChieu = await this.prisma.lichChieu.findMany({
      where: {
        ma_lich_chieu: +maLichChieu,
      },
      include: {
        Phim: true,
        RapPhim: {
          include: {
            CumRap: {
              include: {
                HeThongRap: true,
              },
            },
          },
        },
      },
    });

    console.log(lichChieu);

    if (lichChieu.length === 0)
      throw new BadRequestException('Không tìm thấy lịch chiếu!');

    const danhSachGhe = await this.prisma.ghe.findMany({
      where: {
        ma_rap: lichChieu[0].RapPhim.ma_rap,
      },
      select: {
        loai_ghe: true,
        ten_ghe: true,
        ma_ghe: true,
      },
    });
    return {
      lichChieu: lichChieu || [],
      danhSachGhe: danhSachGhe || [],
    };
  }

  async createSchedule(body: CreateScheduleDto) {
    const { ma_phim, ngay_gio_chieu, ma_rap, gia_ve } = body;

    const newSchedule = await this.prisma.lichChieu.create({
      data: {
        ma_phim: ma_phim,
        ngay_gio_chieu: ngay_gio_chieu,
        ma_rap: ma_rap,
        gia_ve: gia_ve,
      },
    });

    return { newSchedule: newSchedule || [] };
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
