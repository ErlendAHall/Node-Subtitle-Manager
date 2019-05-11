require ('dotenv').config();
import chokidar from "chokidar";


export const watcher = chokidar.watch(process.env.WATCHDIR, {
    ignored: "*.srt",
    persistent: true,
    ignoreInitial: false
});