let notas_trimestrais = [7, 8, 6, 5]

let soma_notas = 0

const quantidades_notas = notas_trimestrais.length

for ( let contador = 0; contador < quantidades_notas; contador++)
{
    soma_notas = soma_notas + notas_trimestrais[contador]
}

let media = soma_notas / quantidades_notas

if (media >=6) {
    console.log("Sua media é: " +media+ " Aprovado")
} else {
    console.log("Sia media é: " +media+ " Reprovado")
}