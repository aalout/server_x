import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  productId: number;
}
