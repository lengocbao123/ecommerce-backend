import { Field, ObjectType } from '@nestjs/graphql';
import { PageMetaDto } from './page-meta.dto';
@ObjectType()
export class PageDto {
  @Field(() => PageMetaDto)
  readonly meta: PageMetaDto;

  constructor(meta: PageMetaDto) {
    this.meta = meta;
  }
}
