import exif from 'exiftool';
import fs from 'fs';

export class MetadataReader {

    getVideoStats(videoPath) {
        return new Promise((resolve, reject) => {
            return fs.stat(videoPath, (err, data) => {
                if (err) {reject(data);}
                resolve(data);
            })
        })
    }

    
    readMetaData(videoPath) {
        return new Promise((resolve, reject) => {
            return fs.readFile(videoPath, (err, data) => {
                if (err) {reject(err);}
                console.log(data);

                return exif.metadata(data, (err, metadata) =>  {
                    if (err) {reject(err);}
                    resolve(metadata);
                })
            })
        })
    }
    
}
