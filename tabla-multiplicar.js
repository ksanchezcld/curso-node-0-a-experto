const fs = require('fs');

let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    //console.log(`${base} * ${i} = ${base * i}`);
    data += `${ base } * ${ i } = ${ base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido guardado!');
});