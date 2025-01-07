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

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get('lay-banner')
  findBanner() {
    return this.movieService.findBanner();
  }

  @Get('lay-phim')
  findMovie() {
    return this.movieService.findMovie();
  }

  @Get('thong-tin-phim/:id')
  detailMovie(@Param('id') id: number) {
    return this.movieService.detailMovie(id);
  }

  @Get('lay-phim-phan-trang')
  findMoviePagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.movieService.findMoviePagination(page, pageSize);
  }

  @Get('lay-phim-theo-ngay')
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
  uploadHinh(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.uploadHinh(body, file);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('cap-nhat-phim')
  @UseInterceptors(FileInterceptor('hinh_anh'))
  capNhatPhim(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.uploadHinh(body, file);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @UseGuards(AuthGuard('protect'))
  @Delete('xoa-phim/:id')
  remove(@Param('id') id: number) {
    return this.movieService.remove(id);
  }
}
