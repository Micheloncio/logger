const Logger = require('./Logger')	//importo Logger, esta clase extiende de ella
const fs = require('fs')			//importo file system desde node 

class FileLogger extends Logger{
	constructor(name, file){
		super(name)								//llamo al constructor padre

		this.ws = fs.createWriteStream(file)	//creo un streaming de escritura
	}

	print(message){	//metodo para printar en un archivo el mensaje 
		this.ws.write(`${message}\n`)			//escribo en el fichero
	}
}

module.exports = FileLogger	//exporto la clase