import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { tipoManifestoEnum } from "./tipoManifesto-enum";
import { MotoristaEntity } from "src/motorista/motorista-entity";
import { CidadeEnum } from "src/motorista/cidade-enum";

@Entity({name: 'manifesto'})
export class ManifestoEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({

        type: 'enum',
        enum: tipoManifestoEnum,
        default: tipoManifestoEnum.viagem,
        nullable: true,
    })
    tipoManifesto: tipoManifestoEnum

    @Column({

      type: 'enum',
      enum: CidadeEnum,
      default: CidadeEnum.Criciuma,
      nullable: true,
  })
  cidadeOrigem: CidadeEnum

  @Column({

    type: 'enum',
    enum: CidadeEnum,
    default: CidadeEnum.Icara,
    nullable: true,
})
  cidadeDestino: CidadeEnum

    @Column({type: 'date', name: 'data_saida', nullable: true})
    dataSaida: Date;

    @Column({type: 'date', name: 'data_chegada', nullable: true})
    dataChegada: Date;

    @ManyToOne(
        () => MotoristaEntity,
        (motorista) => motorista.manifesto,
        { eager: true },
      )
      @JoinColumn({
        name: 'motorista_id',
        foreignKeyConstraintName: 'motorista_fk',
        referencedColumnName: 'id',
      })
      motorista: MotoristaEntity;

      @Column({type: 'number', name: 'valor_frete', nullable: true})
      valorFrete: Number;

     @Column({type: 'number', name: 'valor_valePedagio', nullable: true})
      valorValePedagio: Number;
   
}