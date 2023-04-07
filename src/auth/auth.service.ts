import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  public async auth(data: AuthDTO) {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (!userExists) throw new Error('Usuario não encontrado!');
    return 'ola';
  }
}
