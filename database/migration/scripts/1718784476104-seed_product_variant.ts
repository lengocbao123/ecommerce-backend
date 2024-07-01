import { MigrationInterface, QueryRunner } from 'typeorm';
import { createProductVariantQuery } from '../helpers';

export class SeedProductVariant1718784476104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(createProductVariantQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "product_variant"`);
  }
}
