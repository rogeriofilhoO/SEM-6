const { Maior, Nomes, Frutas, Pessoa, Dividindo } = require('./atv.js');

describe('Testando', () => {
    test('número for maior que 5', () => {
        expect(Maior(10)).toBeTruthy(); // Boolean 
        expect(Maior(4)).toBe(false); // negativa
    });

    test('a string correta', () => {
        expect(Nomes('Alice')).toMatch(/Olá, Alice!/); // Strings
    });

    test('Divisão que dá 1', () => {
        expect(Dividindo(5 , 5)).toBe(1); // Número
    });

    test('"banana" na lista de frutas', () => {
        expect(Frutas()).toContain('banana'); //Arrays
    });

    test('"name" com o valor correto no objeto usuário', () => {
        expect(Pessoa()).toHaveProperty('name', 'Nakamura'); //objetos
    });

    test('um número maior que 5', () => {
        expect(10).toBeGreaterThan(5); // números
    });
});