import { Injectable } from '@nestjs/common';
import { CategorySqlService } from '../../../database/sql-module/category.serice';

@Injectable()
export class CategoryService {
  constructor(private categorySqlService: CategorySqlService) {}
  getCategories() {
    return this.categorySqlService.getCategories();
  }
}
