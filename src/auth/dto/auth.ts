import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  public password: string;
}
