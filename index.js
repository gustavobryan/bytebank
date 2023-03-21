import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Gustavo", 11122233309);
const cliente2 = new Cliente("Mari", 22413367831);
let numeroDeContas = 0;
const contaCorrenteGustavo = new ContaCorrente(1001, cliente1);
numeroDeContas++;

contaCorrenteGustavo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);
numeroDeContas++;

let valor = 200;
contaCorrenteGustavo.transferir(valor, conta2);

console.log(cliente1);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);
