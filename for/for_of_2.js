let cliente_array = [
    {id:1, nome:"Monica", telefone:"99999-6565"},
    {id:2, nome:"Tânia", telefone:"99999-6666"},
    {id:3, nome:"Carlos", telefone:"99999-6767"}
]

for ( let cliente of cliente_array){
    let nome = cliente.nome
    let telefone = cliente.telefone

    console.log("Nome: "+ nome + " , " + " Telefone: " + telefone )
}

