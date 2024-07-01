import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../database/entity/product.entity';
import { Repository } from 'typeorm';
import { GetProductsDto } from 'src/modules/product/dto/get-products.dto';

@Injectable()
export class ProductSqlService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getProducts(input: GetProductsDto) {
    const queryBuilder = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category');

    if (input.categoryIds && input.categoryIds.length > 0) {
      queryBuilder.where('product.category_id IN (:...categoryIds)', {
        categoryIds: input.categoryIds,
      });
    }
    queryBuilder.orderBy(`product.${input.sortBy}`, input.sortDiretion);
    const [total, products] = await Promise.all([
      queryBuilder.getCount(),
      queryBuilder
        .offset((input.page - 1) * input.limit)
        .limit(input.limit)
        .getMany(),
    ]);

    return { products, total };
  }

  async getProduct(id: number) {
    const product = await this.productRepository.findOne({
      relations: {
        category: true,
        options: {
          option: {
            values: true,
          },
        },
      },
      where: { id },
    });
    return {
      ...product,
      options: product.options.map((e) => e.option),
    };
  }
}
