import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.role.findMany({
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    return role;
  }

  async create(data: CreateRoleDto) {
    return this.prisma.role.create({
      data,
    });
  }

  async update(id: string, data: UpdateRoleDto) {
    await this.findOne(id);

    return this.prisma.role.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.role.delete({
      where: { id },
    });
  }

  async assignPermission(roleId: string, permissionId: string) {
    return this.prisma.rolePermission.create({
      data: {
        roleId,
        permissionId,
      },
    });
  }

  async removePermission(roleId: string, permissionId: string) {
    return this.prisma.rolePermission.delete({
      where: {
        roleId_permissionId: {
          roleId,
          permissionId,
        },
      },
    });
  }

  async getPermissions(roleId: string) {
    return this.prisma.rolePermission.findMany({
      where: {
        roleId,
      },
      include: {
        permission: true,
      },
    });
  }
}
