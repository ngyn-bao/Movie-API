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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('nguoi-dung')
  findAll() {
    return this.userService.findAll();
  }

  @Get('nguoi-dung-phan-trang')
  findAllPagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.userService.findAllPagination(page, pageSize);
  }

  @Get('loai-nguoi-dung')
  findUserType() {
    return this.userService.findUserType();
  }

  @Get('tim-kiem')
  searchUser(@Query('hoTen') hoTen: string) {
    return this.userService.searchUser(hoTen);
  }

  @Get('tim-kiem-phan-trang')
  searchUserPagination(
    @Query('hoTen') hoTen: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.userService.searchUserPagination(hoTen, page, pageSize);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('thong-tin-tai-khoan')
  userInfo(@Headers() token: string) {
    return this.userService.userInfo(token);
  }

  @UseGuards(AuthGuard('protect'))
  @Post('lay-thong-tin')
  takeUserInfo(@Query('taiKhoan') taiKhoan: number, @Headers() token: string) {
    return this.userService.takeUserInfo(taiKhoan);
  }

  @UseGuards(AuthGuard('protect'))
  @Put('cap-nhat-nguoi-dung/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard('protect'))
  @Delete('xoa-nguoi-dung/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
