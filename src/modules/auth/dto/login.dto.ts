import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class LoginDto {
  @IsString()
  @ApiProperty({ example: 'abc@gmail.com', description: 'Email' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'abcd', description: 'Mật khẩu' })
  mat_khau: string;
}

export default LoginDto;
