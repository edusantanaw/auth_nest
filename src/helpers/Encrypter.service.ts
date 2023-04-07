import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncrypterService {
  private rounds = 10;
  public async genHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.rounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public async compare(hash: string, password: string): Promise<boolean> {
    const isEqual = await bcrypt.compare(password, hash);
    return isEqual;
  }
}
