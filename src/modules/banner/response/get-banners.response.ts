import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Banner {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  image: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  subTitle: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  url: string;

  @Field(() => Boolean)
  isAvailable: boolean;
}
