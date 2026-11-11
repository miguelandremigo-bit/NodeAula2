function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3
}

function situacao(media){
    if(media >= 7 ) return "Aprovado";
    if(media >= 5 ) return "Recuperação";
    return "Reprovado";
}

const sala26 = [
    {nome: "Gabriel", p1:10, p2:8, p3:9},
    {nome: "Geovana", p1:5, p2:6, p3:7},
    {nome: "Mikaela", p1: 4, p2: 5, p3: 4}
]

for(let i = 0; i< sala26.length; i++){
    const m = media3(sala26[i].p1, sala26[i].p2, sala26[i].p3)
    console.log(`O aluno ${sala26[i].nome} obteve a média ${m.toFixed(1)} `)

}

