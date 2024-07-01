import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import { VariantValueEntity } from './variant-value.entity';

@Entity({ name: 'product_variant' })
export class ProductVariantEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({
    name: 'product_id',
    type: 'int',
  })
  productId: number;

  @Column({ name: 'price', type: 'int' })
  price: number;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

  @ManyToOne(() => ProductEntity, (product) => product.variants)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: ProductEntity;

  @OneToMany(() => VariantValueEntity, (variantValue) => variantValue.variant)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'variant_id',
  })
  variantValue: VariantValueEntity;
}
