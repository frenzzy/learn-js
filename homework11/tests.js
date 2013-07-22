/*jslint devel: true*/

// creation

var el = document.getElementById('lib'),
    $el = $('#lib');

console.assert(
    $el[0] === el,
    "$(selector) test failed"
);

var $span = $('<span id="id"/>');
console.assert($span.length == 1, '');
console.assert($span[0].tagName == 'span');
console.assert($span[0].getAttribute('id') == 'id');

console.assert(
    $(document.getElementById('lib'))[0] === el,
    "$(element) test failed"
);

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

console.assert(
    $test[0] === test,
    "$(selector) test failed"
);

// find in collection

var $testsInCollection = $collection.find('.test');
var tests = document.getElementsByClassName('test');
console.compareArrays($testsInCollection, tests);

// on

var handlerInvoked = false;
$testsInCollection.on('click', function () {
    handlerInvoked = true;
});

tests[0].click();
console.assert(handlerInvoked);

handlerInvoked = false;
tests[1].click();
console.assert(handlerInvoked);

// off

var anotherHandlerInvoked = false;
var handler = function(){
    anotherHandlerInvoked = true;
};

$testsInCollection.on('click', handler);
$testsInCollection.off('click', handler);
handlerInvoked = false;

tests[0].click();
console.assert(handlerInvoked);
console.assert(!anotherHandlerInvoked);

// off without second argument

$testsInCollection.on('click', handler);
$testsInCollection.off('click');
handlerInvoked = false;

tests[0].click();
console.assert(!handlerInvoked);
console.assert(!anotherHandlerInvoked);


$el.css({padding: '20px', margin: '30px'});
$el.css('padding', '20px');
$el.css('padding'); // '20px'




