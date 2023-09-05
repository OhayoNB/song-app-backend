import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SongService } from './song.service';

@Controller('song')
export class SongController {

    constructor(private songService: SongService) { }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
            }),
        }),
    )
    async uploadFile(@UploadedFile() file) {
        try {
            const parsedResult = await this.songService.parseCSVFile(file.path);
            console.log(parsedResult);
            return parsedResult;
        } catch (error) {
            console.error('An error occurred when parsing CSV:', error);
            throw error;
        }
    }

    @Get()
    async getAllSongs() {
        return await this.songService.getAllSongs();
    }
}
