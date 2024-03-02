
let firstNumber = prompt("Entre com o primeiro número:")
let secondNumber = prompt("Entre com o segundo número:")


let sum = Number(firstNumber) + Number(secondNumber)
alert("A soma dos dois números é: "+sum)

let sub = Number(firstNumber) - Number(secondNumber)
alert("A subtração dos dois números é: "+sub)

let mult = Number(firstNumber) * Number(secondNumber)
alert("A multiplicação dos dois números é: "+mult)

let div = Number(firstNumber) / Number(secondNumber)
alert("A divisão dos dois números é: "+div.toFixed(2))

let rest = Number(firstNumber) % Number(secondNumber)
alert("O resto da divisão dos dois números é: "+rest)

if (sum % 2 === 0) {
  alert("A soma dos dois números é par = " +sum)
}
else {
  alert("A soma dos dois números é ímpar = " +sum)
}

if (firstNumber === secondNumber) {
  alert ("Os números inserido são iguais.")
  }
  else {
    alert(" Os números inseridos são diferentes.")
  }