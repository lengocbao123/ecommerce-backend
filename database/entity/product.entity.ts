import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { CategoryEntity } from './category.entity';
import { ProductVariantEntity } from './product-variant.entity';
import { ProductOptionEntity } from './product-option.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  constructor(partial: Partial<ProductEntity>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id!: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name!: string;

  @Column({
    name: 'image',
    type: 'varchar',
  })
  image!: string;

  @Column({
    name: 'price',
    type: 'int',
  })
  price!: string;

  @Column({
    name: 'category_id',
    type: 'int',
  })
  categoryId!: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(() => ProductVariantEntity, (variants) => variants.product)
  variants: ProductVariantEntity[];

  @OneToMany(() => ProductOptionEntity, (variants) => variants.product)
  options: ProductOptionEntity[];
}
