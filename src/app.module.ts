import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from 'path';
/*

$ nest g mo user
$ nest g r user
$ nest g s user

tạo module, resolver, service với name user

*/

@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'], // The typePaths property indicates where the GraphQLModule should look for the GraphQL files
      playground: true // playground là in-browser GraphQL IDE
    }),

    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost/typeorm",
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true
    })
    ,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
