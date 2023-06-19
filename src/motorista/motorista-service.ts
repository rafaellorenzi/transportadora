import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { MotoristaEntity } from "./motorista-entity";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { MotoristaDto } from "./motorista-dto";

@Injectable ()
export class MotoristaService {
    constructor(
        @InjectRepository(MotoristaEntity)
        private readonly motoristaRepository: Repository<MotoristaEntity>,
        ){}

    findAll(): Promise<MotoristaEntity[]>{
        return this.motoristaRepository.find();
    }    
    
    async findById(id: string): Promise<MotoristaEntity> {
        const findOne = await this.motoristaRepository.findOne({where: {id}});
        if (findOne == null) {
            throw new NotFoundException('Motorista Não encontrado ${id}');
        }
        return findOne;
    }

    async remove (id: string){
        const findById = await this.findById(id);
        await this.motoristaRepository.remove(findById);
        return { ...findById, id};
    }

    async create (dto: MotoristaDto) {
        const newMotorista = this.motoristaRepository.create(dto)
        return this.motoristaRepository.save(newMotorista);
    }

    async update ({id, ...dto}: MotoristaDto){
        await this.findById(id);
        return this.motoristaRepository.save({ id, ...dto});
    }

}