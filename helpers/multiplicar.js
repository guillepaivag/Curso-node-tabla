const fs = require('fs')
var colors = require('colors');

const multiplicar = ( base, opciones ) => {
    let contenidoColor = ''
    let contenido = ''
    for (let i = 0; i <= opciones.max; i++) {
        contenido = contenido + `${i} * ${base}: ${i * base}\n`

        let mult = `${i} * ${base}`.blue
        let result = `${i * base}`.green
        contenidoColor = contenidoColor + `${mult}: ${result}\n`
    }

    if (opciones.file) {
        fs.writeFileSync(`./archivos/tabla-${base}.txt`, contenido, {
            encoding: "utf8",
            flag: "w+",
        })
    }

    if (opciones.list) {
        console.log(contenidoColor)
    }

    return contenido
}

module.exports = multiplicar