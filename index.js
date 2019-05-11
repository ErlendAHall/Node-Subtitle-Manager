import 'dotenv/config';
import { watcher } from './src/watcher';
import {readMetadata} from './src/metadata';

var subtitleQueue = [];
Object.defineProperty(subtitleQueue, "push", {
    enumerable: false, // hide from for...in
    configurable: false, // prevent further meddling...
    writable: false, // see above ^
    value: function () {
      for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {          
        ProcessNewVideo(this, n, this[n] = arguments[i]); // assign/raise your event
      }
      return n;
    }
  });

watcher
    .on ("add", path => {
        console.log("prepush: " + subtitleQueue);
        subtitleQueue.push(path);
        console.log("push: " + subtitleQueue);
        // Retrieve metadata
        //console.log("metadata: " + readMetadata(path));
        //console.log("prepop: " + subtitleQueue);
        //console.log("postpop: " + subtitleQueue);
        
    });

function ProcessNewVideo() {
    //Process metadata
    console.log("preprocesspop: " + subtitleQueue);
    subtitleQueue.pop();
    console.log("postprocesspop: " + subtitleQueue);
}


