import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDefined, Contains, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @Contains(' ')
  @MinLength(7)
  @ApiProperty({
    description: 'A felhasználó teljes neve, nem lehet üres',
    type: 'string',
  })
  name: string;

  @IsDefined()
  @MinLength(5)
  @ApiProperty({
    description: 'A felhasználó neve, nem lehet üres',
    type: 'string',
  })
  username: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({
    description: 'A felhasználó email címe, nem lehet üres',
    type: 'string',
  })
  email: string;

  @MinLength(8)
  @IsDefined()
  @ApiProperty({
    description: 'A felhasználó jelszava, nem lehet üres',
    type: 'string',
  })
  password: string;
}
