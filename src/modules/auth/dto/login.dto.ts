import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class LoginDto {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  mat_khau: string;
}

export default LoginDto;
