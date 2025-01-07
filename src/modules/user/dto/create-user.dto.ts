import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  ho_ten: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  mat_khau: string;

  @IsString()
  @ApiProperty()
  so_dt: string;

  @IsNumber()
  @ApiProperty()
  ma_loai_nguoi_dung: number;
}
