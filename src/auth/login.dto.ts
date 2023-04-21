import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class LoginDto {
  @IsString()
  @ApiProperty({
    description: 'Meglévő felhasználó név',
    type: 'string',
    default: 'PeldaBela'
  })
  username: string;
  @IsString()
  @ApiProperty({
    description: 'Meglévő jelszó',
    type: 'string',
    default: 'PeldaBela123'
  })
  password: string;
}
