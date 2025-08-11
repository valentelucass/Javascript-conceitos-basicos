import prompt from 'prompt-sync';
const ler = prompt();

console.log('== Programa ==');
let num = Number(ler('Digite um valor: '));
let fim = Number(ler('Informe o limite: '));

for (let i = 1; i <= fim; i++) {
    let mult = num * i;
    console.log(`${num} x ${i} = ${mult}`);
}