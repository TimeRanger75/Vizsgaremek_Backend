import { IsDefined } from "class-validator";

export class CreateAdminDto {

    @IsDefined()
    username:string;

    @IsDefined()
    password:string;
}
