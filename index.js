import { createWatcher } from "./src/watcher.js"
import { MetadataReader } from "./src/metadata.js"
import { SubtitleHandler } from "./src/subtitlehandler.js"
import { MediaQueue } from "./src/queue.js"

// Setup the media queue
var subtitleQueue = MediaQueue()

var watcher = createWatcher(subtitleQueue)
