import { MigrationInterface, QueryRunner } from "typeorm"

export class AddToManifesto1687212830012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."manifesto_tipoManifesto_enum" AS ENUM('viagem', 'coleta e entrega')`,);
        await queryRunner.query(`ALTER TABLE "manifesto" ADD "tipoManifesto" "public"."manifesto_tipoManifesto_enum" DEFAULT 'viagem'`,);
        await queryRunner.query(`CREATE TYPE "public"."manifesto_cidade_origem_enum" AS ENUM('criciuma', 'icara', 'morro da fumaca')`,);
        await queryRunner.query(`ALTER TABLE "manifesto" ADD "cidade" "public"."manifesto_cidade_origem_enum" DEFAULT 'criciuma'`,);
        await queryRunner.query(`CREATE TYPE "public"."manifesto_cidade_destino_enum" AS ENUM('criciuma', 'icara', 'morro da fumaca')`,);
        await queryRunner.query(`ALTER TABLE "manifesto" ADD "cidade" "public"."manifesto_cidade_destino_enum" DEFAULT 'criciuma'`,);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TYPE "public"."manifesto_tipoManifesto_enum"`);
        await queryRunner.query(`DROP TYPE "public"."manifesto_cidade_origem_enum"`);
        await queryRunner.query(`DROP TYPE "public"."manifesto_cidade_destino_enum"`);
    }
}
