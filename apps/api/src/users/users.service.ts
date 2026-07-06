import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const userWithRelations = {
  member: true,
  roles: {
    include: {
      role: true,
    },
  },
} as const;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      include: userWithRelations,
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: userWithRelations,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: userWithRelations,
    });
  }

  async findBySupabaseId(supabaseAuthId: string) {
    return this.prisma.user.findUnique({
      where: { supabaseAuthId },
      include: userWithRelations,
    });
  }

  async createFromSupabase(data: { supabaseAuthId: string; email: string }) {
    return this.prisma.user.create({
      data: {
        supabaseAuthId: data.supabaseAuthId,
        email: data.email,
      },
      include: userWithRelations,
    });
  }

  async updateLastLogin(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        lastLoginAt: new Date(),
      },
      include: userWithRelations,
    });
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
      include: userWithRelations,
    });
  }

  async update(id: string, data: UpdateUserDto) {
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data,
      include: userWithRelations,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }

  async assignRole(userId: string, roleId: string) {
    return this.prisma.userRole.create({
      data: {
        userId,
        roleId,
      },
    });
  }

  async removeRole(userId: string, roleId: string) {
    return this.prisma.userRole.delete({
      where: {
        userId_roleId: {
          userId,
          roleId,
        },
      },
    });
  }

  async getRoles(userId: string) {
    return this.prisma.userRole.findMany({
      where: {
        userId,
      },
      include: {
        role: true,
      },
    });
  }
}
