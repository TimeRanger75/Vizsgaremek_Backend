import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Foods } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(private dataSource: DataSource) {}

  async create(createFoodDto: CreateFoodDto) {
    const food = Object.assign(new Foods(), createFoodDto);
    this.dataSource.getRepository(Foods).save(food);
  }

  async findAll() {
    return await this.dataSource.getRepository(Foods).find();
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const food = Object.assign(new Foods(), updateFoodDto);
    this.dataSource.getRepository(Foods).update(
      { id: id },
      {
        name: food.name,
        calorie: food.calorie,
        carbohydrate: food.carbohydrate,
        fat: food.fat,
        protein: food.protein,
      },
    );
  }

}
