import { MigrationInterface, QueryRunner } from 'typeorm';
import { createOptionQuery } from '../helpers';

export class SeedOption1718782070136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(createOptionQuery());
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "option"`);
  }
}
