import { IsDateString, IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { tipoManifestoEnum } from "./tipoManifesto-enum";
import { Type } from "class-transformer";
import { CidadeEnum } from "src/motorista/cidade-enum";
import { MotoristaDto } from "src/motorista/motorista-dto";

export class ManifestoDto {

    @IsUUID()
    @IsOptional()
    id: string;

    @IsEnum(tipoManifestoEnum)
    @IsNotEmpty()
    tipoManifesto: tipoManifestoEnum

    @IsEnum(CidadeEnum)
    @IsNotEmpty()
    cidadeOrigem: CidadeEnum

    @IsEnum(CidadeEnum)
    @IsNotEmpty()
    cidadeDestino: CidadeEnum

    @IsDateString()
    @IsNotEmpty()
    dataSaida: Date;

    @IsDateString()
    @IsNotEmpty()
    dataChegada: Date;

    @IsNotEmpty()
    @Type(() => MotoristaDto)
    @ValidateNested()
    motorista?: MotoristaDto;

    @IsNumberString()
    @IsNotEmpty()
    valorFrete: number;

    @IsNumberString()
    @IsNotEmpty()
    valorValePedagio: number;
    
}