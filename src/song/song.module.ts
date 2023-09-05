import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './model/song.model';
import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
    imports: [SequelizeModule.forFeature([Song])],
    providers: [SongService],
    controllers: [SongController],
})
export class SongModule {}
