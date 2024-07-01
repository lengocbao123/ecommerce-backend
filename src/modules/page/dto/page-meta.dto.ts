import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageMetaDto {
  @Field(() => Number)
  page: number;
  @Field(() => Number)
  limit: number;
  @Field(() => Number)
  total: number;
  @Field(() => Number)
  pageCount: number;
  @Field(() => Boolean)
  hasPrevious: boolean;
  @Field(() => Boolean)
  hasNext: boolean;

  constructor(page: number, limit: number, total: number) {
    this.page = page;
    this.limit = limit;
    this.total = total;
    this.pageCount = Math.ceil(this.total / this.limit);
    this.hasNext = this.page < this.pageCount;
    this.hasPrevious = this.page > 1;
  }
}
