import { ApiHideProperty } from '@nestjs/swagger';
import { ProductEntity } from '../../product_cards/entities/product_card.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiHideProperty()
  @OneToMany(() => ProductEntity, (product) => product.cart)
  products: ProductEntity[];
}
