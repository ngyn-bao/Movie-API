import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class RegisterDto {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  mat_khau: string;

  @IsString()
  @ApiProperty()
  ho_ten: string;

  @IsString()
  @ApiProperty()
  so_dien_thoai: string;
}

export default RegisterDto;
