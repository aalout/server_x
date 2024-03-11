import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products: string; // Изменили тип на string

  @Column()
  deliveryAddress: string;

  @Column()
  orderTime: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;
}
