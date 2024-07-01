import { Query, Resolver } from '@nestjs/graphql';

import { BannerService } from './banner.service';
import { Banner } from './response/get-banners.response';

@Resolver()
export class BannerResolver {
  constructor(private readonly bannerService: BannerService) {}

  @Query(() => [Banner])
  async getBanners() {
    return this.bannerService.getBanners();
  }
}
