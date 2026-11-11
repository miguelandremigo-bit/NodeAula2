const aluno = {
    nome: "Ana Paula",
    notas : [7.5, 8.0, 6.5],


media() {
    let soma = 0
    for(let i = 0; i < this.notas.length; i++){
        soma += this.notas[i]
    }
    return soma/this.notas.length
},

situacao(){
    const m = this.media()
    if(m >= 7) return "Aprovado"
    if(m >= 5) return "Recuperação"
    return "Reprovado"
}
}

/*console.log(aluno.nome)
console.log(aluno.media().toFixed(1))
console.log(aluno.situacao())*/

aluno.curso = "Node.js APIs" // propriedade nova
aluno.notas = [9.0, 8.0, 7.0] // substitui a lista de notas
aluno.falta = 2 // mais uma propriedade
console.log(aluno.curso)
console.log(aluno.nome)
console.log(JSON.stringify(aluno, null, 2))