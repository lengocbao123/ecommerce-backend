import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategory1718780258019 implements MigrationInterface {
  name = 'SeedCategory1718780258019';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO
    public."category" (id, name, image)
    VALUES
    (1,'Women''s Clothing','http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg'),
    (2,'Mens Clothing','http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg'),
    (3,'Accessories','http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg'),
    (4,'Shoes','http://assets.myntassets.com/v1/images/style/properties/ef9685293a987f515492addd034006bf_images.jpg');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
