import chokidar from "chokidar"
import dotenv from "dotenv"
dotenv.config()
function createWatcher(queue) {
  var DirWatcherProto = {
    setupChokidar: function () {
      return chokidar.watch(process.env.WATCHDIR, {
        ignored: "*.srt",
        persistent: true,
        ignoreInitial: false,
      })
    },

    watch: function (worker) {
      worker.on("add", (path) => {
        queue.push(path)
      })
    },
  }

  let dirWatcher = Object.create(DirWatcherProto)
  let worker = dirWatcher.setupChokidar()
  dirWatcher.watch(worker)
  return dirWatcher
}

export { createWatcher }
