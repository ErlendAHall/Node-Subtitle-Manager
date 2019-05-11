import exif from 'exiftool';
import fs from 'fs';


export function readMetadata(videoPath) {
    fs.readFile("test.avi", (err, data) => {
        console.group("fs-readfile");
        if (err) {
            console.error(err)
        } else {
        exif.metadata(data, (err, metadata) => {
            if (err) {console.error(err)};
            return metadata;
        })
        }

    })
}