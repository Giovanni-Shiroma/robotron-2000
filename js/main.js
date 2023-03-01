// data attributes serve para criar um dado que não esteja ligado ao html/css e sim ao js para não correr o risco de ser alterado e quebrar o código
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (element) => {
    element.addEventListener("click", (event) => {
        // input = target.value | text = target.textContent;
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatistica(event.target.dataset.controle, event.target.dataset.peca);
    })
});


function manipulaDados(operacao, controle) {
    const pecas = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        pecas.value = parseInt(pecas.value) - 1;
    } else {
        pecas.value = parseInt(pecas.value) + 1;
    }
}

function atualizaEstatistica(operacao, peca) {
    if(operacao === "-") {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    } else {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }

}