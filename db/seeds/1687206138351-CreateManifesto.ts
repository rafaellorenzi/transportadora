import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateManifesto1687206138351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO manifesto (data_saida, data_chegada, valor_frete, valor_pedagio), VALUES ('18-06-2023', '19-06-2023', '200', '10');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM manifesto WHERE data_saida = '18-06-2023';`);
        await queryRunner.query(`DELETE FROM manifesto WHERE data_chegada = '19-06-2023';`);
        await queryRunner.query(`DELETE FROM manifesto WHERE valor_frete = '200';`);
        await queryRunner.query(`DELETE FROM manifesto WHERE valor_pedagio = '10';`);
    }

}
