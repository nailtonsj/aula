// let nome: string = "João";
// let preco: number = 29.9;
// let aberta: boolean = true;

// const precos: number[] = [20.9, 19.9, 10.9];
// const item: string[] = [];

// let exemplo = 3;
// let exemplo2: any = 0;

// const itens: string[] = [];
// const precos: number[] = [];
// const quantidades: number[] = [];

// function adicionar(
//   item: string,
//   precoCentavos: number,
//   quantidades: number,
// ): void {
//   itens.push(item);
//   precos.push(precoCentavos);
//   quantidades.push(quantidades);
// }
import { Cardapio } from "./cardapio";
import { Comanda, ItemComanda } from "./comanda";
const cardapio = new Cardapio("dados/cardapio.json");
console.log(cardapio.itens);
console.log(cardapio.recusados);
const mesa7 = new Comanda(7);
const pedidos = ["X-burguer", "refrigente lata", "batata frita"];

const burguer = new ItemComanda("X-burguer", 19.5, 1);
for(let i = 0; i < pedidos.length; i++) {
  const item = cardapio.buscar(pedidos[i]);
  if(item === undefined) {
    console.log("Item não encontrado: " + pedidos[i]);
  }
  else {
    const itemComanda = new ItemComanda(item.nome, item.preco_centavos / 100, 1);
    mesa7.adicionar(itemComanda);
  }
}

mesa7.adicionar(burguer);

// console.log(burguer.subTotal);
// console.log(burguer.nome);
console.log(mesa7.fechar());
