let valor_produto = 1000
let numero_parcelas = 5

for (let contador = 1 ; contador <=numero_parcelas; contador++)
{
    let valor_parcela = valor_produto / contador
    console.log("Numero de parcelas " + contador + "Valor da parcela: " + valor_parcela.toFixed(2))
}