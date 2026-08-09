import { dadosLivros } from './dadosLivros.js';
import { exibirLivro } from './listarLivros.js';

export function listarDisponiveis() {

    console.log("\n=== LIVROS DISPONÍVEIS ===");

    const disponiveis = dadosLivros.filter(
        (livro) => livro.disponivel === true
    );

    if (disponiveis.length === 0) {
        console.log("Nenhum livro disponível no momento.");
        return;
    }

    disponiveis.forEach((livro, indice) => {
        exibirLivro(livro, indice);
    });
}