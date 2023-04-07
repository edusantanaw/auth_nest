import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth';
import { SigninDTO } from './dto/signin';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('/login')
  public async login(@Body() data: AuthDTO): Promise<unknown> {
    try {
      const response = await this.authService.auth(data);
      return response;
    } catch (error: unknown) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/signin')
  public async signin(@Body() data: SigninDTO) {
    try {
      const response = await this.authService.create(data);
      return response;
    } catch (error: unknown) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
