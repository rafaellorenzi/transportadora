import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateManifesto1687216799991 implements MigrationInterface {
    name = 'CreateManifesto1687216799991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."motorista_cidade_enum" AS ENUM('criciuma', 'Icara', 'Morro da Fumaça')`);
        await queryRunner.query(`CREATE TABLE "motorista" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "data_nascimento" date, "endereco" character varying NOT NULL, "cidade" "public"."motorista_cidade_enum" DEFAULT 'criciuma', "tipo_habilitacao" character varying NOT NULL, "vencimento_habilitacao" date, CONSTRAINT "PK_ab94c3b7ad53a62d54b775a2a2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."manifesto_tipomanifesto_enum" AS ENUM('viagem', 'coleta e entrega')`);
        await queryRunner.query(`CREATE TYPE "public"."manifesto_cidadeorigem_enum" AS ENUM('criciuma', 'Icara', 'Morro da Fumaça')`);
        await queryRunner.query(`CREATE TYPE "public"."manifesto_cidadedestino_enum" AS ENUM('criciuma', 'Icara', 'Morro da Fumaça')`);
        await queryRunner.query(`CREATE TABLE "manifesto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipoManifesto" "public"."manifesto_tipomanifesto_enum" DEFAULT 'viagem', "cidadeOrigem" "public"."manifesto_cidadeorigem_enum" DEFAULT 'criciuma', "cidadeDestino" "public"."manifesto_cidadedestino_enum" DEFAULT 'Icara', "data_saida" date, "data_chegada" date, "valorFrete" character varying NOT NULL, "valorValePedagio" integer NOT NULL, "motorista_id" uuid, CONSTRAINT "PK_9dc419006a6365682402d78bcac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manifesto" ADD CONSTRAINT "motorista_fk" FOREIGN KEY ("motorista_id") REFERENCES "motorista"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manifesto" DROP CONSTRAINT "motorista_fk"`);
        await queryRunner.query(`DROP TABLE "manifesto"`);
        await queryRunner.query(`DROP TYPE "public"."manifesto_cidadedestino_enum"`);
        await queryRunner.query(`DROP TYPE "public"."manifesto_cidadeorigem_enum"`);
        await queryRunner.query(`DROP TYPE "public"."manifesto_tipomanifesto_enum"`);
        await queryRunner.query(`DROP TABLE "motorista"`);
        await queryRunner.query(`DROP TYPE "public"."motorista_cidade_enum"`);
    }

}
