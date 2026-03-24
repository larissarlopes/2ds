// 1. ARRAYS

// 1.1 array simples
const frutas = ["Maçã", "Banana", "Laranja"];
// 1.2 FIFO (fila)
const fila = ["Ana","Beto","Caio","Daiane"];
fila.push("Ellen");
const primeiro = fila.shift(); // Primeiro item 
console.log(primeiro)
// 1.3 FILO (pilha)
const pilha = 
['Inferno de dante,
     "One piece",
     "A quarta asa"];
     pilha.push("O alquimista");
     const livro = pilha.pop();
     console.log(livro);
    console.log (temLaranja);
    console.log (temManga);

    // 2. Sets (Conjuntos)
    // 2.1 Adicionando duplicadas
    const matricula = new Set ([1001, 1002, 1005, 1009, 1002])
    console.log([...matriculas]);
    // 2.2 Adicionar Item
    const cores = new Set (["Verde", "Azul"]);
    cores add ("Vermelho");
    cores add ("Branco");
    cores add ("Preto");
    console.log([... cores])
    // 2.3 buscar se existe
    const temVerde = cores.has ("Verde");
    const temVerde = cores.has ("Amarelo");
    console.log(temVerde);
    console.log(temAmarelo);
    // 2.4 converter array em set
    const convidados = ["Bruno", "Henrique", "Juliana", "carol", "Juliana,"Breno"," Henrique"];
    const convidados_unicos = new Set (convidados);
console.log ([... convidados_unicos]);

//3. Map (Mapas)
// 3.1 Cadastro de Preços
const produtos = new Map();
produtos.set("Mouse", 50.00)
produtos.set("Teclado", 120.00)
const vendasRaw = [
  { produto: 'Teclado', preco: 150 },
  { produto: 'Mouse', preco: 80 },
  { produto: 'Teclado', preco: 150 }, // Duplicado
  { produto: 'Monitor', preco: 900 },
  { produto: 'Mouse', preco: 80 }, // Duplicado
  { produto: 'Mousepad', preco: 30 }
];

// Criar set com produtos únicos
const produtosUnicos = new Set(vendasRaw.map(item => item.produto));

console.log([...produtosUnicos]);

