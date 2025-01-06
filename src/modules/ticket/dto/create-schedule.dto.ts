import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, ValidateNested } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  ma_rap: number;

  @IsInt()
  ma_phim: number;

  @IsString()
  ngay_gio_chieu: string;

  @IsInt()
  gia_ve: number;
}
