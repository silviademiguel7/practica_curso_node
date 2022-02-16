console.log("hola mundo")
console.log(module.paths)

const {suma, resta} = require('operaciones')

const resultSuma = suma(2,2)
const resultResta = resta(2,2)
console.log(resultSuma)
console.log(resultResta)