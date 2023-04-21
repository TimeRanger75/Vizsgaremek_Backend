import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    description: 'Létrehoz egy felhasználót',
  })
  @ApiCreatedResponse({
    description: 'Sikeresen létrehozta a felhasználót',
  })
  @ApiBadRequestResponse({
    description: 'A felhasználó nem jött létre',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    description: 'Visszaadja az összes felhasználót',
  })
  @ApiOkResponse({
    description: 'Vissza adja a felhasználókat',
  })
  findAll() {
    return this.userService.findAll();
  }
}
