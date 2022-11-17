function somaNumeros(n1, n2) {
    return console.log('resultado', n1 + n2)
}

somaNumeros(2, 3)
somaNumeros(50, 13)

function calculaMedia(nomeAluno, nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3) / 3
    console.log('A nota do aluno ', nomeAluno, ' é: ', resultado.toFixed(1))
}

calculaMedia('Orlando', 2.5, 10.0, 6.0)

const decideNumero = (numero) => {
    if (numero >= 6) {
        return console.log('O número ', numero, ' é maior ou igual a 6.')
    } else {
        return console.log('O número ', numero, ' é menor que 6')
    }
}

let numeroFora = 10
decideNumero(6)
decideNumero(1)
decideNumero(numeroFora)
