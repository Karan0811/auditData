const { createLogger, format, transports } = require('winston');
require('winston-mongodb');

const config = require('./config');


module.exports = createLogger({
  transports: [
    new transports.File({
      filename: 'logs/server.log',
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
    }),

    new transports.MongoDB({
      db: process.env.MONGOURI,
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
