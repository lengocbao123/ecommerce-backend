import { join } from 'path';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { TypeormNamingStrategy } from '../../src/utils/typeorm-naming-strategy';

dotenv.config({ path: join(__dirname, `../../.env`) });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(`${process.env.DB_PORT}`, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrationsRun: true,
  logging: true,
  migrationsTableName: '__migration',
  migrations: [join(__dirname, 'scripts/*.ts')],
  entities: [join(__dirname, '../entity/**.entity{.ts,.js}')],
  namingStrategy: new TypeormNamingStrategy(),
  ssl: true,
});
