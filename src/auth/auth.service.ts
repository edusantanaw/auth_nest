import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth';
import { PrismaService } from 'src/prisma.service';
import { EncrypterService } from 'src/helpers/Encrypter.service';
import { SigninDTO } from './dto/signin';
import { User } from './entities/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encrypterService: EncrypterService,
  ) {}

  public async auth(data: AuthDTO) {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (!userExists) throw new Error('Usuario não encontrado!');
    const isPassValid = await this.encrypterService.compare(
      userExists.password,
      data.password,
    );
    if (!isPassValid) throw new Error('A senha é invalida!');
    return true;
  }

  public async create(data: SigninDTO) {
    const emailAlreadyBeingUsed = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (emailAlreadyBeingUsed) throw new Error('O email já está sendo usado!');
    const user = new User(data);
    const hashedPassword = await this.encrypterService.genHash(data.password);
    user.setPassword(hashedPassword);
    const newUser = await this.prisma.user.create({ data: user.getUser() });
    return newUser;
  }
}
