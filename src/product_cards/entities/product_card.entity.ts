import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_card')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  text: string;
}
