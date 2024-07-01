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

@Entity('product_option')
export class ProductOptionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id!: number;

  @Column({
    name: 'product_id',
    type: 'int',
  })
  productId: number;

  @Column({
    name: 'option_id',
    type: 'int',
  })
  optionId: number;

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
}
