import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class CreateAdminDto {
  @IsDefined()
  @ApiProperty({
    description: 'Admin felhasználóneve',
  })
  username: string;

  @IsDefined()
  @ApiProperty({
    description: 'Admin jelszava',
  })
  password: string;
}
