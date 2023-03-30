import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {Gerente} from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678903);
gerente.cadastrarSenha("1234");

const cliente = new Cliente ("Lais", 87654312345, "4567");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567");

console.log(clienteEstaLogado,diretorEstaLogado,gerenteEstaLogado);