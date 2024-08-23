import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../user.entity';

export class UserCreateDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
  'organizationid',
  'role',
  'logo_url',
]) {}
