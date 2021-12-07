const { createLogger, format, transports } = require('winston');
require('winston-mongodb');

const config = require('./config');


module.exports = createLogger({
  transports: [
    new transports.File({
      filename: 'logs/server.log',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),

    new transports.MongoDB({
      db: config.dbUrl,
      options: {
        useUnifiedTopology: true,
      },
      collection: 'server_logs',
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
    }),
  ],
});
