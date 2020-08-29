async function handleNextVideo(videoPath, index) {
  try {
    let nextVideo = videoPath[index]

    if (nextVideo) {
      let metadata = await globalThis.NSM.readMetaData(nextVideo)
      console.log("META", metadata)
      let videoStats = globalThis.NSM.getVideoStats(nextVideo)
      //let subtitle = NSM.fetchSubtitle(metadata, videoStats);
    }
  } catch (err) {
    throw new Error(err)
  }
}

export { handleNextVideo }
