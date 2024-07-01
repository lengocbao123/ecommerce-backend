import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetProductVariantResponse {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  productId: number;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  quantity: number;

  @Field(() => String)
  image: string;

  @Field(() => Boolean)
  outOfStock: boolean;

  constructor(input: Partial<GetProductVariantResponse>) {
    Object.assign(this, input);
    this.outOfStock = this.quantity === 0;
  }
}
