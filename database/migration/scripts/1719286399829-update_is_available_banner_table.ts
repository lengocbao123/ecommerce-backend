import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateIsAvailableBannerTable1719286399829
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE banner ALTER COLUMN is_available TYPE boolean USING is_available::boolean
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE banner ALTER COLUMN is_available TYPE varchar
        `);
  }
}
