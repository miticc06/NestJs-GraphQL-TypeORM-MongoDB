import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    username: String;

    @Column()
    password: String;
}