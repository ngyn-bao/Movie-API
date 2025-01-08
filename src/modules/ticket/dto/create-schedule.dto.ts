import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'Mã rạp',
  })
  ma_rap: number;

  @IsInt()
  @ApiProperty({
    example: 10,
    description: 'Mã bộ phim',
  })
  ma_phim: number;

  @IsString()
  @ApiProperty({
    example: '2024-01-01 12:12:12',
    description: 'Ngày giờ chiếu phim',
  })
  ngay_gio_chieu: string;

  @IsInt()
  @ApiProperty({
    example: 100000,
    description: 'Giá vé',
  })
  gia_ve: number;
}
