import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({
    description:
      'Létrehoz egy admint. Csak a fejlesztő tudja elérni parancssal',
  })
  @ApiCreatedResponse({
    description: 'Sikeresen létrehozta az admint',
  })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  @ApiOperation({
    description:
      'Visszaadja az adminokat az asztali alkamazásnak a bejelentkezéshez',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszaadta az adminokat',
  })
  findAll() {
    return this.adminService.findAll();
  }
}
