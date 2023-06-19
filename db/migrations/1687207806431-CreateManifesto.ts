import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateManifesto1687207806431 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`CREATE TABLE "manifesto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data_saida" date NOT NULL, "data_chegada" date NOT NULL, "valor_frete" number NOT NULL, "valor_pedagio" number NOT NULL, CONSTRAINT "PK_8973029e8bb26f72a4738afc832" PRIMARY KEY ("id"))) `);
                        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manifesto"`)
    }

}
