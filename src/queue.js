/**
 * Returns an array that fires off a custom callback event whenever the push function in invoked.
 * @returns {Array<MediaQueue>}
 */
var MediaQueue = (function createMediaQueue() {
  var MediaQueue = []
  Object.defineProperty(MediaQueue, "push", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {
        handleNextVideo(this, n, (this[n] = arguments[i]))
      }
      return n
    },
  })

  return MediaQueue
})()

/**
 * The procedure for managing each incoming video file.
 * @param {*} videoPath - the fs path to the video file
 * @param {*} index - the source index from the media queue.
 */
async function handleNextVideo(videoPath, index) {
  try {
    let nextVideo = videoPath[index]
    console.log("NEXTVIDEOPATH", nextVideo)

    let metadata = await globalThis.NSM.meta.readMetaData(nextVideo)
    console.log("METADATA", metadata)
    let videoStats = await NSM.fs.readVideoFile(nextVideo)
    console.log("VIDEOSTATS", videoStats)
    let subtitle = await globalThis.NSM.subtitle.fetchSubtitle(videoStats)
    console.log("SUBTITLE", subtitle)
  } catch (err) {
    throw new Error(err)
  }
}

export { MediaQueue }
