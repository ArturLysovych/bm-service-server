import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '56717082',
      database: 'bm-service-db',
      models: [],
      autoLoadModels: true
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
