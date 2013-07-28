/*jslint devel: true, browser: true, plusplus: true*/
/*global $*/

// creation

var el = document.getElementById('lib'),
    $el = $('#lib');

console.assert($el[0] === el);

var $span = $('<span id="id"/>');

console.assert($span.length === 1);
console.assert($span[0].tagName === 'SPAN');
console.assert($span[0].getAttribute('id') === 'id');

console.assert($(document.getElementById('lib'))[0] === el);

// create collection

var $collection = $('.lib'),
    collection = document.getElementsByClassName('lib');

console.compareArrays($collection, collection);

// collections should not be live

var div = document.createElement('div');
div.className = 'lib';
document.body.appendChild(div);

console.assert($collection.length !== collection.length);

// find

var test = el.querySelector('.test'),
    $test = $el.find('.test');

console.assert($test[0] === test);

// find in collection

var $testsInCollection = $collection.find('.test');
var tests = document.getElementsByClassName('test');
console.compareArrays($testsInCollection, tests);

// on

var handlerInvoked = false;
$testsInCollection.on('click', function () {
    "use strict";
    handlerInvoked = true;
});

tests[0].click();
console.assert(handlerInvoked);

handlerInvoked = false;
tests[1].click();
console.assert(handlerInvoked);

// off

var anotherHandlerInvoked = false;
var handler = function () {
    "use strict";
    anotherHandlerInvoked = true;
};

$testsInCollection.on('click', handler);
$testsInCollection.off('click', handler);
handlerInvoked = false;

tests[0].click();
console.assert(handlerInvoked);
console.assert(!anotherHandlerInvoked);

// click

var clickCounter = 0;
$testsInCollection.click(function () {
    "use strict";
    clickCounter++;
});
$testsInCollection.click();
console.assert(clickCounter === 2);

// off without second argument

$testsInCollection.on('click', handler);
$testsInCollection.off('click');
handlerInvoked = false;

tests[0].click();
console.assert(!handlerInvoked);
console.assert(!anotherHandlerInvoked);

// css

$el.css({padding: '20px', margin: '30px'});
console.assert(el.style.padding === '20px');
console.assert(el.style.margin === '30px');

$el.css('padding', '10px');
console.assert(el.style.padding === '10px');

console.assert($el.css('padding') === '10px');

// attr

$el.attr({title: 'test', align: 'right'});
console.assert(el.getAttribute('title') === 'test');
console.assert(el.getAttribute('align') === 'right');

$el.attr('title', 'temp');
console.assert(el.getAttribute('title') === 'temp');

console.assert($el.attr('title') === 'temp');

// addClass

$el.addClass('element');
console.assert($el[0].className.indexOf('element') > -1);

$collection.addClass('collection');
console.collectionHasClass($collection, 'collection', true);

// hasClass true

console.assert($el.hasClass('element') === true);
console.assert($collection.hasClass('collection') === true);

// removeClass

$el.removeClass('element');
console.assert($el[0].className.indexOf('element') === -1);

$collection.removeClass('collection');
console.collectionHasClass($collection, 'collection', false);

// hasClass false

console.assert($el.hasClass('element') === false);
console.assert($collection.hasClass('collection') === false);

// toggleClass

$el.toggleClass('element');
console.assert($el[0].className.indexOf('element') > -1);

$collection.toggleClass('collection');
console.collectionHasClass($collection, 'collection', true);

$el.toggleClass('element');
console.assert($el[0].className.indexOf('element') === -1);

$collection.toggleClass('collection');
console.collectionHasClass($collection, 'collection', false);

// appendTo

$(div).appendTo(el);
console.assert(div.parentNode === el);
console.assert(div.previousSibling.className === 'test');
console.assert(el.lastChild === div);

// prependTo

$(div).prependTo(el);
console.assert(div.parentNode === el);
console.assert(div.nextSibling.className === 'test');
console.assert(el.firstChild === div);

// append

$(el).append($span);
console.assert($span[0].parentNode === el);
console.assert($span[0].previousSibling.className === 'test');
console.assert(el.lastChild === $span[0]);

// prepend

$(el).prepend($span);
console.assert($span[0].parentNode === el);
console.assert($span[0].nextSibling.className === 'lib');
console.assert(el.firstChild === $span[0]);

// insertAfter

$span.insertAfter(div);
console.assert($span[0].parentNode === el);
console.assert($span[0].previousSibling.className === 'lib');
console.assert($span[0].nextSibling.className === 'test');

// insertBefore

$span.insertBefore(div);
console.assert($span[0].parentNode === el);
console.assert(el.firstChild === $span[0]);
console.assert($span[0].nextSibling.className === 'lib');