import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesService } from './roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private rolesService: RolesService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // Возвращаем true, если для маршрута не заданы требуемые роли
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Проверяем, что user определен и содержит роли
    if (!user || !user.roles) {
      return false; // Если пользователь или его роли не определены, возвращаем false
    }

    // Преобразуем roles из строки JSON в массив строк
    const userRoles = JSON.parse(user.roles);

    // Проверяем роль пользователя через RolesService
    const hasRequiredRole = await this.rolesService.checkUserRole(
      userRoles,
      requiredRoles,
    );

    return hasRequiredRole;
  }
}
