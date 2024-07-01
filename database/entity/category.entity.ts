import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  constructor(partial: Partial<CategoryEntity>) {
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

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
