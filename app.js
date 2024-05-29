require('dotenv').config()
const { criticalLog, warningLog, debugLog } = require('./logger')
try {
    blabla()
}
catch (e) {
    criticalLog(e.stack)
    warningLog(e.stack)
    debugLog(e.stack)
    criticalLog('Custom message')
}