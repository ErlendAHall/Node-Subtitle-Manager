import chokidar from "chokidar"
import dotenv from "dotenv"
dotenv.config()

/**
 * Creates a Watcher object that uses Chokidar to watch for changes in a watch dir and push the new file to the media queue.
 */
var watcher = {
  setupChokidar: function () {
    return chokidar.watch(process.env.WATCHDIR, {
      ignored: "*.srt",
      persistent: true,
      ignoreInitial: false,
    })
  },

  watch: function () {
    this.on("add", (path) => {
      console.log(globalThis)
      if (globalThis.queue) {
        globalThis.queue.push(path)
      }
    })
  },
}

export { watcher as Watcher }
