import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Injectable()
export class MovieService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findBanner() {
    const bannerList = await this.prisma.banner.findMany();

    return bannerList || [];
  }

  async findMovie() {
    const movieList = await this.prisma.phim.findMany();

    return movieList || [];
  }

  async findMoviePagination(page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;
    const skip = (page - 1) * pageSize;
    const totalItems = await this.prisma.phim.count();
    const totalPages = Math.ceil(totalItems / pageSize);

    const result = await this.prisma.phim.findMany({
      take: pageSize,
      skip: skip,
      orderBy: {
        ma_phim: 'asc',
      },
    });

    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: result || [],
    };
  }

  async uploadHinh(body: UpdateMovieDto, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Không có file nào được upload!');
    }
    // console.log(body);
    const {
      ma_phim,
      ten_phim,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = body;

    const uploadResult = await this.cloudinaryService.uploadFile(file);

    if (!uploadResult || !uploadResult.secure_url)
      throw new BadRequestException('Upload thất bại!');

    const updatedMovie = await this.prisma.phim.update({
      where: {
        ma_phim: +ma_phim,
      },
      data: {
        ten_phim: ten_phim,
        trailer: trailer,
        hinh_anh: uploadResult.secure_url,
        mo_ta: mo_ta,
        ngay_khoi_chieu: new Date(ngay_khoi_chieu),
        danh_gia: +danh_gia,
        hot: hot === 'true' ? true : false,
        dang_chieu: dang_chieu === 'true' ? true : false,
        sap_chieu: sap_chieu === 'true' ? true : false,
      },
    });

    return updatedMovie;
  }

  async findMovieByDay(
    page: number,
    pageSize: number,
    tuNgay: string,
    denNgay: string,
  ) {
    if (!tuNgay || !denNgay)
      throw new BadRequestException('Query không hợp lệ!');
    const fromDate = new Date(tuNgay);
    const toDate = new Date(denNgay);
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;
    const skip = (page - 1) * pageSize;
    const totalItems = await this.prisma.phim.count({
      where: {
        ngay_khoi_chieu: {
          gte: fromDate,
          lte: toDate,
        },
      },
    });
    const totalPages = Math.ceil(totalItems / pageSize);

    if (!fromDate || !toDate)
      throw new BadRequestException('Ngày không hợp lê!');

    const movieList = await this.prisma.phim.findMany({
      where: {
        ngay_khoi_chieu: {
          gte: fromDate,
          lte: toDate,
        },
      },
      take: pageSize,
      skip: skip,
      orderBy: {
        ma_phim: 'asc',
      },
    });

    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      fromDate: tuNgay,
      toDate: denNgay,
      items: movieList || [],
    };
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async detailMovie(id: number) {
    const thongTinPhim = await this.prisma.phim.findUnique({
      where: { ma_phim: +id },
      include: { Banner: true, LichChieu: true },
    });

    if (!thongTinPhim) throw new NotFoundException('Không tìm thấy phim!');
    return thongTinPhim;
  }

  async remove(id: number) {
    await this.prisma.banner.deleteMany({
      where: {
        ma_phim: +id,
      },
    });

    await this.prisma.datVe.deleteMany({
      where: { LichChieu: { ma_lich_chieu: +id } },
    });

    await this.prisma.lichChieu.deleteMany({ where: { ma_phim: +id } });

    const existMovie = await this.prisma.phim.findUnique({
      where: { ma_phim: +id },
    });

    if (!existMovie) throw new NotFoundException('Không tồn tại phim này!');

    const removedMovie = await this.prisma.phim.delete({
      where: { ma_phim: +id },
      include: { LichChieu: true, Banner: true },
    });
    return removedMovie;
  }
}
