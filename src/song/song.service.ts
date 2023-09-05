import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as fs from 'fs';
import * as papa from 'papaparse';
import { Song } from './model/song.model';

@Injectable()
export class SongService {

    constructor(
        @InjectModel(Song) private songModel: typeof Song,
    ) { }

    async parseCSVFile(filePath: string): Promise<Song[]> {
        console.log('Parsing CSV file...');
        return new Promise((resolve, reject) => {
          const result = [];
    
          const csvReadStream = fs.createReadStream(filePath);
    
          const csvParserConfig = {
            header: true,
            transformHeader: (header) => header.toLowerCase(),
            transform: (value) => value.toLowerCase(),
          };
    
          papa.parse(csvReadStream, {
            ...csvParserConfig,
            step: (row) => {
              const mappedRow = {
                songName: row.data['song name'],
                band: row.data['band'],
                year: row.data['year'],
              };
              result.push(mappedRow);
            },
            complete: () => {
                // save each row to database
                result.forEach(async (row) => {
                    await this.songModel.create(row);
                });
              resolve(result);
            },
            error: (error) => {
              reject(error);
            },
          });
        });
      }

    async getAllSongs(): Promise<Song[]> {
        return await this.songModel.findAll();
    }
}
