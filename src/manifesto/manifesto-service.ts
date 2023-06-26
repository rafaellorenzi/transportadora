import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { ManifestoEntity } from "./manifesto-entity";
import { Repository } from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { ManifestoDto } from "./manifesto-dto";
import { MotoristaDto } from "src/motorista/motorista-dto";

@Injectable ()
export class ManifestoService {
    constructor(
        @InjectRepository(ManifestoEntity)
        private readonly manifestoRepository: Repository<ManifestoEntity>,
        ){}

    findAll(): Promise<ManifestoEntity[]>{
        return this.manifestoRepository.find();
    } 

    async findById(id: string): Promise<ManifestoEntity> {
        const findOne = await this.manifestoRepository.findOne({where: {id}});
        if (findOne == null) {
            throw new NotFoundException('Manifesto Não encontrado ${id}');
        }
        return findOne;
    }

    async remove (id: string){
        const findById = await this.findById(id);
        await this.manifestoRepository.remove(findById);
        return { ...findById, id};
    }

    async create (dto: ManifestoDto) {
        const newManifesto = this.manifestoRepository.create(dto)
        return this.manifestoRepository.save(newManifesto);
    }

    async update ({id, ...dto}: ManifestoDto){
        await this.findById(id);
        return this.manifestoRepository.save({ id, ...dto});
    }

    validate(dto: ManifestoDto) {
        if (dto.valorFrete = '') {
          throw new BadRequestException('O valor do frete deve ser informado!');
        }
        if (new Date().getTime() < new Date(dto.dataChegada).getTime()) {
            throw new BadRequestException('A data de chegada do Manifesto não pode ser menor que a data atual!');
          }
          if (new Date(dto.dataChegada).getTime() < new Date(dto.dataSaida).getTime()) {
            throw new BadRequestException('A data de chegada do Manifesto não pode ser menor que a data de saída!');
          }  
    }
}
