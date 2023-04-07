import { Controller, Post, Body } from '@nestjs/common';
import { AuthDTO } from './dto/auth';

@Controller()
export class AuthController {
  @Post('/login')
  public async login(@Body() data: AuthDTO): Promise<string> {
    console.log(data);
    return 'ola';
  }
}
