import { ProductService } from './product.service';
import { GetProductsDto } from './dto/get-products.dto';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetProductsResponse } from './response/get-products.response';
import { GetProductResponse } from './response/get-product.response';
import { GetProductDto } from './dto/get-product.dto';
import { GetProductVariantDto } from './dto/get-product-variant.dto';
import { GetProductVariantResponse } from './response/get-product-variant.response';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => GetProductsResponse)
  getProducts(@Args('input') input: GetProductsDto) {
    return this.productService.getProducts(input);
  }

  @Query(() => GetProductResponse)
  getProduct(@Args('input') input: GetProductDto) {
    return this.productService.getProduct(input.id);
  }

  @Query(() => GetProductVariantResponse)
  async getProductVariant(@Args('input') input: GetProductVariantDto) {
    const variant = await this.productService.getProductVariant(
      input.productId,
      input.optionIds,
      input.valueIds,
    );
    return new GetProductVariantResponse(variant);
  }
}
