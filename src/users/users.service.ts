import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';


@Injectable()
export class UsersService {
    
    constructor(private prismaService: PrismaService) {

    }

    public getAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    public getById(id: User['id']): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }

    public getByEmail(email: User['email']): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { email },
        });
    }
    

}
