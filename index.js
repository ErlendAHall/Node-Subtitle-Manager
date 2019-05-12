require ('dotenv').config();
import { watcher } from './src/watcher';
//import {readMetadata} from './src/metadata';
import { MetadataReader } from './src/metadata.mjs';
import { SubtitleHandler } from './src/opensubutitles.mjs';
var subtitleQueue = [];
Object.defineProperty(subtitleQueue, "push", {
    enumerable: false, // hide from for...in
    configurable: false, // prevent further meddling...
    writable: false, // see above ^
    value: function () {
      for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {          
        ProcessVideo(this, n, this[n] = arguments[i]); // assign/raise your event
      }
      return n;
    }
  });

watcher
    .on ("add", path => {
        subtitleQueue.push(path);  
    });

const ProcessVideo = async (videoPath) => {
  try {
    let nextVideo = videoPath.pop();
    let metadata = await MetadataReader.prototype.readMetaData(nextVideo);
    let videoStats = await MetadataReader.prototype.getVideoStats(nextVideo);

    //let test = SubtitleHandler.prototype.fetchSubtitle(metadata, videoStats);


    console.log(metadata);
    console.log(videoStats);
  } catch (err) {console.log(err)}

}
