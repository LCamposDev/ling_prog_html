function exe1(){
    // recupera os dados do usuário
    // vamos converter o que usuário digita, que é um texto, para um número
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // processamento
    let resultado = nro1 - nro2
    // mostrar o resultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe2(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    // processamento
    let resultado = nro1 * nro2 * nro3
    // resultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe3(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // estrutura de seleção
    if (nro2 == 0){
        document.getElementById("resultado").innerHTML = "Impossível dividir por zero"
    }
    else {
        let resultado = nro1 / nro2
        document.getElementById("resultado").innerHTML = resultado
    }
}

function exe20(){
// entrada de dados
let angulo = Number(document.getElementById("angulo").value)
let distancia = Number(document.getElementById("distancia").value)
// processamento
let hipotenusa = distancia / Math.cos(angulo)
// saída
document.getElementById("resultado").innerHTML = hipotenusa

}

function exe15(){
// entrada de dados
let salario = Number(document.getElementById("salario").value)
let cont1 = Number(document.getElementById("cont1").value)
let cont2 = Number(document.getElementById("cont2").value)
// processamento
let multa1 = cont1 * 2 / 100
let multa2 = cont2 * 2 / 100

let resultado = salario - (cont1 + multa1) - (cont2 + multa2)

document.getElementById("resultado").innerHTML = resultado
}

function exe6(){
// entrada de dados
let salario = Number(document.getElementById("salario").value)
let venda = Number(document.getElementById("venda").value)
// processamento
let venda_final = venda * 4 / 100
let resultado = venda_final + salario

document.getElementById("resultado").innerHTML = resultado

}


function exe8(){
// entrada de dados
let Kilo = Number(document.getElementById("Kilo").value)
// processamento
let resultado = Kilo * 1000

document.getElementById("resultado").innerHTML = resultado

}

function exe10(){
// entrada de dados
let lado = Number(document.getElementById("lado").value)
// processamento
let resultado = lado * lado

document.getElementById("resultado").innerHTML = resultado
    
}