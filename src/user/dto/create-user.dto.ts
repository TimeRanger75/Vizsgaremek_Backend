import { IsDefined,Contains, IsEmail,  MinLength } from "class-validator";

export class CreateUserDto {

    @IsDefined()
    @Contains(' ')
    @MinLength(7)
    name:string;

    @IsDefined()
    @MinLength(5)
    username:string;

    @IsEmail()
    @IsDefined()
    email:string;

    @MinLength(8)
    @IsDefined()
    password:string;
}
