import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PageMetaOptionDto {
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsInt()
  @Type(() => Number)
  limit: number;

  @IsInt()
  @Type(() => Number)
  total: number;
}
