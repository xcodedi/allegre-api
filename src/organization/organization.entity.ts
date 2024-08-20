import { organization as OrganizationModel } from '@prisma/client';

export class OrganizationEntity implements OrganizationModel {
  id: string;
  name: string;
  logo_url: string;
  cnpj: string;
  phone: string;
}
