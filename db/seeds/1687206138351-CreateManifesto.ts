import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateManifesto1687206138351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.manifesto(
         "tipoManifesto", "cidadeOrigem", "cidadeDestino", data_saida, data_chegada, "valorFrete", "valorValePedagio")
            VALUES ('viagem', 'criciuma', 'Icara', '2023-06-18', '2023-06-19', '200', '10');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM manifesto WHERE data_saida = '2023-06-18' OR data_chegada = '2023-06-19' OR valor_frete = '200' OR valor_pedagio = '10';`);
    }

}
