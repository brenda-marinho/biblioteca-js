import { dadosLivros } from "./dadosLivros.js";
export function realizarEmprestimo(titulo) {
  const livro = dadosLivros.find(
    (l) => l.titulo.toLowerCase() === titulo.toLowerCase(),
  );
  if (livro) {
    if (livro.disponivel) {
      livro.disponivel = false;
      console.log("\nLivro emprestado com sucesso!");
    } else {
      console.log("\nLivro já está emprestado!");
    }
  } else {
    console.log("\nLivro não encontrado!");
  }
}
