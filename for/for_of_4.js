let notas_trimestrais = [9, 7, 6, 8]

let total_notas = notas_trimestrais.length
let soma_notas = 0

for ( let nota of notas_trimestrais){
    soma_notas = soma_notas + nota
}

let media = soma_notas / total_notas

console.log("Media: " + media)

if (media >= 7){
    console.log("Parabéns esta aprovado")
} else if (media >=6 && media < 7){
    console.log("Você esta de recuperação")
}else {
    console.log("Você esta reprovado")
}