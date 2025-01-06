import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const { email, ho_ten, mat_khau, so_dt, loai_nguoi_dung } = createUserDto;

    const newUser = this.prisma.nguoiDung.create({
      data: {
        email: email,
        ho_ten: ho_ten,
        mat_khau: mat_khau,
        so_dt: so_dt,
        loai_nguoi_dung: loai_nguoi_dung,
      },
    });

    return newUser;
  }

  async findAll() {
    const totalItems = await this.prisma.nguoiDung.count();
    const danhSachNguoiDung = await this.prisma.nguoiDung.findMany({
      orderBy: {
        tai_khoan: 'asc',
      },
    });
    return {
      totalItems: totalItems,
      danhSachNguoiDung: danhSachNguoiDung || [],
    };
  }

  async findAllPagination(page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;
    const skip = (page - 1) * pageSize;
    const totalItems = await this.prisma.nguoiDung.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    const result = await this.prisma.nguoiDung.findMany({
      take: pageSize,
      skip: skip,
      orderBy: { tai_khoan: 'asc' },
    });
    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: result || [],
    };
  }

  async findUserType() {
    const danhSachLoaiNguoiDung = await this.prisma.nguoiDung.findMany({
      select: {
        loai_nguoi_dung: true,
      },
    });
    return danhSachLoaiNguoiDung;
  }

  async searchUser(hoTen: string) {
    const foundUsers = await this.prisma.nguoiDung.findMany({
      where: {
        ho_ten: hoTen,
      },
      orderBy: {
        tai_khoan: 'asc',
      },
    });

    return { danhSachNguoiDung: foundUsers || [] };
  }

  async searchUserPagination(hoTen: string, page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;
    const skip = (page - 1) * pageSize;
    const totalItems = await this.prisma.nguoiDung.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    const result = await this.prisma.nguoiDung.findMany({
      where: {
        ho_ten: hoTen,
      },
      take: pageSize,
      skip: skip,
      orderBy: { tai_khoan: 'asc' },
    });
    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: result || [],
    };
  }

  async userInfo(token: string) {
    const decoded = this.jwt.verify(token, {
      secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
    });

    if (!decoded) throw new BadRequestException('Token sai!');

    const user = await this.prisma.nguoiDung.findUnique({
      where: { tai_khoan: decoded.tai_khoan },
    });

    if (!user) throw new BadRequestException('Không tìm thấy người dùng!');

    return user;
  }

  async takeUserInfo(taiKhoan: number) {
    const user = await this.prisma.nguoiDung.findUnique({
      where: {
        tai_khoan: +taiKhoan,
      },
    });

    if (!user) throw new BadRequestException('Không tìm thấy người dùng!');

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const { email, ho_ten, mat_khau, so_dt, loai_nguoi_dung } = updateUserDto;
    const updateUser = this.prisma.nguoiDung.update({
      where: { tai_khoan: id },
      data: {
        ho_ten: ho_ten,
        email: email,
        mat_khau: mat_khau,
        so_dt: so_dt,
        loai_nguoi_dung: loai_nguoi_dung,
      },
    });

    return updateUser;
  }

  remove(id: number) {
    const deleteUser = this.prisma.nguoiDung.delete({
      where: { tai_khoan: id },
    });

    return deleteUser;
  }
}
