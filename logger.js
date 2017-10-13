const winston = require('winston');
require('winston-daily-rotate-file');

const tsFormat = () => (new Date()).toLocaleTimeString();

const errorTransport = new (winston.transports.DailyRotateFile)({
    filename: './logs/error.log',
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: 'error',
    name:'file.error'
});

const errorLogger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
    }),
    errorTransport,
  ]
});

const warnTransport = new (winston.transports.DailyRotateFile)({
    filename: './logs/warn.log',
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: 'warn',
    name:'file.warn'
  });

const warnLogger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
    }),
    warnTransport,
  ]
});

const debugTransport = new (winston.transports.DailyRotateFile)({
    filename: './logs/info.debug.log',
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: 'debug',
    name:'file.info'
 });

const debugLogger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
    }),
    debugTransport,
  ]
});

module.exports = {
    debug:  function(msg) {
        debugLogger.debug(msg);
    },
    info: function(msg) {
        debugLogger.info(msg);
    },
    warn: function(msg) {
        warnLogger.warn(msg);
    },
    error: function(msg) {
        errorLogger.error(msg);
    }
}
