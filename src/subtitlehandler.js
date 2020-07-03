import OS from "opensubtitles-api"
var openSubtitlesAPI = {}
var SubtitleHandler = {
  setup: function (username, password) {
    this.username = username
    this.password = password
    this.authenticated = false
  },

  initOpenSubtitles: function () {
    openSubtitlesAPI = new OS({
      useragent: "TemporaryUserAgent",
      username: this.username,
      password: this.password,
      ssl: false,
    })
    return this.validateCredentials(this.username, this.password)
  },

  fetchSubtitle: async function (metadata, videoStats, videoPath) {
    if (!openSubtitlesAPI) {
      throw new Error(openSubtitlesAPI + "is undefined")
    }
    let res = await openSubtitlesAPI.search({
      sublanguageid: "en",
      hash: "",
      filesize: JSON.stringify(videoStats.size),
      path: videoPath,
      filename: "todo",
      season: "todo",
      episode: "todo",
      extensions: ["srt"],
      limit: ["best"],
      imdbid: "todo",
      fps: metadata.videoFrameRate,
      gzip: false,
    })
  },

  validateCredentials: async function (username, password) {
    // if (!username) {
    //   throw new Error("username is" + typeof username)
    // }

    // if (!password) {
    //   throw new Error("password is" + typeof password)
    // }

    let authenticated = await openSubtitlesAPI.login()
    this.authenticated = Boolean(authenticated)
  },
}

export { SubtitleHandler }

/* OpenSubtitles.search({
    sublanguageid: 'fre',       // Can be an array.join, 'all', or be omitted.
    hash: '8e245d9679d31e12',   // Size + 64bit checksum of the first and last 64k
    filesize: '129994823',      // Total size, in bytes.
    path: 'foo/bar.mp4',        // Complete path to the video file, it allows
                                //   to automatically calculate 'hash'.
    filename: 'bar.mp4',        // The video file name. Better if extension
                                //   is included.
    season: '2',
    episode: '3',
    extensions: ['srt', 'vtt'], // Accepted extensions, defaults to 'srt'.
    limit: '3',                 // Can be 'best', 'all' or an
                                // arbitrary nb. Defaults to 'best'
    imdbid: '528809',           // 'tt528809' is fine too.
    fps: '23.96',               // Number of frames per sec in the video.
    query: 'Charlie Chaplin',   // Text-based query, this is not recommended.
    gzip: true                  // returns url to gzipped subtitles, defaults to false*/
