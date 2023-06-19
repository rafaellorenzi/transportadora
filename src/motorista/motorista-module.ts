import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { MotoristaEntity } from "./motorista-entity";
import { MotoristaController } from "./motorista-controller";
import { MotoristaService } from "./motorista-service";

@Module ({

    imports: [TypeOrmModule.forFeature([MotoristaEntity])],
    controllers: [MotoristaController],
    providers: [MotoristaService],
})

export class MotoristaModule {}