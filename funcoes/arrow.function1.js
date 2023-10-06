const retorna_media = (nota_1, nota_2, nota_3) => {

    let media = (nota_1 + nota_2 + nota_3) / 2;
    return media;

}

let media_aluno = retorna_media(9, 8, 7);
console.log("A média do aluno é: " + media_aluno);
