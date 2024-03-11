import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({ type: OrderEntity })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created',
  })
  async createOrder(
    @Body('deliveryAddress') deliveryAddress: string,
  ): Promise<OrderEntity> {
    const order = await this.orderService.createOrder(deliveryAddress);
    return order;
  }
}
