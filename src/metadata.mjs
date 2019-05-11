import exif from 'exiftool';
import fs from 'fs';

export class MetadataReader {
    
    readMetaData(videoPath) {
        new Promise((resolve, reject) => {
            fs.readFile(videoPath, (err, data) => {
                if (err) {reject(err);}
                console.log(data);
                resolve(data);
            })
        })
    }
    
}


/* export async function readMetadata(videoPath) {
    let data;
    try {
        data = fs.readFile(videoPath, (err, data) => {
            data();
        })
    } catch (e) {console.log('e', e)}


    /* let data = fs.readFile(videoPath, (err, data) => {
        if (err) {console.log(error)}
        console.group("fs-readfile");
        console.log(videoPath);
        console.groupEnd();
        return data;
    }); */
    //console.log(data);
/*     let metadata = exif.metadata(data, (err, metadata) => {

        
    })
    console.log(metadata); */
//}

