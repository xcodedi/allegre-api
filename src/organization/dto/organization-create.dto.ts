import { OrganizationEntity } from '../organization.entity';
import { PickType } from '@nestjs/swagger';

export class OrganizationCreateDto extends PickType(OrganizationEntity, [
  'name',
  'cnpj',
  'logo_url',
  'phone',
]) {}
