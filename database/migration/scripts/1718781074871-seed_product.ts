import { MigrationInterface, QueryRunner } from 'typeorm';
import { createProductQuery } from '../helpers';

export class SeedProduct1718781074871 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(createProductQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
