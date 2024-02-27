import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdatecartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
  ) {}

  async create(dto: CreateCartDto) {
    return this.cartRepository.save(dto);
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    return this.cartRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdatecartDto) {
    const toUpdate = await this.cartRepository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Запись с id=${id} не найдена`);
    }
    if (dto.name) {
      toUpdate.name = dto.name;
    }
    return this.cartRepository.save(toUpdate);
  }

  remove(id: number) {
    return this.cartRepository.delete(id);
  }
}
