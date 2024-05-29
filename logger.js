const levels = [
    'Emergency',
    'Alert',
    'Critical',
    'Error',
    'Warning',
    'Notice',
    'Information',
    'Debug'
]
const avalableLevel = {
    Critical: "Critical",
    Warning: 'Warning',
    Debug: 'Debug'
}

const logger = (lvl, msg = 'Undefined message') => {
    const env = process.env['APP_ENV']

    if (!levels.includes(lvl)) 
        throw new Error('Invalid log level')  
    if (env === 'prod' && levels.indexOf(lvl) > 3) 
        return
    
    if (env === 'dev' && levels.indexOf(lvl) > 5) 
        return
    
    // console.log(`Log level: ${lvl}, message: ${msg}`)
    console.log(`\nLog level: ${lvl}\nDetails: \n${msg}\n`)
}

const criticalLog = (msg) => {
    logger(avalableLevel.Critical, msg)
}
const warningLog = (msg) => {
    logger(avalableLevel.Warning, msg)
}
const debugLog = (msg) => {
    logger(avalableLevel.Debug, msg)
}

module.exports = {
    criticalLog,
    warningLog,
    debugLog
}