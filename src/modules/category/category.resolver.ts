import { CategoryService } from './category.service';
import { Query, Resolver } from '@nestjs/graphql';
import { Category } from './response/get-categories.response';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async getCategories() {
    return this.categoryService.getCategories();
  }
}
