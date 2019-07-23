import { Injectable } from '@nestjs/common';
import * as uuid from "uuid";
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async createUser(input: UserInput): Promise<User> {
        const user = new User();
        user._id = uuid.v4();
        user.username = input.username;
        user.password = input.password;
        return await this.userRepository.save(user);
    }


}
