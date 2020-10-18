import { Injectable } from "@nestjs/common";
import { IUser } from "../models/user.interface";

@Injectable()
export class UserService {
    public create(user: IUser) {
        console.log(user);
    }
}
