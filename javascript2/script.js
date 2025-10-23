// 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.
let a = parseFloat(prompt("Digite o Primeiro valor:  "))
let b = parseFloat(prompt("Digite o Segundo valor:  "))
let c = parseFloat(prompt("Digite o Terceiro valor:  "))
let soma = (a+b)
if (soma < c ) {
    alert( soma + "   é menor que:   " +  c )
}
if (soma > c) {
    alert( soma + "   é maior que:   " +  c )
}
