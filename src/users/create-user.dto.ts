
import { IsNotEmpty, IsString, Length, isNotEmpty } from "class-validator";



export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    @Length (3,100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length (1,3)
    country: string;

}