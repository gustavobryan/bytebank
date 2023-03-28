import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta}  from "./Conta.js";

const cliente1 = new Cliente("Gustavo", 11122233309);

const contaCorrenteGustavo = new Conta(0, cliente1, 1001);
contaCorrenteGustavo.depositar(650);
contaCorrenteGustavo.sacar(170);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteGustavo);
