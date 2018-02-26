
class Logger{

	constructor(name){
		this.name = name
	}

	createMessage(level,message){//metodo para construir el mensaje
		this.print(`${level} ${new Date()} ${this.name}: ${message}`, level)
	}

	print(message){//metodo para printar el mensaje 
		return message
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