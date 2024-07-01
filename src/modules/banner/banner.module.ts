import { Module } from '@nestjs/common';

import { SqlModule } from '../../../database/sql-module/sql.module';
import { BannerService } from './banner.service';
import { BannerResolver } from './banner.resolver';

@Module({
  imports: [SqlModule],
  controllers: [],
  providers: [BannerService, BannerResolver],
})
export class BannerModule {}
