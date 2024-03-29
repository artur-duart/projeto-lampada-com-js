"use strict"

// function getId(elemento) {
//     return document.getElementById(elemento)
// }

const getId = (elemento) => document.getElementById(elemento)

const lampada = getId("lampada")
let idLigar
let idDesligar
const botaoPiscar = getId("piscar")

const botoesLigaDesliga = (estadoLigado, estadoDesligado, estadoPiscar) => {
    const ligar = getId("ligar")
    const desligar = getId("desligar")
    const piscar = getId("piscar")

    ligar.disabled = estadoLigado
    desligar.disabled = estadoDesligado
    piscar.disabled = estadoPiscar
}

const lampadaQuebrada = () => {
    return lampada.src.indexOf("quebrada") !== -1
}

const ligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg'
        botoesLigaDesliga(true, false, false)
    }
}

const desligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
        botoesLigaDesliga(false, true, false)
    }
}

const quebrarLampada = () => {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)
    botaoPiscar.classList.remove("green")
    botaoPiscar.classList.remove("red")
    //Quando a lâmpada quebra, as classes são removidas e o fundo do botão passa a não ter cor
}

const pararPiscar = () => {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

const piscarLampada = () => {

    if (botaoPiscar.textContent == "Piscar") {
        idLigar = setInterval(ligarLampada, 500)
        idDesligar = setInterval(desligarLampada, 1000)
        botaoPiscar.textContent = "Parar"
        botaoPiscar.classList.remove("green")
        botaoPiscar.classList.add("red")
        //Quando estiver escrito "Parar", o fundo do botão será vermelho
    } else {
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
        botaoPiscar.classList.remove("red")
        botaoPiscar.classList.add("green")
        //Quando estiver escrito "Piscar", o fundo do botão será verde
    }
}

//Eventos
getId("ligar")
    .addEventListener("click", ligarLampada)

getId("desligar")
    .addEventListener("click", desligarLampada)

getId("lampada")
    .addEventListener("mouseover", ligarLampada)

getId("lampada")
    .addEventListener("mouseleave", desligarLampada)

getId("lampada")
    .addEventListener("dblclick", quebrarLampada)

getId("piscar")
    .addEventListener("click", piscarLampada)