import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subtype')
export class SubtypeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}