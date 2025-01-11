// Desafio 2: Verificar se o número pertence à sequência de Fibonacci

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isFibonacci = (num: number): boolean => {
    let a = 0, b = 1, next = 0;

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    return num === a || num === b;
};

rl.question('Informe um número: ', (input: string) => {
    const numero = parseInt(input);
    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    } else {
        if (isFibonacci(numero)) {
            console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
        }
    }
    rl.close();
});
