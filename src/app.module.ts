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
import { RecordsModule } from './records/records.module';
import { Record } from './records/entities/record.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'easyway',
      entities: [
        /* List of entities here */
        Users, 
        Foods, 
        Form,
        Token,
        Admin,
        Record,
      ],
      synchronize: true,
    }),
    UserModule,
    FoodModule,
    FormModule,
    AuthModule,
    AdminModule,
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
