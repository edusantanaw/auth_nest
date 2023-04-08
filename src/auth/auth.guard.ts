import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context
      .switchToHttp()
      .getRequest<{ headers: { authorization: string } }>();
    const { authorization } = req.headers;
    if (!authorization) throw new HttpException('Unauthorized!', 401);
    const token = this.getToken(authorization);
    if (!token) throw new HttpException('Missing token!', 401);
    return true;
  }

  private getToken(authorization: string): string {
    const [, token] = authorization.split(' ');
    return token;
  }
}
