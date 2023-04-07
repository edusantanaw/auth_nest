import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { HelperModule } from 'src/helpers/Helper.module';

@Module({
  imports: [HelperModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, HelperModule],
})
export class AuthModule {}
