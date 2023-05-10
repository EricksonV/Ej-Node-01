"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicar_1 = require("./multiplicar");
const yargs_1 = require("./yargs");
(0, multiplicar_1.creaArchivo)(yargs_1.argv.b, yargs_1.argv.l, yargs_1.argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
