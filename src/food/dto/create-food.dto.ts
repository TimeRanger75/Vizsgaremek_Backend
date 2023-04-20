import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, Min } from 'class-validator';

export class CreateFoodDto {
  @IsDefined()
  @ApiProperty({
    description:'Az étel neve',
    type: 'string'
  })
  name: string;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description:'Az étel kalória száma',
    type: 'number'
  })
  calorie: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description:'Az étel protein tartalma',
    type: 'number'
  })
  protein: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description:'Az étel szénhidrát tartalma',
    type: 'number'
  })
  carbohydrate: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description:'Az étel zsírtartalma',
    type: 'number'
  })
  fat: number;
}
