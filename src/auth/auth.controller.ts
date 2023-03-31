import {
  Body,
  Controller,
  Delete,
  Post,
  UnauthorizedException,
  UseGuards,
  Headers,
} from '@nestjs/common';
import LoginDto from './login.dto';
import { AuthService } from './auth.service';
import { DataSource } from 'typeorm';
import { Users } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private dataSource: DataSource,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    const userRepository = this.dataSource.getRepository(Users);
    const user = await userRepository.findOneBy({
      username: loginData.username,
    });
    if (user === null) {
      throw new UnauthorizedException('Hibás felhasználónév');
    }
    if (!(await bcrypt.compare(loginData.password, user.password))) {
      throw new UnauthorizedException('Hibás email vagy jelszó');
    }
    return {
      token: await this.authService.generateToken(user),
    };
  }

  @UseGuards(AuthGuard('bearer'))
  @Delete('logout')
  async logoutUser(@Headers('authorization') authHeader: string) {
    const token = authHeader.split(' ')[1];
    this.authService.deleteToken(token);
  }
}
