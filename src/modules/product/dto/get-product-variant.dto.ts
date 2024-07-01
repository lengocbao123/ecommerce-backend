import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetProductVariantDto {
  @Field(() => Number)
  productId: number;

  @Field(() => [Number])
  optionIds: number[];

  @Field(() => [Number])
  valueIds: number[];
}
