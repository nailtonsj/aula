// function emReais(centavos: number): string {
//   return "R$" + (centavos / 100).toFixed(2);
// }
// console.log(emReais(30));

// export default emReais;

let mesa: number = 7;
let item: string = "x-burguer";
let aberta: boolean = true;
const precos: number[] = [18.2, 12.0];

function subTotal(preco: number, qtd: number): number {
  return preco * qtd;
}

export class ItemComanda {
  nome: string;
  precoCentavos: number;
  quantidade: number;

  constructor(nome: string, precoCentavos: number, quantidade: number) {
    this.nome = nome;
    this.precoCentavos = precoCentavos;
    this.quantidade = quantidade;
  }

  subTotal(): number {
    return this.precoCentavos * this.quantidade;
  }
}
export class Comanda {
  mesa: number;
  itens: ItemComanda[] = [];
  aberta: boolean = true;

  constructor(mesa: number) {
    this.mesa = mesa;
  }
  adicionar(item: ItemComanda): void {
    if (this.aberta === true) {
      this.itens.push(item);
    }
  }
  total() {
    let soma = 0;
    for (let i = 0; i < this.itens.length; i++) {
      soma = soma + this.itens[i].subTotal();
    }
    return soma;
  }

  fechar(): string {
    this.aberta = false;
    return "Mesa " + this.mesa + " - R$ " + (this.total() / 100).toFixed(2);
  }
}
