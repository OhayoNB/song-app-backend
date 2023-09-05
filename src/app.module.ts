import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SongModule } from './song/song.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'b260292o',
    database: 'postgres',
    autoLoadModels: true,
    synchronize: true,
  }), SongModule],
})
export class AppModule {}
