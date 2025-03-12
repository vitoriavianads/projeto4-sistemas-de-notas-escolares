const { calcularMedia, verificaAprovacao, adicionarNota } = require('../src/notas')

describe('Funções de notas', () => {
    test('Calcular média corretamente', () => {
        expect(calcularMedia([8,9,10])).toBe(9)
        expect(calcularMedia([5,5,5])).toBe(5)
    })

    test('Deve lançar erro para lista de notas vazias', () => {
        expect(() => calcularMedia([])).toThrow('Lista de notas vazia')
    })

    test('Verificar aprovação, deve retornar "Aprovado" para média >= 6', () => {
        expect(verificaAprovacao(6)).toBe('Aprovado')
        expect(verificaAprovacao(9)).toBe('Aprovado')
    }) 

    test('Verificar aprovação, deve retornar "Reprovado" para média < 6', () => {
        expect(verificaAprovacao(5.9)).toBe('Reprovado')
        expect(verificaAprovacao(2)).toBe('Reprovado')
    })

    test('Adicionar Notas, deve adicionar uma nova nota ao array', () => {
        const notas = [8, 8]
        const resultado = adicionarNota(notas, 9)
        expect(resultado).toEqual([8,8, 9])
    })
})