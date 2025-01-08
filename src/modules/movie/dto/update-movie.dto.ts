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
  @ApiProperty({ example: '12', description: 'Mã phim' })
  ma_phim: number;

  @IsString()
  @ApiProperty({ example: 'Lật mật', description: 'Tên phim' })
  ten_phim: string;

  @IsUrl()
  @ApiProperty({
    example: 'https://youtubee.com',
    description: 'Đường dẫn trailer phim',
  })
  trailer: string;

  @IsString()
  @ApiProperty({ example: 'Phim hay lắm', description: 'Mô tả phim' })
  mo_ta: string;

  @IsDateString()
  @ApiProperty({ example: '2024-01-01', description: 'Mật khẩu' })
  ngay_khoi_chieu: string;

  @IsNumberString()
  @ApiProperty({ example: '10', description: 'Điểm đánh giá phim' })
  danh_gia: number;

  @IsBooleanString()
  @ApiProperty({ example: 'true', description: 'Có đang hot hay không?' })
  hot: string;

  @IsBooleanString()
  @ApiProperty({ example: 'false', description: 'Có đang chiếu không' })
  dang_chieu: string;

  @IsBooleanString()
  @ApiProperty({ example: 'true', description: 'Có sắp chiếu không' })
  sap_chieu: string;

  @ApiProperty({
    description: 'Hình ảnh',
    type: 'string',
    format: 'binary',
  })
  hinh_anh: Express.Multer.File;
}
