import { dadosLivros } from "./dadosLivros.js";

export function realizarDevolucao(titulo) {
  const livro = dadosLivros.find(
    (l) => l.titulo.toLowerCase() === titulo.toLowerCase(),
  );

  if (livro) {
    if (!livro.disponivel) {
      livro.disponivel = true;
      console.log("\nLivro devolvido com sucesso!");
    } else {
      console.log("\nEste livro já constava como disponível!");
    }
  } else {
    console.log("\nLivro não encontrado!");
  }
}
