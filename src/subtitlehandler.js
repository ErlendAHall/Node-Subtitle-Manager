import OS from "opensubtitles-api"
import "./docs.js"

var openSubtitlesAPI = {}
var SubtitleHandler = {
  setup: function (username, password) {
    this.username = username
    this.password = password
    this.authenticated = false
  },

  /**
   * Creates a new instance of the OpenSubtitles service
   * This is also where a login request is sent.
   */
  initOpenSubtitles: function initOpenSubtitles() {
    openSubtitlesAPI = new OS({
      useragent: process.env.OSUSERAGENT,
      username: this.username,
      password: this.password,
      ssl: false,
    })
    this.authenticated = this.validateCredentials()
  },

  /**
   *
   * @param {Metadata} metadata
   * @param {Stat} videoStats
   * @param {string} videoPath
   * @returns {SubtitleSearch}
   */
  fetchSubtitle: async function fetchSubtitle(metadata, videoStats, videoPath) {
    if (!openSubtitlesAPI) {
      throw new Error(openSubtitlesAPI + "is undefined")
    }
    //   return await openSubtitlesAPI.search({
    //     sublanguageid: "en",
    //     hash: "",
    //     filesize: JSON.stringify(videoStats.size),
    //     path: videoPath,
    //     filename: "todo",
    //     season: "todo",
    //     episode: "todo",
    //     extensions: ["srt"],
    //     limit: "best",
    //     imdbid: "todo",
    //     fps: metadata.videoFrameRate,
    //     gzip: false,

    //   })
  },

  /**
   * Creates an object to be relayed to OpenSubtitles
   * @param {Metadata} metaData
   * @param {Stat} videoStats
   * @returns {SubtitleSearch} - the query object
   */
  createSubtitleRequest: function createSubtitleRequest(metaData, videoStats) {
    return {}
  },

  /**
   * Verifies that the user is logged into OpenSubtitles.
   * If the response contains a token, the user is logged in.
   * @returns {boolean} true if authenticated
   */
  validateCredentials: async function validateCredentials() {
    if (!this.username) {
      throw new Error("username is" + typeof username)
    }

    if (!this.password) {
      throw new Error("password is" + typeof password)
    }
    let authenticated = await openSubtitlesAPI.login()
    return authenticated.hasOwnProperty("token")
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
