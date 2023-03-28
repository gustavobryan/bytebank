import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta}  from "./Conta.js";

const cliente1 = new Cliente("Gustavo", 11122233309);

const contaCorrenteGustavo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteGustavo.depositar(650);
contaCorrenteGustavo.sacar(170);

const ContaPoupanca = new Conta(50, cliente1, 1001);

console.log(ContaPoupanca);
console.log(contaCorrenteGustavo);
