import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, User } from '../../users/users.entity';
import { ROLES_KEY } from "../../role/role.decorator";
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // const user = {
    //   role: 'admin'
    // }

    console.log(
      '🚀 ~ file: role.guard.ts ~ line 21 ~ RolesGuard ~ canActivate ~ user',
      user,
    );

    return requiredRoles.some((role) => user?.role === role);
  }
}