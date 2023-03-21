import { Injectable } from '@nestjs/common';
import { Users } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import Token from './token.entity';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(private datasource: DataSource) {}

  async findUser(token: string) {
    const tokenRepo = this.datasource.getRepository(Token);
    const tokenOBJ = await tokenRepo.findOne({
      where: { token },
      relations: { user: true },
    });
    if (tokenOBJ === null) {
      return null;
    }
    return tokenOBJ.user;
  }

  async generateToken(user: Users) {
    const random = crypto.randomBytes(32);
    const tokenString = random.toString('hex');
    const token = new Token();
    token.user = user;
    token.token = tokenString;
    await this.datasource.getRepository(Token).insert(token);
    return tokenString;
  }

  async deleteToken(token){
    const tokenRepo=this.datasource.getRepository(Token);
    const tokenOBJ= await tokenRepo.findOne({
      where: {token},
    relations:{user:true}});
    await tokenRepo.delete(tokenOBJ);
  }
}
