/*jslint nomen: true, devel: true*/
/*global inherit, View*/

/**
 * Содержит информацию о списке
 * @param {Element} element
 * @constructor
 */
function List(element) {
    "use strict";

    View.call(this, element);

    this._initDraggable();
}

inherit(List, View);

List.prototype.events = {
    "dragstart li": "_onDragStart",
    "dragover *": "_onDragOver",
    "dragover": "_onDragOver",
    "drop *": "_onDrop",
    "drop": "_onDrop"
};

/**
 * Добавляет элемент в список
 * @param {Element} item
 * @returns {Object}
 * @protected
 */
List.prototype._addItem = function (item) {
    "use strict";

    this._element.appendChild(item);

    return this;
};

/**
 * Включает нативное перетаскивание элементов
 * @private
 */
View.prototype._initDraggable = function () {
    "use strict";

    var item = this._element.childNodes[0];

    while (item) {
        if (item.nodeType === 1) {
            item.setAttribute('draggable', 'true');
        }
        item = item.nextSibling;
    }

    this._element.setAttribute('dropzone', 'move string:text/html');
};

List.prototype._onDragStart = function (event) {
    "use strict";

    event.dataTransfer.setData("text/html", event.target);
    //event.dataTransfer.effectAllowed = "copyMove";
    //event.dataTransfer.dropEffect = "move";

    View.dragItem = event.target;
};

View.prototype._onDragOver = function (event) {
    "use strict";

    event.preventDefault();
};

View.prototype._onDrop = function (event) {
    "use strict";

    var data = event.dataTransfer.getData("text/html");
    console.log(data);

    if (View.dragItem) {
        this._addItem(View.dragItem);
        View.dragItem = null;
    }

    event.preventDefault();
};