import { MigrationInterface, QueryRunner } from 'typeorm';
import { createVariantValueQuery } from '../helpers';

export class SeedVariantValue1718791853846 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(createVariantValueQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "variant_value"`);
  }
}
