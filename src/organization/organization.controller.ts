import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { organization as OrganizationModel, Prisma } from '@prisma/client';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get('/')
  async listAll(): Promise<OrganizationModel[]> {
    return this.organizationService.findAll();
  }

  @Post('/')
  async create(
    @Body()
    data: {
      name: string;
      logoUrl?: string;
      cnpj: string;
      phone?: string;
    },
  ): Promise<OrganizationModel> {
    return this.organizationService.create(
      data as Prisma.organizationCreateInput,
    );
  }
}
