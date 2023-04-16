import { IsDefined, Matches, Max, Min } from 'class-validator';

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
  @Matches(/^[A-Za-z]+$/)
  water_consume: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  lifestyle: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  gender: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  diet_plan: string;

  @IsDefined()
  @Min(40)
  @Max(130)
  weight_goal: number;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  look: string;
}
