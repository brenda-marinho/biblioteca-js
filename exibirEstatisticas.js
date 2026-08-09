import { dadosLivros } from "./dadosLivros.js";
export function exibirEstatisticas() {
  console.log("\n=== ESTATÍSTICAS DO ACERVO ===");
  const totalLivros = dadosLivros.length;
  if (totalLivros === 0) {
    console.log("Sem dados para exibir estatísticas.");
    return;
  }
  const disponiveis = dadosLivros.filter((l) => l.disponivel).length;
  const indisponiveis = totalLivros - disponiveis;
  const totalPaginas = dadosLivros.reduce((acc, l) => acc + l.paginas, 0);
  const mediaPaginas = (totalPaginas / totalLivros).toFixed(2);
  console.log(`• Total de livros cadastrados: ${totalLivros}`);
  console.log(`• Quantidade de livros disponíveis: ${disponiveis}`);
  console.log(`• Quantidade de livros indisponíveis: ${indisponiveis}`);
  console.log(
    `• Total de páginas considerando todos os livros: ${totalPaginas}`,
  );
  console.log(`• Média de páginas por livro: ${mediaPaginas}`);
}
