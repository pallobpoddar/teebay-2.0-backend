import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { RentalModule } from './rental/rental.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    MikroOrmModule.forRoot(),
    UserModule,
    CategoryModule,
    ProductModule,
    PurchaseModule,
    RentalModule,
    ConversationModule,
    MessageModule,
  ],
})
export class AppModule {}
