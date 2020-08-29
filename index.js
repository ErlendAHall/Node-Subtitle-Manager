import { Watcher } from "./src/watcher.js"
import { MetadataReader } from "./src/metadata.js"
import { SubtitleHandler } from "./src/subtitlehandler.js"
import { MediaQueue } from "./src/queue.js"
import { FSHandler } from "./src/fs.js"

// Setup NSM prototype chain and add it globally.
var NSM = (function startNSM() {
  return {
    queue: MediaQueue,
    meta: MetadataReader,
    fs: FSHandler,
    subtitle: SubtitleHandler,
    watcher: Watcher,
  }
})()

globalThis.NSM = NSM
globalThis.NSM.watcher.setupChokidar()

// authenticate to opensubtitles
var authenticated = await (async function authenticate() {
  try {
    const username = process.env.OSUSERNAME ?? ""
    const password = process.env.OSPASSWORD ?? ""
    NSM.subtitle.setup(username, password)
    NSM.subtitle.initOpenSubtitles()
    return NSM.subtitle.authenticated
  } catch (error) {
    throw new Error(error)
  }
})()

console.log(globalThis.NSM)
