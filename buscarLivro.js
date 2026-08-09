import { dadosLivros } from "./dadosLivros.js";

export function buscarLivro(titulo) { // função que busca um livro pelo título no array de livros.
    const livro = dadosLivros.find( // percorre o array de livros e retorna o primeiro livro que corresponde ao título digitado pelo usuário.
        livro => livro.titulo.toLowerCase() === titulo.toLowerCase() // compara o título do livro com o título digitado pelo usuário, ignorando maiúsculas e minúsculas.
    );

    if (livro) {
        console.log("\n LIVRO ENCONTRADO \n");
        console.log(`Título: ${livro.titulo.toUpperCase()}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Número de páginas: ${livro.paginas}`);
        console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
    } else {
        console.log("Livro não encontrado.");
    }
}