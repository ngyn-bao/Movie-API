import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';
import { TUserExist } from 'src/common/@type/user-exist-type';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, mat_khau, ho_ten, so_dien_thoai, ma_loai_nguoi_dung } =
      registerDto;
    if (!email || !mat_khau || !ho_ten || !so_dien_thoai) {
      // console.log({ email, mat_khau, ho_ten, so_dien_thoai });
      throw new BadRequestException('Dữ liệu truyền vào không phù hợp!');
    }

    const userExist = await this.prisma.nguoiDung.findFirst({
      where: {
        email: email,
      },
    });

    if (userExist)
      throw new BadRequestException('Đã tồn tại người dùng có email này!');
    else {
      const hashedPassword = await bcrypt.hash(mat_khau, 10);
      const newUser = await this.prisma.nguoiDung.create({
        data: {
          email: email,
          mat_khau: hashedPassword,
          ho_ten: ho_ten,
          so_dt: so_dien_thoai,
          ma_loai_nguoi_dung: ma_loai_nguoi_dung ? ma_loai_nguoi_dung : 2,
        },
      });
      return {
        tai_khoan: newUser.tai_khoan,
        email: newUser.email,
        ho_ten: newUser.ho_ten,
        so_dt: newUser.so_dt,
        ma_loai_nguoi_dung: newUser.ma_loai_nguoi_dung,
      };
    }
  }

  async login(loginDto: LoginDto) {
    let { email, mat_khau } = loginDto;

    const userExist = await this.prisma.nguoiDung.findFirst({
      where: {
        email: email,
      },
      select: {
        mat_khau: true,
        email: true,
        tai_khoan: true,
      },
    });

    if (!userExist)
      throw new BadRequestException(
        'Không tồn tại người dùng này, vui lòng đăng ký!',
      );

    const isValidPassword = bcrypt.compareSync(mat_khau, userExist.mat_khau);

    if (!isValidPassword) throw new BadRequestException('Sai mật khẩu!');

    const tokens = this.createToken(await userExist);
    return tokens;
  }

  async createToken(user: TUserExist) {
    const accessToken = this.jwt.sign(
      {
        nguoiDung: user.tai_khoan,
      },
      {
        secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRE'),
      },
    );
    const refreshToken = this.jwt.sign(
      {
        nguoiDung: user.tai_khoan,
      },
      {
        secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRE'),
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
