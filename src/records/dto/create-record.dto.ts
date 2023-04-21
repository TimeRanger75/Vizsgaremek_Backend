import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, Max, Min } from 'class-validator';

export class CreateRecordDto {
  @IsDefined()
  @Min(30)
  @Max(255)
  @IsNumber()
  @ApiProperty({
    description: 'Testsúly, nem lehet magasabb mint 255 és alacsonyabb mint 30',
    type: 'number',
    default: '70',
  })
  bodyWeight: number;

  @IsDefined()
  @Min(5)
  @Max(60)
  @IsNumber()
  @ApiProperty({
    description:
      'Edzés ideje, nem lehet magasabb mint 60 és alacsonyabb mint 5',
    type: 'number',
    default: '30',
  })
  workoutTime: number;

  @IsDefined()
  @ApiProperty({
    description: 'Az edzés időpontja',
    type: 'Date',
    default: '2023-04-05',
  })
  date: Date;
}
