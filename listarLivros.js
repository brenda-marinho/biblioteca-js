import { dadosLivros } from "./dadosLivros.js";

export function exibirLivro(livro, indice) {
    console.log(`\nLivro ${indice + 1}`);
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Número de páginas: ${livro.paginas}`);
    console.log(
        `Disponibilidade: ${livro.disponivel ? "Disponível" : "Emprestado"}`
    );
}

export function listarLivros() {
    console.log("\n LISTA DE LIVROS \n");

    dadosLivros.forEach((livro, indice) => {
        exibirLivro(livro, indice);
    });
}