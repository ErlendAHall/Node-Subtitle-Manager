/**
 * The filtered metadata object used in order to fetch subtitles from OpenSubtitles.
 * @typedef {Object} Metadata
 * @property {number} filesize
 * @property {number} videoFrameRate
 */

// Todo: filter metadata
// const metadataFilterList = ["-videoFrameRate, -size"];
// Object.freeze(metadataFilterList);

/**
 * 
 * The object returned from fs.stat.
 * @typedef {Object} Stat
 * @property {number} dev - Device id – ID of the device containing the file. This number uniquely identifies the file device.
 * @property {number} mode - The mode property hold a lot of useful information, for example:
                                  File type (directory, regular file, fifo, socket etc)
                                  setuid, setgid and sticky bits are set or not
                                  File’s access permissions (e.g. read, write, and execute) for the owner, group and others
 * @property {number} nlink - Number of hard links to the file. https://en.wikipedia.org/wiki/Hard_link
 * @property {number} uid - The numeric user ID (uid) of the owner of the file.
 * @property {number} gid - The numeric group ID (gid) of the file’s owner.
 * @property {number} rdev - Device ID if the file is a special file.
 * @property {(number|undefined)} blksize - Block size for file system I/O in bytes. This number is the number of bytes in a block of disk unit storage.
 * @property {(Array|undefined)} blocks - Number of blocks allocated for the file.
 * @property {number} ino - File inode number or file id. An inode is a file system data structure that stores information about a file or directory. https://en.wikipedia.org/wiki/Inode
 * @property {number} size - The total size in bytes.
 * @property {BigInt} atimeMs - The timestamp, in milliseconds, of the last access to the data of the file system entity.
 * @property {BigInt} mtimeMs - The timestamp, represents the file’s last modification time in milliseconds. For example, the last change to file’s content.
 * @property {BigInt} ctimeMs - The timestamp, represents the last time the file’s inode was changed in milliseconds. ctimeMs also changes when you change file’s ownership or access permissions.
 * @property {BigInt} birthtimeMS - The timestamp, in milliseconds, when a file was first created۔
 * @property {Date} atime - Represents the the last time the data from a file was accessed. For example read by a OS’s process directly or through commands and scripts.
 * @property {Date} mtime - Represents the file’s last modification time. For example, the last change to file’s content.
 * @property {Date} ctime - Represents the last time the file’s inode was changed. ctime also changes when you change file’s ownership or access permissions.
 * @property {Date} birthtime - Represents when a file was first created, known as “creation time” or “birth time”.
 * 
 */

/**
 * @typedef {Object} SubtitleSearch
 *
 * @property {(string | "all" | undefined)} sublanguageid - Can be an array.join, 'all', or be omitted.
 * @property {string} hash - Size + 64bit checksum of the first and last 64k
 * @property {(string | number)} filesize - Total size, in bytes.
 * @property {string} path - Complete path to the video file, it allows to automatically calculate 'hash'.
 * @property {string} filename - The video file name. Better if extension is included.
 * @property {string} season
 * @property {string} episode
 * @property {Array} extensions - Accepted extensions, defaults to 'srt'.
 * @property {(number | "best" | "all")} limit - Can be 'best', 'all' or an arbitrary number. Defaults to 'best'
 * @property {string} imdbid - IMDB ID
 *  @property {number} fps - Number of frames per sec in the video.
 * @property {string} query - Text-based query, this is not recommended.
 * @property {boolean} gzip - returns url to gzipped subtitles, defaults to false
 */

/**
 * @typedef {Object} LogEntry
 * @property {Date} timestamp
 * @property {string} message
 * @property {string} filePath
 * @property {string|undefined} stacktrace
 */
