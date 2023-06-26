import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { MotoristaEntity } from "./motorista-entity";
import { Repository } from "typeorm";
import { BadRequestException, NotFoundException } from "@nestjs/common";
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

    validate(dto: MotoristaDto) {
        if (new Date().getTime() > new Date(dto.dataNascimento).getTime()) {
          throw new BadRequestException('A data de nascimento não pode ser maior que a data atual!');
        }
        if (dto.nome.length <= 1) {
          throw new BadRequestException('O nome do motorista tem menos de 1 caracter');
        }
        if (dto.nome = '') {
            throw new BadRequestException('O nome do motorista deve ser informado');
          }
      }

}