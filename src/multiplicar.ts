
import { writeFileSync } from 'fs';
const colors = require('colors');

export const creaArchivo = async(base:number = 1, listar:boolean, hasta:number = 10) => {
    try {
        let salida:string = ``;
        
        if(listar==true){
            console.log(colors.red('==============='));
            console.log(colors.white('Tabla del: '), base);
            console.log(colors.red('==============='));

            for(let i:number = 0; i<hasta; i++){
                salida += `${base} * ${i+1} = ${base*(i+1)} \n`;
            }

            console.log(salida);
        }
        
        writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt`);    

    } catch (error) {
        throw error;  
    }
    
              
}


