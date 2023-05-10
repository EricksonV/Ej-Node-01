"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
exports.argv = require('yargs')
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base para la tabla de multiplicar y crear el archivo'
})
    .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Mostrar la tabla en consola'
})
    .option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Hasta que numero se desea llegar',
    default: 10
})
    .check((argv) => {
    if (isNaN(argv.b)) {
        throw ('Solo deben ser numeros');
    }
    else {
        return true;
    }
})
    .argv;
