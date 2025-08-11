import prompt from 'prompt-sync';
const ler = prompt();

console.log('== Programa soma ==');
console.log('Informe o pirmeiro número: ');
let n1 = Number(ler());

console.log('Informe o segundo número: ');
let n2 = Number(ler());

console.log('Informe o segundo número: ');
let n3 = Number(ler());

let soma = n1 + n2 + n3;
let media = (n1 + n2 + n3)/3;

let situacao = '';
if (media >= 6) {
    situacao = 'Aprovado';
} else {
    situacao = 'Reprovado';
}

console.log(`
    == RESULTADO ==
    Média: ${media.toFixed(2)}
    Situação: ${situacao}
`);