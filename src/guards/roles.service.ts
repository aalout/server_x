import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  async checkUserRole(
    userRoles: string[],
    requiredRoles: string[],
  ): Promise<boolean> {
    const hasRequiredRole = requiredRoles.every((role) =>
      userRoles.includes(role),
    );
    return hasRequiredRole;
  }
}
