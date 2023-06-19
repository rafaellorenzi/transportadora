import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateRelationBetweenManifestoAndMotorista1687208550664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "manifesto" ADD "motorista_id" uuid`,
          );
          await queryRunner.query(
            `ALTER TABLE "manifesto" ADD CONSTRAINT "motorista_fk" FOREIGN KEY ("motorista_id") REFERENCES "motorista"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "manifesto" DROP CONSTRAINT "motorista_fk"`,
          );
          await queryRunner.query(
            `ALTER TABLE "manifesto" DROP COLUMN "motorista_id"`,
          );
    }

}
