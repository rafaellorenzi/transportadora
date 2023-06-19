import { Query } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateMotorista1687205352472 implements MigrationInterface {
    name: 'CreateMotorista1687205352472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "motorista" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "tipo_habilitacao" character varying NOT NULL, CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id"))) `);
        
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "motorista"`);
    }

}
