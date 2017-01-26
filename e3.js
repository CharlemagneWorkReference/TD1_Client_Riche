function range(a,b) {
    var res = [];
    for (var i=a;i<=b;i++){
        res.push(i);
    }
    return res;
}

function sum(tab) {
    var sum = 0;
    for (var i=0; i< tab.length; i++){
        sum += tab[i];
    }
    return sum;
}

function sumEach(tab) {
    var sum = 0;
    tab.forEach(function (e) {
        sum += e;
    });
    return sum;
}

function mean(tab) {
    var sum = sum(tab);
    return sum/tab.length;
}

function meanEach(tab) {
    var sum = sumEach(tab);
    return sum/tab.length;
}

function containEmphasis(needle,haystack) {
    var res = [];
    haystack.forEach(function (e) {
        if (e.contains(needle)){
            res.push(e.toUpperCase());
        }
    });
    return res;
}

