import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/modules/category/response/get-categories.response';

@ObjectType()
export class GetProductResponse {
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

  @Field(() => [Option])
  options: Option[];
}

@ObjectType()
class Option {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  name: string;

  @Field(() => [OptionValue])
  values: OptionValue[];
}

@ObjectType()
class OptionValue {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  name: string;
}
