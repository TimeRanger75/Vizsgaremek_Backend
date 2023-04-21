import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, Min } from 'class-validator';

export class CreateFoodDto {
  @IsDefined()
  @ApiProperty({
    description: 'Az étel neve',
    type: 'string',
    default: 'Példa étel',
  })
  name: string;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description: 'Az étel kalória száma',
    type: 'number',
    default: '12.3',
  })
  calorie: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description: 'Az étel protein tartalma',
    type: 'number',
    default: '24.6',
  })
  protein: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description: 'Az étel szénhidrát tartalma',
    type: 'number',
    default: '33.3',
  })
  carbohydrate: number;

  @IsDefined()
  @Min(0)
  @ApiProperty({
    description: 'Az étel zsírtartalma',
    type: 'number',
    default: '20',
  })
  fat: number;
}
