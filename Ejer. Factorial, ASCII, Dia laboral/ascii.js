"use strict"

const [, , ...caracter] = process.argv

for (const iterator of caracter) {
	console.log(`Valor ingresado: ${iterator} ASCII: ${String(iterator).charCodeAt()}`)
}
