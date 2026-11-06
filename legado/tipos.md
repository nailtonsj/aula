legados/o-js-deixou-passar

3- "console.log(xBurguer.prco * 2);"
o js não da erro algum mesmo com o nome da propriedade errado "prco" ao invés de "preco"

5 - "function total(preco, quantidade) {
  return preco * quantidade;
}"
a função era para vim numero para fazer contas mas fica aberto a vim string.

10 - "function criarItem(nome, quantidade) {
  return { nome: nome, quantidade: quantidade };
}"
O argumento era para ser um nome mas aceita qualquer tipo de dado.

linha 15 - "const pedido = cardapio.find((item) => item.nome === "x-salada");
console.log(pedido.preco);"

typeError: cannot read properties of undefinied