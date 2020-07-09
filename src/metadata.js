import exif from "exiftool"
import { FSHandler } from "./fs.js"

var MetadataReader = Object.create(FSHandler)

MetadataReader.readMetaData = function (videoPath) {
  var videoFile = this.readVideoFile(videoPath)
  if (videoFile) {
    exif.metadata(videoFile, (err, metadata) => {
      if (err) {
        throw new Error(err)
      }
      return metadata
    })
  }
}

export { MetadataReader }
