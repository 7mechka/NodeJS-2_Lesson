require('dotenv').config()
const { criticalLog, warningLog, debugLog } = require('./logger')
const { timer } = require('./timer')
try {
    // blabla()
    timer()
}
catch (e) {
    criticalLog(e.stack)
    warningLog(e.stack)
    debugLog(e.stack)
    criticalLog('Custom message')
}