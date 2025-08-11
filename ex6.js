import prompt from 'prompt-sync';
const ler = prompt();

console.log('== Programa ==');
let num = Number(ler('Digite um valor: '));

let estrelas = '';
for (let i = 1; i <= num; i++) {
    estrelas += '*';  // adiciona mais um asterisco
    console.log(estrelas);
}