import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  @ApiOperation({
    description: 'Feltölti egy ételt',
  })
  @ApiCreatedResponse({
    description: 'Sikeresen feltöltötte az ételt',
  })
  @ApiBadRequestResponse({
    description: 'Az étel feltöltése sikertelen',
  })
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }

  @Get()
  @ApiOperation({
    description: 'Visszaadja az összes ételt',
  })
  @ApiOkResponse({
    description: 'Sikeresen visszaadta az ételeket',
  })
  findAll() {
    return this.foodService.findAll();
  }

  @Put(':id')
  @ApiOperation({
    description: 'Frissít egy ételt az összes ételt',
  })
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(+id, updateFoodDto);
  }
}
