import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { organization } from '@prisma/client';
import { OrganizationCreateDto } from './dto/organization-create.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(data: OrganizationCreateDto): Promise<organization> {
    return this.prisma.organization.create({
      data,
    });
  }

  async findAll(): Promise<organization[]> {
    return this.prisma.organization.findMany();
  }
}
