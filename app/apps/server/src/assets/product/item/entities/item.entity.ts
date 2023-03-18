import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TypeEntity } from '../../type/entities/type.entity';
import { SubtypeEntity } from '../../subtype/entities/subtype.entity';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true })
    name: string;

    @Column({default: 0})
    price: number;

    @Column({ nullable: true })
    description?: string;

    @Column({type: 'text', array: true, nullable: true})
    images: string[];

    @ManyToOne(() => TypeEntity, type => type.id)
    type: TypeEntity

    @ManyToOne(() => SubtypeEntity, subtype => subtype.id)
    subtype: SubtypeEntity

    @ManyToOne(() => CategoryEntity, category => category.id, { nullable: true })
    category: CategoryEntity

}