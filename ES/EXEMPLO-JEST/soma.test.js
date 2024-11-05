const soma = require ('./soma.js');

test('[SOMA]: 1 + 2 deve ser 3', ()=> {
    expect(soma(1, 2)).toBe(3);
});