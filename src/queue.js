import { MetadataReader } from "./metadata.js"
import { SubtitleHandler } from "./subtitleHandler.js"
var metaReader = Object.create(MetadataReader)
var subtitleHandler = Object.create(SubtitleHandler)

/**
 * Returns an array that fires off a custom callback event whenever the push function in invoked.
 * @returns {Array<MediaQueue>}
 */
var MediaQueue = function createMediaQueue() {
  var MediaQueue = []
  Object.defineProperty(MediaQueue, "push", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {
        ProcessVideo(this, n, (this[n] = arguments[i]))
      }
      return n
    },
  })

  return MediaQueue
}

async function ProcessVideo(videoPath) {
  subtitleHandler.setup("", "")
  subtitleHandler.initOpenSubtitles()

  try {
    let nextVideo = videoPath.pop()
    let metadata = await metaReader.readMetaData(nextVideo)
    let videoStats = await metaReader.getVideoStats(nextVideo)

    let test = subtitleHandler.fetchSubtitle(metadata, videoStats)
  } catch (err) {
    throw new Error(err)
  }
}
export { MediaQueue }
