require ('dotenv').config();
import { watcher } from './src/watcher';
//import {readMetadata} from './src/metadata';
import { MetadataReader } from './src/metadata.mjs';
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
        //https://stackoverflow.com/questions/40593875/using-filesystem-in-node-js-with-async-await
                //console.log("metadata: " + readMetadata(path));
        //console.log("prepop: " + subtitleQueue);
        //console.log("postpop: " + subtitleQueue);
        
    });

const ProcessVideo = async (videoPath) => {
  try {
    let res = await MetadataReader.prototype.readMetaData(videoPath.pop());
    console.log(res);
  } catch (err) {console.log(err)}

}
