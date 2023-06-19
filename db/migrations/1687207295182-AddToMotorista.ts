import { MigrationInterface, QueryRunner } from "typeorm"

export class AddToMotorista1687207295182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "motorista" ADD "data_nascimento" date, "vencimento_habilitacao" date`);
        await queryRunner.query(`CREATE TYPE "public"."motorista_cidade_enum" AS ENUM('criciuma', 'icara', 'morro da fumaca')`,);
          await queryRunner.query(`ALTER TABLE "motorista" ADD "cidade" "public"."motorista_cidade_enum" DEFAULT 'criciuma'`,);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "motorista" DROP COLUMN "cidade"`);
        await queryRunner.query(`DROP TYPE "public"."motorista_cidade_enum"`);
        await queryRunner.query(`ALTER TABLE "motorista" DROP COLUMN "data_nascimento"`,);
        await queryRunner.query(`ALTER TABLE "motorista" DROP COLUMN "vencimento_habilitacao"`,);

    }

}
