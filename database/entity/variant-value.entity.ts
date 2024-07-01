import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import { OptionEntity } from './option.entity';
import { OptionValueEntity } from './option-value.entity';
import { ProductVariantEntity } from './product-variant.entity';

@Entity('variant_value')
export class VariantValueEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id!: number;

  @Column({
    name: 'product_id',
    type: 'int',
  })
  productId: number;

  @Column({
    name: 'variant_id',
    type: 'int',
  })
  variantId: number;

  @Column({
    name: 'option_id',
    type: 'int',
  })
  optionId: number;

  @Column({
    name: 'value_id',
    type: 'int',
  })
  valueId: number;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: ProductEntity;

  @ManyToOne(() => OptionEntity)
  @JoinColumn({
    name: 'option_id',
    referencedColumnName: 'id',
  })
  option: OptionEntity;

  @ManyToOne(() => OptionValueEntity)
  @JoinColumn({
    name: 'value_id',
    referencedColumnName: 'id',
  })
  value: OptionValueEntity;

  @ManyToOne(() => ProductVariantEntity)
  @JoinColumn({
    name: 'variant_id',
    referencedColumnName: 'id',
  })
  variant: ProductVariantEntity;
}
