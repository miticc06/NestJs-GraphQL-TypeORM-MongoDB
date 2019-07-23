import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'], // The typePaths property indicates where the GraphQLModule should look for the GraphQL files
      playground: true // playground là in-browser GraphQL IDE
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
