import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { OptionValueEntity } from './option-value.entity';

@Entity({ name: 'option' })
export class OptionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @OneToMany(() => OptionValueEntity, (alias) => alias.option)
  values: OptionValueEntity[];
}
