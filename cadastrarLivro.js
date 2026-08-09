import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";
export function cadastrarLivro(prompt) {
  console.log("\n=== CADASTRAR NOVO LIVRO ===");
  const titulo = prompt("Digite o título do livro: ");
  const autor = prompt("Digite o autor do livro: ");
  const categoria = prompt("Digite a categoria: ");
  const paginas = Number(prompt("Digite o número de páginas: "));
  const novoLivro = new Livro(
    titulo.toUpperCase(),
    autor,
    categoria,
    paginas,
    true,
  );
  dadosLivros.push(novoLivro);
  console.log(`\nLivro "${novoLivro.titulo}" cadastrado com sucesso!`);
}
