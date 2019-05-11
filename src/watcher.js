import chokidar from "chokidar";

export const watcher = chokidar.watch(process.env.WATCHDIR, {
    ignored: "*.txt, *.srt",
    persistent: true,
    ignoreInitial: false
});