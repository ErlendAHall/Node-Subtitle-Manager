import "./docs.js"

var Logger = Object.create(globalThis.NSM.meta)
Logger.logFileLocation = ""

/**
 * Create a Log Entry.
 * @returns {LogEntry} - a new log entry to be written to a log file.
 */
Logger.createLogItem = function createLogItem() {
  /**@type LogEntry */
  return {
    timestamp: new Date(),
    message: "a message",
    filePath: "a filepath",
    stacktrace: "a stacktrace",
  }
}

Logger.writeToLogFile = function writeToLogFile() {
  /*
    this.writeFileAsync(yaddayadda)
    */
}

/**
 * Validates a log entry.
 * Timestamp must be a Date object. filePath and message must be truthy strings.
 * @param {LogEntry} logEntry
 * @returns {boolean} - true if valid.
 */
Logger.validateLogEntry = function validateLogEntry(logEntry) {
  var { timestamp, message, filePath } = logEntry
  return timestamp instanceof Date && filePath && message
}
