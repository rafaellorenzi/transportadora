import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ManifestoModule } from './manifesto/manifesto-module';
import { MotoristaModule } from './motorista/motorista-module';


@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ManifestoModule,
    MotoristaModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}