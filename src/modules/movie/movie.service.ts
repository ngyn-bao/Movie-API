import { BadRequestException, Injectable } from '@nestjs/common';
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
    const totalItems = await this.prisma.nguoiDung.count();
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
    const uploadResult = await this.cloudinaryService.uploadFile(file);

    if (!uploadResult || !uploadResult.secure_url)
      throw new BadRequestException('Upload thất bại!');

    const updatedMovie = await this.prisma.phim.update({
      where: {
        ma_phim: +body.ma_phim,
      },
      data: {
        ten_phim: body.ten_phim,
        trailer: body.trailer,
        hinh_anh: uploadResult.secure_url,
        mo_ta: body.mo_ta,
        ngay_khoi_chieu: body.ngay_khoi_chieu,
        danh_gia: body.danh_gia,
        hot: body.hot,
        dang_chieu: body.dang_chieu,
        sap_chieu: body.sap_chieu,
      },
    });

    return updatedMovie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async detailMovie(id: number) {
    const thongTinPhim = await this.prisma.phim.findUnique({
      where: { ma_phim: +id },
      include: { Banner: true, LichChieu: true },
    });

    return thongTinPhim || [];
  }

  remove(id: number) {
    const removedMovie = this.prisma.phim.delete({
      where: { ma_phim: +id },
      include: { LichChieu: true, Banner: true },
    });
    return removedMovie;
  }
}
