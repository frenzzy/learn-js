/*jslint devel: true*/

var el = document.getElementById('lib');

console.assert(
    $('#lib') === el,
    "$(selector) test failed"
);

el.innerHTML = $('<span>span</span>');

console.assert(
    el.innerHTML === '<span>span</span>',
    "$(html) test failed"
);

console.assert(
    $(document.getElementById('lib')) === el,
    "$(element) test failed"
);