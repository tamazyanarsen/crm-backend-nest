import { Controller, Get } from "@nestjs/common";
import { getRepository } from "typeorm";
import { User } from "../entities/user.enity";

@Controller()
export class UserController {
    @Get()
    async findAll(): [] {
        const userRepository = getRepository(User);
        console.log(await userRepository.find());
        return [];
    }
}
