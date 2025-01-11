// Desafio 3: Faturamento diário de uma distribuidora

import faturamento from './dados.json';

const calcularFaturamento = (dados: { dia: number; valor: number }[]) => {
    const valoresValidos = dados.filter(d => d.valor > 0).map(d => d.valor);
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
    const diasAcimaDaMedia = valoresValidos.filter(v => v > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
};

const resultado = calcularFaturamento(faturamento);
console.log('Menor valor de faturamento:', resultado.menorValor);
console.log('Maior valor de faturamento:', resultado.maiorValor);
console.log('Dias com faturamento acima da média:', resultado.diasAcimaDaMedia);