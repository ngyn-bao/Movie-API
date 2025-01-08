import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, ValidateNested } from 'class-validator';

class TicketDetail {
  @IsInt()
  @ApiProperty()
  ma_ghe: number;

  @IsInt()
  @ApiProperty()
  tai_khoan: number;
}

export class CreateTicketDto {
  @IsInt()
  @ApiProperty({
    example: 10,
    description: 'Mã lịch chiếu của bộ phim',
  })
  ma_lich_chieu: number;

  @IsArray()
  @ApiProperty({
    type: [TicketDetail],
    description: 'Danh sách các vé được đặt',
    example: [
      { ma_ghe: 1, tai_khoan: 1001 },
      { ma_ghe: 2, tai_khoan: 1002 },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => TicketDetail)
  danhSachVe: TicketDetail[];
}
