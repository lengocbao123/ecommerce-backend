import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

export enum ProductSortBy {
  Price = 'price',
  CreatedAt = 'created_at',
}
export enum ProductSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
registerEnumType(ProductSortBy, { name: 'ProductSortBy' });
registerEnumType(ProductSortDirection, { name: 'ProductSortDirection' });

@InputType()
export class GetProductsDto {
  @Field(() => [Number], { nullable: true })
  categoryIds?: number[];

  @IsNumber()
  @Field(() => Number, { defaultValue: 1, nullable: true })
  page?: number;

  @Field(() => Number, { defaultValue: 10, nullable: true })
  limit?: number;

  @Field(() => ProductSortBy, {
    defaultValue: ProductSortBy.CreatedAt,
    nullable: true,
  })
  sortBy?: ProductSortBy;

  @Field(() => ProductSortDirection, {
    defaultValue: ProductSortDirection.ASC,
    nullable: true,
  })
  sortDiretion?: ProductSortDirection;
}
