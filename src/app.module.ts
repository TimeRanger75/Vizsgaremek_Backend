import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { FoodModule } from './food/food.module';
import { Foods } from './food/entities/food.entity';
import { FormModule } from './form/form.module';
import { Form } from './form/entities/form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'user',
      entities: [
        /* List of entities here */
        Users, 
        Foods, 
        Form
      ],
      synchronize: true,
    }),
    UserModule,
    FoodModule,
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
