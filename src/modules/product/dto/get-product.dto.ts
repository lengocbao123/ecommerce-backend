import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetProductDto {
  @Field(() => Number)
  id: number;
}
