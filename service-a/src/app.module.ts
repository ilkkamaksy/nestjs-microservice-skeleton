import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from 'config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemEntity } from './item.entity';
import { ItemRepository } from './item.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([ItemRepository, ItemEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
