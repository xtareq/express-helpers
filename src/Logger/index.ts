import Winston from 'winston'
const logger = Winston.createLogger({
    format: Winston.format.json(),
    'transports': [
        new Winston.transports.Console({
            format: Winston.format.simple(),
        })
    ]
})

if (process.env.NODE_ENV == 'production') {
    logger.add( new Winston.transports.File({ filename: 'error.log', level: 'error' }),)
}


export {logger}


