import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, ho_ten, mat_khau, so_dt, ma_loai_nguoi_dung } =
      createUserDto;

    if (!email || !mat_khau || !ho_ten || !so_dt) {
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

    // console.log(ma_loai_nguoi_dung);

    const hashedPassword = await bcrypt.hash(mat_khau, 10);
    const newUser = this.prisma.nguoiDung.create({
      data: {
        email: email,
        ho_ten: ho_ten,
        mat_khau: hashedPassword,
        so_dt: so_dt,
        ma_loai_nguoi_dung: ma_loai_nguoi_dung,
      },
      select: {
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
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
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!danhSachNguoiDung)
      throw new NotFoundException('Không tìm thấy thông tin!');

    return {
      totalItems: totalItems,
      danhSachNguoiDung: danhSachNguoiDung,
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
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!result) throw new NotFoundException('Không tìm thấy thông tin!');

    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: result,
    };
  }

  async findUserType() {
    const danhSachLoaiNguoiDung = await this.prisma.loaiNguoiDung.findMany();
    return danhSachLoaiNguoiDung;
  }

  async searchUser(hoTen: string) {
    const foundUsers = await this.prisma.nguoiDung.findMany({
      where: {
        ho_ten: { contains: hoTen },
      },
      orderBy: {
        tai_khoan: 'asc',
      },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!foundUsers) throw new NotFoundException('Không tìm thấy thông tin!');

    return { danhSachNguoiDung: foundUsers };
  }

  async searchUserPagination(hoTen: string, page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;
    const skip = (page - 1) * pageSize;
    const totalItems = await this.prisma.nguoiDung.count();
    const totalPages = Math.ceil(totalItems / pageSize);
    const result = await this.prisma.nguoiDung.findMany({
      where: {
        ho_ten: { contains: hoTen },
      },
      take: pageSize,
      skip: skip,
      orderBy: { tai_khoan: 'asc' },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!result) throw new NotFoundException('Không tìm thấy thông tin!');
    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: result,
    };
  }

  async userInfo(token: string) {
    // console.log(token);
    if (!token) throw new BadRequestException('Vui lòng nhập token!');

    const decoded = this.jwt.verify(token, {
      secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
    });

    if (!decoded || !decoded.nguoiDung)
      throw new BadRequestException('Token sai!');

    console.log(decoded);

    const user = await this.prisma.nguoiDung.findUnique({
      where: { tai_khoan: decoded.nguoiDung },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!user) throw new NotFoundException('Không tìm thấy người dùng!');

    return user;
  }

  async takeUserInfo(taiKhoan: number) {
    const user = await this.prisma.nguoiDung.findUnique({
      where: {
        tai_khoan: +taiKhoan,
      },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    if (!user) throw new NotFoundException('Không tìm thấy người dùng!');

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const foundUser = await this.prisma.nguoiDung.findUnique({
      where: { tai_khoan: +id },
    });

    if (!foundUser)
      throw new BadRequestException('Không tồn tại người dùng này!');

    const { email, ho_ten, mat_khau, so_dt, ma_loai_nguoi_dung } =
      updateUserDto;
    if (!email || !mat_khau || !ho_ten || !so_dt) {
      // console.log({ email, mat_khau, ho_ten, so_dien_thoai });
      throw new BadRequestException('Dữ liệu truyền vào không phù hợp!');
    }
    const hashedPassword = await bcrypt.hash(mat_khau, 10);
    const updateUser = this.prisma.nguoiDung.update({
      where: { tai_khoan: +id },
      data: {
        ho_ten: ho_ten,
        email: email,
        mat_khau: hashedPassword,
        so_dt: so_dt,
        ma_loai_nguoi_dung: ma_loai_nguoi_dung,
      },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    return updateUser;
  }

  async remove(id: number) {
    const foundUser = await this.prisma.nguoiDung.findUnique({
      where: { tai_khoan: +id },
    });

    if (!foundUser)
      throw new NotFoundException('Không tồn tại người dùng này!');

    await this.prisma.datVe.deleteMany({
      where: { tai_khoan: +id },
    });

    const deleteUser = await this.prisma.nguoiDung.delete({
      where: { tai_khoan: +id },
      select: {
        tai_khoan: true,
        email: true,
        ho_ten: true,
        so_dt: true,
        LoaiNguoiDung: true,
      },
    });

    return deleteUser;
  }
}
