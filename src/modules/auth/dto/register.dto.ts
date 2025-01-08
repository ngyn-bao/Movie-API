import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

class RegisterDto {
  @IsString()
  @ApiProperty({ example: 'abc@gmail.com', description: 'Email' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'abc', description: 'Mật khẩu' })
  mat_khau: string;

  @IsString()
  @ApiProperty({ example: 'Nguyễn Văn A', description: 'Họ tên' })
  ho_ten: string;

  @IsString()
  @ApiProperty({ example: '0912345678', description: 'Số điện thoại' })
  so_dien_thoai: string;

  @IsNumber()
  @ApiProperty({ example: 1, description: 'Mã loại người dùng' })
  @IsOptional()
  ma_loai_nguoi_dung: number;
}

export default RegisterDto;
