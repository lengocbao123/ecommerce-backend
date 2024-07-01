import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/modules/category/response/get-categories.response';
import { PageMetaDto } from 'src/modules/page/dto/page-meta.dto';

@ObjectType()
class Product {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  categoryId: number;

  @Field(() => Category)
  category: Category;
}

@ObjectType()
export class GetProductsResponse {
  @Field(() => [Product])
  data: Product[];

  @Field(() => PageMetaDto)
  meta: PageMetaDto;
}
