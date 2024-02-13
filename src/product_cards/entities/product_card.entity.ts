import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

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

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;

  @Column()
  price: number;
}
