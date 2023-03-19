import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = 22413367831;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;

contaCorrenteGustavo.depositar(100);
contaCorrenteGustavo.depositar(100);

const valorSacado = contaCorrenteGustavo.sacar(70);
console.log(valorSacado);

console.log(contaCorrenteGustavo);
