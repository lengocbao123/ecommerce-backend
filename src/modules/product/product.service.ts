import { Injectable } from '@nestjs/common';
import { ProductSqlService } from '../../../database/sql-module/product.service';
import { ProductVariantSqlService } from '../../../database/sql-module/product-variant.service';
import { GetProductsDto } from './dto/get-products.dto';
import { PageMetaDto } from '../page/dto/page-meta.dto';

@Injectable()
export class ProductService {
  constructor(
    private productSqlService: ProductSqlService,
    private productVariantSqlService: ProductVariantSqlService,
  ) {}

  async getProducts(input: GetProductsDto) {
    const { products, total } = await this.productSqlService.getProducts(input);
    const pageMetaDto = new PageMetaDto(input.page, input.limit, total);

    return { data: products, meta: pageMetaDto };
  }

  getProduct(id: number) {
    return this.productSqlService.getProduct(id);
  }
  getProductVariant(
    productId: number,
    optionIds: number[],
    valueIds: number[],
  ) {
    return this.productVariantSqlService.getProductVariant(
      productId,
      optionIds,
      valueIds,
    );
  }
}
