const divisao = require ('./divisao.js');

test('[Divisao]: deve ser 0 ou Infinito', ()=> {
    expect(divisao(8, 0)).toBe(0);
});