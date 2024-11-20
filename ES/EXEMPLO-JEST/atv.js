function Dividindo(a,b) {
    return a / b;
}

function Maior(num) {
    return num > 5;
}

function Nomes(name) {
    return `Olá, ${name}!`;
}

function Frutas() {
    return ['apple', 'banana', 'cherry'];
}

function Pessoa() {
    return {
        id: 1,
        name: 'Nakamura',
        isActive: true,
    };
}

module.exports = {
    Dividindo,
    Maior,
    Nomes,
    Frutas,
    Pessoa,
};