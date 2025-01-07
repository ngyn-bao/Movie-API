import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { jwtConstants } from './constants';
import { PrismaService } from '../../common/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'protect') {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('ACCESS_TOKEN_SECRET'),
    });
    // console.log(
    //   'JWT Secret:',
    //   configService.get<string>('ACCESS_TOKEN_SECRET'),
    // );
  }

  async validate(payload: any) {
    // console.log(payload);
    const user = await this.prisma.nguoiDung.findUnique({
      where: { tai_khoan: payload.nguoiDung },
    });

    if (!user)
      throw new UnauthorizedException(
        'Không tồn tại người dùng này hoặc token sai!',
      );

    return user;
  }
}
