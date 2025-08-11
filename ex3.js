import prompt from 'prompt-sync';
const ler = prompt();

console.log('== Programa ==');
let valor = Number(ler('Qual sua temperatura?'));

let situacao = '';
if (valor >= 38) {
    situacao = 'Você está com febre.'
} else {
    situacao = 'Você não está com febre.'
}

console.log(`
== RESULTADO ==
Situação: ${situacao}
`);