"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creaArchivo = void 0;
const fs_1 = require("fs");
const colors = require('colors');
const creaArchivo = (base = 1, listar, hasta = 10) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let salida = ``;
        if (listar == true) {
            console.log(colors.red('==============='));
            console.log(colors.white('Tabla del: '), base);
            console.log(colors.red('==============='));
            for (let i = 0; i < hasta; i++) {
                salida += `${base} * ${i + 1} = ${base * (i + 1)} \n`;
            }
            console.log(salida);
        }
        (0, fs_1.writeFileSync)(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    }
    catch (error) {
        throw error;
    }
});
exports.creaArchivo = creaArchivo;
