const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    // seleciona todos os elementos <li> da lista de compras e retorna um array
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    // se não houver nenhum <li> na lista (lista vazia)
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        // "none" esconde a mensagem
        mensagemListaVazia.style.display = "none";
    }
}

// exporta a função para ser usada em outro arquivo JS
export default verificarListaVazia;