import fs from "fs"
import "./docs.js"
var FSHandler = Object.create(fs)

/**
 * Uses fs.stat to fetch metadata about the next video in queue
 * @param {string} videoPath - the fs path to the video file.
 * @returns {Stat} - a promise to stat the video for metadata. Rejects and throws an error if not.
 */
FSHandler.getFileStatus = function getFileStatus(videoPath) {
  return new Promise((resolve, reject) => {
    return this.stat(videoPath, (err, data) => {
      if (err) {
        reject(data)
        throw new Error(err)
      }
      console.log(data)
      resolve(data)
    })
  })
}

/**
 * Reads the contents of a file and returns a buffer.
 * Todo: refactor to stream for large files
 * @param {string} videoPath - the path to the video for reading.
 * @returns {Promise} - A buffer containing video contents.
 */
FSHandler.readVideoFile = function readVideoFile(videoPath) {
  if (globalThis.NSM.meta.previousInvalid) {
    return undefined
  }
  return new Promise((resolve, reject) => {
    return this.readFile(videoPath, function handleFile(err, data) {
      if (err) {
        reject(err)
        throw new Error(err)
      }
      resolve(data)
    })
  })
}

/**
 *
 * @param {string} videoPath - the path to read the subtitle to.
 * @param {(string|undefined)} name - the name of the subtitle, if undefined, it will be identical to the video name.
 */
FSHandler.writeSubtitle = async function writeSubtitle(videoPath, name) {
  return await this.writeFileAsync(videoPath, name)
}

export { FSHandler }
