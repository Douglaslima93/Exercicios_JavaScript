let valor_produto = 1000

for (let contador = 1; contador <=5; contador++)
{
    let valor_parcela = valor_produto / contador
    console.log("Numero de Parcela " + contador + "Valor da parcela " + valor_parcela.toFixed(2))
}