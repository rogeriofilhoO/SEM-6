function division (a, b) {
    let x = a / b;

    if(x == Infinity) {
        return 0;
    } else {
        return a / b ;
    }
}

module.exports = division;