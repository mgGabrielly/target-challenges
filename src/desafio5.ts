// Desafio 5: Inverter uma string

import readline from 'readline';

const inverterString = (str: string): string => {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a palavra para inverter: ', (input) => {
    console.log('String invertida:', inverterString(input));
    rl.close();
});

