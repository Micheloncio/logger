//js para testear que funciona FileLogger / no es TDD...

const { FileLogger } = require('.')

const log = new FileLogger('server', 'server.log')

log.debug('this is a debug message')
log.info('this is a info message')
log.warn('this is a warn message')
log.error('this is a error message')
log.fatal('this is a fatal message')