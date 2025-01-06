import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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

  @IsString()
  @ApiProperty()
  loai_nguoi_dung: string;
}
