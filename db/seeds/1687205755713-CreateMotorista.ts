import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateMotorista1687205755713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.motorista(
            nome, data_nascimento, endereco, cidade, tipo_habilitacao, vencimento_habilitacao)
            VALUES ('Rafael Geremias', '1998-11-19', 'Rua Esucri', 'criciuma', 'AE', '2030-01-01');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM motorista WHERE nome = 'Rafael Geremias' OR data_nascimento = '1998-11-190 OR endereco = 'Rua Esucri' OR cidade = 'criciuma' OR tipo_habilitacao = 'AE' OR vencimento_habilitacao = '2030-01-01';`);
    }

}
