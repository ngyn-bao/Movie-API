import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';
import {
  IsBoolean,
  IsBooleanString,
  IsDateString,
  IsNumber,
  IsNumberString,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsNumberString()
  @ApiProperty()
  ma_phim: number;

  @IsString()
  @ApiProperty()
  ten_phim: string;

  @IsUrl()
  @ApiProperty()
  trailer: string;

  @IsString()
  @ApiProperty()
  mo_ta: string;

  @IsDateString()
  @ApiProperty()
  ngay_khoi_chieu: string;

  @IsNumberString()
  @ApiProperty()
  danh_gia: number;

  @IsBooleanString()
  @ApiProperty()
  hot: string;

  @IsBooleanString()
  @ApiProperty()
  dang_chieu: string;

  @IsBooleanString()
  @ApiProperty()
  sap_chieu: string;
}
