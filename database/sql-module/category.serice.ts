import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../../database/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorySqlService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}
  async getCategories(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find({});
    console.log({ categories });

    return categories;
  }
}
