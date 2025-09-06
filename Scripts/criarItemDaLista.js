import verificarListaVazia from "./verificarListaVazia.js";
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const listaDeCompras = document.getElementById("lista-de-compras");
export const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    containerItemDaLista.appendChild(inputCheckBox);

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckBox.addEventListener("click", () => {
        nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
    });

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    const iconeEditar = document.createElement("i");
    iconeEditar.className = "bi bi-pencil-square";
    botaoEditar.appendChild(iconeEditar);

    botaoEditar.addEventListener("click", () => {
        const novoValor = prompt("Edite o item:", nomeItem.innerText);
        if (novoValor && novoValor.trim() !== "") {
            nomeItem.innerText = novoValor;
        }
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-x-lg";
    botaoExcluir.appendChild(iconeExcluir);

    botaoExcluir.addEventListener("click", () => {
        if (confirm("Deseja realmente deletar esse item?")) {
            itemDaLista.remove();
            verificarListaVazia(listaDeCompras);
        }
    });

    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoEditar);
    containerItemDaLista.appendChild(botaoExcluir);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}