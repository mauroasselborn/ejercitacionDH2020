let numero = process.argv[2];
let numeroInvertido = "";
console.clear();

for (let i = numero.length - 1; i >= 0; i--) {
    numeroInvertido += numero[i];
}

if (numero === numeroInvertido) {
    console.log(
        `Valor ingresado: ${numero} \nValor inverso: ${numeroInvertido}\nLos numeros son capicua`
    );
} else {
    console.log(
        `Valor ingresado: ${numero} \nValor inverso: ${numeroInvertido}\nLos numeros NO son capicua`
    );
}
