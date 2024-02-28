import { ApiHideProperty } from '@nestjs/swagger';
import { ProductEntity } from '../../product_cards/entities/product_card.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiHideProperty()
  @OneToMany(() => ProductEntity, (product) => product.cart)
  products: ProductEntity[];

  @Column()
  productId: number;

  @Column()
  quantity: number;
}
