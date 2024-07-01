import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Transform } from 'class-transformer';
import { stringToBoolean } from '../../src/utils/class-transformer';

@Entity({ name: 'banner' })
export class BannerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'sub_title', type: 'varchar' })
  subTitle: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'url', type: 'varchar' })
  url: string;

  @Column({ name: 'is_available', type: 'boolean' })
  @Transform(({ obj, key }) => stringToBoolean(obj[key]))
  isAvailable: boolean;
}
