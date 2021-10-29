/* eslint-disable */
import winston from 'winston'
 
const logger = winston.createLogger({
    format: winston.format.combine(
            winston.format.label({
                label: `PROJETO - DEVOPS`
            }),
            winston.format.timestamp({
               format: 'MMM-DD-YYYY HH:mm:ss'
           }),
            winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
           winston.format.json(),),
    transports: [
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
    ],
});
 
export default logger