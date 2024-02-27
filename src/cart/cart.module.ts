import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([CartEntity])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
