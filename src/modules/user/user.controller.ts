import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Headers,
  UseGuards,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('them-nguoi-dung')
  @ApiOperation({ summary: 'Thêm người dùng' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('nguoi-dung')
  @ApiOperation({ summary: 'Lấy danh sách người dùng' })
  findAll() {
    return this.userService.findAll();
  }

  @Get('nguoi-dung-phan-trang')
  @ApiOperation({ summary: 'Lấy danh sách người dùng (phân trang)' })
  findAllPagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.userService.findAllPagination(page, pageSize);
  }

  @Get('loai-nguoi-dung')
  @ApiOperation({ summary: 'Lấy danh sách loại người dùng' })
  findUserType() {
    return this.userService.findUserType();
  }

  @Get('tim-kiem')
  @ApiOperation({ summary: 'Tìm kiếm người dùng' })
  searchUser(@Query('hoTen') hoTen: string) {
    return this.userService.searchUser(hoTen);
  }

  @Get('tim-kiem-phan-trang')
  @ApiOperation({ summary: 'Tìm kiếm người dùng (phân trang)' })
  searchUserPagination(
    @Query('hoTen') hoTen: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.userService.searchUserPagination(hoTen, page, pageSize);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('thong-tin-tai-khoan')
  @ApiOperation({ summary: 'Hiển thị thông tin tài khoản' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  userInfo(@Headers('token') token: string) {
    return this.userService.userInfo(token);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('lay-thong-tin')
  @ApiOperation({ summary: 'Lấy thông tin tài khoản' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  takeUserInfo(@Query('taiKhoan') taiKhoan: number) {
    return this.userService.takeUserInfo(taiKhoan);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('cap-nhat-nguoi-dung/:taiKhoan')
  @ApiOperation({ summary: 'Cập nhật người dùng' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  updatePost(
    @Param('taiKhoan') taiKhoan: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+taiKhoan, updateUserDto);
  }

  @UseGuards(AuthGuard('protect'))
  @Put('cap-nhat-nguoi-dung/:taiKhoan')
  @ApiOperation({ summary: 'Cập nhật người dùng' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  update(
    @Param('taiKhoan') taiKhoan: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+taiKhoan, updateUserDto);
  }

  @UseGuards(AuthGuard('protect'))
  @Delete('xoa-nguoi-dung/:taiKhoan')
  @ApiOperation({ summary: 'Xóa người dùng' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Nhập token bearer',
    required: true,
  })
  remove(@Param('taiKhoan') taiKhoan: number) {
    return this.userService.remove(+taiKhoan);
  }
}
