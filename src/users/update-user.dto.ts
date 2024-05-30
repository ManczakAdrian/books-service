import { IsNotEmpty, Length, IsString } from "class-validator";

export class UpdateUserDTO{
    @IsNotEmpty()
    @IsString()
    @Length(3,100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(1,3)
    country:string;


}