import { Type } from 'class-transformer';
import { IsArray, IsInt, ValidateNested } from 'class-validator';

class TicketDetail {
  @IsInt()
  ma_ghe: number;

  @IsInt()
  tai_khoan: number;
}

export class CreateTicketDto {
  @IsInt()
  ma_lich_chieu: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TicketDetail)
  danhSachVe: TicketDetail[];
}
