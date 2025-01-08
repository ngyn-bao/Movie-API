import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(body: CreateTicketDto) {
    const { ma_lich_chieu, danhSachVe } = body;
    if (!ma_lich_chieu || danhSachVe.length === 0)
      throw new BadRequestException('Thông tin truyền vào không phù hợp!');

    const existLichChieu = await this.prisma.lichChieu.findUnique({
      where: { ma_lich_chieu: ma_lich_chieu },
    });

    if (!existLichChieu)
      throw new NotFoundException(
        `Không tồn tại lịch chiếu với mã ${ma_lich_chieu}`,
      );

    await Promise.all(
      danhSachVe.map(async (ve) => {
        if (!ve.ma_ghe || !ve.tai_khoan)
          throw new BadRequestException('Thông tin truyền vào không phù hợp!');

        const existUser = await this.prisma.nguoiDung.findUnique({
          where: { tai_khoan: ve.tai_khoan },
        });

        const existSeat = await this.prisma.ghe.findUnique({
          where: { ma_ghe: ve.ma_ghe },
        });

        if (!existUser)
          throw new NotFoundException(
            `Không tồn tại người dùng với tài khoản ${ve.tai_khoan}`,
          );
        else if (!existSeat)
          throw new NotFoundException(`Không tồn tại ghế với mã ${ve.ma_ghe} `);

        const existingTicket = await this.prisma.datVe.findFirst({
          where: {
            ma_lich_chieu: ma_lich_chieu,
            ma_ghe: ve.ma_ghe,
            tai_khoan: ve.tai_khoan,
          },
        });

        if (existingTicket)
          throw new BadRequestException(`Đặt vé bị lỗi, vui lòng thử lại!`);
        // console.log(ve);
        let newTicket = await this.prisma.datVe.create({
          data: {
            ma_lich_chieu: ma_lich_chieu,
            ma_ghe: ve.ma_ghe,
            tai_khoan: ve.tai_khoan,
          },
        });
        if (!newTicket) throw new BadRequestException('Không thể tạo vé!');

        return newTicket;
      }),
    );

    return { ma_lich_chieu, danhSachVe: danhSachVe };
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

    // console.log(lichChieu);

    if (lichChieu.length === 0)
      throw new NotFoundException('Không tìm thấy lịch chiếu!');

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

    if (!danhSachGhe) throw new NotFoundException('Không tìm thấy thông tin!');

    return {
      lichChieu: lichChieu,
      danhSachGhe: danhSachGhe,
    };
  }

  async createSchedule(body: CreateScheduleDto) {
    const { ma_phim, ngay_gio_chieu, ma_rap, gia_ve } = body;

    if (!ma_phim || !ngay_gio_chieu || !ma_rap || !gia_ve)
      throw new BadRequestException('Thông tin truyền vào không phù hợp!');

    const existSchedule = await this.prisma.lichChieu.findFirst({
      where: {
        ma_phim: ma_phim,
        ma_rap: ma_rap,
      },
    });

    if (existSchedule)
      throw new BadRequestException('Đã tồn tại lịch chiếu này!');

    const newSchedule = await this.prisma.lichChieu.create({
      data: {
        ma_phim: ma_phim,
        ngay_gio_chieu: new Date(ngay_gio_chieu),
        ma_rap: ma_rap,
        gia_ve: gia_ve,
      },
    });

    if (!newSchedule) throw new NotFoundException('Không tìm thấy thông tin!');
    return { newSchedule: newSchedule };
  }
}
