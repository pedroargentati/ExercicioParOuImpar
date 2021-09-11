var numberComputer = ''
var numberPlayer = ''
var myChoice = ''

function sortear(max) {
    return Math.floor(Math.random() * max)
}

function play() {
    numberPlayer = document.querySelector("#myNumber").value
    numberComputer = sortear(5)
    myChoice = document.querySelector('input[type="radio"]:checked').value
    console.log("minha escolha", myChoice)
    if(!numberPlayer) {
        return alert('Você deve inserir um número primeiro.')
        
}

    numberPlayer = parseInt(numberPlayer)
    var total = numberPlayer + numberComputer
    var result = (total % 2 === 0) ? 'Par' : 'Ímpar'

    verifyResult(result)
}

function verifyResult(result) {
    if(myChoice === result) {
        alert("Você venceu!")
    }else {
        alert("O computador ganhou! Tente novemente.")
    }
}


