let numero = process.argv[2]
let factorial = numero

for (let i = 1; i <= Number(numero); i++) {
	factorial *= i
}
console.log(`Numero ingresado: ${numero}\nSu Factorial es: ${factorial}`)
