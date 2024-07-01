import { Injectable } from '@nestjs/common';
import { BannerSqlService } from '../../../database/sql-module/banner.service';

@Injectable()
export class BannerService {
  constructor(private bannerSqlService: BannerSqlService) {}
  getBanners() {
    return this.bannerSqlService.getBanners();
  }
}
