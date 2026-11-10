import { ItemCardapio } from "./cardapio";
// falta propriedade descricao e categoria no item suco
const suco: ItemCardapio = {
  id: 4,
  nome: "suco de caju",
  preco_centavos: 750,
  categoria: "bebida",
};
// falta propriedade descricao e categoria no item bolo
const bolo: ItemCardapio = {
  id: 6,
  nome: "bolo",
  preco_centavos: 900,
  categoria: "lanche", // categoria inválida, deve ser "lanche", "bebida" ou "porção"
};

const cafe: ItemCardapio = {
  id: 7,
  nome: "café",
  preco_centavos: 500,
  categoria: "bebida", // categoria inválida, deve ser "lanche", "bebida" ou "porção" e não pode ser booleano pois o tipo é essas 3 opcões.
};
