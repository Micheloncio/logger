const Logger = require('./Logger')	//importo Logger, esta clase extiende de ella
const fs = require('fs')			//importo file system desde node 

class FileLogger extends Logger{
	constructor(name, file){
		super(name)								//llamo al constructor padre

		this.ws = fs.createWriteStream(file)	//creo un streaming de escritura
	}

	print(level, message){	//aquí se sobrescribe esta función de la clase padre
		this.ws.write(`${message}\n`)			//escribo en el fichero
	}
}

module.exports = FileLogger	//exporto la clase