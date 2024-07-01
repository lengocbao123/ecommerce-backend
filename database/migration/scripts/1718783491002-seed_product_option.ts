import { MigrationInterface, QueryRunner } from 'typeorm';
import { createProductOptionQuery } from '../helpers';

export class SeedProductOption1718783491002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(createProductOptionQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "product_option"`);
  }
}
