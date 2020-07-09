import fs from "fs"
var FSHandler = Object.create(fs)

FSHandler.getFileStatus = function (videoPath) {
  return new Promise((resolve, reject) => {
    return this.stat(videoPath, (err, data) => {
      if (err) {
        reject(data)
        throw new Error(err)
      }
      resolve(data)
    })
  })
}

FSHandler.readVideoFile = function (videoPath) {
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

FSHandler.writeSubtitle = async function (videoPath, name) {
  return await this.writeFileAsync(videoPath, name)
}

export { FSHandler }
