import prompt from 'prompt-sync';
const ler = prompt();

console.log('== Programa ==');
let n1 = Number(ler('Digite o primeiro número: '));
let n2 = Number(ler('Digite o segundo número: '));

if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
        console.log(i);
    }
} else if (n2 < n1) {
    for (let i = n2; i <= n1; i++) {
        console.log(i);
    }
} else {
    console.log('Os números são iguais:', n1);
}
