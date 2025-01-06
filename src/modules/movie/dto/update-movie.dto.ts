import { PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  ma_phim: number;
  ten_phim: string;
  trailer: string;
  hinh_anh: string;
  mo_ta: string;
  ngay_khoi_chieu: Date;
  danh_gia: number;
  hot: boolean;
  dang_chieu: boolean;
  sap_chieu: boolean;
}
