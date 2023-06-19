import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ManifestoService } from "./manifesto-service";
import { ManifestoEntity } from "./manifesto-entity";
import { ManifestoDto } from "./manifesto-dto";

@Controller('manifesto')
export class ManifestoController {
    constructor(private manifestoService: ManifestoService){}

    @Get()
    findAll(): Promise<ManifestoEntity[]>{
        return this.manifestoService.findAll();
    }

    @Get('id')
    findById(@Param('id') id: string){
        return this.manifestoService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return await this.manifestoService.remove(id);
    }

    @Post()
    create(@Body() dto: ManifestoDto){
        return this.manifestoService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ManifestoDto){
        return this.manifestoService.update({ ...dto, id});

    }

}
