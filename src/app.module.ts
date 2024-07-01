import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { TypeormNamingStrategy } from './utils/typeorm-naming-strategy';
import { join } from 'path';
import { EnvironmentService } from './modules/environment/environment.service';
import { EnvironmentModule } from './modules/environment/environment.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptors/response-interceptor';
import { ProductModule } from './modules/product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BannerModule } from './modules/banner/banner.module';

@Module({
  imports: [
    EnvironmentModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (env: EnvironmentService) => {
        return {
          type: 'postgres',
          host: env.ENVIRONMENT.DB_HOST,
          port: env.ENVIRONMENT.DB_PORT,
          username: env.ENVIRONMENT.DB_USERNAME,
          password: env.ENVIRONMENT.DB_PASSWORD,
          database: env.ENVIRONMENT.DB_NAME,
          logging: env.ENVIRONMENT.DB_LOGGING,
          entities: [join(__dirname, '../database/entity/**.entity{.ts,.js}')],
          keepConnectionAlive: true,
          namingStrategy: new TypeormNamingStrategy(),
          ssl: true,
        };
      },
      inject: [EnvironmentService],
    }),

    CategoryModule,
    ProductModule,
    BannerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
