import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBanner1719284147486 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO public."banner"
(image, title, "sub_title", description, url, "is_available")
VALUES('https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/5.jpg', 'Latest Exclusive Summer Collection', '30% Sale', '', '/url', true);`);
    await queryRunner.query(`
    INSERT INTO public."banner"
(image, title, "sub_title", description, url, "is_available")
VALUES('https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/6.jpg', '20 Days for best of Summer Collection', '50% Sale', '', '/url', true);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "variant_value"`);
  }
}
