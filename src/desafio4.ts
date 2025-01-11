// Desafio 4: Percentual de representação do faturamento mensal por estado

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
    const percentual = ((valor / total) * 100).toFixed(2);
    console.log(`Estado: ${estado}, Percentual: ${percentual}%`);
});