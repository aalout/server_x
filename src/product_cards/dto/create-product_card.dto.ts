import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @IsString()
  product_name: string = 'Название продукта';

  @IsString()
  product_text: string = 'Описание продукта';
}
