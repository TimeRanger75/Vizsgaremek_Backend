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
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import Token from './auth/token.entity';
import { Admin } from './admin/entities/admin.entity';

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
        Form,
        Token,
        Admin,
      ],
      synchronize: true,
    }),
    UserModule,
    FoodModule,
    FormModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
