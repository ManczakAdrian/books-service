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
    
    public create(email: User['email'], password){
        return  this.prismaService.user.create({
            data: {
                ...userData ,password: {
                  create: {
                    hashedPassword: password,
                  },
                },
              },
            
        });

        public updateById(id:User['id'], email: User['email'], password){
            return await this.prismaService.user.update({
                where: { id: userId },
                data: {
                  ...userData,
                  password: {
                    update: {
                      hashedPassword: password,
                    },
                  },
                },
              });
              
        }

    }

}
