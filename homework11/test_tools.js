console.compareArrays = function (ar1, ar2) {
    this.assert(ar1.length === ar2.length, 'Lengths of arrays should be equal');

    for (var i = 0, i_ln = ar1.length; i < i_ln; i++) {
        this.assert(ar1[i] === ar2[i]);
    }
};