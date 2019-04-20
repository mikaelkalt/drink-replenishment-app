const winston = require("winston");
const DbCore = require("./DbCore");

class Configuration {

    constructor() {
 
        this.logger = winston.createLogger({
            level: "debug",
            transports: [
                new winston.transports.Console({
                    timestamp: function () {
                        return new Date();
                    },
                    formatter: function (options) {
                        // - Return string will be passed to logger.
                        // - Optionally, use options.colorize(options.level, <string>) to
                        //   colorize output based on the log level.
                        return "[" + options.timestamp().toLocaleString() + "] "  +
                            winston.config.colorize(options.level, options.level.toUpperCase()) + " " +
                            (options.message ? options.message : "") +
                            (options.meta && Object.keys(options.meta).length ? "\n\t" + JSON.stringify(options.meta) : "");
                    }
                })
            ]
        });

        this.dbCore = new DbCore({
            dbHost: "baranoia_db",
            dbUsername: "baranoia",
            dbPassword: "b4r4no1a",
            dbName: "baranoia",
            debugSql: true,
            logger: this.logger
        });
    }
}

module.exports = Configuration;