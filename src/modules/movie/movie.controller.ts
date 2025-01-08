import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { ApiConsumes, ApiHeader, ApiOperation } from '@nestjs/swagger';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('lay-banner')
  @ApiOperation({ summary: 'Lấy danh sách banner' })
  findBanner() {
    return this.movieService.findBanner();
  }

  @Get('lay-phim')
  @ApiOperation({ summary: 'Lấy danh sách phim' })
  findMovie() {
    return this.movieService.findMovie();
  }

  @Get('thong-tin-phim/:maPhim')
  @ApiOperation({ summary: 'Hiển thị thông tin phim' })
  detailMovie(@Param('maPhim') maPhim: number) {
    return this.movieService.detailMovie(maPhim);
  }

  @Get('lay-phim-phan-trang')
  @ApiOperation({ summary: 'Lấy danh sách phim (phân trang)' })
  findMoviePagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.movieService.findMoviePagination(page, pageSize);
  }

  @Get('lay-phim-theo-ngay')
  @ApiOperation({ summary: 'Lấy danh sách phim theo ngày' })
  findMovieByDay(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Query('tuNgay') tuNgay: string,
    @Query('denNgay') denNgay: string,
  ) {
    return this.movieService.findMovieByDay(page, pageSize, tuNgay, denNgay);
  }

  @Post('upload-hinh')
  @UseInterceptors(FileInterceptor('hinh_anh'))
  @ApiOperation({ summary: 'Upload hình' })
  @ApiConsumes('multipart/form-data')
  uploadHinh(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.uploadHinh(body, file);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('cap-nhat-phim')
  @ApiOperation({ summary: 'Cập nhật phim' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('hinh_anh'))
  capNhatPhim(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.uploadHinh(body, file);
  }

  @UseGuards(AuthGuard('protect'))
  @Delete('xoa-phim/:maPhim')
  @ApiOperation({ summary: 'Xóa phim' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  remove(@Param('maPhim') maPhim: number) {
    return this.movieService.remove(maPhim);
  }
}
