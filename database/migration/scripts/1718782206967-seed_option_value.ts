import { MigrationInterface, QueryRunner } from 'typeorm';
import { createOptionValueQuery } from '../helpers';

export class SeedOptionValue1718782206967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(createOptionValueQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "option_value"`);
  }
}
