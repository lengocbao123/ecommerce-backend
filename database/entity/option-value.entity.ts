import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { OptionEntity } from './option.entity';

@Entity({ name: 'option_value' })
export class OptionValueEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'option_id',
    type: 'int',
  })
  optionId!: number;

  @ManyToOne(() => OptionEntity, (option) => option.values)
  @JoinColumn({
    name: 'option_id',
    referencedColumnName: 'id',
  })
  option!: OptionEntity;
}
