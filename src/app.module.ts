import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SongModule } from './song/song.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadModels: true,
    synchronize: true,
  }), SongModule],
})
export class AppModule {}
