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
contaCorrenteGustavo.cliente = cliente1;
contaCorrenteGustavo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteGustavo.transferir(200, conta2);

console.log(contaCorrenteGustavo);
console.log(conta2);
