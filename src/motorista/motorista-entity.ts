import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CidadeEnum } from "./cidade-enum";
import { ManifestoEntity } from "src/manifesto/manifesto-entity";

@Entity({ name: 'motorista'})
export class MotoristaEntity {

    @PrimaryGeneratedColumn ('uuid')
    id: string

    @Column()
    nome: string

    @Column({type: 'date', name: 'data_nascimento', nullable: true})
    dataNascimento: Date;

    @Column()
    endereco: string

    @Column({

        type: 'enum',
        enum: CidadeEnum,
        default: CidadeEnum.Criciuma,
        nullable: true,
    })
    cidade: CidadeEnum;

    @Column()
    tipo_habilitacao: string

    @Column({type: 'date', name: 'vencimento_habilitacao', nullable: true})
    vencimento_Habilitacao: Date;

    @OneToMany(() => ManifestoEntity, (manifesto) => manifesto.motorista)
    manifesto: ManifestoEntity[];
  }
