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

function creerMultipliateur(n,x) {
    if (x === undefined){
        return function (p) {
          return n*p;
        }
    } else {
        return n*x;
    }
}

function power(n,x) {
    if (x === undefined){
        return function (a) {
            return a*x;
        }
    } else {
        return Math.pow(n,x);
    }
}

function formatter(a) {
    return function (str) {
        return a + ' : ' + str;
    }
}

function write(message) {
    console.log(message);
}

function writeAlert(message) {
    alert(message);
}