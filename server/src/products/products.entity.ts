import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 99 })
  name: string;

  @Column("text")
  description: string;

  @Column('float')
  price: number;

  @Column("varchar", { length: 3000 })
  image: Date;

  @Column('date')
  creation_date: Date;

  @Column("varchar",{length:50})
  category: string;
}