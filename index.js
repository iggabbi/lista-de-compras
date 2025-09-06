import {criarItemDaLista} from "./Scripts/criarItemDaLista.js";
import verificarListaVazia from "./Scripts/verificarListaVazia.js";

// salva o elemento input da variável inputItem
const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

// adiciona um evento fofoqueiro que ficará "escutando" quando um evento de clique no "botaoAdicionar" for acionado
botaoAdicionar.addEventListener("click", (evento) => {
    //evita que a página atualize e todos os dados sejam perdidos
    evento.preventDefault();
    // chama uma função que vai criar o item da lista
    const itemDaLista = criarItemDaLista();
    // adiciona esse item criado dentro da lista de compras
    listaDeCompras.appendChild(itemDaLista);
    // chama a função que vai verificar se a lista está ou não vazia
    verificarListaVazia(listaDeCompras);
    inputItem.value = "";
}); // limpa o campo input ao clicar no botão 