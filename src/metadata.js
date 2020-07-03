import exif from "exiftool"
import fs from "fs"

export var MetadataReader = {
  getVideoStats(videoPath) {
    return new Promise((resolve, reject) => {
      return fs.stat(videoPath, (err, data) => {
        if (err) {
          reject(data)
          throw new Error(err)
        }
        resolve(data)
      })
    })
  },

  readMetaData(videoPath) {
    return new Promise((resolve, reject) => {
      return fs.readFile(videoPath, (err, data) => {
        if (err) {
          reject(err)
          throw new Error(err)
        }

        return exif.metadata(data, (err, metadata) => {
          if (err) {
            reject(err)
            throw new Error(err)
          }
          resolve(metadata)
        })
      })
    })
  },
}
