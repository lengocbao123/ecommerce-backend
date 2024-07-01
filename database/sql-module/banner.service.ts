import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BannerEntity } from '../../database/entity/banner.entity';

@Injectable()
export class BannerSqlService {
  constructor(
    @InjectRepository(BannerEntity)
    private bannerRepository: Repository<BannerEntity>,
  ) {}
  async getBanners(): Promise<BannerEntity[]> {
    const banners = await this.bannerRepository.find({
      where: {
        isAvailable: true,
      },
    });

    return banners;
  }
}
