import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateMotorista1687205755713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO motorista (nome, tipo_habilitacao), VALUES ('Rafael Geremias', 'AE');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM motorista WHERE nome = 'Rafael Geremias';`);
    }

}
