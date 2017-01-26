function creerMultiplicateur(n) {
    return function (x) {
        return x*n;
    }
}

function creerSequence(init,step) {
    return function () {
        console.log('Init:' + init + "\r\n" + 'Step:' + step);
        creerSequence(init+step,step);
    }
}

