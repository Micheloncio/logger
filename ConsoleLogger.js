const Logger = require('./Logger')

class ConsoleLogger{
    constructor(name){
        super(name)
    }
    print(message, level){//metodo para printar por consola el mensaje 
		switch(level)
		{
			case 'DEBUG':
				return console.log(message)
			case 'INFO':
				return console.info(message)
			case 'WARN':
				return console.warn(message)
		}
		console.error(message)
	}
}

module.exports = ConsoleLogger	//exporto la clase