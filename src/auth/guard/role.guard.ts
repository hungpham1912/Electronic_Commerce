import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, User } from '../../users/users.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('role', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const  user  = context.switchToHttp().getRequest();
    console.log(user)
    
    // const user = {
    //     name: 'Marius',
    //     role: [Role.ADMIN]
    // }



    // return requiredRoles.some((role) => user.role?.includes(role));
  }
}