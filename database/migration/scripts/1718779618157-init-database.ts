import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDatabase1718874997564 implements MigrationInterface {
  name = 'InitDatabase1718874997564';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `CREATE TABLE "product" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "price" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `CREATE TABLE "product_variant" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "product_id" integer NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `CREATE TABLE "option_value" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, "option_id" integer NOT NULL, CONSTRAINT "PK_c7313aaad3e41027533fb46a5bd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "option" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e6090c1c6ad8962eea97abdbe63" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "variant_value" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "product_id" integer NOT NULL, "variant_id" integer NOT NULL, "option_id" integer NOT NULL, "value_id" integer NOT NULL, CONSTRAINT "PK_f1333affd6de5114f7a5d102ae6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_option" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "product_id" integer NOT NULL, "option_id" integer NOT NULL, CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "banner" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "image" character varying NOT NULL, "title" character varying NOT NULL, "sub_title" character varying NOT NULL, "description" character varying NOT NULL, "url" character varying NOT NULL, "is_available" character varying NOT NULL, CONSTRAINT "PK_6d9e2570b3d85ba37b681cd4256" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_variant" ADD CONSTRAINT "FK_ca67dd080aac5ecf99609960cd2" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "option_value" ADD CONSTRAINT "FK_fd5bfb13a905b965a5103b65163" FOREIGN KEY ("option_id") REFERENCES "option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" ADD CONSTRAINT "FK_8e49b6b1586298ac297f2973f5e" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" ADD CONSTRAINT "FK_500828943acd1e7fae73608cb2d" FOREIGN KEY ("option_id") REFERENCES "option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" ADD CONSTRAINT "FK_77ee9c866d254e4a3a13a486430" FOREIGN KEY ("value_id") REFERENCES "option_value"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" ADD CONSTRAINT "FK_21add0d6f08b9d31b06d5c6b84c" FOREIGN KEY ("variant_id") REFERENCES "product_variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option" ADD CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option" ADD CONSTRAINT "FK_9f53e0e9868b4d64b048bff8701" FOREIGN KEY ("option_id") REFERENCES "option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_option" DROP CONSTRAINT "FK_9f53e0e9868b4d64b048bff8701"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_option" DROP CONSTRAINT "FK_e634fca34f6b594b87fdbee95f6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" DROP CONSTRAINT "FK_21add0d6f08b9d31b06d5c6b84c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" DROP CONSTRAINT "FK_77ee9c866d254e4a3a13a486430"`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" DROP CONSTRAINT "FK_500828943acd1e7fae73608cb2d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "variant_value" DROP CONSTRAINT "FK_8e49b6b1586298ac297f2973f5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "option_value" DROP CONSTRAINT "FK_fd5bfb13a905b965a5103b65163"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_variant" DROP CONSTRAINT "FK_ca67dd080aac5ecf99609960cd2"`,
    );
    await queryRunner.query(`DROP TABLE "banner"`);
    await queryRunner.query(`DROP TABLE "product_option"`);
    await queryRunner.query(`DROP TABLE "variant_value"`);
    await queryRunner.query(`DROP TABLE "option"`);
    await queryRunner.query(`DROP TABLE "option_value"`);
    await queryRunner.query(`DROP TABLE "product_variant"`);
    await queryRunner.query(`DROP TABLE "product"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
