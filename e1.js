/**
 * Retourne le plus petit des deux nombres
 * @param a
 * @param b
 * @returns {*}
 */
function min(a,b) {
    if (a<b)
        return a;
    else
        return b;
}

/**
 * Retourne le plus grand des deux nombres
 * @param a
 * @param b
 * @returns {*}
 */
function max(a,b) {
    if (a>b)
        return a;
    else
        return b;
}

/**
 * Compte de 1 à 100 et affiche des trucs
 */
function hundred() {
    for (var i=1;i<=100;i++){
        console.log(i);
        if (i%3 === 0)
            console.log('woueee');
        if (i%5 === 0)
            console.log('yoooo');
        if (i === 73)
            console.log('Biinnngooo')
    }
}

/**
 * Calcule une puissance avec une boucle
 * @param x
 * @param n
 * @returns {number}
 */
function powerFor(x,n) {
    var res = 1;
    for (var i=0;i<n;i++){
        res *= x;
    }
    return res;
}

/**
 * Calcule une puissance avec une fonction recursive
 * @param x
 * @param n
 * @returns {number}
 */
function powerRec(x, n) {
    return n == 0? 1 : x * powerRec(x, --n);
}