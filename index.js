import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";

const cliente1 = new Cliente("Gustavo", 11122233309);

const contaCorrenteGustavo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteGustavo.depositar(650);
contaCorrenteGustavo.sacar(170);

const contaPoupanca = new ContaPoupanca(300, cliente1, 1001);
contaPoupanca.sacar(15)

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(150);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaPoupanca);
console.log(contaCorrenteGustavo);