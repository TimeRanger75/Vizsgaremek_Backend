import { IsDefined, IsNotEmpty, Matches, Max, Min, MinLength } from 'class-validator';

export class CreateFormDto {
  @IsDefined()
  @Min(30)
  @Max(255)
  weight: number;

  @IsDefined()
  @Min(140)
  @Max(210)
  height: number;

  @IsDefined()
  @Min(16)
  @Max(70)
  age: number;

  @IsDefined()
  water_consume: string;

  @IsDefined()
  lifestyle: string;

  @IsDefined()
  gender: string;

  @IsDefined()
  diet_plan: string;

  @IsDefined()
  @Min(40)
  @Max(130)
  weight_goal: number;

  @IsDefined()
  @Matches(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  look: string;
}
