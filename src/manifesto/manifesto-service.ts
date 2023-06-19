import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { ManifestoEntity } from "./manifesto-entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { ManifestoDto } from "./manifesto-dto";

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

}
