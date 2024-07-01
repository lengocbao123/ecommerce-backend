import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionValueEntity } from 'database/entity/option-value.entity';
import { OptionEntity } from '../../database/entity/option.entity';
import { ProductVariantEntity } from '../../database/entity/product-variant.entity';
import { VariantValueEntity } from '../../database/entity/variant-value.entity';
import { Repository } from 'typeorm';
import { ProductOptionEntity } from '../../database/entity/product-option.entity';

@Injectable()
export class ProductVariantSqlService {
  constructor(
    @InjectRepository(ProductVariantEntity)
    private productVariantRepository: Repository<ProductVariantEntity>,
    @InjectRepository(ProductOptionEntity)
    private productOptionRepository: Repository<ProductOptionEntity>,
  ) {}

  async getProductVariant(
    productId: number,
    optionIds: number[],
    valueIds: number[],
  ) {
    const countProductOption = await this.productOptionRepository.count({
      where: {
        productId,
      },
    });
    const productVariant = await this.productVariantRepository
      .createQueryBuilder('product_variant')
      .leftJoin(
        VariantValueEntity,
        'variant_value',
        'variant_value.variant_id = product_variant.id',
      )
      .leftJoin(OptionEntity, 'option', 'option.id =  variant_value.option_id')
      .leftJoin(
        OptionValueEntity,
        'option_value',
        'option_value.id = variant_value.value_id',
      )
      .where('product_variant.product_id = :id', { id: productId })
      .andWhere('variant_value.option_id IN (:...optionIds)', {
        optionIds,
      })
      .andWhere('variant_value.value_id IN (:...valueIds)', {
        valueIds,
      })
      .groupBy('product_variant.id')
      .addGroupBy('product_variant.product_id')
      .having('COUNT(DISTINCT variant_value.option_id) = :number', {
        number: countProductOption,
      })
      .getOne();

    return productVariant;
  }
}
