import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as papa from 'papaparse';

@Injectable()
export class SongService {
    async parseCSVFile(filePath: string): Promise<any[]> {
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
              result.push(row.data);
            },
            complete: () => {
              console.log('Parsing complete!');
              resolve(result);
            },
            error: (error) => {
              reject(error);
            },
          });
        });
      }
}
