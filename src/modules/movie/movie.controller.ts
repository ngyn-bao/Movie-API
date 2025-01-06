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
  detailMovie(@Param('maPhim') id: number) {
    return this.movieService.detailMovie(id);
  }

  @Get('lay-phim')
  findMoviePagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.movieService.findMoviePagination(page, pageSize);
  }

  @Post('upload-hinh')
  @UseInterceptors(FileInterceptor('hinh_anh'))
  uploadHinh(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Không có file nào được upload!');
    }

    return this.movieService.uploadHinh(body, file);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('cap-nhat-phim')
  @UseInterceptors(FileInterceptor('hinh_anh'))
  capnhatPhim(
    @Body() body: UpdateMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Không có file nào được upload!');
    }

    return this.movieService.uploadHinh(body, file);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @UseGuards(AuthGuard('protect'))
  @Delete(':id')
  remove(@Param('maPhim') id: number) {
    return this.movieService.remove(+id);
  }
}
