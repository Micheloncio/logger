//exportamos Logger y FileLogger desde un index.js y en un objeto para poder hacer destructuring
//cuando toque importarlo

module.exports = {
	Logger: require('./Logger'),
	FileLogger: require('./FileLogger')
}