import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './model/song.model';

@Module({
    imports: [SequelizeModule.forFeature([Song])],
    providers: [],
    controllers: [],
})
export class SongModule {}
