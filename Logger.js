
class Logger{

	constructor(name){
		this.name = name
	}

	createMessage(level,message){//metodo para construir el mensaje
		this.print(level, `${level} ${new Date()} ${this.name}: ${message}`)
	}

	print(level,message){//metodo para printar por consola el mensage 
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

	debug(message){
		this.createMessage('DEBUG',message)
	}

	info(message){
		this.createMessage('INFO',message)	
	}

	warn(message){
		this.createMessage('WARN',message)
	}

	error(message){
		this.createMessage('ERROR',message)
	}

	fatal(message){
		this.createMessage('FATAL',message)
	}
}

module.exports = Logger