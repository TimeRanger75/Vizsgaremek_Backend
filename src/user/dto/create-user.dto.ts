import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, Contains, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @Contains(' ')
  @MinLength(7)
  @ApiProperty({
    description:
      'A felhasználó teljes neve, nem lehet üres, minimális hossz 7 karakter. Tartamlaznia kell egy szóközt',
    type: 'string',
    default: 'Pelda Bela',
  })
  name: string;

  @IsDefined()
  @MinLength(5)
  @ApiProperty({
    description:
      'A felhasználó neve, nem lehet üres. Minimális hossz 5 karakter',
    type: 'string',
    default: 'PeldaBela',
  })
  username: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({
    description: 'A felhasználó email címe, nem lehet üres',
    type: 'string',
    default: 'pelda.bela@gmail.com',
  })
  email: string;

  @MinLength(8)
  @IsDefined()
  @ApiProperty({
    description:
      'A felhasználó jelszava, nem lehet üres. Minimális hossz 8 karakter',
    type: 'string',
    default: 'PeldaBela123',
  })
  password: string;
}
