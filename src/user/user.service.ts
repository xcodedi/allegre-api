import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserCreateDto } from './dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(
    email: string,
    organizationid: string,
  ): Promise<UserEntity> {
    return this.prisma.users.findFirst({
      where: {
        email,
        organizationid,
      },
      include: {
        organization: true,
      },
    });
  }

  async list(): Promise<UserEntity[]> {
    return this.prisma.users.findMany({
      include: {
        organization: true,
      },
    });
  }

  async create(data: UserCreateDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.prisma.users.create({
      data: {
        ...data,
        password: hashedPassword,
        organizationid: data.organizationid,
      },
      include: {
        organization: true,
      },
    });
  }
}
