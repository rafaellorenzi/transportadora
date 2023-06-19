import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ManifestoEntity } from "./manifesto-entity";
import { ManifestoController } from "./manifesto-controller";
import { ManifestoService } from "./manifesto-service";


@Module({
    imports: [TypeOrmModule.forFeature([ManifestoEntity])],
    controllers: [ManifestoController],
    providers: [ManifestoService],
})

export class ManifestoModule {}