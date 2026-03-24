const produtosUnicos = new Set(vendasRaw.map(item => item.produto));

console.log([...produtosUnicos]);
const mapaProdutos = new Map(
  vendasRaw.map(item => [item.produto, item.preco])
);
const total = vendasRaw.reduce((soma, item) => soma + item.preco, 0);