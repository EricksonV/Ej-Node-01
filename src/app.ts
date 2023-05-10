import {creaArchivo} from './multiplicar';

import {argv} from './yargs';



creaArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));









