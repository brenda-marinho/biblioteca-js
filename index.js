import promptSync from 'prompt-sync';
import { listarLivros } from './listarLivros.js';
import { buscarLivro } from './buscarLivro.js';
import { listarDisponiveis } from './listarDisponiveis.js';
import { cadastrarLivro } from './cadastrarLivro.js';
import { realizarEmprestimo } from './realizarEmprestimo.js';
import { realizarDevolucao } from './realizarDevolucao.js';
import { exibirEstatisticas } from './exibirEstatisticas.js';

const prompt = promptSync();

function menu() {
  let opcao = -1;
  while (opcao !== 0) {
    console.log(`
=================================
SISTEMA DE BIBLIOTECA
=================================
1 - Listar livros
2 - Buscar livro
3 - Listar livros disponíveis
4 - Cadastrar livro
5 - Realizar empréstimo
6 - Realizar devolução
7 - Exibir estatísticas
0 - Sair
`);
    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
      case 1:
        listarLivros();
        break;
      case 2: {
        const titulo = prompt("Digite o título do livro para busca: ");
        buscarLivro(titulo);
        break;
      }
      case 3:
        listarDisponiveis();
        break;
      case 4:
        cadastrarLivro(prompt);
        break;
      case 5: {
        const titulo = prompt("Digite o título do livro a ser emprestado: ");
        realizarEmprestimo(titulo);
        break;
      }
      case 6: {
        const titulo = prompt("Digite o título do livro a ser devolvido: ");
        realizarDevolucao(titulo);
        break;
      }
      case 7:
        exibirEstatisticas();
        break;
      case 0:
        console.log("\nSaindo do sistema... Até logo!");
        break;
      default:
        console.log("\nOpção inválida! Tente novamente.");
    }
  }
}

menu();