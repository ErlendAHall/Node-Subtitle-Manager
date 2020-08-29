import exif from "exiftool"
import { FSHandler } from "./fs.js"

import "./docs.js"

var MetadataReader = Object.create(FSHandler)
MetadataReader.previousInvalid = false

/**
 * Accepts a video file and uses exiftool to fetch metadata.
 * @param {(Buffer|Stream)} videoFile - the video file.
 * @returns {Promise<Metadata>} - a promise to fetch Metadata from the file or fail gracefully.
 */
MetadataReader.readMetaData = function readMetaData(videoFile) {
  if (videoFile) {
    return new Promise((resolve, reject) => {
      try {
        exif.metadata(videoFile, (err, metadata) => {
          resolve(metadata)
        })
      } catch (err) {
        this.previousInvalid = true
      }
    })
  }
}

export { MetadataReader }
