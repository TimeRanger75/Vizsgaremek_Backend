import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, Matches, Max, Min } from 'class-validator';

export class CreateFormDto {
  @IsDefined()
  @Min(30)
  @Max(255)
  @ApiProperty({
    description:
      'Testsúly, nem lehet magasabb mint 255 és alacsonyabb mint 30. Kötelező megadni',
    type: 'number',
    default: '70',
  })
  weight: number;

  @IsDefined()
  @Min(140)
  @Max(210)
  @ApiProperty({
    description:
      'Magasság, nem lehet magasabb mint 210 és alacsonyabb mint 140. Kötelező megadni',
    type: 'number',
    default: '180',
  })
  height: number;

  @IsDefined()
  @Min(16)
  @Max(70)
  @ApiProperty({
    description: 'Kor, nem lehet magasabb mint 70 és alacsonyabb mint 16',
    type: 'number',
    default: '22',
  })
  age: number;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  @ApiProperty({
    description: 'Átlag vízfogyasztás.',
    type: 'string',
    default: 'Onetwo',
  })
  water_consume: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  @ApiProperty({
    description: 'Életvitel',
    type: 'string',
    default: 'normalActivity',
  })
  lifestyle: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  @ApiProperty({
    description: 'Nem.',
    type: 'string',
    default: 'Male',
  })
  gender: string;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  @ApiProperty({
    description: 'Edzés terv',
    type: 'string',
    default: 'weightGain',
  })
  diet_plan: string;

  @IsDefined()
  @Min(40)
  @Max(130)
  @ApiProperty({
    description:
      'Elérni kívánt súly. Nem lehet magasabb mint 130, alacsonyabb mint 40',
    type: 'number',
    default: '80',
  })
  weight_goal: number;

  @IsDefined()
  @Matches(/^[A-Za-z]+$/)
  @ApiProperty({
    description: 'Testalkat',
    type: 'string',
    default: 'ectomorph',
  })
  look: string;
}
