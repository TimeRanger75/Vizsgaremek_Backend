import { IsDefined } from 'class-validator';

export class CreateFoodDto {
  @IsDefined()
  name: string;

  @IsDefined()
  calorie: number;

  @IsDefined()
  protein: number;

  @IsDefined()
  carbohydrate: number;

  @IsDefined()
  fat: number;
}
