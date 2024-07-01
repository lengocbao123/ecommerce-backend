import { Module } from '@nestjs/common';
import { CategorySqlService } from './category.serice';
import { CategoryEntity } from '../../database/entity/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSqlService } from './product.service';
import { ProductEntity } from '../../database/entity/product.entity';
import { ProductVariantEntity } from '../../database/entity/product-variant.entity';
import { ProductVariantSqlService } from './product-variant.service';
import { ProductOptionEntity } from '../../database/entity/product-option.entity';
import { OptionEntity } from '../../database/entity/option.entity';
import { OptionValueEntity } from '../../database/entity/option-value.entity';
import { VariantValueEntity } from '../../database/entity/variant-value.entity';
import { BannerEntity } from '../../database/entity/banner.entity';
import { BannerSqlService } from './banner.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      ProductEntity,
      ProductVariantEntity,
      ProductOptionEntity,
      OptionEntity,
      OptionValueEntity,
      VariantValueEntity,
      BannerEntity,
    ]),
  ],
  controllers: [],
  providers: [
    CategorySqlService,
    ProductSqlService,
    ProductVariantSqlService,
    BannerSqlService,
  ],
  exports: [
    CategorySqlService,
    ProductSqlService,
    ProductVariantSqlService,
    BannerSqlService,
  ],
})
export class SqlModule {}
