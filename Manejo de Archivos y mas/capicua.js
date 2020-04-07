let numero = process.argv[2];
let numeroInvertido = Array.from(numero)
    .reverse()
    .join("");

if (numero === numeroInvertido) {
    console.log(
        `Valor ingresado: ${numero} \nValor inverso: ${numeroInvertido}\nLos numeros son capicua`
    );
} else {
    console.log(
        `Valor ingresado: ${numero} \nValor inverso: ${numeroInvertido}\nLos numeros NO son capicua`
    );
}
