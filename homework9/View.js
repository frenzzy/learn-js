/*jslint nomen: true, devel: true, browser: true*/

/**
 * Управляет DOM элементами
 * @param {Element} element
 * @constructor
 */
function View(element) {
    "use strict";

    /**
     * Хранит DOM элемент
     * @type {Element}
     * @private
     */
    this._element = element;

    this._initDraggable();

    if (!View._initialized) {
        View._initialized = true;
        this._initEvents();
    }

    element.addEventListener('dragenter', this._onDragEnter.bind(this));
    element.addEventListener('dragover', this._onDragOver.bind(this));
    element.addEventListener('dragleave', this._onDragLeave.bind(this));
    element.addEventListener('drop', this._onDrop.bind(this));
}

View.dragItem = null;

/**
 * Включает нативное перетаскивание элементов
 * @private
 */
View.prototype._initDraggable = function () {
    "use strict";

    var element = this._element.childNodes[0];

    while (element) {
        if (element.nodeType === 1) {
            element.setAttribute('draggable', 'true');
        }
        element = element.nextSibling;
    }
};

/**
 * Подключает обработчики событий
 * @private
 */
View.prototype._initEvents = function () {
    "use strict";

    document.addEventListener('dragstart', this._onDragStart.bind(this));
};

View.prototype._onDragStart = function (event) {
    "use strict";

    View.dragItem = event.target;
};

View.prototype._onDragEnter = function (event) {
    "use strict";

    this.addClass('over');

    return false;
};

View.prototype._onDragOver = function (event) {
    "use strict";

    if (event.preventDefault) {
        event.preventDefault();
    }

    this.addClass('over');

    event.dataTransfer.dropEffect = 'move';

    return false;
};

View.prototype._onDragLeave = function (event) {
    "use strict";

    this.removeClass('over');
};

View.prototype._onDrop = function (event) {
    "use strict";

    if (event.stopPropagation) {
        event.stopPropagation();
    }

    if (View.dragItem) {
        this._addItem(View.dragItem);
        View.dragItem = null;
    }

    return false;
};

/**
 * Обрабатывает события
 * @param {Event} event
 * @private
 * @deprecated
 */
View.prototype._handleEvent = function (event) {
    "use strict";

    if (event.target.tagName.toLowerCase() === 'li') {
        if (event.target.className.indexOf('active') === -1) {
            event.target.className += (event.target.className ? ' ' : '') + 'active';
        }

        setTimeout(function () {
            this.className = this.className.replace(/(?:^|\\s)active(?!\\S)/, '');
        }.bind(event.target), 500);
    }
};

/**
 * Добавляет DOM элемент
 * @param {Element} item
 * @returns {Object}
 * @protected
 */
View.prototype._addItem = function (item) {
    "use strict";

    this._element.appendChild(item);

    return this;
};

/**
 * Проверяет элемент на наличие css класса
 * @param {String} className
 * @returns {Boolean}
 */
View.prototype.hasClass = function (className) {
    "use strict";

    return this._element.className.indexOf(className) !== -1;
};

/**
 * Добавляет css класс элементу
 * @param {String} className
 * @returns {Object}
 */
View.prototype.addClass = function (className) {
    "use strict";

    if (!this.hasClass(className)) {
        this._element.className += (this._element.className ? ' ' : '') + className;
    }

    return this;
};

/**
 * Удаляет css класс у элемента
 * @param {String} className
 * @returns {Object}
 */
View.prototype.removeClass = function (className) {
    "use strict";

    this._element.className = this._element.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');

    return this;
};