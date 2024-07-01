import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { SqlModule } from '../../../database/sql-module/sql.module';

@Module({
  imports: [SqlModule],
  controllers: [],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
