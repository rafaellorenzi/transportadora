import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { CidadeEnum } from "./cidade-enum";

export class MotoristaDto {

    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsDateString()
    @IsNotEmpty()
    dataNascimento: Date;

    @IsEnum(CidadeEnum)
    @IsNotEmpty()
    cidade: CidadeEnum

    @IsString()
    @IsNotEmpty()
    tipo_habilitacao: string;

    @IsDateString()
    @IsNotEmpty()
    vencimento_habilitacao: Date;
}