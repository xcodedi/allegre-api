import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { organization as OrganizationModel, Prisma } from '@prisma/client';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.organizationCreateInput,
  ): Promise<OrganizationModel> {
    return this.prisma.organization.create({
      data,
    });
  }

  async findAll(): Promise<OrganizationModel[]> {
    return this.prisma.organization.findMany();
  }
}
