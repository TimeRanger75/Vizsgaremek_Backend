import { IsDate, IsDefined, IsNumber, Max, Min } from 'class-validator';

export class CreateRecordDto {
  @IsDefined()
  @Min(30)
  @Max(255)
  @IsNumber()
  bodyWeight: number;

  @IsDefined()
  @Min(5)
  @Max(60)
  @IsNumber()
  workoutTime: number;

  @IsDefined()
  date: Date;
}
