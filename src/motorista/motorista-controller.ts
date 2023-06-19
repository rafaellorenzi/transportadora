import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MotoristaService } from "./motorista-service";
import { MotoristaEntity } from "./motorista-entity";
import { MotoristaDto } from "./motorista-dto";

@Controller('motorista')
export class MotoristaController {
    constructor(private motoristaService: MotoristaService){}

    @Get()
    findAll(): Promise<MotoristaEntity[]>{
        return this.motoristaService.findAll();
    }

    @Get('id')
    findById(@Param('id') id: string){
        return this.motoristaService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return await this.motoristaService.remove(id);
    }

    @Post()
    create(@Body() dto: MotoristaDto){
        return this.motoristaService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: MotoristaDto){
        return this.motoristaService.update({ ...dto, id});

    }

}