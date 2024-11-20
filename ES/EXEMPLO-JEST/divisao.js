function divisao(a, b) {
    if((a / b) == Infinity){
        return 0;
    }else {
        return a / b;
    }
}
module.exports = divisao;