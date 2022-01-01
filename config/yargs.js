const yargs = require('yargs')
const yargsOptions = yargs
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base para la multiplicación,',
})
.option('f', {
    alias: 'file',
    type: 'boolean',
    default: false,
    describe: 'Genera un archivo de la tabla.',
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Imprime la tabla en consola.',
})
.option('m', {
    alias: 'max',
    type: 'number',
    default: 10,
    describe: 'El máximo para la tabla de multiplicar.'
})
.check((argv, options) => {
    return true
})

const argv = yargsOptions.argv

module.exports = argv