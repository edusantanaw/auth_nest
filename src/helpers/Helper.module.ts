import { Module } from '@nestjs/common';
import { EncrypterService } from './Encrypter.service';

@Module({
  providers: [EncrypterService],
  exports: [EncrypterService],
})
export class HelperModule {}
