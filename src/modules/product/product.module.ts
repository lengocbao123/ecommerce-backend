import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { SqlModule } from '../../../database/sql-module/sql.module';

@Module({
  imports: [SqlModule],
  controllers: [],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
