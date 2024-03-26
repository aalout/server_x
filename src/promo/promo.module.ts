import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { PromoService } from './promo.service';
import { PromoController } from './promo.controller';
import { PromoEntity } from './entities/promo.entity';
import { RolesGuard } from 'src/guards/roles.guard';
import { RolesService } from 'src/guards/roles.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([PromoEntity])],
  controllers: [PromoController],
  providers: [PromoService, RolesGuard, RolesService],
})
export class PromoModule {}
