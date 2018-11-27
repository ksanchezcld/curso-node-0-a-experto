const fs = require('fs');
const color = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('======================'.rainbow);
    console.log(`  Tabla de ${base}`.green);
    console.log('======================'.rainbow);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base * i}`);
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}