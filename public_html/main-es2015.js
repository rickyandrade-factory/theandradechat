(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-sidebar/admin-sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-sidebar/admin-sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"text-center\" routerLink=\"/\">\n    <span class=\"logo-mini\">\n        <img class=\"navbar-brand-logo\" src=\"assets/circle-chat7.png\" style=\"max-width: 130px;\">\n        <img class=\"navbar-brand-logo appicon\" src=\"assets/appicon_cc.png\" style=\"max-width: 50px;margin: 0 auto; padding: 10px 0;\">\n    </span>\n</a>\n<div id=\"team-wrapper\" header-company-sidebar=\"\"\n    style=\"position:static; min-width: 300px; padding: 10px;margin-bottom: 4px;border: none;\">\n    <img class=\"sidebar-avatar usr_img\" src=\"assets/mini-logo.png\" *ngIf=\"!adminImgPath\" (click)=\"openteamavatar()\">\n\n    <img class=\"sidebar-avatar usr_img\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\" (click)=\"openteamavatar()\">\n    <div class=\"teamName\" title=\"MarketMastersAcademy\">\n        <h5 class=\"ng-binding\">MarketMastersAcademy</h5>\n        <mat-slide-toggle class=\"pull-left theme\" [(ngModel)]=\"blackTheme\" (click)=\"onBlackTheme()\" color=\"warn\">\n        </mat-slide-toggle>\n    </div>\n</div>\n<ul class=\"nav nav-sidebar\">\n    <li>\n        <a routerLink=\"dashboard\" routerLinkActive=\"selectedRoom\" class=\"flex-parent dashboard-link\">\n            <i class=\"fa fa-dashboard fa-fw\"></i>\n            <span class=\"room-name ng-binding\">Dashboard</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"contacts\" routerLinkActive=\"selectedRoom\" class=\"flex-parent users-link\">\n            <i class=\"fa fa-users fa-fw\"></i>\n            <span class=\"ng-binding\">Contacts</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"sales\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-usd fa-fw\"></i>\n            <span>Sales</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"offers\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-percent fa-fw\"></i>\n            <span>Offers</span>\n        </a>\n    </li>\n    <li class=\"divider no-line\"></li>\n    <li>\n        <a routerLink=\"billing\" routerLinkActive=\"selectedRoom\" class=\"flex-parent billing-link \">\n            <i class=\"fa fa-credit-card fa-fw\"></i>\n            <span>Billing Plans</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"coupons\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-tags fa-fw\"></i>\n            <span>Coupons</span>\n        </a>\n    </li>\n    <li class=\"divider no-line\"></li>\n    <li>\n        <a routerLink=\"chatrooms\" routerLinkActive=\"selectedRoom\" class=\"flex-parent chatroom-link\">\n            <i class=\"fa fa-comments-o fa-fw\"></i>\n            <span>Chatrooms</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"services\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-files-o fa-fw\"></i>\n            <span>Services</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"widgets\" routerLinkActive=\"selectedRoom\" class=\"flex-parent  widget-link\">\n            <i class=\"fa fa-cubes fa-fw\"></i>\n            <span>Widgets</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"registration-settings\" routerLinkActive=\"selectedRoom\" class=\"flex-parent  widget-link\">\n            <i class=\"fa fa-cogs fa-fw\"></i>\n            <span>Registration Settings</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"marketing\" routerLinkActive=\"selectedRoom\" class=\"flex-parent  widget-link\">\n            <i class=\"fa fa-bullhorn fa-fw\"></i>\n            <span>Marketing</span>\n        </a>\n    </li>\n    <li class=\"divider no-line\"></li>\n    <li>\n        <a routerLink=\"onlineactivity\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-podcast fa-fw\"></i>\n            <span>Online Activity</span>\n        </a>\n    </li>\n    <li>\n        <a routerLink=\"compliance\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\" href=\"#\">\n            <i class=\"fa fa-balance-scale fa-fw\"></i>\n            <span>Compliance</span>\n        </a>\n    </li>\n    <li class=\"divider no-line\"></li>\n    <li>\n        <a routerLink=\"api\" routerLinkActive=\"selectedRoom\" class=\"flex-parent\">\n            <i class=\"fa fa-code fa-fw\"></i>\n            <span>API\n                <small class=\"badge\" style=\"font-size: .6rem;\n                padding: 2px 4px;\n                margin: 0 0 0 5px; \n                background: #FFF;\n                border-radius: 3px;\n                color: #666;\n                line-height: 1rem;\">BETA</small>\n            </span>\n        </a>\n    </li>\n    <li class=\"divider no-line\"></li>\n    <li>\n        <a class=\"flex-parent  video-link\">\n            <i class=\"fa fa-youtube fa-fw\"></i>\n            <span>Video Tutorials</span>\n        </a>\n    </li>\n    <li>\n        <a class=\"flex-parent  tour-link\" onclick=\"guidedtour()\">\n            <i class=\"fa fa-graduation-cap fa-fw\"></i>\n            <span>Guided Tour</span>\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"login-container admin-dashboard\">\n    <mat-sidenav #drawer7 mode=\"side\" opened class=\"example-sidenav\">\n        <app-admin-sidebar></app-admin-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <div class=\"navbar navbar-fixed-top navbar-inverse navbar-static-top\" style=\"position:static;\">\n            <div class=\"example-sidenav-content\">\n                <button class=\"hamburgerHeader hamburger hamburger-arrow-left sidebar-toggle\" >\n                    <span class=\"icon\"></span>\n                </button>\n            </div>\n            <div class=\"roomHeader\">\n                <i class=\"fa\" ng-class=\"{'roomLock': room.n_type==2 , 'fa-unlock': room.n_type==2}\"\n                    aria-hidden=\"true\"></i>\n                <div header-nav-trial=\"\" class=\"nav-trial-container\">\n                    <div class=\"nav-trial-container-text ng-binding\"></div>\n                </div>\n            </div>\n            <app-topbar></app-topbar>\n        </div>\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminapi/adminapi.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminapi/adminapi.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n        API Events History\n    </h1>\n</section>\n<section class=\"content admin-payments\">\n    <div class=\"media\">\n        <div class=\"media-body\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <div class=\"empty\" style=\"margin: 0;position: relative;padding: 5rem;\">\n                        no events were found for\n                        <br>\n                        <strong class=\"ng-binding\">September 2, 2019</strong>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"media-right\">\n            <div style=\"width: 400px;\">\n                <div class=\"box box-default\">\n                    <div class=\"box-body text-center\">\n                        <!-- <mat-form-field class=\"example-full-width\">\n                                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                                    <mat-datepicker #picker></mat-datepicker>\n                                  </mat-form-field>\n                                  <button mat-raised-button (click)=\"picker.open()\">Open</button> -->\n                    </div>\n                </div>\n                <div class=\"box box-default\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">\n                            Token\n                        </h3>\n                    </div>\n                    <div class=\"box-body\">\n                        <p>Echofin's API allows the integration with third-party systems. Please generate your\n                            authentication token.</p>\n                        <p>Every token is bound to the underlying administrator level account.</p>\n                        <p>For more details on how to use the web API please refer to the web API\n                            <a target=\"_blank\" href=\"#\">documentation</a>.</p>\n                        <div ng-if=\"!vm.currentApiKey\" class=\"ng-scope\">\n                            You do not have any key generated yet. Click generate button to create a new one.\n                            <hr>\n                            <div class=\"text-center\">\n                                <button class=\"btn btn-blue\" type=\"button\">Generate</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminbilling/adminbilling.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminbilling/adminbilling.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Billing Plans\n  </h1>\n</section>\n<section class=\"content admin-user admin_payouts\">\n  <div class=\"toolbox\">\n    <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n      <span class=\"fa fa-plus fa-fw\"></span> New Billing\n    </button>\n    <div class=\"pull-right\">\n      <button class=\"btn btn-default\" (click)=\"onActiveSearch()\">\n        <span class=\"fa fa-search\"></span> Search\n      </button>\n      <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n        <span class=\"fa fa-refresh fa-fw\"></span>\n      </button>\n    </div>\n  </div>\n  <div class=\"mat-elevation-z8 box box-default\">\n    <table class=\"searchTable\" mat-table [dataSource]=\"dataSource\" matSort\n      [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n      <!-- name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"onoff\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> One-Off\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.onoff}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"currency\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Currency\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.currency}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Price\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.price}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"cycle\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Cycle\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.cycle}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"term\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Term\n\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.term}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"alter\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <a mat-icon-button color=\"warn\">\n            <i class=\"fa fa-trash fa-fw\"></i>\n          </a>\n        </td>\n      </ng-container>\n\n\n\n      <!-- name search Column -->\n      <ng-container matColumnDef=\"nameSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Name\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- description search Column -->\n      <ng-container matColumnDef=\"descriptionSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Description\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- oneOff search Column -->\n      <ng-container matColumnDef=\"oneOffSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"One-Off\">\n              <mat-option value=\"YES\">YES</mat-option>\n              <mat-option value=\"NO\">NO</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- currency search Column  -->\n      <ng-container matColumnDef=\"currencySearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Currency\">\n              <mat-option value=\"USD\">USD</mat-option>\n              <mat-option value=\"EUR\">EUR</mat-option>\n              <mat-option value=\"GBP\">GBP</mat-option>\n              <mat-option value=\"CAD\">CAD</mat-option>\n              <mat-option value=\"AUD\">AUD</mat-option>\n              <mat-option value=\"JPY\">JPY</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- price search Column -->\n      <ng-container matColumnDef=\"priceSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Price\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- cycle search Column  -->\n      <ng-container matColumnDef=\"cycleSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Cycle\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--term search Column -->\n      <ng-container matColumnDef=\"termSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Term\">\n              <mat-option value=\"DAY\">DAY</mat-option>\n              <mat-option value=\"MONTH\">MONTH</mat-option>\n              <mat-option value=\"YEAR\">YEAR</mat-option>\n              <mat-option value=\"FOREVER\">FOREVER</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty1\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n \n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [ngClass]=\"{'activeSearchHeader': searchActive == true}\">\n      </tr>\n      <tr mat-header-row\n        *matHeaderRowDef=\"['nameSearch', 'descriptionSearch', 'oneOffSearch','currencySearch','priceSearch', 'cycleSearch','termSearch','empty1']\"\n        [ngClass]=\"{'activeRow': searchActive == true}\" style=\"display: none;\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n      No data available\n    </div>\n    <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n    <mat-progress-spinner [mode]=\"mode\">\n    </mat-progress-spinner>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminchatroom/adminchatroom.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminchatroom/adminchatroom.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <section class=\"content-header\">\n      <h1>\n        Chatrooms\n      </h1>\n    </section>\n    <section class=\"content admin-user admin_payouts\">\n      <div class=\"toolbox\">\n        <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n          <span class=\"fa fa-plus fa-fw\"></span> New Chatroom\n        </button>\n        <div class=\"pull-right\">\n          <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n            <span class=\"fa fa-refresh fa-fw\"></span>\n          </button>\n        </div>\n      </div>\n      <div class=\"mat-elevation-z8 box box-default\">\n        <table mat-table [dataSource]=\"rooms\" matSort\n        [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let row\">{{row.title}} </td>\n          </ng-container>\n          <!-- Description Column -->\n          <ng-container matColumnDef=\"description\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n          </ng-container>\n          <!-- Type Column -->\n          <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\n            <td mat-cell class=\"text-capitalize\" *matCellDef=\"let row\"> {{row.status}} </td>\n          </ng-container>\n          <!-- Plan Column -->\n          <ng-container matColumnDef=\"plan\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Plan </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.plan ? row.plan : 'USD'}} </td>\n          </ng-container>\n          <!-- Coupon Column -->\n          <ng-container matColumnDef=\"coupon\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Coupon </th>\n            <td mat-cell *matCellDef=\"let row\"> {{getCoupons(row.coupon)}} </td>\n          </ng-container>\n          <!-- Sort Column -->\n          <ng-container matColumnDef=\"sort\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Sort</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.sort}} </td>\n          </ng-container>\n          <!-- Checkout Column -->\n          <ng-container matColumnDef=\"checkout\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Checkout</th>\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.checkout}} </td>\n          </ng-container>\n          <!-- Action Column -->\n          <ng-container matColumnDef=\"alter\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">\n              <a mat-icon-button color=\"warn\" (click)=\"deleteRoom(row)\">\n                <i class=\"fa fa-trash fa-fw\" ></i>\n              </a> \n              <a mat-icon-button color=\"primary\" (click)=\"editRoom(row)\">\n                <i class=\"fa fa-edit fa-fw\" ></i>\n              </a> \n            </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n        <mat-progress-spinner  [mode]=\"mode\">\n        </mat-progress-spinner>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admincompliance/admincompliance.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admincompliance/admincompliance.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Compliance\n  </h1>\n</section>\n<section class=\"content admin-user admin_payouts\">\n  <div class=\"toolbox\">\n    <form class=\"form-inline pull-left\">\n      <div class=\"form-group\">\n        <mat-form-field>\n          <mat-label>Report</mat-label>\n          <mat-select value=\"Report\">\n            <mat-option value=\"Session\">Session</mat-option>\n            <mat-option value=\"Messages\">Messages</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group\">\n        <mat-form-field>\n          <mat-label>Room</mat-label>\n          <mat-select value=\"Room\" aria-disabled=\"false\">\n            <mat-option value=\"room1\">room1</mat-option>\n            <mat-option value=\"room2\">room2</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group\">\n        <mat-form-field color=\"accent\">\n          <mat-label>From</mat-label>\n          <input matInput [matDatepicker]=\"picker1\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group\">\n        <mat-form-field color=\"accent\">\n          <mat-label>To</mat-label>\n          <input matInput [matDatepicker]=\"picker2\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <button class=\"btn btn-blue\">\n        <span class=\"fa fa-cog fa-fw\"></span> Export\n      </button>\n    </form>\n    <div class=\"pull-right\">\n      <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n        <span class=\"fa fa-refresh fa-fw\"></span>\n      </button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"mat-elevation-z8 box box-default\">\n    <table mat-table [dataSource]=\"dataSource\" matSort [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.date}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"user\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> User </th>\n        <td mat-cell *matCellDef=\"let row\"><a href=\"#\">{{row.user}}</a></td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"ip\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>IP</th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.ip}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"report\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Report</th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.report}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n      No data available\n    </div>\n    <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n    <mat-progress-spinner [mode]=\"mode\">\n    </mat-progress-spinner>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/admincontacts.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admincontacts/admincontacts.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Contacts\n  </h1>\n</section>\n<section class=\"content admin-user\">\n  <div class=\"toolbox\">\n    <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n      <span class=\"fa fa-plus\"></span> Add Contact\n    </button>\n    <button class=\"btn btn-default\" (click)=\"openInviteContactDialog()\">\n      <span class=\"fa fa-plus\"></span> Invite Contact\n    </button>\n    <button class=\"btn btn-default\" (click)=\"exporter.exportTable('xlsx')\">\n      <span class=\"fa fa-download \"></span> Export\n    </button>\n    <div class=\"pull-right\">\n      <button ng-click=\"vm.changeColumns()\" uib-popover-template=\"'myPopoverTemplate.html'\"\n        popover-placement=\"bottom-right\" popover-append-to-body=\"true\" type=\"button\" class=\"btn btn-default\">\n        <span class=\"fa fa-columns\"></span>\n        Columns\n      </button>\n      <button class=\"btn btn-default\" (click)=\"onActiveSearch()\">\n        <span class=\"fa fa-search\"></span> Search\n      </button>\n      <button class=\"btn btn-default\" ng-click=\"vm.LoadUsers()\" (click)=\"loadContacts()\">\n        <span class=\"fa fa-refresh fa-fw\" ng-class=\"{'fa-spin':vm.loading}\"></span>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"mat-elevation-z8 box box-default\">\n    <table class=\"searchTable\" mat-table matTableExporter #exporter=\"matTableExporter\"\n      [ngClass]=\"{'ActiveSpinner': showSpinner == true}\" [dataSource]=\"dataSource\" matSort>\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"img\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <img class=\"img-circle img-sm\" *ngIf=\"row.imgPath\" src=\"{{row.imgPath}}\">\n          <span class=\"nickname\" *ngIf=\"!row.imgPath\" [ngStyle]=\"{'backgroundColor': getRandomColor()}\">\n            {{row.firstname | substring}}{{row.lastname | substring}}\n          </span>\n        </td>\n      </ng-container>\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"fullname\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          Name\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          {{row.firstname}} {{row.lastname}}</td>\n      </ng-container>\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          {{row.email}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.phone_number}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"subscription\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Subscription\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{ row.subscription && row.subscription || 'N/A' }} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Type\n        </th>\n        <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{'adminClass' : row.role_id == 1}\">\n          {{row.role_id === 1 ? \"Admin\" : \"User\"}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"devices\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile Devices</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <!-- <span class=\" badge-ios\"\n          [ngClass]=\"{'badge': row.deviceNumber.length}\">\n            <span class=\"fa fa-apple text-muted\" *ngIf=\"row.deviceNumber\"></span>\n            <span class=\"text\">{{row.deviceNumber}}</span>\n          </span> -->\n          <span class=\" badge-ios\">\n            <span class=\"fa fa-apple text-muted\" *ngIf=\"row.deviceNumber\"></span>\n            <span class=\"text\">{{row.deviceNumber}}</span>\n          </span>\n        </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"registered\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Registered </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.created_at | date: 'short'}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"lastActivity\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Activity </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.updated_at | date: 'short'}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <div class=\"ui-grid-cell-contents\">\n            <a mat-icon-button color=\"warn\" (click)=\"openDeleteDialog(row)\">\n              <i class=\"fa fa-trash fa-fw\"></i>\n            </a>\n            <a mat-icon-button color=\"primary\" (click)=\"openEditDialog(row)\">\n              <i class=\"fa fa-edit fa-fw\"></i>\n            </a>\n          </div>\n        </td>\n      </ng-container>\n\n      <!-- userimg search Column -->\n      <ng-container matColumnDef=\"userImgSearch\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n      <!-- username search Column -->\n      <ng-container matColumnDef=\"nameSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Name\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- email search Column  -->\n      <ng-container matColumnDef=\"emailSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Email\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- verified search Column -->\n      <ng-container matColumnDef=\"phoneSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Phone Number\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- subscription search Column  -->\n      <ng-container matColumnDef=\"subscriptionSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Subscription\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--type search Column -->\n      <ng-container matColumnDef=\"typeSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Select Type\">\n              <mat-option value=\"Admin\">Admin</mat-option>\n              <mat-option value=\"Instructor\">Instructor</mat-option>\n              <mat-option value=\"Moderator\">Moderator</mat-option>\n              <mat-option value=\"User\">User</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty1\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty2\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty3\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty4\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [ngClass]=\"{'activeSearchHeader': searchActive == true}\">\n      </tr>\n      <tr mat-header-row\n        *matHeaderRowDef=\"['userImgSearch','nameSearch', 'emailSearch', 'phoneSearch', 'subscriptionSearch', 'typeSearch','empty1','empty2','empty3','empty4']\"\n        [ngClass]=\"{'activeRow': searchActive == true}\" style=\"display: none;\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div class=\"empty_data\" *ngIf=\"dataSourceEmpty\">\n      No data available\n    </div>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 25, 50, 100]\"></mat-paginator>\n    <mat-progress-spinner [mode]=\"mode\">\n    </mat-progress-spinner>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/delete-contact.dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admincontacts/delete-contact.dialog.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content new_user_dialog\">\n   <div class=\"modal-header\">\n      <h4 class=\"modal-title\">\n         <button mat-dialog-close class=\"close\">\n            <span aria-hidden=\"true\">×</span>\n         </button>\n         Confirm disable\n      </h4>\n   </div>\n   <div class=\"modal-body text-center \">\n      <h2>\n         <span class=\"fa fa-fw fa-exclamation-triangle text-danger fa-3x\"></span>\n         <br> Are you sure?\n      </h2>\n      <p class=\"ng-binding \">User\n         <strong>{{contact.firstname}} {{contact.lastname}}</strong> will be disabled from the team ie. will no be able to login. The username and email\n         will remain in use.</p>\n   </div>\n   <div class=\"modal-footer wrap-div\">\n      <button autofocus=\"\" mat-dialog-close class=\"btn btn-default pull-left\" type=\"button\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-blue\">Confirm Disable</button>\n   </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/edit-contact.dialog.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admincontacts/edit-contact.dialog.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content new_user_dialog\" style=\"width: auto;\">\n    <div class=\"modal-header\">\n        <button mat-dialog-close class=\"close\">\n            <span aria-hidden=\"true\">×</span>\n        </button>\n        <div class=\"media-body-left\" style=\"position: relative;\">\n            <img src=\"//cdn.echofin.co/avatar/b7e64405.png?t=1551496349357\" *ngIf=\"!adminImgPath\" alt=\"\">\n            <img style=\"width: 100%; height: 100%;\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n            <div class=\"hoving-avatar\">\n                <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                <span style=\"color: #fff;\">Change</span>\n            </div>\n        </div>\n    \n        <div class=\"media-body-right\">\n            <h4 class=\"media-heading\">{{contact.firstname}}</h4>\n            <p>{{contact.email}}</p>\n            <p class=\"info\">\n                Last Login:{{contact.created_at | date:'short'}} | Last Message: - {{contact.updated_at | date: 'short'}}\n            </p>\n        </div>\n    </div>\n    <div class=\"modal-body wrap-div profile_dialog\">\n        <mat-tab-group>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"fa fa-cubes\"></i>\n                    General\n                </ng-template>\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editContacts\" class=\"mt-10\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Full Name</mat-label>\n                                <input matInput  name=\"name\" formControlName=\"name\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-7\">\n                            <mat-form-field>\n                                <mat-label>Email</mat-label>\n                                <input matInput  name=\"email\" formControlName=\"email\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-5\">\n                            <mat-form-field>\n                                <mat-select placeholder=\"Role\"  name=\"role\" formControlName=\"role\">\n                                    <mat-option value=\"Admin\">Admin</mat-option>\n                                    <mat-option value=\"Instructor\">Instructor</mat-option>\n                                    <mat-option value=\"Moderator\">Moderator</mat-option>\n                                    <mat-option value=\"User\">User</mat-option>\n                                </mat-select>\n                                <mat-hint>\n                                    <a class=\"\">\n                                        <i class=\"fa fa-info-circle\"></i>\n                                    </a>\n                                </mat-hint>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Address</mat-label>\n                                <textarea matInput name=\"address\" formControlName=\"address\"></textarea>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <mat-form-field>\n                                <mat-label>City</mat-label>\n                                <input matInput>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <mat-form-field>\n                                <mat-label>Zip</mat-label>\n                                <input matInput>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <mat-form-field>\n                                <mat-label>Country</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"Afghanistan\">Afghanistan</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer wrap-div pb-0 pr-0\">\n                        <button type=\"submit\" mat-dialog-close class=\"btn btn-blue\" (click)=\"onSaveDetails()\">Save Details</button>\n                    </div>\n                </form>\n            </mat-tab>\n    \n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"fa fa-unlock-alt\"></i>\n                    Security\n                </ng-template>\n                <div class=\"p-10 security\">\n                    <div class=\"alert alert-info text-center\">\n                        <strong>Notice</strong>\n                        <p>Remember to notify your user for the password change</p>\n                    </div>\n                    <mat-form-field>\n                        <mat-label>Password</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Repeat Password</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"modal-footer wrap-div pb-0 pr-0\" >\n                    <button mat-dialog-close class=\"btn btn-blue\">Change Password</button>\n                </div>\n            </mat-tab>\n    \n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"fa fa-money\"></i>\n                    Subscriptions\n                </ng-template>\n    \n                <table mat-table [dataSource]=\"dataSource\">\n                    <!-- Plan Column -->\n                    <ng-container matColumnDef=\"plan\">\n                        <th mat-header-cell *matHeaderCellDef> Plan </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.plan}} </td>\n                    </ng-container>\n    \n                    <!-- Trial Column -->\n                    <ng-container matColumnDef=\"trial\">\n                        <th mat-header-cell *matHeaderCellDef> Trial </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.trial}} </td>\n                    </ng-container>\n    \n                    <!-- CC Column -->\n                    <ng-container matColumnDef=\"CC\">\n                        <th mat-header-cell *matHeaderCellDef> CC </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.CC}} </td>\n                    </ng-container>\n    \n                    <!-- Period Column -->\n                    <ng-container matColumnDef=\"period\">\n                        <th mat-header-cell *matHeaderCellDef> Period </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.period}} </td>\n                    </ng-container>\n    \n                    <!-- Canceled Column -->\n                    <ng-container matColumnDef=\"canceled\">\n                        <th mat-header-cell *matHeaderCellDef> Canceled </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.canceled}} </td>\n                    </ng-container>\n    \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admincoupons/admincoupons.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admincoupons/admincoupons.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Coupons\n  </h1>\n</section>\n<section class=\"content admin-user admin_payouts\">\n  <div class=\"toolbox\">\n    <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n      <span class=\"fa fa-plus fa-fw\"></span> New Coupon\n    </button>\n    <div class=\"pull-right\">\n      <button class=\"btn btn-default\" (click)=\"onActiveSearch()\">\n        <span class=\"fa fa-search\"></span> Search\n      </button>\n      <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n        <span class=\"fa fa-refresh fa-fw\"></span>\n      </button>\n    </div>\n  </div>\n  <div class=\"mat-elevation-z8 box box-default\">\n    <table class=\"searchTable\" mat-table [dataSource]=\"dataSource\" matSort\n      [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"amount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"currency\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Currency\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.currency}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"percentoff\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Percent Off\n        </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.percentoff}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"alter\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">\n          <a mat-icon-button color=\"warn\">\n            <i class=\"fa fa-trash fa-fw\"></i>\n          </a>\n        </td>\n      </ng-container>\n      <!-- search columns starts here -->\n      <!-- name search Column -->\n      <ng-container matColumnDef=\"nameSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Name\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- amount search Column -->\n      <ng-container matColumnDef=\"amountSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Amount\">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!-- currency search Column  -->\n      <ng-container matColumnDef=\"currencySearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Currency\">\n              <mat-option value=\"USD\">USD</mat-option>\n              <mat-option value=\"EUR\">EUR</mat-option>\n              <mat-option value=\"GBP\">GBP</mat-option>\n              <mat-option value=\"CAD\">CAD</mat-option>\n              <mat-option value=\"AUD\">AUD</mat-option>\n              <mat-option value=\"JPY\">JPY</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--percentoff search Column -->\n      <ng-container matColumnDef=\"percentoffSearch\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-form-field *ngIf=\"searchActive\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Percent Off \">\n          </mat-form-field>\n        </th>\n      </ng-container>\n      <!--empty search Column -->\n      <ng-container matColumnDef=\"empty1\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [ngClass]=\"{'activeSearchHeader': searchActive == true}\">\n      </tr>\n      <tr mat-header-row *matHeaderRowDef=\"['nameSearch', 'amountSearch', 'currencySearch','percentoffSearch','empty1']\"\n        [ngClass]=\"{'activeRow': searchActive == true}\" style=\"display: none;\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n      No data available\n    </div>\n    <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n    <mat-progress-spinner [mode]=\"mode\">\n    </mat-progress-spinner>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admindashboard/admindashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admindashboard/admindashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <section class=\"content-header\">\n            <h1>\n                Dashboard\n                <button type=\"button\" class=\"btn btn-sm btn-link btn-no-shadow pull-right\" >\n                    <span class=\"fa fa-refresh fa-fw\" ></span>\n                </button>\n            </h1>\n        </section>\n        <section class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-users fa-fw\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                0</h3>\n                            <p>Total Registered</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box bg-green\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-user\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                0\n                            </h3>\n                            <p>New this month</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box bg-yellow\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-fire\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                0</h3>\n                            <p>Total Premium</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box bg-teal\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-credit-card fa-fw\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                $0</h3>\n                            <p>This Month Payments</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box bg-maroon\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-credit-card fa-fw\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                $0</h3>\n                            <p>Today Payments</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-lg-2 box-stats\">\n                    <div class=\"small-box bg-purple\">\n                        <div class=\"icon\">\n                            <i class=\"fa fa-commenting\"></i>\n                        </div>\n                        <div class=\"inner\">\n                            <h3 class=\"ng-binding ng-scope\" style=\"font-size: 55px; line-height: 77px; display: block;\">\n                                0</h3>\n                            <p>Online Users</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\" style=\"padding:0 15px;\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"line-graph\" ng-controller=\"MyController\">\n                                <div class=\"box\">\n                                    <div class=\"box-header with-border\" style=\"padding-bottom: 0;\">\n                                        <h3 class=\"box-title\" style=\"line-height: 50px;\">\n                                            Registrations Overview\n                                        </h3>\n                                        <div class=\"box-tools pull-right\">\n                                            <button type=\"button\" class=\"btn btn-sm btn-link btn-no-shadow\">\n                                                <span ng-show=\"!vm._isLine\">\n                                                    <span class=\"text-muted\">\n                                                        <span class=\"fa fa-line-chart fa-fw\"></span>Line</span>/\n                                                    <strong>\n                                                        <span class=\"fa fa-bar-chart fa-fw\"></span>Bar</strong>\n                                                </span>\n                                                <span ng-show=\"vm._isLine\" class=\"ng-hide\">\n                                                    <strong>\n                                                        <span class=\"fa fa-line-chart fa-fw\"></span>Line</strong>/\n                                                    <span class=\"text-muted\">\n                                                        <span class=\"fa fa-bar-chart fa-fw\"></span>Bar</span>\n                                                </span>\n                                            </button>\n                                            <div class=\"dropdown-btn\">\n                                                <mat-form-field>\n                                                    <mat-select [(value)]=\"selected\">\n                                                        <mat-option value=\"option1\">Last 90 days</mat-option>\n                                                        <mat-option value=\"option2\">Last 60 days</mat-option>\n                                                        <mat-option value=\"option3\">Last 30 days</mat-option>\n                                                        <mat-option value=\"option1\">Last 15 days</mat-option>\n                                                        <mat-option value=\"option2\">Last 7 days</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                            <button type=\"button\" class=\"btn btn-sm btn-link btn-no-shadow\"\n                                                ng-click=\"vm.LoadRegistrations()\">\n                                                <span class=\"fa fa-refresh fa-fw\"\n                                                    ng-class=\"{'fa-spin':vm.loading_statistics_registrations}\"></span>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <canvas class=\"chart chart-line\" chart-data=\"data\" chart-labels=\"labels\"\n                                        chart-series=\"series\" chart-click=\"onClick\" height=\"200\"></canvas>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\" style=\"padding:0 15px;\">\n                    <div class=\"col-md-12 users-box\">\n                        <div class=\"box box-default \">\n                            <div class=\"box-header with-border\">\n                                <h3 class=\"box-title\">Latest Registrations</h3>\n                            </div>\n                            <div class=\"list-group\" [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n                                <div class=\"list-group-item text-center\" *ngIf=\"contactsEmpty\">\n                                   <h2>No Contacts Available</h2> \n                                </div>\n                                <div class=\"list-group-item\" *ngFor=\"let contact of contacts\">\n                                    <div class=\"media\">\n                                        <div class=\"media-left\">\n                                            <img class=\"img-circle img-sm\" *ngIf=\"contact.imgPath\" src=\"{{contact.imgPath}}\">\n                                            <span  class=\"nickname\" *ngIf=\"!contact.imgPath\" [ngStyle]=\"{'backgroundColor': getRandomColor()}\">\n                                                {{contact.firstname | substring}}{{contact.lastname | substring}}\n                                            </span>\n                                        </div>\n                                        <div class=\"media-body ng-binding\">\n                                            <strong> {{contact.firstname}} {{contact.lastname}}</strong><br> {{contact.updated_at | date: 'short'}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <mat-progress-spinner [mode]=\"mode\">\n                                </mat-progress-spinner>\n                            </div>\n                            <div class=\"box-footer wrap-div\">\n                                <a routerLink=\"../contacts\" class=\"btn btn-sm btn-link pull-right\">\n                                    View All Users\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminmarketing/adminmarketing.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminmarketing/adminmarketing.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"admin-marketing \">\n    <button class=\"btn btn-blue pull-right new_marketing\">\n        <span class=\"fa fa-plus fa-fw\"></span>New Marketing\n    </button>\n</section>\n<section class=\"admin-marketing pt-70\">\n    <h1 class=\"pull-left\">\n        Marketing\n    </h1>\n    <mat-form-field class=\"searchbar_marketing pull-right\">\n        <input matInput placeholder=\"Search\">\n    </mat-form-field>\n</section>\n\n<section class=\"admin-marketing pos-rel\" style=\"clear: both;\">\n    <mat-tab-group animationDuration=\"0ms\">\n        <mat-tab>\n            <ng-template mat-tab-label>\n                All\n            </ng-template>\n            <div  class=\"empty_data\"> No data available </div>\n            <!-- <div class=\"row\">\n                <div class=\"col-md-12 p-10\">\n                    <a mat-icon-button>\n                        <i class=\"fa fa-envelope\"></i>\n                    </a>\n                    <div class=\"name_and_desc\">\n                        <h3>Live Analysis</h3>\n                        <p>Sent May 05, 2020 01:44PM</p>\n                    </div>\n                    <div class=\"toolbar-spacer\"></div>\n                    <div class=\"stats\">\n                        <h3>20,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>320,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>1%</h3>\n                        <p>Clicked</p>\n                    </div>\n                </div>\n                <mat-divider class=\"wrap-div\"></mat-divider>\n                <div class=\"col-md-12 p-10\">\n                    <a mat-icon-button>\n                        <i class=\"fa fa-paper-plane\"></i>\n                    </a>\n                    <div class=\"name_and_desc\">\n                        <h3>Live Analysis</h3>\n                        <p>Sent May 05, 2020 01:44PM</p>\n                    </div>\n                    <div class=\"toolbar-spacer\"></div>\n                    <div class=\"stats\">\n                        <h3>20,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>320,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>1%</h3>\n                        <p>Clicked</p>\n                    </div>\n                </div>\n                <mat-divider class=\"wrap-div\"></mat-divider>\n                <div class=\"col-md-12 p-10\">\n                    <a mat-icon-button>\n                        <i class=\"fa fa-refresh\"></i>\n                    </a>\n                    <div class=\"name_and_desc\">\n                        <h3>UPSELL - On Point Crypto Signal</h3>\n                        <p>Sent May 05, 2020 01:44PM</p>\n                    </div>\n                    <div class=\"toolbar-spacer\"></div>\n                    <div class=\"stats\">\n                        <h3>20,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>320,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>1%</h3>\n                        <p>Clicked</p>\n                    </div>\n                </div>\n                <mat-divider class=\"wrap-div\"></mat-divider>\n                <div class=\"col-md-12 p-10\">\n                    <a mat-icon-button>\n                        <i class=\"fa fa-paper-plane\"></i>\n                    </a>\n                    <div class=\"name_and_desc\">\n                        <h3>Live Analysis</h3>\n                        <p>Sent May 05, 2020 01:44PM</p>\n                    </div>\n                    <div class=\"toolbar-spacer\"></div>\n                    <div class=\"stats\">\n                        <h3>20,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>320,017</h3>\n                        <p>Sends</p>\n                    </div>\n                    <div class=\"stats\">\n                        <h3>1%</h3>\n                        <p>Clicked</p>\n                    </div>\n                </div>\n            </div> -->\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                Draft\n            </ng-template>\n            <div class=\"row\">\n                <div  class=\"empty_data\"> No data available </div>\n                <!-- <div class=\"col-md-8\">\n                </div>\n                <div class=\"col-md-4\">\n                </div> -->\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                Scheduled\n            </ng-template>\n            <div class=\"row\">\n                <div  class=\"empty_data\"> No data available </div>\n                <!-- <div class=\"col-md-8\">\n                </div>\n                <div class=\"col-md-4\">\n                </div> -->\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                Sent\n            </ng-template>\n            <div class=\"row\">\n                <div  class=\"empty_data\"> No data available </div>\n                <!-- <div class=\"col-md-8\">\n                </div>\n                <div class=\"col-md-4\">\n                </div> -->\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                Sequence\n            </ng-template>\n            <div class=\"row\">\n                <div  class=\"empty_data\"> No data available </div>\n                <!-- <div class=\"col-md-8\">\n                </div>\n                <div class=\"col-md-4\">\n                </div> -->\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminoffers/adminoffers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminoffers/adminoffers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <section class=\"content-header\">\n      <h1>\n        Offers\n      </h1>\n    </section>\n    <section class=\"content admin-user\">\n      <div class=\"toolbox\">\n        <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n          <span class=\"fa fa-plus\"></span> Add New Offer\n        </button>\n        <button class=\"btn btn-default\" (click)=\"offersExporter.exportTable('xlsx')\">\n          <span class=\"fa fa-download \"></span> Export\n        </button>\n        <div class=\"pull-right\">\n          <button class=\"btn btn-default\" (click)=\"onActiveSearch()\">\n            <span class=\"fa fa-search\"></span> Search\n          </button>\n          <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n            <span class=\"fa fa-refresh fa-fw\"></span>\n          </button>\n        </div>\n      </div>\n      <div class=\"mat-elevation-z8 box box-default\">\n        <table class=\"searchTable\" mat-table [dataSource]=\"dataSource\" matTableExporter\n          [ngClass]=\"{'ActiveSpinner': showSpinner == true}\" #offersExporter=\"matTableExporter\" matSort>\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"username\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Username\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.username}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"plan\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Plan\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.plan}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"startt\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Trial </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.startt}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"endt\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> End Trial </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.endt}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No CC\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.no}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"start\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Start </th>\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.start}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"end\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> End</th>\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.end}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"canceled\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Canceled\n            </th>\n            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.canceled}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <div class=\"ui-grid-cell-contents\">\n                <button class=\"btn btn-xs btn-default\"><i class=\"fa fa-pencil\"></i> Manage</button>\n              </div>\n            </td>\n          </ng-container>\n          <!-- username search Column -->\n          <ng-container matColumnDef=\"usernameSearch\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-form-field *ngIf=\"searchActive\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Username\">\n              </mat-form-field>\n            </th>\n          </ng-container>\n          <!-- email search Column  -->\n          <ng-container matColumnDef=\"emailSearch\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-form-field *ngIf=\"searchActive\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Email\">\n              </mat-form-field>\n            </th>\n          </ng-container>\n          <!--type search Column -->\n          <ng-container matColumnDef=\"planSearch\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-form-field *ngIf=\"searchActive\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Plan\">\n              </mat-form-field>\n            </th>\n          </ng-container>\n          <!--empty search Column -->\n          <ng-container matColumnDef=\"empty1\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n          </ng-container>\n          <!--empty search Column -->\n          <ng-container matColumnDef=\"empty2\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n          </ng-container>\n          <!-- noCCSearch search Column  -->\n          <ng-container matColumnDef=\"noCCSearch\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-form-field *ngIf=\"searchActive\">\n                <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Select No CC\">\n                  <mat-option value=\"YES\">YES</mat-option>\n                  <mat-option value=\"NO\">NO</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </th>\n          </ng-container>\n          <!--empty search Column -->\n          <ng-container matColumnDef=\"empty3\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n          </ng-container>\n          <!--empty search Column -->\n          <ng-container matColumnDef=\"empty4\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n          </ng-container>\n          <!-- canceledSearch search Column  -->\n          <ng-container matColumnDef=\"canceledSearch\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-form-field *ngIf=\"searchActive\">\n                <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Canceled\">\n                  <mat-option value=\"YES\">YES</mat-option>\n                  <mat-option value=\"NO\">NO</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </th>\n          </ng-container>\n          <!--empty search Column -->\n          <ng-container matColumnDef=\"empty5\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" [ngClass]=\"{'activeSearchHeader': searchActive == true}\"></tr>\n          <tr mat-header-row\n            *matHeaderRowDef=\"['usernameSearch', 'emailSearch', 'planSearch', 'empty1','empty2','noCCSearch','empty3','empty4', 'canceledSearch', 'empty5']\"\n            [ngClass]=\"{'activeRow': searchActive == true}\" style=\"display: none;\">\n          </tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </tr>\n        </table>\n        <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n          No data available\n        </div>\n        <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n        <mat-progress-spinner [mode]=\"mode\">\n        </mat-progress-spinner>\n      </div>\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminonlineativity/adminonlineativity.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminonlineativity/adminonlineativity.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>Online Activity\n        <small>last 24 hours</small>\n    </h1>\n</section>\n<section class=\"content admin-payments\">\n    <div class=\"media\">\n        <div class=\"media-body\">\n            <div style=\"padding: 0 10px;\">\n                <div class=\"toolbox\" style=\"padding:10px 25px\">\n                    <button type=\"button\" class=\"btn btn-blue\" [matMenuTriggerFor]=\"groupsession\">\n                        <span class=\"fa fa-object-group fa-fw\"></span> Group:\n                        <span class=\"\">session</span>&nbsp;\n                        <span class=\"caret\"></span>\n                    </button>\n                    <mat-menu #groupsession=\"matMenu\">\n                        <button mat-menu-item>Session</button>\n                        <li class=\"divider\"></li>\n                        <button  mat-menu-item>Ip</button>\n                        <li class=\"divider\"></li>\n                        <button  mat-menu-item>Device</button>\n                    </mat-menu>\n                    <button class=\"btn btn-default ng-scope\">\n                        <span class=\"fa fa-expand fa-fw\"></span> Expand All\n                    </button>\n                    <div class=\"pull-right\">\n                        <button class=\"btn btn-default\">\n                            <span class=\"fa fa-refresh fa-fw\"></span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"box box-default\" style=\"overflow: visible;\">\n                <div class=\"mat-elevation-z8\">\n                    <table>\n                        <thead>\n                            <th>\n                            </th>\n                            <th>User</th>\n                            <th>\n                                Active Sessions\n                            </th>\n                            <th>\n                                Sessions\n                            </th>\n                            <th>\n                                IPs\n                            </th>\n                            <th>\n                                Devices\n                            </th>\n                            <th></th>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <button class=\"btn btn-xs btn-link btn-no-shadow collapse_carret\">\n                                        <span class=\"fa fa-angle-right\"></span>\n                                    </button>\n                                </td>\n                                <td>\n                                    puneetsethi25\n                                    <div class=\"status-badge pull-right\">\n                                        <span class=\"label label-success\">online</span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"idle-badge\">\n                                        <span class=\"label label-success\">&nbsp;</span>\n                                    </div>\n                                </td>\n                                <td>\n                                    5 Sessions\n                                </td>\n                                <td>\n                                    3ips\n                                </td>\n                                <td>1 devices</td>\n                            </tr>\n                            <tr class=\"collapse_row\">\n                                <td colspan=\"6\">\n                                    <div class=\"\">\n                                        <dt class=\"session-row serial\">\n                                            <div class=\"idle-badge\">\n                                                <span class=\"label label-default \">&nbsp;</span>\n                                            </div>\n                                            <div class=\"popover_text\">\n                                                189476cc6e3c4e4e81395e8896d6f40e\n                                            </div>\n                                            <div class=\"popover_tooltop  right\" style=\"top: -120px; left: 165px;\">\n                                                <div class=\"arrow\"></div>\n                                                <div class=\"popover-inner\">\n                                                    <div class=\"popover-content\">\n                                                        <div class=\"\">\n                                                            <dl class=\"dl-horizontal dl-horizontal-sm text-left\">\n                                                                <dt>Session</dt>\n                                                                <dd class=\"serial \">\n                                                                    6bcac9ea0554445092c0c6b313ebb689</dd>\n                                                                <dt>Inserted</dt>\n                                                                <dd class=\"\">2019-09-04 15:48:33</dd>\n                                                                <dt>Updated</dt>\n                                                                <dd class=\"\">2019-09-04 15:59:29</dd>\n                                                                <dt>IP</dt>\n                                                                <dd class=\"serial \">122.173.178.62</dd>\n                                                                <dt>Unique ID</dt>\n                                                                <dd class=\"serial \">\n                                                                    9ced2f9ab62d466ef9f28a0d2ad52af0</dd>\n                                                                <dt>Device</dt>\n                                                                <dd class=\"serial \">\n                                                                    6a59b086035a6bd8aab55149752569f6</dd>\n                                                                <dt>OS</dt>\n                                                                <dd class=\"\">Linuxx86_64</dd>\n                                                                <dt>Browser</dt>\n                                                                <dd class=\"\">Chrome 66.0.3359.139</dd>\n                                                                <dt>User Agent</dt>\n                                                                <dd class=\"\">Mozilla/5.0 (X11; Linux x86_64)\n                                                                    AppleWebKit/537.36 (KHTML, like Gecko)\n                                                                    Chrome/66.0.3359.139 Safari/537.36</dd>\n                                                            </dl>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </dt>\n                                        <dd>\n                                            <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                                        </dd>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <!-- <table mat-table [dataSource]=\"dataSource\" matSort>\n                      \n                                   <ng-container matColumnDef=\"empty\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n                                        <td mat-cell *matCellDef=\"let row\"> \n                                                <button class=\"btn btn-xs btn-link btn-no-shadow\">\n                                                    <span class=\"fa fa-angle-right\"></span>\n                                                </button>\n                                        </td>\n                                    </ng-container>                                     \n                   \n                                   <ng-container matColumnDef=\"user\">\n                                      <th mat-header-cell *matHeaderCellDef mat-sort-header> User</th>\n                                      <td mat-cell *matCellDef=\"let row\"> \n                                          <a>{{row.user}}</a>\n                                          <div class=\"status-badge pull-right\">\n                                                <span class=\"label label-success\" >online</span>\n                                            </div>\n                                      </td>\n                                    </ng-container> \n                  \n                                  <ng-container matColumnDef=\"activesessions\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Active Sessions </th>\n                                    <td mat-cell *matCellDef=\"let row\"> \n                                            <div class=\"idle-badge\">\n                                                <span class=\"label label-success\">&nbsp;</span>\n                                            </div>    \n                                    </td>\n                                  </ng-container>\n  \n                                  <ng-container matColumnDef=\"sessions\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Sessions </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.sessions}} </td>\n                                  </ng-container>\n                        \n                                  <ng-container matColumnDef=\"ip\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> IPs </th>\n                                    <td mat-cell *matCellDef=\"let row\" > {{row.ip}} </td>\n                                  </ng-container>\n                       \n                                    <ng-container matColumnDef=\"devices\">\n                                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Devices </th>\n                                      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.devices}} </td>\n                                    </ng-container>\n                                    \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                                  </tr>\n                                </table>\n                                <mat-paginator [pageSizeOptions]=\"[14, 25, 50, 100]\"></mat-paginator> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"media-right\">\n            <div class=\"box box-default pull-right\" style=\"width: 300px;\">\n                <div class=\"box-body\">\n                    <h2>Legend</h2>\n                    <div style=\"margin-bottom:4px\">\n                        <strong>Messaging Service Status</strong>\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"status-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-success\">online</span>\n                        </div> Connected to the messaging service and status is Online\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"status-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-warning\">busy</span>\n                        </div> Connected to the messaging service and set the status Away\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"status-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-danger\">away</span>\n                        </div>\n                        Connected to the messaging service and set the status Busy\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"status-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-default\">offline</span>\n                        </div>\n                        Not connected to the messaging service ie. the user is offline\n                    </div>\n                    <div style=\"margin-top:10px;margin-bottom:5px\">\n                        <strong>Session Service Status</strong>\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"idle-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-success\">&nbsp;</span>\n                        </div> Active on a session ie. typing, moving the mouse etc.\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"idle-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-warning\">&nbsp;</span>\n                        </div> Idle session ie. the browser is not focused, the mobile app is in the background\n                        or the browser has no activity\n                        for more than 5 minutes\n                    </div>\n                    <div style=\"margin-bottom:4px\">\n                        <div class=\"idle-badge\" style=\"float:left;margin-right:5px;\">\n                            <span class=\"label label-default\">&nbsp;</span>\n                        </div> Session has expired\n                    </div>\n                    <hr>\n                    <h2>Example</h2>\n                    <ul class=\"list-unstyled\">\n                        <li>\n                            <div class=\"status-badge\" style=\"float:left;margin-right:5px;\">\n                                <span class=\"label label-danger\">away</span>\n                            </div>\n                            <div class=\"idle-badge\" style=\"float:left;margin-right:5px;\">\n                                <span class=\"label label-success\">&nbsp;</span>\n                            </div>\n                            <div class=\"idle-badge\" style=\"float:left;margin-right:5px;\">\n                                <span class=\"label label-warning\">&nbsp;</span>\n                            </div>\n                            The user is connected to the messaging service and set their status to Away. The\n                            user has two active sessions. One is active and one is about to expire as it is\n                            already idle.\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminsales/adminsales.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminsales/adminsales.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n        Sales\n    </h1>\n</section>\n<section class=\"content admin-payments\">\n    <div class=\"media\">\n        <div class=\"col-md-8 col-lg-8 no-pad\">\n            <div style=\"padding: 0 15px;\">\n                <div class=\"toolbox\">\n                    <button class=\"btn btn-default\" (click)=\"salesExporter.exportTable('xlsx')\">\n                        <span class=\"fa fa-download \"></span> Export\n                    </button>\n                    <div class=\"pull-right\">\n                        <button class=\"btn btn-default\" (click)=\"onActiveSearch()\">\n                            <span class=\"fa fa-search\"></span> Search\n                        </button>\n                        <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n                            <span class=\"fa fa-refresh fa-fw\"></span>\n                        </button>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </div>\n            </div>\n            <div class=\"box box-default\">\n\n                <div class=\"mat-elevation-z8\">\n                    <table class=\"searchTable\" mat-table matTableExporter #salesExporter=\"matTableExporter\"\n                        [hiddenColumns]=\"[0]\" [ngClass]=\"{'ActiveSpinner': showSpinner == true}\"\n                        [dataSource]=\"dataSource\" matSort>\n                        <!-- ID Column -->\n                        <ng-container matColumnDef=\"date\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                                {{row.date}}\n                            </td>\n                        </ng-container>\n\n                        <!-- ID Column -->\n                        <ng-container matColumnDef=\"fullname\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.fullname}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"email\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n                        </ng-container>\n\n                        <!-- Color Column -->\n                        <ng-container matColumnDef=\"plan\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Plan\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.plan}} </td>\n                        </ng-container>\n\n                        <!-- Color Column -->\n                        <ng-container matColumnDef=\"description\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Description\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.description}}\n                            </td>\n                        </ng-container>\n\n                        <!-- Color Column -->\n                        <ng-container matColumnDef=\"amount\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\n                        </ng-container>\n\n                        <!-- Color Column -->\n                        <ng-container matColumnDef=\"status\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.status}}\n                            </td>\n                        </ng-container>\n\n                        <!-- date search Column -->\n                        <ng-container matColumnDef=\"dateSearch\">\n                            <th mat-header-cell *matHeaderCellDef> </th>\n                        </ng-container>\n\n                        <!-- username search Column -->\n                        <ng-container matColumnDef=\"nameSearch\">\n                            <th mat-header-cell *matHeaderCellDef>\n                                <mat-form-field *ngIf=\"searchActive\">\n                                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Name\">\n                                </mat-form-field>\n                            </th>\n                        </ng-container>\n                        <!-- email search Column  -->\n                        <ng-container matColumnDef=\"emailSearch\">\n                            <th mat-header-cell *matHeaderCellDef>\n                                <mat-form-field *ngIf=\"searchActive\">\n                                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Email\">\n                                </mat-form-field>\n                            </th>\n                        </ng-container>\n                        <!-- plan search Column -->\n                        <ng-container matColumnDef=\"planSearch\">\n                            <th mat-header-cell *matHeaderCellDef>\n                                <mat-form-field *ngIf=\"searchActive\">\n                                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Plan\">\n                                </mat-form-field>\n                            </th>\n                        </ng-container>\n                        <!-- Description search Column  -->\n                        <ng-container matColumnDef=\"descriptionSearch\">\n                            <th mat-header-cell *matHeaderCellDef>\n                                <mat-form-field *ngIf=\"searchActive\">\n                                    <input matInput (keyup)=\"applyFilter($event.target.value)\"\n                                        placeholder=\"Description\">\n                                </mat-form-field>\n                            </th>\n                        </ng-container>\n                        <!--empty search Column -->\n                        <ng-container matColumnDef=\"empty1\">\n                            <th mat-header-cell *matHeaderCellDef> </th>\n                        </ng-container>\n                        <!-- status search Column  -->\n                        <ng-container matColumnDef=\"statusSearch\">\n                            <th mat-header-cell *matHeaderCellDef>\n                                <mat-form-field *ngIf=\"searchActive\">\n                                    <mat-select (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Select Status\">\n                                        <mat-option value=\"FAILED\">FAILED</mat-option>\n                                        <mat-option value=\"SUCCEED\">SUCCEED</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </th>   \n                        </ng-container>\n\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n                            [ngClass]=\"{'activeSearchHeader': searchActive == true}\"></tr>\n                        <tr mat-header-row\n                            *matHeaderRowDef=\"['dateSearch','nameSearch', 'emailSearch','planSearch', 'descriptionSearch','empty1','statusSearch']\"\n                            [ngClass]=\"{'activeRow': searchActive == true}\" style=\"display: none;\">\n                        </tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                        </tr>\n                    </table>\n                    <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n                        No data available\n                      </div>\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\n\n                    <mat-progress-spinner *ngIf=\"showSpinner\" [mode]=\"mode\">\n                    </mat-progress-spinner>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-lg-4\">\n            <div style=\"width: 100%;\">\n                <div class=\"box box-default\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title ng-binding\">Payments Projection for August 2019</h3>\n                    </div>\n                    <div class=\"box-body\">\n                        <div class=\"well text-center\" style=\"margin:0;\">\n                            <strong>This calendar is in test mode</strong>\n                            <br>Amounts might be inaccurate\n                        </div>\n                    </div>\n                    <div style=\"overflow-x:auto;overflow-y:hidden; width:100%\" class=\"\">\n                        <div class=\"\">\n                            <table style=\"margin:0\" class=\"table\">\n                                <tbody>\n                                    <tr>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">MON</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">TUE</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">WED</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">THU</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">FRI</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">SAT</th>\n                                        <th class=\"text-center\" style=\"width:14.28571%\">SUN</th>\n                                    </tr>\n                                    <tr>\n                                        <td>&nbsp;</td>\n                                        <td>&nbsp;</td>\n                                        <td>&nbsp;</td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">1</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">2</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">3</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">4</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">5</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">6</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">7</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">8</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">9</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">10</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">11</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">12</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">13</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">14</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">15</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">16</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">17</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">18</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">19</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">20</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">21</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">22</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">23</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">24</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">25</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">26</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right today\"\n                                            style=\"background-color:undefined\"><span\n                                                class=\"paymentCalendarDate\">27</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">28</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">29</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">30</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td class=\"paymentCalendarTd text-right \" style=\"background-color:undefined\">\n                                            <span class=\"paymentCalendarDate\">31</span><span\n                                                class=\"paymentCalendarAmount\">0</span></td>\n                                        <td>&nbsp;</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"box box-default\" style=\"border-top-color:#00a2c8;\">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\">Monthly Payments</h3>\n                    </div>\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>&nbsp;</th>\n                                <th style=\"width:100px;\">&nbsp;</th>\n                            </tr>\n                        </thead>\n                        <!-- <tbody>\n                            <tr class=\"\">\n                                <th style=\"font-family:monospace\">2019-03</th>\n                                <td class=\"text-right \" style=\"font-family:monospace\">154.00</td>\n                            </tr>\n                        </tbody> -->\n                        <tfoot>\n                            <tr>\n                                <th class=\"text-right\">Total</th>\n                                <td class=\"text-right \" style=\"font-family:monospace\">0.00</td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminservices/adminservices.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminservices/adminservices.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Services<small>Embedded external web pages ie. video play lists, blogs, news sites etc</small>\n  </h1>\n</section>\n<section class=\"content admin-user admin_payouts\">\n  <div class=\"toolbox\">\n    <button class=\"btn btn-blue\" (click)=\"openAddFileDialog()\">\n      <span class=\"fa fa-plus fa-fw\"></span> New Service\n    </button>\n    <div class=\"pull-right\">\n      <button class=\"btn btn-default\" (click)=\"onRefresh()\">\n        <span class=\"fa fa-refresh fa-fw\"></span>\n      </button>\n    </div>\n  </div>\n  <div class=\"mat-elevation-z8 box box-default\">\n    <table mat-table [dataSource]=\"dataSource\" matSort [ngClass]=\"{'ActiveSpinner': showSpinner == true}\">\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"url\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Url </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.url}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"plan\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Plan </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.plan}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"coupon\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Coupon </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.coupon}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"sort\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sort</th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.sort}} </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"checkout\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Checkout</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <a mat-icon-button color=\"accent\">\n            <i class=\"fa fa-cart-plus\"></i>\n          </a>\n        </td>\n      </ng-container>\n      <!-- Color Column -->\n      <ng-container matColumnDef=\"alter\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <a mat-icon-button color=\"warn\">\n            <i class=\"fa fa-trash fa-fw\"></i>\n          </a>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n    <div class=\"empty_data\" *ngIf=\"!dataSource.data.length\">\n      No data available\n    </div>\n    <mat-paginator [pageSizeOptions]=\"[14, 30, 50, 100]\"></mat-paginator>\n    <mat-progress-spinner [mode]=\"mode\">\n    </mat-progress-spinner>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminsettings/adminsettings.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminsettings/adminsettings.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header admin-widget\">\n    <h1>\n        Settings\n    </h1>\n</section>\n<section class=\"content admin-widget\">\n    <div class=\"box box-default\">\n        <div class=\"box-body\">\n            <table class=\"table\">\n                <tbody>\n                    <tr>\n                        <td style=\"border:none!important;\">\n                            <h4>Team Options</h4>\n                            <img class=\"img-thumbnail\"\n                                style=\"height:28px;padding: 1px;margin: -3px 5px 0 0; border-radius: 50%;\"\n                                src=\"//cdn.echofin.co/avatar/b7e64405.png?t=1551496349357\" *ngIf=\"!adminImgPath\">\n                            <img class=\"img-thumbnail\"\n                                style=\"height:28px;padding: 1px;margin: -3px 5px 0 0; border-radius: 50%;\"\n                                src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n                            <a (click)=\"openteamavatar()\">\n                                Change team avatar\n                            </a>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\"> Display user count on chat header\n                                </label>\n                                <button class=\"btn btn-xs btn-link\">\n                                    <span class=\"fa fa-question-circle-o fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\"> Disable Direct Messages between users\n                                </label>\n                            </div>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\"> Allow regular users to send Signals\n                                </label>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h4>Privacy Options</h4>\n                            <p class=\"text-muted\">This mode disables the registration page and only admin can\n                                add or invite users from the Users section.</p>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\"> Make your team private.\n                                </label>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h4>Custom Scripts</h4>\n                            <div class=\"checkbox\">\n                                <a (click)=\"openscript()\">\n                                    Edit scripts\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h4>Features</h4>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\"> Enable Web Trader panel\n                                </label>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <form>\n                                <mat-form-field style=\"display:inline-block; width: 90%; padding-right: 10px;\">\n                                    <input matInput placeholder=\"Customer support email\n                                    \" value=\"contact@marketmastersacademy.com\" class=\"example-right-align\">\n                                </mat-form-field>\n                                <span class=\"input-group-btn\" style=\"display:inline-block;\">\n                                    <button class=\"btn btn-success btn-blue\">\n                                        Save\n                                    </button>\n                                </span>\n                            </form>\n                            <p>This email will be used in the email billing receipts.</p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h4>Chat Reload</h4>\n                            <p>Reload the chat app on your users' web browser. Use with caution!</p>\n                            <button class=\"btn btn-danger\">Reload</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <h4>Force close stream</h4>\n            <p>\n                Close video stream |\n                <span class=\"text-warning\">Closed</span>\n                <button class=\"btn btn-link\"><span class=\"fa fa-refresh\"></span></button>\n            </p>\n            <button class=\"btn btn-success btn-md\" disabled=\"disabled\">Close Stream</button>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminsettings/new-teamavatar.dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminsettings/new-teamavatar.dialog.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"modal-content new_subs new_user_dialog\">\n   <div class=\"modal-header\">\n      <h4 class=\"modal-title m-0\">\n        <button  mat-dialog-close  class=\"close\">\n            <span aria-hidden=\"true\">×</span>\n        </button> \n         Team Avatar\n      </h4>\n   </div>\n    <div class=\"modal-body wrap-div\">\n        <div class=\"text-center\" style=\"position: relative;\">\n            <img src=\"//cdn.echofin.co/avatar/b7e64405.png?t=1551496349357\" *ngIf=\"!adminImgPath\" alt=\"\">\n        <img style=\"width: 100%\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n        <div class=\"hoving-avatar\">\n            <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n            <span style=\"color: #fff;\">SELECT NEW FILE</span>\n        </div>\n    </div>\n    </div>\n    <div class=\"modal-footer wrap-div\">\n        <button mat-dialog-close class=\"btn btn-default pull-left\" type=\"button\">Cancel</button>\n        <button mat-dialog-close class=\"btn btn-blue\" (click)=\"onUpload()\">Upload</button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/adminwidget/adminwidget.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/adminwidget/adminwidget.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <section class=\"content-header admin-widget\">\n            <h1>\n                Widgets\n            </h1>\n        </section>\n        <section class=\"content admin-widget\">\n            <mat-tab-group>\n                <mat-tab>\n                    <ng-template mat-tab-label>\n                        <i class=\"fa fa-search fa-1x\"></i>Available\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr class=\"\">\n                                        <td style=\"width: 100px\">\n                                            <span class=\"is-new \">NEW</span>\n                                            <img class=\"img-thumbnail img-responsive\"\n                                                src=\"https://cdn.echofin.co/widgets/tradetools.stockscreener.png\">\n                                        </td>\n                                        <td>\n                                            <h4 class=\"\">Stock Screener\n                                                <small class=\"\">TradeTools</small>\n                                            </h4>\n                                            <p class=\"\">Stock Screener is a powerfull widget allowing you to search for\n                                                a stock symbol or company\n                                                name, providing company information, market news, real-time quotes and\n                                                30 day candle chart. Data is provided by IEX</p>\n                                        </td>\n                                        <td style=\"vertical-align: middle; width: 150px;\">\n                                            <div class=\"text-center text-success \">\n                                                <span class=\"fa fa-check-circle fa-fw \"></span> INSTALLED\n                                            </div>\n                                            <button class=\"btn btn-block btn-blue ng-hide\">\n                                                <span>\n                                                    <span class=\"fa fa-download fa-fw\"></span> INSTALL\n                                                </span>\n                                                <span class=\"ng-hide\">\n                                                    <span class=\"fa fa-refresh fa-spin fa-fw\"></span>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr class=\"\">\n                                        <td style=\"width: 100px\">\n                                            <span class=\"is-new \">NEW</span>\n                                            <img class=\"img-thumbnail img-responsive\"\n                                                src=\"https://cdn.echofin.co/widgets/tradetools.stockscreener.png\">\n                                        </td>\n                                        <td>\n                                            <h4 class=\"\">Stock Screener\n                                                <small class=\"\">TradeTools</small>\n                                            </h4>\n                                            <p class=\"\">Stock Screener is a powerfull widget allowing you to search for\n                                                a stock symbol or company\n                                                name, providing company information, market news, real-time quotes and\n                                                30 day candle chart. Data is provided by IEX</p>\n                                        </td>\n                                        <td style=\"vertical-align: middle; width: 150px;\">\n                                            <div class=\"text-center text-success ng-hide\">\n                                                <span class=\"fa fa-check-circle fa-fw \"></span> INSTALLED\n                                            </div>\n                                            <button class=\"btn btn-block btn-blue\">\n                                                <span>\n                                                    <span class=\"fa fa-download fa-fw\"></span> INSTALL\n                                                </span>\n                                                <span class=\"ng-hide\">\n                                                    <span class=\"fa fa-refresh fa-spin fa-fw\"></span>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr class=\"\">\n                                        <td style=\"width: 100px\">\n                                            <span class=\"is-new \">NEW</span>\n                                            <img class=\"img-thumbnail img-responsive\"\n                                                src=\"https://cdn.echofin.co/widgets/tradetools.stockscreener.png\">\n                                        </td>\n                                        <td>\n                                            <h4 class=\"\">Stock Screener\n                                                <small class=\"\">TradeTools</small>\n                                            </h4>\n                                            <p class=\"\">Stock Screener is a powerfull widget allowing you to search for\n                                                a stock symbol or company\n                                                name, providing company information, market news, real-time quotes and\n                                                30 day candle chart. Data is provided by IEX</p>\n                                        </td>\n                                        <td style=\"vertical-align: middle; width: 150px;\">\n                                            <div class=\"text-center text-success ng-hide\">\n                                                <span class=\"fa fa-check-circle fa-fw \"></span> INSTALLED\n                                            </div>\n                                            <button class=\"btn btn-block btn-blue\">\n                                                <span>\n                                                    <span class=\"fa fa-download fa-fw\"></span> INSTALL\n                                                </span>\n                                                <span class=\"ng-hide\">\n                                                    <span class=\"fa fa-refresh fa-spin fa-fw\"></span>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr class=\"\">\n                                        <td style=\"width: 100px\">\n                                            <span class=\"is-new \">NEW</span>\n                                            <img class=\"img-thumbnail img-responsive\"\n                                                src=\"https://cdn.echofin.co/widgets/tradetools.stockscreener.png\">\n                                        </td>\n                                        <td>\n                                            <h4 class=\"\">Stock Screener\n                                                <small class=\"\">TradeTools</small>\n                                            </h4>\n                                            <p class=\"\">Stock Screener is a powerfull widget allowing you to search for\n                                                a stock symbol or company\n                                                name, providing company information, market news, real-time quotes and\n                                                30 day candle chart. Data is provided by IEX</p>\n                                        </td>\n                                        <td style=\"vertical-align: middle; width: 150px;\">\n                                            <div class=\"text-center text-success ng-hide\">\n                                                <span class=\"fa fa-check-circle fa-fw \"></span> INSTALLED\n                                            </div>\n                                            <button class=\"btn btn-block btn-blue\">\n                                                <span>\n                                                    <span class=\"fa fa-download fa-fw\"></span> INSTALL\n                                                </span>\n                                                <span class=\"ng-hide\">\n                                                    <span class=\"fa fa-refresh fa-spin fa-fw\"></span>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"lead\">\n                                <h5 class=\"page-header\">Add your custom widget!</h5>\n                                Apart from the available widgets found in this section, you are able to add your own\n                                widgets. Adding a custom widget is simple as embedding a web page. You only need a valid\n                                URL to your widget (with HTTPS connection) and you are good to go!\n                                <hr>\n                                <button class=\"btn btn-success btn-md btn-block\" (click)=\"openAddFileDialog()\">ADD\n                                    CUSTOM</button>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n\n                <mat-tab>\n                    <ng-template mat-tab-label>\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>Installed\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <h3>\n                                Right Bar\n                                <div class=\"pull-right\">\n                                    <button class=\"btn btn-sm btn-link btn-no-shadow\">\n                                        <span class=\"fa fa-sort fa-fw\"></span> Sort\n                                    </button>\n                                </div>\n                            </h3>\n                            <div class=\"\">\n                                <table class=\"table\">\n                                    <tbody class=\" ui-sortable\">\n                                        <tr>\n\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.commodities.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Commodities\n                                                    <small class=\"\">TradeTools</small>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.fxcal.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Indices\n                                                    <small class=\"\">TradeTools</small>\n                                                    <span ng-if=\"!w.isEnabled\"\n                                                        class=\"label label-warning ng-scope\">disabled</span>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.commodities.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Commodities\n                                                    <small class=\"\">TradeTools</small>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.fxcal.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Indices\n                                                    <small class=\"\">TradeTools</small>\n                                                    <span ng-if=\"!w.isEnabled\"\n                                                        class=\"label label-warning ng-scope\">disabled</span>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <h3>Top Bar\n                                <div class=\"pull-right\">\n                                    <button class=\"btn btn-sm btn-link btn-no-shadow\">\n                                        <span class=\"fa fa-sort fa-fw\"></span> Sort\n                                    </button>\n                                </div>\n                            </h3>\n                            <div class=\"\">\n                                <table class=\"table\">\n                                    <tbody class=\"ui-sortable\">\n                                        <tr *ngFor=\"let widget of topBarWidgets\">\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"{{widget.img}}\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    {{widget.name}}\n                                                    <small style=\"margin-right: 5px;\">{{widget.description}}</small> \n                                                    <span *ngIf=\"widgetStatus\"\n                                                        class=\"label label-warning\">disabled</span>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <!-- <tr>\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.fxcal.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Indices\n                                                    <small class=\"\">TradeTools</small>\n                                                    <span ng-if=\"!w.isEnabled\"\n                                                        class=\"label label-warning ng-scope\">disabled</span>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.commodities.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Commodities\n                                                    <small class=\"\">TradeTools</small>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td style=\"width: 50px\">\n                                                <img class=\"img-responsive\"\n                                                    src=\"https://cdn.echofin.co/widgets/echofin.fxcal.jpg\">\n                                            </td>\n                                            <td>\n                                                <h4>\n                                                    Indices\n                                                    <small class=\"\">TradeTools</small>\n                                                    <span ng-if=\"!w.isEnabled\"\n                                                        class=\"label label-warning ng-scope\">disabled</span>\n                                                </h4>\n                                            </td>\n                                            <td style=\"vertical-align: middle; width: 50px;\">\n                                                <button class=\"btn btn-link btn-block\" (click)=\"openConfigureDialog()\">\n                                                    <span class=\"fa fa-cog fa-fw text-muted\"></span>\n                                                </button>\n                                            </td>\n                                        </tr> -->\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"text-center text-muted\">Top bar widgets are not mobile device compatible and\n                                will not be accessible from the mobile app</div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"lead\">\n                                <h4 class=\"page-header\">Add your custom widget!</h4>\n                                Apart from the available widgets found in this section, you are able to add your own\n                                widgets. Adding a custom widget is simple as embedding a web page.\n                                You only need a valid URL to your widget (with HTTPS connection) and you are good to go!\n                                <hr>\n                                <button class=\"btn btn-success btn-md btn-block\" (click)=\"openAddFileDialog()\">ADD\n                                    CUSTOM</button>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/registration-setiings/registration-setiings.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/registration-setiings/registration-setiings.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header admin-widget\">\n    <h1>\n        Registration Field Settings\n    </h1>\n</section>\n<section class=\"content admin-widget\">\n    <div class=\"box box-default\">\n        <div class=\"box-body wrap-div\">\n            <div class=\"col-md-12\">\n                <mat-selection-list #registrationField color=\"primary\" class=\"p-0\">\n                    <mat-list-item>\n                        <b>Fields to Show</b>\n                        <span><b>* Required</b></span>\n                    </mat-list-item>\n                    <mat-list-option disabled [checkboxPosition]=\"before\" [selected]=\"true\">\n                        Email\n                    </mat-list-option>\n                    <mat-list-option disabled [checkboxPosition]=\"before\" [selected]=\"true\">\n                        Password\n                    </mat-list-option>\n                    <mat-list-option [checkboxPosition]=\"before\" *ngFor=\"let registrationField of RegistrationList\">\n                        {{registrationField}}\n                        <mat-slide-toggle color=\"primary\"></mat-slide-toggle>\n                    </mat-list-option>\n                </mat-selection-list>\n            </div>\n        </div>\n    </div>\n    <button class=\"btn btn-blue pull-right\">\n        Save\n    </button>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/topbar/profile.dialog.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/topbar/profile.dialog.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n    <div class=\"media-body-left\" style=\"position: relative;\">\n        <img src=\"//cdn.echofin.co/avatar/b7e64405.png?t=1551496349357\" *ngIf=\"!adminImgPath\" alt=\"\">\n        <img style=\"width: 100%; height: 100%;\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n        <div class=\"hoving-avatar\">\n            <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n            <span style=\"color: #fff;\">Change</span>\n        </div>\n    </div>\n\n    <div class=\"media-body-right\">\n        <h4 class=\"media-heading\">{{user.username}}</h4>\n        <p>{{user.email}}</p>\n        <p class=\"info\">\n            Last Login:  | Last Message: -\n        </p>\n    </div>\n</div>\n<div class=\"modal-body wrap-div profile_dialog\">\n    <mat-tab-group>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <i class=\"fa fa-cubes\"></i>\n                General\n            </ng-template>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-form-field>\n                        <mat-label>Full Name</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-7\">\n                    <mat-form-field>\n                        <mat-label>Email</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-sm-5\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Role\">\n                            <mat-option value=\"Admin\">Admin</mat-option>\n                            <mat-option value=\"Instructor\">Instructor</mat-option>\n                            <mat-option value=\"Moderator\">Moderator</mat-option>\n                            <mat-option value=\"User\">User</mat-option>\n                        </mat-select>\n                        <mat-hint>\n                            <a class=\"\">\n                                <i class=\"fa fa-info-circle\"></i>\n                            </a>\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-form-field>\n                        <mat-label>Address</mat-label>\n                        <textarea matInput></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <mat-form-field>\n                        <mat-label>City</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-sm-4\">\n                    <mat-form-field>\n                        <mat-label>Zip</mat-label>\n                        <input matInput>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-sm-4\">\n                    <mat-form-field>\n                        <mat-label>Country</mat-label>\n                        <mat-select>\n                            <mat-option value=\"Afghanistan\">Afghanistan</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"modal-footer wrap-div\">\n                <button mat-dialog-close class=\"btn btn-blue\">Save Details</button>\n            </div>\n        </mat-tab>\n\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <i class=\"fa fa-unlock-alt\"></i>\n                Security\n            </ng-template>\n            <div class=\"p-10 security\">\n                <div class=\"alert alert-info text-center\">\n                    <strong>Notice</strong>\n                    <p>Remember to notify your user for the password change</p>\n                </div>\n                <mat-form-field>\n                    <mat-label>Password</mat-label>\n                    <input matInput>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Repeat Password</mat-label>\n                    <input matInput>\n                </mat-form-field>\n            </div>\n            <div class=\"modal-footer wrap-div\">\n                <button mat-dialog-close class=\"btn btn-blue\">Change Password</button>\n            </div>\n        </mat-tab>\n\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <i class=\"fa fa-money\"></i>\n                Subscriptions\n            </ng-template>\n\n            <table mat-table [dataSource]=\"dataSource\">\n                <!-- Plan Column -->\n                <ng-container matColumnDef=\"plan\">\n                    <th mat-header-cell *matHeaderCellDef> Plan </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.plan}} </td>\n                </ng-container>\n\n                <!-- Trial Column -->\n                <ng-container matColumnDef=\"trial\">\n                    <th mat-header-cell *matHeaderCellDef> Trial </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.trial}} </td>\n                </ng-container>\n\n                <!-- CC Column -->\n                <ng-container matColumnDef=\"CC\">\n                    <th mat-header-cell *matHeaderCellDef> CC </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.CC}} </td>\n                </ng-container>\n\n                <!-- Period Column -->\n                <ng-container matColumnDef=\"period\">\n                    <th mat-header-cell *matHeaderCellDef> Period </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.period}} </td>\n                </ng-container>\n\n                <!-- Canceled Column -->\n                <ng-container matColumnDef=\"canceled\">\n                    <th mat-header-cell *matHeaderCellDef> Canceled </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.canceled}} </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n        </mat-tab>\n    </mat-tab-group>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/topbar/topbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/topbar/topbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-right navbar-custom-menu\">\n    <ul class=\"nav navbar-nav\">\n        <li class=\"settings-menu\">\n            <a routerLink=\"settings\" routerLinkActive=\"selectedRoom\">\n                <span class=\"fa fa-gears fa-fw\"></span>\n            </a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/dashboard']\" target=\"_blank\" href=\"/\">\n                <span class=\"fa fa-comments fa-fw\"></span>\n            </a>\n        </li>\n        <li>\n            <a [matMenuTriggerFor]=\"notificationMenu\">\n                <span class=\"fa fa-envelope-o fa-fw\"></span>\n            </a>\n            <mat-menu #notificationMenu=\"matMenu\" class=\"notificationMenu\">\n                <h3 class=\"mat-h4\">Latest Changes</h3>\n                <mat-divider></mat-divider>\n                <button mat-menu-item>\n                    No changes were found\n                </button>\n                <!-- <button mat-menu-item>\n                    <span>new</span>\n                    <a><b>Echofin v2</b></a>\n                    The new Echofin platform has been released. Get all the details here:\n                    https://www.echofin.com/\n                </button>\n                <button mat-menu-item>\n                    <span>new</span>\n                    <a><b>Zoom widget integration</b></a>\n                    A new widget has been added that allows your team members to watch your Zoom broadcast\n                    within...\n                </button>\n                <button mat-menu-item>\n                    <span>new</span>\n                    <a><b>Dashboard\\Users</b></a>\n                    Added a Subscriptions tab on the details panel.\n                </button>\n                <button mat-menu-item>\n                    <span>new</span>\n                    <a><b>Email</b></a>\n                    All email billing receipts will now include a reply-to which can be set within the...\n                </button>\n                <button mat-menu-item>\n                    <span>new</span>\n                    <a><b>API</b></a>\n                    The initial version of the Echofin API has been released. For more details please check\n                    the API...\n                </button> -->\n            </mat-menu>\n        </li>\n        <li class=\"dropdown\">\n            <a>\n                <button mat-button [matMenuTriggerFor]=\"menu\">\n                   {{user.username}}\n                    <span class=\"caret\"></span>\n                </button>\n                <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                    <a class=\"profile-menu\" (click)=\"onProfile()\">Profile</a>\n        <li class=\"divider\"></li>\n        <a class=\"profile-menu\" (click)=\"logout()\">Sign Out</a>\n        </mat-menu>\n        </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatarea/chatarea.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatarea/chatarea.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     <mat-tab-group>\n            <mat-tab *ngFor=\"let widget of widgets; index as i\" label=\"{{widget['name']}}\">\n                <iframe class=\"widgets-iframe ng-scope\" frameborder=\"0\" [src]=\"iframeSrc[i]\" width=\"100%\" style=\"height: 100vh;\"></iframe>\n            </mat-tab>\n            <!-- <mat-tab label=\"FX Quotes\">\n                <div class=\"stats-list\" style=\"height: 32px;\">\n                    <span class=\"stats-head\" nowrap=\"\" style=\"padding-left: 25px;\">\n                    Symbol\n                    </span>\n                    <span class=\"stats-head\" nowrap=\"\">Ask</span>\n                    <span class=\"stats-head\" nowrap=\"\">Last</span>\n                    <span class=\"stats-head\" nowrap=\"\">High</span>\n                    <span class=\"stats-head\" nowrap=\"\">Low</span>\n                    <span class=\"stats-head\" nowrap=\"\">Chg.</span>\n                    <span class=\"stats-head\" nowrap=\"\">Chg. %</span>\n                    <span class=\"stats-head\" nowrap=\"\">Time</span>\n                </div>\n                <div colspan=\"8\" style=\"height: 18px; background-color: #13282D;\">&nbsp;</div>\n                <div class=\"stats-desc\" style=\"padding-left: 5px;\">\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                    AUD/CAD\n                    </span>\n                    <div style=\"font-size:10px;\">\n                        <a href=\"settings.php\" style=\"margin:10px 0 0 10px;  float: left; color: #19a68a;\">Settings</a>\n                        <span style=\"margin:10px 10px 0 0; float: right;color:#585858;padding:0;\">Quotes by Investing.com</span>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"FX Calculators\">\n                <div id=\"calculators\">\n                    <p>Select a calculator:</p>\n                    <select>\n                        <option>Pip</option>\n                        <option>Margin</option>\n                    </select>\n                </div>\n                <div id=\"trdt_container\">\n                    <legend>Margin Calculator</legend>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\">Currency Pair:</label>\n                        <div class=\"controls\">\n                        <select>\n                            <option>USD/JPY</option>\n                            <option>EUR/USD</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\">USD / JPY Rate:</label>\n                        <div class=\"controls\">\n                        <input type=\"text\" placeholder=\"108.663\" disabled>\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\">Number of Units:</label>\n                        <div class=\"controls\">\n                        <input type=\"text\" placeholder=\"\"  style=\"margin-bottom:10px;\">\n                        <select>\n                            <option>standard</option>\n                            <option>Mini</option>\n                        </select>\n                        </div>\n                        <span class=\"help-block\">Standard lot equals 100,000BC, 100oz Gold, 100oz Platinum, 100oz Palladium, 1000oz Silver, 100 Barrel Oil</span>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\">Margin Ratio (Leverage):</label>\n                        <div class=\"controls\">\n                        <select>\n                            <option>1:1</option>\n                            <option>25:1</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <label class=\"control-label\"><span id=\"marginCalculate\" class=\"btn btn-success\">Calculate</span>\n                        </label>\n                        <div class=\"controls\"><span id=\"marginOutput\" class=\"result\">0.00</span></div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Commodities\">\n                <div class=\"stats-list\" style=\"height: 32px;\">\n                    <span class=\"stats-head\" nowrap=\"\" style=\"padding-left: 25px;\">Symbol(CFDs)\n                    </span>\n                    <span class=\"stats-head\" nowrap=\"\">Last</span>\n                    <span class=\"stats-head\" nowrap=\"\">High</span>\n                    <span class=\"stats-head\" nowrap=\"\">Low</span>\n                    <span class=\"stats-head\" nowrap=\"\">Chg.</span>\n                    <span class=\"stats-head\" nowrap=\"\">Chg. %</span>\n                    <span class=\"stats-head\" nowrap=\"\">Time</span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Lumber\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px; background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Gasoline RBOB\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px; background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 40, 45);\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Aluminum\n                    </span>\n                </div>\n                <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                    <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                    <span style=\"display:inline-block;\">\n                    Copper\n                    </span>\n                </div>\n                <div>\n                    <span style=\"margin-right: 10px;\"></span>\n                </div>\n                <div style=\"font-size:10px;\">\n                    <span style=\"margin-right: 10px; float: right;color:#585858;\">Quotes by Investing.com</span>\n                </div>\n            </mat-tab>\n            <mat-tab label=\" Talking Twitter\">\n                <div id=\"topBar\">\n                    <a href=\"javascript: void(0);\" id=\"soundBtn\" data-speak=\"0\" title=\"Mute/Unmute twitter feed speech\">\n                    <i class=\"fa fa-volume-off\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a href=\"javascript: void(0);\" id=\"settingsBtn\" title=\"Feed options\">\n                    <i class=\"fa fa-sliders\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n                <div  style=\"height: 18px; background-color: rgb(19, 40, 45);\" class=\"ng-star-inserted\">&nbsp;</div>\n                <div class=\"twitter-talk\">\n                    <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                    <div class=\"content\">\n                        <div class=\"user\">\n                        <a href=\"#\" target=\"_blank\">\n                        <span class=\"username\">Bloomberg</span>\n                        <span class=\"screenname\">\n                        <small>@</small>business\n                        </span>\n                        </a>\n                        </div>\n                        <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                        <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                        stalled by heavy rainfall and flood… <a href=\"#\" target=\"_blank\">https://t.co/n3LqsN9taz\n                        </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"twitter-talk\" style=\"background-color:rgb(19, 40, 45);\">\n                    <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-_normal.jpg\" width=\"48\" height=\"48\"></div>\n                    <div class=\"content\">\n                        <div class=\"user\">\n                        <a href=\"#\" target=\"_blank\">\n                        <span class=\"username\">The Economist</span>\n                        <span class=\"screenname\">\n                        <small>@</small>business\n                        </span>\n                        </a>\n                        </div>\n                        <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                        <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                        stalled by heavy rainfall and flood… <a href=\"#\" target=\"_blank\">https://t.co/n3LqsN9taz\n                        </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"twitter-talk\">\n                    <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                    <div class=\"content\">\n                        <div class=\"user\">\n                        <a href=\"#\" target=\"_blank\">\n                        <span class=\"username\">Bloomberg</span>\n                        <span class=\"screenname\">\n                        <small>@</small>business\n                        </span>\n                        </a>\n                        </div>\n                        <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                        <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                        stalled by heavy rainfall and flood… <a href=\"#\" target=\"_blank\">https://t.co/n3LqsN9taz\n                        </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"twitter-talk\" style=\"background-color:rgb(19, 40, 45);\">\n                    <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-_normal.jpg\" width=\"48\" height=\"48\"></div>\n                    <div class=\"content\">\n                        <div class=\"user\">\n                        <a href=\"#\" target=\"_blank\">\n                        <span class=\"username\">The Economist</span>\n                        <span class=\"screenname\">\n                        <small>@</small>business\n                        </span>\n                        </a>\n                        </div>\n                        <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                        <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                        stalled by heavy rainfall and flood… <a href=\"#\" target=\"_blank\">https://t.co/n3LqsN9taz\n                        </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"twitter-talk\">\n                    <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                    <div class=\"content\">\n                        <div class=\"user\">\n                        <a href=\"#\" target=\"_blank\">\n                        <span class=\"username\">Bloomberg</span>\n                        <span class=\"screenname\">\n                        <small>@</small>business\n                        </span>\n                        </a>\n                        </div>\n                        <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                        <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                        stalled by heavy rainfall and flood… <a href=\"#\" target=\"_blank\">https://t.co/n3LqsN9taz\n                        </a>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab> -->\n            </mat-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/charts-dialog.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/charts-dialog.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>CHARTS\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 400px; width: 650px;\">\n    <iframe src=\"https://forex.echofin.co/js/templates/tradingview-container.html\" style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/coin-360-dialog.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/coin-360-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>COIN 360\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 688px; width: 880px;\">\n    <iframe src=\"https://coin360.io/\" style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <!-- <mat-slide-toggle [(ngModel)]=\"darkTheme\" (click)=\"onDarkTheme()\" color=\"warn\">\n  </mat-slide-toggle> -->\n  <mat-drawer-container class=\"example-container\" autosize\n    style=\"float:right; width:100%; overflow:hidden!important; height:100vh; z-index:auto;\">\n    <mat-drawer #drawer class=\"example-sidenav sidebar navbar-collapse\" [opened]=\"screenWidth > 840\"\n      [mode]=\"(screenWidth > 840) ? 'side' : 'over'\">\n      <app-sidenav (selectedRoom)=\"setRoomTitle($event)\"></app-sidenav>\n      <div class=\"example-sidenav-content mobile-cross\">\n        <button class=\"\" hamburger-drv=\"\" mat-button (click)=\"drawer.toggle()\">\n          <i class=\"fa fa-close\"></i>\n        </button>\n      </div>\n    </mat-drawer>\n    <div class=\"example-sidenav-content\">\n      <div class=\"navbar navbar-fixed-top navbar-inverse navbar-static-top\" style=\"display: flex;\">\n        <!-- <button class=\"hamburgerHeader hamburger hamburger-arrow-left\" hamburger-drv=\"\" mat-button\n          (click)=\"drawer.toggle()\">\n          <span class=\"icon\"></span>\n        </button> -->\n        <div style=\"flex: 1 auto;line-height: 66px;     flex: 1 auto;\n        line-height: 66px;\n        min-width: 250px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\">\n          <button mat-icon-button color=\"warn\" class=\"hamburgerHeader\" (click)=\"drawer.toggle()\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n          <i class=\"roomHash fa fa-hashtag\" aria-hidden=\"true\"></i>\n          <span class=\"roomTitle text-capitalize  \">{{roomTitle}}</span>\n          <span class=\"roomTitle text-capitalize  \">Market master</span>\n        </div>\n        <div class=\"roomHeader\" style=\"flex: 1 auto;\">\n          <div header-nav-trial=\"\" class=\"nav-trial-container\">\n            <button class=\" button_wrap\" (click)=\"drawer1.toggle()\" mat-icon-button>\n              <span class=\"material-icons\">\n                widgets\n              </span>\n              <a>WIDGETS</a>\n            </button>\n            <button class=\"hidden-xs  button_wrap\" mat-icon-button (click)=\"drawer4.toggle()\">\n              <span class=\"icon fa fa-address-book\"></span>\n              <a>CONTACTS</a>\n            </button>\n            <!-- <button *ngIf=\"isAdmin\" class=\"hidden-xs  rectangular-btn button_wrap \" mat-button>\n              <span class=\"material-icons\">video_call</span>\n              <a>BROADCAST</a>\n            </button> -->\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openDataFlashDialog()\">\n              <span class=\"material-icons\">\n                offline_bolt\n              </span>\n              <a>DATAFLASH</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openFXCrossRatesDialog()\">\n              <span class=\"icon fa fa-exchange\"></span>\n              <a (click)=\"openFXCrossRatesDialog()\">FX CROSS RATES</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openOtherChartDialog()\">\n              <span class=\"icon fa fa-area-chart\"></span>\n              <a (click)=\"openOtherChartDialog()\">CHARTS</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openZoomDialog()\">\n              <span class=\"material-icons\">video_call</span>\n              <a (click)=\"openZoomDialog()\">ZOOM</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openLiveTVDialog()\">\n              <span class=\"material-icons\">tv</span>\n              <a (click)=\"openLiveTVDialog()\">LIVETV</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openCoin360Dialog()\">\n              <span class=\"icon fa fa-bitcoin\"></span>\n              <a (click)=\"openCoin360Dialog()\">COIN360</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openFXHeatmapDialog()\">\n              <span class=\"icon fa fa-thermometer-full\"></span>\n              <a (click)=\"openFXHeatmapDialog()\">FX HEATMAP</a>\n            </button>\n            <button class=\"button_wrap hidden-xs\" mat-icon-button>\n              <span class=\"material-icons\">alarm</span>\n              <a (click)=\"openMarketHoursDialog()\">MARKET HOURS</a>\n            </button>\n\n            <button class=\"button_wrap hidden-xs\" mat-icon-button (click)=\"openChartsDialog()\" *ngIf=\"!chartsDisable\">\n              <span class=\"material-icons\">bar_chart</span>\n              <a (click)=\"openChartsDialog()\">CHARTS</a>\n            </button>\n            <button (click)=\"onRedirectAdmin()\" mat-icon-button mat-button *ngIf=\"isAdmin\"\n              class=\"hidden-xs button_wrap dashboard-btn hidden-xs\">\n              <span class=\"icon fa fa-tachometer\"></span>\n              <a>DASHBOARD</a>\n            </button>\n\n           \n          </div>\n        </div>\n      </div>\n\n      <mat-drawer-container class=\"example-container container-all-page\" autosize>\n        <mat-drawer #drawer1 class=\"example-sidenav sidebar navbar-collapse widget-sidenav right-sidenav\" mode=\"side\"\n          position=\"end\" [opened]=\"screenWidth > 840\" [mode]=\"(screenWidth > 840) ? 'side' : 'over'\">\n          <app-chatarea></app-chatarea>\n        </mat-drawer>\n        <div class=\"example-sidenav-content\">\n          <mat-drawer-container class=\"example-container\" autosize>\n            <app-profile-sidebar></app-profile-sidebar>\n            <mat-drawer #drawer4 class=\"example-sidenav admin_and_users\" mode=\"side\" position=\"end\">\n              <app-user-panel></app-user-panel>\n            </mat-drawer>\n            <div class=\"example-sidenav-content\">\n              <div class=\"page-data\">\n                <app-unlockchatroom></app-unlockchatroom>\n              </div>\n            </div>\n          </mat-drawer-container>\n          <div class=\"leftnav\">\n            <!-- <button *ngIf=\"isAdmin\" mat-button class=\"hidden-xs header-button dashboard \">\n              <a routerLink=\"/admindashboard\">\n                <span class=\"icon fa fa-desktop\"></span><br>\n                <span class=\"label\">DASHBOARD</span>\n              </a>\n            </button>\n            <button *ngIf=\"isAdmin\" class=\"hidden-xs header-button broadcast\" mat-button>\n                <span class=\"icon fa fa-video-camera\"></span><br>\n                <span class=\"label\">BROADCAST</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openChartsDialog()\" mat-button>\n              <span class=\"icon fa fa-bar-chart\"></span><br>\n              <span class=\"label \">CHARTS</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openMarketHoursDialog()\" mat-button>\n              <span class=\"icon fa fa-clock-o\"></span><br>\n              <span class=\"label \">MARKET HOURS</span>\n            </button> <button class=\"hidden-xs header-button\" (click)=\"openFXHeatmapDialog()\" mat-button>\n              <span class=\"icon fa fa-thermometer-full\"></span><br>\n              <span class=\"label \">FX HEATMAP</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openCoin360Dialog()\" mat-button>\n              <span class=\"icon fa fa-bitcoin\"></span><br>\n              <span class=\"label \">COIN360</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openLiveTVDialog()\" mat-button>\n              <span class=\"icon fa fa-tv\"></span><br>\n              <span class=\"label \">LIVETV</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openZoomDialog()\" mat-button>\n              <span class=\"icon fa fa-video-camera\"></span><br>\n              <span class=\"label \">ZOOM</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openOtherChartDialog()\" mat-button>\n              <span class=\"icon fa fa-area-chart\"></span><br>\n              <span class=\"label \">CHARTS</span>\n            </button>\n            <button class=\"hidden-xs header-button\" (click)=\"openFXCrossRatesDialog()\" mat-button>\n              <span class=\"icon fa fa-exchange\"></span><br>\n              <span class=\"label \">FX CROSS RATES</span>\n            </button>\n            <button class=\"hidden-xs header-button\" mat-button>\n              <span class=\"icon fa fa-bolt\"></span><br>\n              <span class=\"label \">DATAFLASH</span>\n            </button> -->\n            <!-- <button class=\"hidden-xs header-button \" mat-button (click)=\"drawer4.toggle()\">\n              <span class=\"icon fa fa-address-book-o\"></span><br>\n              <span class=\"label \">DIRECTORY</span>\n            </button>\n            <div class=\"example-sidenav-content widget-btn side-tp \">\n              <button class=\"hamburgerHeader header-button hamburger hamburger-arrow-left\" mat-button\n                (click)=\"drawer1.toggle()\">\n                <span class=\"icon material-icons\">apps</span><br>\n                <span class=\"label \">WIDGETS</span>\n              </button>\n            </div> -->\n          </div>\n        </div>\n      </mat-drawer-container>\n    </div>\n  </mat-drawer-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/data-flash-dialog.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/data-flash-dialog.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>DATAFLASH\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 525px; width: 310px;\">\n    <iframe src=\"https://dev2.newsimpact.com/NewsWidget/echofin\" style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fx-cross-rates-dialog.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fx-cross-rates-dialog.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>FX CROSS RATES\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 500px; width: 780px;\">\n    <iframe src=\"https://plugins.echofin.co/plugins/tv_crossrates/\" style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/fx-heatmap-dialog.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/fx-heatmap-dialog.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">FX HEATMAP\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 500px; width: 780px; background: #444;\">\n    <iframe\n        src=\"https://s.tradingview.com/embed-widget/forex-heat-map/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22plugins.echofin.co%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-heat-map%22%7D\"\n        style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/live-tv-dialog.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/live-tv-dialog.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>LIVE TV\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 400px; width: 520px;\">\n    <iframe\n        src=\"https://tradetools.tk/s/livetv/\"\n        style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/market-hours-dialog.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/market-hours-dialog.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>MARKET HOURS\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 291px; width: 738px;\">\n    <iframe\n        src=\"https://tradetools.tk/s/markethours/\"\n        style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/other-chart-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/other-chart-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>CHARTS\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 480px; width: 640px;\">\n    <iframe\n        src=\"https://tradetools.tk/t/cryptowatch/\"\n        style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/zoom-dialog.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/zoom-dialog.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"iframe\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\" cdkDragHandle>ZOOM\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"m-0 p-0\" style=\"resize: both; max-height: 100%; height: 688px; width: 1090px;\">\n    <iframe\n        src=\"https://tradetools.tk/s/zoom/\"\n        style=\"width: 100%; height: 100%;\n\"></iframe>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/directchatroom/directchatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/directchatroom/directchatroom.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-data\"  style=\"font-size: 2rem;text-align: center;color: #656565;padding: 3rem;\">\n        <span class=\"fa fa-comments-o fa-3x\" style=\"margin: 0 0 2rem;\"></span><br>\n        You are in Direct Message conversation<br>with @RiskyRicky\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <main id=\"content\" class=\"error-container\" role=\"main\">\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\n          <div class=\"error-container\">\n            <h1 class=\"error-code\">404</h1>\n            <p class=\"error-info\">\n              {{ 'Opps, it seems that this page does not exist.' }}\n            </p>\n            <p class=\"error-help mb\">\n              {{ 'If you are sure it should, search for it.' }}\n            </p>\n            <form (ngSubmit)=\"searchResult()\" method=\"get\">\n              <div class=\"form-group\">\n                <input class=\"form-control input-no-border\" type=\"text\" placeholder=\"{{ 'Search Pages' }}\">\n              </div>\n              <button type=\"submit\"  class=\"btn btn-inverse\">\n                {{ 'Search' }} <i class=\"fa fa-search text-warning ml-xs\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </main>\n\n    <footer class=\"page-footer\">\n      2014-2018 &copy; {{ 'MarketMasters Academy' }}\n    </footer>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-sidenav-container class=\"sidenav-container\" style=\"display: flex; align-items: center;\">\n    <mat-sidenav position=\"end\" #sidenav mode=\"side\" opened position=\"start\">\n      <div class=\"circle\">\n        <!-- <h1>Sign In</h1>\n            <p>Join <span style=\"text-decoration:underline!important; color:#fff;\">MarketMastersAcademy</span> team.</p> -->\n\n        <h1>Forgot Your Password?</h1>\n        <p>Input your registered email or username to reset your password</p>\n      </div>\n      <img src=\"assets/big-lion2-smaller.png\" class=\"main-logo\">\n      <div class=\"login-form\">\n        <div class=\"wrap-div\">\n          <div class=\"form-input\">\n            <form action=\"\">\n              <div class=\"input-group input-field\">\n                <input type=\"text\" class=\"inputText\" required />\n                <span class=\"floating-label\">Email or Username *</span>\n              </div>\n              <button class=\"md-ink-ripple\" type=\"submit\" ng-transclude=\"\" ng-disabled=\"loading\">\n                reset your password</button>\n            </form>\n          </div>\n          <div class=\"signup-forget\">\n            <p>Do you have an account? Please\n              <a routerLink=\"/login\" style=\"text-decoration:underline!important; color:#fff;\">Sign In</a> instead.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"sidebar-footer\">\n        <div class=\"footer-logo\">\n          <div class=\"text-center\">\n            <a href=\"https://www.facebook.com/officialcirclechat/\" target=\"_blank\" mat-mini-fab class=\"facebook\"><i\n                class=\"fa fa-facebook\"></i></a>\n            <a href=\"https://www.instagram.com/circle.chat/\" target=\"_blank\" mat-mini-fab class=\"insta\"><i\n                class=\"fa fa-instagram\"></i></a>\n            <a href=\"https://www.linkedin.com/company/circle-chat/\" target=\"_blank\" mat-mini-fab class=\"linkedin\"><i\n                class=\"fa fa-linkedin\"></i></a>\n          </div>\n        </div>\n        <div class=\"footer-reserved\">\n          © 2020. All RIGHTS RESERVED.\n        </div>\n      </div>\n    </mat-sidenav>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lockedchatroom/lockedchatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lockedchatroom/lockedchatroom.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-data empty-messages \">\n        <img  class=\"small ng-scope\" src=\"https://marketmastersacademy.echofin.co/images/invite_logo.png\">\n        <br><br>\n        <button class=\"btn btn-primary\" ng-click=\"OpenInviteModal()\">Invite your friends</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-sidenav-container class=\"sidenav-container\" style=\"display: flex; align-items: center;\">\n    <mat-sidenav position=\"end\" #sidenav mode=\"side\" opened position=\"start\">\n      <div class=\"circle\">\n        <h1>Sign In</h1>\n        <p>Join <span style=\"text-decoration:underline!important; color:#fff;\">MarketMastersAcademy</span> team.</p>\n      </div>\n      <img src=\"assets/big-lion2-smaller.png\" class=\"main-logo\">\n      <div *ngIf=\"isLoading\" class=\"loading-indicator\">\n        <mat-spinner style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-spinner>\n      </div>\n      <div class=\"login-form\">\n        <div class=\"wrap-div\">\n          <div class=\"form-input\">\n            <form [formGroup]=\"loginUseData\" (ngSubmit)=\"loginUser()\">\n              <div class=\"input-group input-field\">\n                <input class=\"inputText\" formControlName=\"email\" name=\"email\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Your email address *</span>\n                <p style=\"margin:0px;\" *ngIf=\"!isValid && errorMessageEmail\">{{errorMessageEmail}}</p>\n              </div>\n              <div class=\"input-group input-field\">\n                <input class=\"inputText\" formControlName=\"password\" name=\"email\" type=\"password\" style=\"cursor: text;\"\n                  required>\n                <span class=\"floating-label\">Password *</span>\n                <p style=\"margin:0px;\" *ngIf=\"!isValid && errorMessagePassword\">{{errorMessagePassword}}</p>\n              </div>\n              <p style=\"margin:0px;\" *ngIf=\"incorrectLogin && errorMessageLogin\">{{errorMessageLogin}}</p>\n              <button class=\"md-ink-ripple\" type=\"submit\" ng-transclude=\"\" [disabled]=\"loginUseData.errors\">\n                Sign In</button>\n            </form>\n          </div>\n          <div class=\"signup-forget\">\n            <p>No account? <a routerLink=\"/register\" style=\"text-decoration:underline!important; color:#fff; cursor: pointer;\">Sign Up</a></p>\n            <p><a routerLink=\"/forgotpassword\" style=\"text-decoration:underline!important; color:#fff; cursor: pointer;\">Forgot\n                Password</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"sidebar-footer\">\n        <div class=\"footer-logo\">\n          <div class=\"text-center\">\n            <a href=\"https://www.facebook.com/officialcirclechat/\" target=\"_blank\" mat-mini-fab class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"https://www.instagram.com/circle.chat/\" target=\"_blank\" mat-mini-fab class=\"insta\"><i class=\"fa fa-instagram\"></i></a>\n            <a href=\"https://www.linkedin.com/company/circle-chat/\" target=\"_blank\" mat-mini-fab class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n          </div>\n        </div>\n        <div class=\"footer-reserved\">\n          © 2020. All RIGHTS RESERVED.\n        </div>\n      </div>\n    </mat-sidenav>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/onpoint-room/onpoint-room.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/onpoint-room/onpoint-room.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-drawer-container class=\"example-container\" autosize style=\"float:right; width:calc(100% - 80px); overflow:hidden!important; z-index:auto;\">\n      <mat-drawer #drawer class=\"example-sidenav sidebar navbar-collapse\"  [opened]=\"screenWidth > 840\" [mode]=\"(screenWidth > 840) ? 'side' : 'over'\">\n        <app-sidenav></app-sidenav>\n        <div class=\"example-sidenav-content mobile-cross\">\n            <button class=\"\" hamburger-drv=\"\" mat-button\n              (click)=\"drawer.toggle()\">\n              <i class=\"fa fa-close\"></i>\n            </button>\n          </div>\n      </mat-drawer> \n      <div class=\"example-sidenav-content\">\n          <div class=\"navbar navbar-fixed-top navbar-inverse navbar-static-top\" [ngStyle]=\"{'display' : (screenWidth > 840) ? '' : 'block'}\">\n              <button class=\"hamburgerHeader hamburger hamburger-arrow-left\" hamburger-drv=\"\" mat-button\n            (click)=\"drawer.toggle()\">\n              <span class=\"icon\"></span>\n            </button>\n            <div class=\"roomHeader\" style=\"float:none;\">\n                <i class=\"roomHash fa fa-hashtag\"\n                  aria-hidden=\"true\"></i>\n              <span class=\"roomTitle ng-binding ng-scope\">Traders\n                Lounge</span>\n              <i class=\"fa\" ng-class=\"{'roomLock': room.n_type==2 , 'fa-unlock': room.n_type==2}\" aria-hidden=\"true\"></i>\n              <div header-nav-trial=\"\" class=\"nav-trial-container\">\n                <div class=\"nav-trial-container-text ng-binding\"></div>\n              </div>\n            </div>\n          </div>\n        <mat-drawer-container class=\"example-container container-all-page\" autosize >\n            <mat-drawer #drawer1 class=\"example-sidenav sidebar navbar-collapse widget-sidenav right-sidenav\" mode=\"side\" opened=\"true\" \n            position=\"end\" [opened]=\"screenWidth > 840\" [mode]=\"(screenWidth > 840) ? 'side' : 'over'\" >\n                        <app-chatarea></app-chatarea>\n            </mat-drawer>\n            <div class=\"example-sidenav-content\">\n               <mat-drawer-container class=\"example-container\" autosize>\n                    <app-profile-sidebar></app-profile-sidebar>\n                        <mat-drawer #drawer4 class=\"example-sidenav admin_and_users\" mode=\"side\" position=\"end\">\n                                <app-user-panel></app-user-panel>\n                        </mat-drawer>\n                  <div class=\"example-sidenav-content\">\n                     <app-lockedchatroom></app-lockedchatroom>\n                     <div class=\"chatDiv\" style=\"display: block; right: 25px; left: 10px;\">\n                        <button class=\"btnUploader dz-clickable\" id=\"uploadBtn\" style=\"cursor: pointer;\"><i class=\"fa fa-arrow-circle-o-up\"></i></button>\n                        <button id=\"emojiBtn\" class=\"\"><i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\n                        </button>\n                        <button id=\"addon_Signal\" class=\"cbAddonsBtn\" title=\"Publish Signal\"><i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i></button>\n                        <span id=\"chatbox-placeholder\">Message #Traders Lounge</span>\n                        <div id=\"chatbox\" contenteditable=\"true\" style=\"cursor: text;\"></div>\n                        <span id=\"faux\" style=\"display: none;\"></span>\n                        <span class=\"downloadLink paymentFormRoom\"><i class=\"fa fa-download\"></i> Download Desktop App</span>\n                     </div>\n                  </div>\n               </mat-drawer-container>\n               <div class=\"leftnav\">\n                  <button class=\"hidden-xs header-button ng-scope\">\n                  <span class=\"icon fa fa-bar-chart\"></span><br>\n                  <span class=\"label ng-binding\">CHARTS</span>\n                  </button>\n                  <button class=\"hidden-xs header-button ng-scope\"  >\n                  <span class=\"icon fa fa-clock-o\"></span><br>\n                  <span class=\"label ng-binding\">MARKET HOURS</span>\n                  </button> <button class=\"hidden-xs header-button ng-scope\">\n                  <span class=\"icon fa fa-thermometer-full\"></span><br>\n                  <span class=\"label ng-binding\">FX HEATMAP</span>\n                  </button>\n                  <button class=\"hidden-xs header-button ng-scope\">\n                  <span class=\"icon fa fa-bolt\"></span><br>\n                  <span class=\"label ng-binding\">DATAFLASH</span>\n                  </button>\n                  <button class=\"hidden-xs header-button ng-scope\" mat-button (click)=\"drawer4.toggle()\">\n                  <span class=\"icon fa fa-address-book-o\"></span><br>\n                  <span class=\"label ng-binding\">DIRECTORY</span>\n                  </button> \n                  <div class=\"example-sidenav-content widget-btn side-tp \">\n                     <button class=\"hamburgerHeader header-button hamburger hamburger-arrow-left \" hamburger-drv=\"\" mat-button (click)=\"drawer1.toggle()\">\n                     <span class=\"icon material-icons ng-binding\">apps</span><br>\n                     <span class=\"label ng-binding\">WIDGETS</span>\n                     </button>\n                  </div>\n               </div>\n            </div>\n         </mat-drawer-container>\n    </div>\n  </mat-drawer-container>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-sidebar/profile-sidebar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-sidebar/profile-sidebar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"card_box\">\n    <div class=\"profile-sidebar\">\n        <div class=\"ui-widget-header-user ui-draggable-handle \">\n            <span class=\"material-icons userStatus1 offline\" style=\"vertical-align:middle; font-size:20px\">person_outline</span> brytonmarquis\n            <div class=\"pull-right\">\n                <button class=\"pull-right btnClose\" matTooltip=\"Close user window\"\n                aria-label=\"Button that displays a tooltip when focused or hovered over\"\n                matTooltipPosition=\"right\">×</button>\n            </div>\n        </div>\n        <div class=\"profile-userpic\">\n            <img src=\"//cdn.echofin.co/avatars/f40b53a0.png\" class=\"img-responsive\" alt=\"\" width=\"220\">\n        </div>\n        <div class=\"profile-usermenu\">\n            <ul class=\"nav nav-profile\">\n                <li>\n                    <a href=\"#\">\n                        Direct Message\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Block Direct Messages\n                        <span class=\"fa fa-info-circle pull-right\"  matTooltip=\"Prevent user from sending you Direct Messages\"\n                        aria-label=\"Button that displays a tooltip when focused or hovered over\"\n                        matTooltipPosition=\"right\"></span>\n                    </a>\n                </li>\n                <li>\n                    <a  href=\"#\">\n                        Mute from Timeline\n                        <span class=\"fa fa-info-circle pull-right\" matTooltip=\"Hide the user's messages from the timeline of the current chatroom\"\n                        aria-label=\"Button that displays a tooltip when focused or hovered over\"\n                        matTooltipPosition=\"right\"></span>\n                    </a>\n                </li>\n                <li>\n                    <a class=\"#\">\n                        Ban from Team\n                        <span class=\"fa fa-info-circle pull-right\"matTooltip=\"Kick the user out of the team and lock their account\"\n                        aria-label=\"Button that displays a tooltip when focused or hovered over\"\n                        matTooltipPosition=\"right\"></span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rightarea/rightarea.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rightarea/rightarea.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"navbar-right\">\n    <button class=\"hidden-xs header-button ng-scope\"  >\n    <span class=\"icon fa fa-bar-chart\"></span><br>\n    <span class=\"label ng-binding\">CHARTS</span>\n    </button>\n    <button class=\"hidden-xs header-button ng-scope\"  >\n    <span class=\"icon fa fa-clock-o\"></span><br>\n    <span class=\"label ng-binding\">MARKET HOURS</span>\n    </button> <button class=\"hidden-xs header-button ng-scope\">\n    <span class=\"icon fa fa-thermometer-full\"></span><br>\n    <span class=\"label ng-binding\">FX HEATMAP</span>\n    </button> <button class=\"hidden-xs header-button ng-scope\">\n    <span class=\"icon fa fa-bolt\"></span><br>\n    <span class=\"label ng-binding\">DATAFLASH</span>\n    </button> \n    <div class=\"example-sidenav-content side-tp sec\">\n       <button class=\"hamburgerHeader header-button hamburger hamburger-arrow-left hidden-xs\" hamburger-drv=\"\" mat-button (click)=\"draw.toggle()\">\n               <span class=\"icon fa fa-address-book-o\"></span><br>\n       <span class=\"label ng-binding\">DIRECTORY</span>\n       </button>\n   </div> -->\n\n\n\n    <!-- <mat-drawer #drawer1 class=\"example-sidenav sidebar navbar-collapse widget-sidenav right-sidenav\" mode=\"side\" \n        opened=\"true\" position=\"end\" style=\"position:fixed; background-color:#252525!important; right:0;\">\n       <mat-tab-group>\n           <mat-tab label=\"FX Quotes\">\n\n                   <div class=\"stats-list\" style=\"height: 32px;\">\n                           <span class=\"stats-head\" nowrap=\"\" style=\"padding-left: 25px;\">\n                               Symbol\n                           </span>\n                           <span class=\"stats-head\" nowrap=\"\">Ask</span>\n                           <span class=\"stats-head\" nowrap=\"\">Last</span>\n                           <span class=\"stats-head\" nowrap=\"\">High</span>\n                           <span class=\"stats-head\" nowrap=\"\">Low</span>\n                           <span class=\"stats-head\" nowrap=\"\">Chg.</span>\n                           <span class=\"stats-head\" nowrap=\"\">Chg. %</span>\n                           <span class=\"stats-head\" nowrap=\"\">Time</span>\n                   </div>\n                   <div colspan=\"8\" style=\"height: 18px; background-color: #474747;\">&nbsp;</div>\n                   <div class=\"stats-desc\" style=\"padding-left: 5px;\">\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <span> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                           AUD/CAD\n                       </span>\n                       <div style=\"font-size:10px;\">\n                               <a href=\"settings.php\" style=\"margin-left:10px;  float: left; color: #19a68a;\">Settings</a>\n                               <span style=\"margin-right: 10px; float: right;color:#585858;\">Quotes by Investing.com</span>\n                       </div>\n                   </div>\n\n           </mat-tab>\n           <mat-tab label=\"FX Calculators\">  <div id=\"calculators\">\n                   <p>Select a calculator:</p>\n                       <select>\n                               <option>Pip</option>\n                               <option>Margin</option>\n                           </select>\n               </div>\n               <div id=\"trdt_container\">\n                       <legend>Margin Calculator</legend>\n                       <div class=\"control-group\">\n                               <label class=\"control-label\">Currency Pair:</label>\n                               <div class=\"controls\">\n                                       <select>\n                                               <option>USD/JPY</option>\n                                               <option>EUR/USD</option>\n                                           </select>\n                               </div>\n                       </div>\n                       <div class=\"control-group\">\n                               <label class=\"control-label\">USD / JPY Rate:</label>\n                               <div class=\"controls\">\n                                       <input type=\"text\" placeholder=\"108.663\" disabled>\n                               </div>\n                       </div>\n                       <div class=\"control-group\">\n                               <label class=\"control-label\">Number of Units:</label>\n                               <div class=\"controls\">\n                                       <input type=\"text\" placeholder=\"\"  style=\"margin-bottom:10px;\">\n                                       <select>\n                                               <option>standard</option>\n                                               <option>Mini</option>\n                                       </select>\n                               </div>\n                               <span class=\"help-block\">Standard lot equals 100,000BC, 100oz Gold, 100oz Platinum, 100oz Palladium, 1000oz Silver, 100 Barrel Oil</span>\n                       </div>\n                       <div class=\"control-group\">\n                               <label class=\"control-label\">Margin Ratio (Leverage):</label>\n                               <div class=\"controls\">\n                                       <select>\n                                               <option>1:1</option>\n                                               <option>25:1</option>\n                                           </select>\n                               </div>\n                       </div>\n                       <div class=\"control-group\">\n                           <label class=\"control-label\"><span id=\"marginCalculate\" class=\"btn btn-success\">Calculate</span>\n                           </label><div class=\"controls\"><span id=\"marginOutput\" class=\"result\">0.00</span></div></div>\n\n               </div>\n           </mat-tab>\n           <mat-tab label=\"Commodities\">\n                   <div class=\"stats-list\" style=\"height: 32px;\">\n                           <span class=\"stats-head\" nowrap=\"\" style=\"padding-left: 25px;\">Symbol(CFDs)\n                           </span>\n                           <span class=\"stats-head\" nowrap=\"\">Last</span>\n                           <span class=\"stats-head\" nowrap=\"\">High</span>\n                           <span class=\"stats-head\" nowrap=\"\">Low</span>\n                           <span class=\"stats-head\" nowrap=\"\">Chg.</span>\n                           <span class=\"stats-head\" nowrap=\"\">Chg. %</span>\n                           <span class=\"stats-head\" nowrap=\"\">Time</span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Lumber\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px; background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Gasoline RBOB\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px; background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;background-color: rgb(19, 45, 50);\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Aluminum\n                           </span>\n                   </div>\n                   <div class=\"stats-desc\" style=\"padding-left: 15px;\">\n                           <span style=\"display:inline-block;\" class=\"ceFlags UK no-pad\"></span>\n                           <span style=\"display:inline-block;\">\n                                   Copper\n                           </span>\n                   </div>\n                   <div>\n                       <span style=\"margin-right: 10px;\"></span>\n                   </div>\n\n                   <div style=\"font-size:10px;\">\n                           <span style=\"margin-right: 10px; float: right;color:#585858;\">Quotes by Investing.com</span>\n                   </div>\n           </mat-tab>\n           <mat-tab label=\" Talking Twitter\">\n                   <div id=\"topBar\">\n                           <a href=\"javascript: void(0);\" id=\"soundBtn\" data-speak=\"0\" title=\"Mute/Unmute twitter feed speech\">\n                               <i class=\"fa fa-volume-off\" aria-hidden=\"true\"></i>\n                           </a>\n                           <a href=\"javascript: void(0);\" id=\"settingsBtn\" title=\"Feed options\">\n                                   <i class=\"fa fa-sliders\" aria-hidden=\"true\"></i>\n                           </a>\n                   </div>\n                   <div  style=\"height: 18px; background-color: rgb(19, 45, 50);\" class=\"ng-star-inserted\">&nbsp;</div>\n                       <div class=\"twitter-talk\">\n                               <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                               <div class=\"content\">\n                                   <div class=\"user\">\n                                       <a href=\"https://www.twitter.com/business\" target=\"_blank\">\n                                           <span class=\"username\">Bloomberg</span>\n                                           <span class=\"screenname\">\n                                               <small>@</small>business\n                                           </span>\n                                       </a>\n                                   </div>\n                                   <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                                   <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                                           stalled by heavy rainfall and flood… <a href=\"https://t.co/n3LqsN9taz\" target=\"_blank\">https://t.co/n3LqsN9taz\n                                       </a>\n                                   </div>\n                               </div>\n                       </div>\n                       <div class=\"twitter-talk\" style=\"background-color:rgb(19, 45, 50)\">\n                               <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-_normal.jpg\" width=\"48\" height=\"48\"></div>\n                               <div class=\"content\">\n                                   <div class=\"user\">\n                                       <a href=\"https://www.twitter.com/business\" target=\"_blank\">\n                                           <span class=\"username\">The Economist</span>\n                                           <span class=\"screenname\">\n                                               <small>@</small>business\n                                           </span>\n                                       </a>\n                                   </div>\n                                   <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                                   <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                                           stalled by heavy rainfall and flood… <a href=\"https://t.co/n3LqsN9taz\" target=\"_blank\">https://t.co/n3LqsN9taz\n                                       </a>\n                                   </div>\n                               </div>\n                       </div>\n                       <div class=\"twitter-talk\">\n                               <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                               <div class=\"content\">\n                                   <div class=\"user\">\n                                       <a href=\"https://www.twitter.com/business\" target=\"_blank\">\n                                           <span class=\"username\">Bloomberg</span>\n                                           <span class=\"screenname\">\n                                               <small>@</small>business\n                                           </span>\n                                       </a>\n                                   </div>\n                                   <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                                   <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                                           stalled by heavy rainfall and flood… <a href=\"https://t.co/n3LqsN9taz\" target=\"_blank\">https://t.co/n3LqsN9taz\n                                       </a>\n                                   </div>\n                               </div>\n                       </div>\n                       <div class=\"twitter-talk\" style=\"background-color:rgb(19, 45, 50)\">\n                               <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-_normal.jpg\" width=\"48\" height=\"48\"></div>\n                               <div class=\"content\">\n                                   <div class=\"user\">\n                                       <a href=\"https://www.twitter.com/business\" target=\"_blank\">\n                                           <span class=\"username\">The Economist</span>\n                                           <span class=\"screenname\">\n                                               <small>@</small>business\n                                           </span>\n                                       </a>\n                                   </div>\n                                   <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                                   <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                                           stalled by heavy rainfall and flood… <a href=\"https://t.co/n3LqsN9taz\" target=\"_blank\">https://t.co/n3LqsN9taz\n                                       </a>\n                                   </div>\n                               </div>\n                       </div>\n                       <div class=\"twitter-talk\">\n                               <div class=\"img_flex\"><img src=\"https://pbs.twimg.com/profile_images/991818020233404416/alrBF_dr_normal.jpg\" width=\"48\" height=\"48\"></div>\n                               <div class=\"content\">\n                                   <div class=\"user\">\n                                       <a href=\"https://www.twitter.com/business\" target=\"_blank\">\n                                           <span class=\"username\">Bloomberg</span>\n                                           <span class=\"screenname\">\n                                               <small>@</small>business\n                                           </span>\n                                       </a>\n                                   </div>\n                                   <div class=\"time\" data-created=\"Sat Jul 27 11:32:02 +0000 2019\">2 minutes ago</div>\n                                   <div class=\"text\">India deployed military teams to help rescue passengers stranded aboard a train\n                                           stalled by heavy rainfall and flood… <a href=\"https://t.co/n3LqsN9taz\" target=\"_blank\">https://t.co/n3LqsN9taz\n                                       </a>\n                                   </div>\n                               </div>\n                       </div>\n\n           </mat-tab>\n         </mat-tab-group>\n    </mat-drawer> -->\n\n <!-- </div> -->\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/invite-friend-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/invite-friend-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Invite your friends\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-divider></mat-divider>\n<div class=\"invite_friend_container wrap-div\">\n    <div class=\"col-md-12\">\n        <mat-form-field>\n            <mat-label>Enter the email addresses (comma separated).</mat-label>\n            <textarea matInput placeholder=\"marry@email.lo, john@smith.lo, ninja@dojo.lo\"></textarea>\n        </mat-form-field>\n        <div class=\"panelBox\">\n            <p class=\"text-center\">\n                Invite people to <b>MarketMastersAcademy</b><br>\n                Share this link with others to let them join the team\n            </p>\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <mat-form-field>\n                        <input matInput value=\"\" [(ngModel)]=\"value\">\n                    </mat-form-field>\n                </div>\n                <div class=\"media-right\">\n                    <button mat-stroked-button>Copy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer p-10 wrap-div\">\n    <button mat-dialog-close class=\"btn btn-default\">Close</button>\n    <button [mat-dialog-close]=\"true\" class=\"btn btn-success\">Send</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/manage-brockers-dialog.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/manage-brockers-dialog.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Manage Brokers\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-divider></mat-divider>\n<mat-dialog-content class=\"manage_Brocker_container m-0 p-0\">\n    <div class=\"row m-0\">\n        <div class=\"col-md-6 col-xs-12\">\n\n            <div class=\"add_own_brocker\" *ngIf=\"addOwn\">\n                <h4>\n                    Search for brokers\n                    <a mat-button class=\"btn btn-link pull-right\" (click)=\"onClickOwn()\" style=\"margin-top:-7px\">or add your own</a>\n                </h4>\n                <mat-divider></mat-divider>\n                <mat-form-field>\n                    <mat-label>Search</mat-label>\n                    <input matInput>\n                </mat-form-field>\n                <div class=\"list-group\" style=\"height:280px;overflow-y:auto\">\n                    <div class=\"empty-msg text-center\">\n                        find your broker's<br>web trading terminal using<br>the search bar above\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"add_own_brocker\" *ngIf=\"addFromList\">\n                <h4>\n                    Add your own broker\n                    <a mat-button class=\"btn btn-link pull-right\" (click)=\"onClickList()\" style=\"margin-top:-7px\">or add from list</a>\n                </h4>\n                <mat-divider></mat-divider>\n                <mat-form-field>\n                    <mat-label>Broker Title</mat-label>\n                    <input matInput>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>Web Trading Terminal Link</mat-label>\n                    <input matInput>\n                    <span matPrefix>https://&nbsp;</span>\n                </mat-form-field>\n                <div class=\"text-right\">\n                    <button class=\"btn btn-primary btn-sm\">\n                        <span class=\"fa fa-plus fa-fw\"></span> Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-xs-12\" style=\"border-left:solid 1px #ddd; font-size:1.3em\">\n            <div class=\"add_own_brocker\">\n                <h4>\n                    My Terminals\n                </h4>\n                <mat-divider></mat-divider>\n                <div class=\"list-group\" style=\"height:350px;overflow-y:auto\">\n                    <div class=\"empty-msg text-center\">\n                        you have no brokers<br>in your list yet\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</mat-dialog-content>\n<div class=\"modal-footer p-10\">\n    <button mat-dialog-close class=\"btn btn-default\">Cancel</button>\n    <button [mat-dialog-close]=\"true\" class=\"btn btn-success\">Install</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/preferences-dialog.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/preferences-dialog.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Preferences\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-dialog-content class=\"preference-container p-0 m-0\">\n    <div class=\"row\">   \n        <div class=\"col-md-3 col-xs-12\" style=\"margin-right: 0;\">\n            <mat-nav-list class=\"p-0\">\n                <a mat-list-item (click)=\"onProfile()\" [ngClass]=\"{'active': profile == true}\">\n                    \n                    <span matLine><i class=\"fa fa-user-circle fa-fw\"></i> Profile</span>\n                </a>\n                <a mat-list-item (click)=\"onNotification()\" [ngClass]=\"{'active': notification == true}\">\n                    <span matLine><i class=\"fa fa-bell-o fa-fw\"></i> Notifications</span>\n                </a>\n                <a mat-list-item (click)=\"onBlockMute()\" [ngClass]=\"{'active': blockMute == true}\">\n                    <span matLine><i class=\"fa fa-comment-o fa-fw\"></i> Block/Mute</span>\n                </a>\n                <a mat-list-item (click)=\"onBilling()\" [ngClass]=\"{'active': billing == true}\">\n                    <span matLine><i class=\"fa fa-credit-card fa-fw\"></i> Billing</span>\n                </a>\n                <a mat-list-item (click)=\"onAdvanced()\" [ngClass]=\"{'active': advanced == true}\">\n                    <span matLine><i class=\"fa fa-gears fa-fw\"></i> Advanced</span>\n                </a>\n            </mat-nav-list>\n        </div>\n        <div class=\"col-md-9 col-xs-12\">\n            <div class=\"content profile\" *ngIf=\"profile\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 col-xs-12 text-center\">\n                        <img class=\"avatarThumb\"  src=\"assets/mini-logo.png\" *ngIf=\"!imgURL\">\n                        <img class=\"avatarThumb\" [src]=\"imgURL\" *ngIf=\"imgURL\">\n                        <div class=\"upload_file\">\n                            <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                            <button class=\"btn btn-success btn-sm\" style=\"margin-top: 5px;\">\n                                Upload avatar\n                            </button>\n                        </div>\n                        <input class=\"btn btn-default btn-sm\" style=\"margin-top: 5px;\"\n                            value=\"Default avatar\">\n                    </div>\n                    <div class=\"col-sm-7 col-xs-12\">\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Username</mat-label>\n                                <input matInput>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Full Name</mat-label>\n                                <input matInput>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Timezone:</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"option\">GMT</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <mat-form-field>\n                                <mat-label>Date format:</mat-label>\n                                <mat-select>\n                                    <mat-option value=\"option\">mm/dd</mat-option>\n                                    <mat-option value=\"option\">dd/mm</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content\" *ngIf=\"notification\">\n                <div ng-show=\"activeMenu==2\" class=\"panel-settings panel-settings-notifications\">\n                    <div class=\"form-group\">\n                        <label>Desktop and Mobile Notifications</label>\n                    </div>\n                    <p>Receive notifcations from:</p>\n                    <mat-checkbox >All Rooms</mat-checkbox>\n                    <mat-divider></mat-divider>\n                    <div class=\"rooms-overflow\">\n                        <mat-checkbox>Traders Lounge</mat-checkbox>\n                        <mat-checkbox>On Point FX Signals 🇺🇸 (USA)</mat-checkbox>\n                        <mat-checkbox>Suggestions/Bug Reports</mat-checkbox>\n                        <mat-checkbox>Market Analysis</mat-checkbox>\n                        <mat-checkbox>Private Forex Mentoring</mat-checkbox>\n                        <mat-checkbox>7 Day Intense Private Training</mat-checkbox>\n                        <mat-checkbox>Official Partners</mat-checkbox>\n                        <mat-checkbox>The Golden Circle</mat-checkbox>\n                        <mat-checkbox>Präzise FX Signals 🇩🇪 (GER)</mat-checkbox>\n                        <mat-checkbox>Website Testing A/B</mat-checkbox>\n                        <mat-checkbox>chat dev</mat-checkbox>\n                    </div>\n                    <mat-divider></mat-divider>\n                    <mat-checkbox>Direct messages</mat-checkbox>\n                    <mat-checkbox>Mentions</mat-checkbox>\n                    <mat-checkbox>Admins, Instructors and Moderators</mat-checkbox>\n                </div>\n            </div>\n            <div class=\"content\" *ngIf=\"blockMute\">\n                <div ng-show=\"activeMenu==4\" class=\"panel-settings panel-settings-blockandmute\">\n                    <div class=\"blockandmute-title\">\n                        <label>Blocks</label>\n                    </div>\n                    <div class=\"blockandmute-body\">\n                        <div class=\"text-center\">\n                            <span class=\"fa fa-inbox fa-4x\"></span>\n                            <br>\n                            <span>You have not blocked any user</span>\n                        </div>\n                    </div>\n\n                    <div class=\"blockandmute-title\">\n                        <label>Mutes</label>\n                    </div>\n                    <div class=\"blockandmute-body\">\n                        <div class=\"text-center\">\n                            <span class=\"fa fa-inbox fa-4x\"></span>\n                            <br>\n                            <span>You have not muted any user</span>\n                        </div>\n                    </div>\n\n                    <div>\n                        <div class=\"blockandmute-title\">\n                            <label>Bans</label>\n                        </div>\n                        <div class=\"blockandmute-body\">\n                            <div class=\"label label-primary \">\n                                JustinGoldsmith\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Andiaishoo7\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                robertoscott\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                james1979\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                ARamirez7\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                eagleeyes94\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Eren68\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Eldi123\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Ryanchaney\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                thisvinceguy\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Rafacapozzi\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                ajeoluwatoromo\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                kevinmijares\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Jeanluis\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                BJ318\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                jeanluis1\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Will_10\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                robertoascott\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Donniek23\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Sheko\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Marcus760\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                King_Alfie19\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                SnblJuan\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                victorjsb\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                thecarter\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Flakox1\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                MarcosRuiz\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Forex101\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                jeanluis11\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Nav1234\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Will_15\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Atlboss7\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Tadukas\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Howellj5\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                campbecj13\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Nate\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                TGT2\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Donnbe2020\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                rtallen04\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Marqus241\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Fred163\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                MannyDeolMusic\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Marvb11\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                slickrick\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Shabazz\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                jaybush89\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                EthynBlair\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Castacio10\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Trent10\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                dc5cm\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Shaunda87\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                Kiiy\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                jondiaz\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                JosueMesidor\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                papabing\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                JamarqusJ\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                France\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                trevorxmartin\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                            <div class=\"label label-primary \">\n                                DainBauman\n                                <button class=\"btn btn-link btn-xs\">\n                                    <span class=\"fa fa-times fa-fw\"></span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content\" *ngIf=\"billing\">\n                <div class=\"form-group\">\n                    <label>Billing\n                    </label>\n                </div>\n                <p class=\"empty-msg\">\n                    You don't have any billing plans\n                </p>\n            </div>\n            <div class=\"content\" *ngIf=\"advanced\">\n                <div class=\"form-group\">\n                    <label>Direct Messages\n                    </label>\n                </div>\n                <mat-checkbox>Accept Direct Messages from free users</mat-checkbox>\n            </div>\n        </div>\n    </div>\n</mat-dialog-content>\n<div class=\"modal-footer\">\n    <button mat-dialog-close class=\"btn btn-default\">Close</button>\n    <button [mat-dialog-close]=\"true\" routerLink=\"/\" class=\"btn btn-success\">Save</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team-wrapper\" header-company-sidebar=\"\" style=\"position:static;\">\n  <img class=\"sidebar-avatar\" src=\"assets/mini-logo.png\" *ngIf=\"!adminImgPath\">\n  <img class=\"sidebar-avatar\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n  <p class=\"teamName\" title=\"MarketMastersAcademy\">\n    <strong class=\"ng-binding\">MarketMastersAcademy</strong>\n  </p>\n  <mat-slide-toggle  class=\"theme\" [(ngModel)]=\"darkTheme\" (click)=\"onDarkTheme()\" color=\"warn\">\n  </mat-slide-toggle>\n</div>\n<div class=\"topLeft sidebar-match\">\n  <div class=\"dropdown\">\n    <button class=\"dropdown-toggle\" data-toggle=\"dropdown\" [matMenuTriggerFor]=\"appMenu\">\n      <span class=\"glyphicon glyphicon-one-fine-dot sidebar-status-dot userStatus1\" [ngClass]=\"{'userStatus3': status === 'away', 'userStatus4':status === 'busy' }\"\n\n        ></span>\n      <img class=\"sidebar-avatar usr_img\" *ngIf=\"!imgURL\" src=\"assets/mini-logo.png\">\n      <img class=\"sidebar-avatar usr_img\" *ngIf=\"imgURL\" [src]=\"imgURL\">\n      <strong class=\"text-capitalize sidebar-username ng-binding\">{{user.firstname}} {{user.lastname}}</strong>\n      <span class=\"fa fa-angle-down\"></span>\n    </button>\n    <!-- dropdown for user online status -->\n    <mat-menu #appMenu=\"matMenu\">\n      <li mat-menu-item ><a  (click)=\"status = 'online'\"><span\n            class=\"glyphicon glyphicon-one-fine-dot userStatus1\" style=\"padding:0 !important\"></span> Online</a></li>\n      <li mat-menu-item ><a  (click)=\"status = 'away'\"><span\n            class=\"glyphicon glyphicon-one-fine-dot userStatus3\" style=\"padding:0 !important\"></span> Away</a></li>\n      <li mat-menu-item >\n        <a  (click)=\"status = 'busy'\"><span class=\"glyphicon glyphicon-one-fine-dot userStatus4\" style=\"padding:0 !important\"></span> Busy</a>\n      </li>\n      <li mat-menu-item role=\"separator\" class=\"divider\"></li>\n      <li mat-menu-item><a (click)=\"openPreferencesDialog()\">Preferences</a></li>\n      <li mat-menu-item ng-show=\"isAdmin\" class=\"ng-hide\"><a target=\"_blank\" href=\"/dashboard/\">Dashboard</a></li>\n      <li ng-if=\"isFootnoteVisible\">\n        <a href=\"#\">Download App\n          <span class=\"fa fa-windows fa-fw\"></span>\n        </a>\n      </li>\n      <li mat-menu-item role=\"separator\" class=\"divider\"></li>\n      <li mat-menu-item (click)=\"logout()\"><a>Logout</a></li>\n    </mat-menu>\n  </div>\n</div>\n<!-- list -->\n<ul class=\"nav nav-sidebar\">\n  <li class=\"rooms-sidebar-header\">ROOMS</li>\n\n  <li class=\" rooms_list\" *ngFor=\"let room of rooms; let index= index\">\n    <!-- (click)=\"room.status == 'private' ? openAddFileDialog(room) : selectRoom(room)\" -->\n    <a (click)=\"clickRoom(room)\" class=\"flex-parent locked\" [class.active]=\"index == 0\" style=\"cursor: pointer\">\n      <span class=\"flex-child\">\n        <i class=\"roomIcon fa fa-fw fa-hashtag\" aria-hidden=\"true\"></i>\n        <span class=\"text-capitalize room-name\">{{room.title}}</span>\n      </span>\n      <span class=\"flex-child-icons\">\n        <i style=\"font-size:12px;\" [ngClass]=\"room.status === 'private' ? 'fa-lock' : 'fa-globe'\"\n          class=\"roomIcon fa fa-fw\" aria-hidden=\"true\"></i>\n        <i style=\"font-size:12px;\" class=\"roomIcon fa fa-eye\" aria-hidden=\"true\"></i>\n      </span>\n    </a>\n  </li>\n  <li *ngIf=\"rooms.length == 0\">\n    <a class=\"flex-parent locked\" style=\"cursor: pointer\">\n      <span class=\"flex-child\">\n        <i class=\"roomIcon fa fa-fw fa-hashtag\" aria-hidden=\"true\"></i>\n        <span class=\"text-capitalize room-name ng-binding\">No Room available</span>\n      </span>\n    </a>\n  </li>\n  <li class=\"rooms-sidebar-header\" >SERVICES</li>\n  <li class=\"nav-item-empty\">\n    No Services were added\n  </li>\n  <!-- <li>\n    <a style=\"cursor:pointer\" class=\"service-item flex-parent\">\n      <span class=\"flex-child\">\n        <i class=\"roomIcon fa fa-fw fa-rss\" aria-hidden=\"true\"></i>\n        <span class=\"room-name ng-binding\" style=\"max-width: 157px;\">Market Mastermind</span>\n      </span>\n      <span class=\"flex-child-icons\">\n      </span>\n      <span class=\"flex-child-actions\">\n      </span>\n    </a>\n  </li> -->\n  <div selected=\"roomName\" >\n    <li class=\"nav-item-header rooms-sidebar-header\">\n      WEBTRADER\n      <button class=\"btn btn-link pull-right\" style=\"padding:0;\" (click)=\"onManageBrockerDialog()\">\n        <i class=\"roomIcon fa fa-fw fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n    </li>\n    <li ng-if=\"!myBrokers.length\" class=\"nav-item-empty\">\n      No brokers were added\n    </li>\n  </div>\n  <!-- <li class=\"messages-sidebar-header rooms-sidebar-header\">DIRECT MESSAGES</li>\n  <li class=\"directChat ng-scope\">\n    <a >\n      <span class=\"material-icons userStatus1\" >person_outline</span> RiskyRicky\n    </a>\n  </li> -->\n  <div id=\"dvFootnote\" class=\"ng-scope\">\n    <div class=\"footer-invite\"><a target=\"\" class=\"btn btn-primary btn-sm\" (click)=\"onInviteFriendDialog()\">Invite\n        your friends</a></div>\n  </div>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-sidenav-container class=\"sidenav-container\" style=\"display: flex; align-items: center;\">\n    <mat-sidenav position=\"end\" #sidenav mode=\"side\" opened position=\"start\">\n      <div class=\"circle\">\n        <h1>Sign Up</h1>\n          <p></p>\n      </div>\n      <img src=\"assets/big-lion2-smaller.png\" class=\"main-logo\">\n      <div class=\"login-form\">\n        <div class=\"wrap-div\">\n          <!-- <form (submit)=\"registerUser($event)\"> -->\n            <form [formGroup]= \"useData\" (ngSubmit)=\"registerUser()\">\n            <div class=\"form-input\">\n              <div class=\"input-group input-field\">\n                <!-- <input type=\"text\" #fullname id=\"fullname\" class=\"inputText\" required /> -->\n                <input class=\"inputText\" formControlName=\"fullname\" name=\"fullname\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Full Name *</span>\n              </div>\n              <div class=\"input-group input-field\">\n                <!-- <input type=\"text\" #email class=\"inputText\" id=\"email\" required /> -->\n                <input class=\"inputText\"  formControlName=\"email\" name=\"email\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Email *</span>\n              </div>\n              <div class=\"input-group input-field\">\n                <!-- <input type=\"text\" #username class=\"inputText\"  id=\"username\" required /> -->\n                <input id=\"userdata_username\" class=\"inputText\"  formControlName=\"username\" name=\"username\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Username *</span>\n              </div>\n              <div class=\"input-group input-field\">\n                <input id=\"userdata_phoneNumber\" class=\"inputText\"  formControlName=\"phoneNumber\" name=\"phoneNumber\" style=\"cursor: text;\" >\n                <span class=\"floating-label\">Phone Number</span>\n              </div>\n              <div class=\"input-group input-field\">\n                <!-- <input type=\"text\" #password class=\"inputText\" id=\"password\" required /> -->\n                <input id=\"userdata_pwd\" class=\"inputText\"  formControlName=\"password\" name=\"password\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Password *</span>\n              </div>\n              <div class=\"input-group input-field\">\n                <!-- <input type=\"text\" #cpassword class=\"inputText\" id=\"cpassword\" required /> -->\n                <input id=\"userdata_cpassword\" class=\"inputText\"  formControlName=\"cpassword\" name=\"cpassword\" style=\"cursor: text;\" required>\n                <span class=\"floating-label\">Retype Password *</span>\n              </div>\n              <div class=\"md-label\" style=\"float:left; width:100%;text-align:left;\">\n                <div>\n                  <label>\n                    <mat-checkbox>By clicking Sign Up, you agree to our <a href=\"#\" target=\"_blank\"\n                        md-colors=\"{'color': 'accent-500'}\" class=\"ng-scope\"\n                        style=\"text-decoration:underline!important; color:#fff;\">Terms</a>.</mat-checkbox>\n                  </label>\n                </div>\n              </div>\n              <button class=\"md-ink-ripple\" type=\"submit\" ng-transclude=\"\" ng-disabled=\"loading\">\n                Sign Up</button>\n            </div>\n          </form>\n\n          <div class=\"signup-forget\">\n            <p>Do you have an account? Please\n              <a routerLink=\"/login\" style=\"text-decoration:underline!important; color:#fff;\">Sign In</a> instead.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"sidebar-footer\">\n        <div class=\"footer-logo\">\n          <div class=\"text-center\">\n            <a href=\"https://www.facebook.com/officialcirclechat/\" target=\"_blank\" mat-mini-fab class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"https://www.instagram.com/circle.chat/\" target=\"_blank\" mat-mini-fab class=\"insta\"><i class=\"fa fa-instagram\"></i></a>\n            <a href=\"https://www.linkedin.com/company/circle-chat/\" target=\"_blank\" mat-mini-fab class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n          </div>\n        </div>\n        <div class=\"footer-reserved\">\n          © 2020. All RIGHTS RESERVED.\n        </div>\n      </div>\n    </mat-sidenav>\n    <!-- <div class=\"img-cont\">\n      <div class=\"final-img\">\n      </div>\n    </div> -->\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/media-upload-dialog.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unlockchatroom/media-upload-dialog.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Media upload\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-divider></mat-divider>\n<div class=\"media_upload_container\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-12\">\n            <div id=\"uploadPreview\"><img\n                    src=\"assets/profile_img.png\"\n                    class=\"btnUploader\"><span class=\"uploadProgress\" style=\"display: none;\"></span></div>\n        </div>\n        <div class=\"col-sm-9 col-xs-12\">\n            <mat-form-field appearance=\"fill\" style=\"width: 100%; height: 85px;\">\n                <mat-label>Type a description for this media</mat-label>\n                <textarea matInput></textarea>\n                <mat-hint><small>filename:</small><small id=\"uploadFilename\">apple-icon-76x76.png</small></mat-hint>\n              </mat-form-field>\n        </div>\n    </div>\n</div>\n<mat-divider></mat-divider>\n<div class=\"modal-footer p-10\" style=\"border: none;\">\n    <button mat-dialog-close class=\"btn btn-default\">Cancel</button>\n    <button [mat-dialog-close]=\"true\" class=\"btn btn-success\">Post</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/new-signal-dialog.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unlockchatroom/new-signal-dialog.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>New Signal\n    <button mat-dialog-close class=\"close\">\n        <span aria-hidden=\"true\">×</span>\n    </button>\n</h2>\n<mat-divider></mat-divider>\n<div class=\"new_signal_dialog wrap-div\">\n    <div class=\"col-md-12\" style=\"padding: 15px;\">\n        <table class=\"signal-table text-white\">\n            <tbody>\n                <tr>\n                    <th>Order Type</th>\n                </tr>\n            </tbody>\n        </table>\n        <div class=\"btn-group\">\n            <p><a class=\"btn btn-xs btn-default\">NONE</a></p>\n            <p><a class=\"btn btn-xs btn-success\" >BUY</a><a\n                    class=\"btn btn-xs btn-success active\">BUY MARKET</a><a\n                    class=\"btn btn-xs btn-success\" >BUY STOP</a><a\n                    class=\"btn btn-xs btn-success\">BUY LIMIT</a></p>\n            <p><a class=\"btn btn-xs btn-danger\" >SELL</a><a\n                    class=\"btn btn-xs btn-danger\" >SELL MARKET</a><a\n                    class=\"btn btn-xs btn-danger\" >SELL STOP</a><a\n                    class=\"btn btn-xs btn-danger\">SELL LIMIT</a></p>\n        </div>\n        <p>&nbsp;</p>\n        <div class=\"signal-error\"></div>\n        <p></p>\n        <table class=\"signal-table text-white\">\n            <tbody>\n                <tr style=\"text-align: center;\">\n                    <th><span class=\"noedtbl\">Symbol</span></th>\n                    <th><span class=\"noedtbl\">Entry</span></th>\n                    <th><span class=\"edtbl\" contenteditable=\"true\" autocomplete=\"off\"\n                            autocapitalize=\"off\" spellcheck=\"false\">TP</span> <span\n                            class=\"fa fa-pencil-square-o editTitle\"></span></th>\n                    <th><span class=\"edtbl\" contenteditable=\"true\" autocomplete=\"off\"\n                            autocapitalize=\"off\" spellcheck=\"false\">SL</span> <span\n                            class=\"fa fa-pencil-square-o editTitle\"></span></th>\n                    <th><span class=\"edtbl\"  contenteditable=\"true\" autocomplete=\"off\"\n                            autocapitalize=\"off\" spellcheck=\"false\">Custom</span> \n                            <span\n                            class=\"fa fa-pencil-square-o editTitle\"></span></th>\n                </tr>\n                <tr style=\"margin-top: 5px;\">\n                    <td>\n                        <mat-form-field appearance=\"fill\">\n                            <input matInput>\n                        </mat-form-field>\n                    </td>\n                    <td>\n                        <mat-form-field appearance=\"fill\">\n                            <input matInput>\n                        </mat-form-field>\n                    </td>\n                    <td>\n                        <mat-form-field appearance=\"fill\">\n                            <input matInput>\n                        </mat-form-field>\n                    </td>\n                    <td>\n                        <mat-form-field appearance=\"fill\">\n                            <input matInput>\n                        </mat-form-field>\n                    </td>\n                    <td>\n                        <mat-form-field appearance=\"fill\">\n                            <input matInput>\n                        </mat-form-field>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"4\" style=\"color: #999;\">\n                        <small style=\"position: relative; top:-10px\">* Fields and titles are free-text\n                            so you can type anything you like</small></td>\n                </tr>\n            </tbody>\n        </table>\n        <br>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Comment</mat-label>\n            <textarea matInput></textarea>\n        </mat-form-field>\n    </div>\n</div>\n<mat-divider class=\"wrap-div\"></mat-divider>\n<div class=\"modal-footer p-10 wrap-div\" style=\"border: none;\">\n    <button [mat-dialog-close]=\"true\" class=\"btn btn-success\">Publish</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/unlockchatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/unlockchatroom/unlockchatroom.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" wrap_messages\">\n  <div class=\"message_list\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <div class=\"msg_placeholder messagelineodd msg_placeholder_sep msg_delivered\" *ngFor=\"let msg of messages\">\n          <div user-popover=\"\" class=\"msg_avatar \" style=\"cursor: pointer;\" title=\"\">\n            <img style=\"border-radius: 50%;width:40px; height:40px\" src=\"assets/mini-logo.png\" *ngIf=\"!adminImgPath\">\n            <img style=\"border-radius: 50%;width:40px; height:40px\" src=\"{{adminImgPath}}\" *ngIf=\"adminImgPath\">\n          </div>\n          <div class=\"msg_username_date\">\n            <span user-popover=\"\" class=\"msg_username \" style=\"cursor: pointer;\" title=\"\">{{msg.userinfo.username}} </span>\n            <span class=\"msg_date \">{{msg.created_date}}</span>\n          </div>\n          <div class=\"thumbpadding \">\n            <div message-actions=\"\" message=\"item\" class=\"\">\n              <div class=\"msg_txt_wrap\">\n                <div class=\"msg_txt \">{{msg.message}}</div>\n                <div>\n                  <button class=\"toolbtn msg_button_edit\">\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                  </button>\n                  <button class=\"toolbtn msg_button_delete\">\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"clear:both\"></div>\n        </div>\n  </div>\n  <form (ngSubmit)=\"sendMessage()\" #chatForm=\"ngForm\">\n      <div class=\"form-group\">\n        <div class=\"chatDiv\" style=\"display: block; right: 25px; left: 10px;\">\n          <div class=\"upload_file_for_chat\">\n            <button class=\"btnUploader dz-clickable\" id=\"uploadBtn\" (click)=\"sendMessage()\" style=\"cursor: pointer;\"><i\n              class=\"fa fa-arrow-circle-o-up\"></i></button>\n              <input type=\"file\"  (change)=\"onUpload($event)\" >\n          </div>\n          <button id=\"emojiBtn\" class=\"\"><i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\n          </button>\n          <button id=\"addon_Signal\" class=\"cbAddonsBtn\" (click)=\"openNewSignal()\">\n            <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i></button>\n          <input id=\"chatbox\"  autocomplete=\"off\" [(ngModel)]=\"chat.message\" name=\"chatMessage\" style=\"cursor: text;\" required>\n          <span id=\"faux\" style=\"display: none;\"></span>\n          <!-- <button type=\"submit\" class=\"btn btn-success\">Submit</button> -->\n        </div>\n      </div>\n    </form>\n</div>\n\n\n\n<!--\n<form (submit)=\"sendMessage()\">\n  <div class=\"chatDiv\" style=\"display: block; right: 25px; left: 10px;\">\n    <button class=\"btnUploader dz-clickable\" id=\"uploadBtn\" (click)=\"sendMessage()\" style=\"cursor: pointer;\"><i\n        class=\"fa fa-arrow-circle-o-up\"></i></button>\n    <button id=\"emojiBtn\" class=\"\"><i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\n    </button>\n    <button id=\"addon_Signal\" class=\"cbAddonsBtn\" title=\"Publish Signal\">\n      <i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i></button>\n    <div id=\"chatbox\" contenteditable=\"true\" [(ngModel)]=\"chatMessage\" name=\"chatMessage\" style=\"cursor: text;\"></div>\n    <span id=\"faux\" style=\"display: none;\"></span>\n\n  </div>\n</form> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-panel/user-panel.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-panel/user-panel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-tab-group>\n       <mat-tab>\n          <ng-template mat-tab-label>\n             <i class=\"fa fa-users fa-lg\"></i>\n          </ng-template>\n          <div class=\"empty-msg\">\n                <span class=\"fa fa-users fa-2x\"></span>\n                <br>No Users\n                <br>were found\n          </div>\n          <div>\n               <!-- <div class=\"input-user-filter-wrapper\">\n                   <mat-form-field>\n                    <mat-label>User search</mat-label>\n                    <input matInput >\n                  </mat-form-field>\n               </div> -->\n                   <div class=\"userGroupContainer\">\n                     <!-- ADMINS -->\n                       <!-- <div class=\"panelUserLabel\">\n                           <span class=\"border-badge border-admin\" aria-hidden=\"true\"></span> Admins\n                       </div> -->\n                       <!-- <div class=\"panelUser\" style=\"position:relative;\">\n                           <span class=\"glyphicon glyphicon-one-fine-dot userStatus2 offline\" ></span> \n                           <img class=\"team-user-avatar\" src=\"//cdn.echofin.co/avatars/5007bf5e_e190221b94244369954f8240580a1d80.png\" alt=\"alt-text\">\n                           Jetsetlukas\n                       </div> -->\n        \n                      <!-- MODERATORS -->\n                      <!-- <div class=\"panelUserLabel\">\n                          <span class=\"border-badge border-moderator\" ></span> Moderators\n                      </div> -->\n\n                      <!-- TEAM USERS -->\n                      <!-- <div class=\"panelUserLabel\">\n                          <button class=\"btn_show_all\">show all</button>\n                          <span class=\"border-badge border-user\" aria-hidden=\"true\"></span> Team Users\n                      </div>\n                      <div class=\"panelUser\" style=\"position:relative;\">\n                          <span class=\"glyphicon glyphicon-one-fine-dot userStatus2 online\" ></span> \n                          <img class=\"team-user-avatar\" src=\"https://cdn.echofin.co/avatars/4ab8e499.png\" alt=\"alt-text\">\n                          akina53\n                      </div> -->\n                   </div>\n          </div>\n       </mat-tab>\n       <mat-tab>\n          <ng-template mat-tab-label>\n             <i class=\"fa fa-folder-open-o fa-lg\"></i>\n          </ng-template>\n          <div class=\"empty-msg\">\n                    <span class=\"fa fa-folder-open-o fa-2x\"></span>\n                    <br>No File\n                    <br>were found\n            </div>\n          <!-- <div class=\"sidepanel-item ng-scope\">\n              <div class=\"sidepanel-item-header\">\n                  <span class=\"sidepanel-item-username ng-binding\"  style=\"cursor: pointer;\" data-original-title=\"\" title=\"\">@Xavierking</span>\n                  <span class=\"sidepanel-item-date ng-binding\">\n                      04/12  14:00 PM\n                  </span>\n              </div>\n              <div class=\"sidepanel-item-body\">\n                  <a file-popup-link=\"\" extension=\"png\" url=\"//cdn.echofin.co/uploads/7e9a237a/B46C54ABC8CE4E8EA35EDA799A1E64A3.png\" class=\"\"\n                   href=\"//cdn.echofin.co/uploads/7e9a237a/B46C54ABC8CE4E8EA35EDA799A1E64A3.png\">\n                      <img src=\"//cdn.echofin.co/uploads/7e9a237a/B46C54ABC8CE4E8EA35EDA799A1E64A3.thumb.png\">\n                  </a>\n              </div>\n              <div class=\"sidepanel-item-footer ng-binding\" >\n                  #Traders Lounge\n              </div>\n          </div> -->\n       </mat-tab>\n       <mat-tab>\n          <ng-template mat-tab-label>\n             <i class=\"fa fa-at fa-lg\"></i>\n          </ng-template>\n            <div class=\"empty-msg ng-scope\" ng-if=\"!mentions.length &amp;&amp; !mentionsLoading\">\n                <span class=\"fa fa-inbox fa-2x\"></span>\n                <br>No mentions\n                <br>were found\n            </div>\n       </mat-tab>\n    </mat-tab-group>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/zone.js/dist/zone-evergreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zone$1 = (function (global) {
    const performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    const checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    class Zone {
        constructor(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        static assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        }
        static get root() {
            let zone = Zone.current;
            while (zone.parent) {
                zone = zone.parent;
            }
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        static __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                const perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (let i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        }
    }
    Zone.__symbol__ = __symbol__;
    const DELEGATE_ZS = {
        name: '',
        onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
        onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
        onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
    };
    class ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        }
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            const self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        static invokeTask(task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
            }
        }
        toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__('setTimeout');
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = { name: 'NO ZONE' };
    const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    const patches = {};
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: () => _currentZoneFrame,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
        patchEventTarget: () => [],
        patchOnProperties: noop,
        patchMethod: () => noop,
        bindArguments: () => [],
        patchThen: () => noop,
        patchMacroTask: () => noop,
        setNativePromise: (NativePromise) => {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: () => noop,
        isIEOrEdge: () => false,
        getGlobalObjects: () => undefined,
        ObjectDefineProperty: () => noop,
        ObjectGetOwnPropertyDescriptor: () => undefined,
        ObjectCreate: () => undefined,
        ArraySlice: () => [],
        patchClass: () => noop,
        wrapWithCurrentZone: () => noop,
        filterProperties: () => [],
        attachOriginToPatched: () => noop,
        _redefineProperty: () => noop,
        patchCallbacks: () => noop
    };
    let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = (e) => {
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = () => {
        while (_uncaughtPromiseErrors.length) {
            while (_uncaughtPromiseErrors.length) {
                const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(() => {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v) => {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    const once = function () {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(() => {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(() => {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (let i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        const error = err;
                        error.rejection = value;
                        error.promise = promise;
                        error.zone = Zone.current;
                        error.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, () => {
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    class ZoneAwarePromise {
        constructor(executor) {
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                const curValueIndex = valueIndex;
                value.then((value) => {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        }
        get [Symbol.toStringTag]() {
            return 'Promise';
        }
        then(onFulfilled, onRejected) {
            const chainPromise = new this.constructor(null);
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            const chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global['Promise'];
    const ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    let desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject) => {
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            let resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        const fetch = global['fetch'];
        if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** __zone_symbol__ string const */
const ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
const NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor['name'];
    for (let i = 0; i < fnNames.length; i++) {
        const name = fnNames[i];
        const delegate = prototype[name];
        if (delegate) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) {
                continue;
            }
            prototype[name] = ((delegate) => {
                const patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames = {};
const wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    let eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.substr(2);
    let eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        let previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        const listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (let i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        const onProperties = [];
        for (const prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (let j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        const a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function () { });
    let prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    const symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach((symbol) => {
        const desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
let shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    let proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
        const meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', (global) => {
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
        if (typeof this === 'function') {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                const nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                const nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames$1 = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
const IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    const PREPEND_EVENT_LISTENER = 'prependListener';
    const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    const invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        const delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event) => delegate.handleEvent(event);
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        const options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        let returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        let proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {};
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        const customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function (task, delegate) {
            const typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function () {
                const target = this || _global;
                const eventName = arguments[0];
                let delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                const options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (let i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                let capture;
                let once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                const zone = Zone.current;
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                let source;
                const constructorName = target.constructor['name'];
                const targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const options = arguments[2];
            let capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            const delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            const symbolEventNames = zoneSymbolEventNames$1[eventName];
            let symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (let i = 0; i < existingTasks.length; i++) {
                    const existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (let i = 0; i < tasks.length; i++) {
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for (let i = 0; i < keys.length; i++) {
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    let results = [];
    for (let i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    const foundTasks = [];
    for (let prop in target) {
        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        let evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            const tasks = target[prop];
            if (tasks) {
                for (let i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    const Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                const source = `${targetName}.${method}::` + callback;
                const prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
const zoneSymbol$1 = Zone.__symbol__;
const _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
const _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
const _create = Object.create;
const unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        const originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        const desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    const originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                let descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log(`Attempting to configure '${prop}' with descriptor '${descJson}' on object '${obj}' and got error, giving up: ${error}`);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
const globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
const documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
const windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
const htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
const ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
const formEventNames = ['autocomplete', 'autocompleteerror'];
const detailEventNames = ['toggle'];
const frameEventNames = ['load'];
const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
const marqueeEventNames = ['bounce', 'finish', 'start'];
const XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
const websocketEventNames = ['close', 'error', 'open', 'message'];
const workerEventNames = ['error', 'message'];
const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    const tip = ignoreProperties.filter(ip => ip.target === target);
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    const supportsWebSocket = typeof WebSocket !== 'undefined';
    const ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        const internalWindow = window;
        const ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }
        const Worker = internalWindow['Worker'];
        if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
    }
    const XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
        globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames,
        isBrowser,
        isMix,
        isNode,
        TRUE_STR,
        FALSE_STR,
        ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR
    });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {};
    function scheduleTask(task) {
        const data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, (delegate) => function (self, args) {
            if (typeof args[0] === 'function') {
                const options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        });
    clearNative =
        patchMethod(window, cancelName, (delegate) => function (self, args) {
            const id = args[0];
            let task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    const { isBrowser, isMix } = api.getGlobalObjects();
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (let i = 0; i < eventNames.length; i++) {
        const eventName = eventNames[i];
        const falseEventName = eventName + FALSE_STR;
        const trueEventName = eventName + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    const EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', (global) => {
    const legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', (global) => {
    const set = 'set';
    const clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', (global) => {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
    const blockingMethods = ['alert', 'prompt', 'confirm'];
    for (let i = 0; i < blockingMethods.length; i++) {
        const name = blockingMethods[i];
        patchMethod(global, name, (delegate, symbol, name) => {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', (global, Zone, api) => {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        const XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = 'readystatechange';
        const SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            const newListener = target[XHR_LISTENER] = () => {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        const loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target['__zone_symbol__loadfalse'];
                                for (let i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        });
        const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        });
        const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
            const task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        });
    }
});
Zone.__load_patch('geolocation', (global) => {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            const eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(eventTask => {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/***/ }),

/***/ "./src/app/admin/admin-sidebar/admin-sidebar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-sidebar/admin-sidebar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.selectedRoom {\n  color: #fff!important;\n  border-left: solid 2px #1b83f5 !important;\n  background-color: rgba(27, 131, 245, 0.3)!important;\n}\n.tour-link{\n cursor: pointer;\n}\nimg{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLG1EQUFtRDtBQUNyRDtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNpZGViYXIvYWRtaW4tc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5zZWxlY3RlZFJvb20ge1xuICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzFiODNmNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAxMzEsIDI0NSwgMC4zKSFpbXBvcnRhbnQ7XG59XG4udG91ci1saW5re1xuIGN1cnNvcjogcG9pbnRlcjtcbn1cbmltZ3tcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-sidebar/admin-sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-sidebar/admin-sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminsettings/new-avatar.service */ "./src/app/admin/adminsettings/new-avatar.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminsettings/adminsettings.component */ "./src/app/admin/adminsettings/adminsettings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let AdminSidebarComponent = class AdminSidebarComponent {
    constructor(localStorage, dialog, newAvatarService, document) {
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.newAvatarService = newAvatarService;
        this.document = document;
        this.adminImgPath = this.localStorage.get('admin_user_profile');
    }
    onBlackTheme() {
        if (this.blackTheme == true) {
            this.localStorage.set("Admintheme", false);
            this.document.body.classList.remove('black-theme');
        }
        else {
            this.localStorage.set("Admintheme", true);
            this.document.body.classList.add('black-theme');
        }
    }
    openteamavatar() {
        const fileNameDialogRef = this.dialog.open(_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_5__["NewTeamAvatarDialog"]);
    }
    ngOnInit() {
        this.blackTheme = this.localStorage.get('Admintheme');
        if (this.blackTheme == true) {
            this.document.body.classList.add('black-theme');
        }
        else {
            this.document.body.classList.remove('black-theme');
        }
        this.newAvatarService.newAvatar.subscribe(data => {
            this.adminImgPath = this.localStorage.get('admin_user_profile');
        });
    }
};
AdminSidebarComponent.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_3__["NewAvatarService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-sidebar',
        template: __webpack_require__(/*! raw-loader!./admin-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-sidebar/admin-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/admin/admin-sidebar/admin-sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], AdminSidebarComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('.sidebar-toggle').click(function () {
            $('.admin-dashboard').toggleClass('mini-sidebar');
        });
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/adminapi/adminapi.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/adminapi/adminapi.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box .empty {\n    padding: 0;\n    background: #fff;\n    border: none;\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    margin-top: -95px;\n    color: #ccc;\n}\n.box .box-body {\n    padding: 15px;\n}\n.box.box-default {\n    border-top-color: #d2d6de;\n    min-height: 211px;\n}\n.empty {\n    padding: 50px;\n    text-align: center;\n    color: #999;\n    font-size: 2em;\n    font-weight: 300;\n    background: #eee;\n    border: solid 1px #ddd;\n}\n.box {\n    position: relative;\n    border-radius: 3px;\n    background: #fff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    width: 100%;\n    box-shadow: 0 1px 1px rgba(0,0,0,.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5hcGkvYWRtaW5hcGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5hcGkvYWRtaW5hcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3ggLmVtcHR5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtOTVweDtcbiAgICBjb2xvcjogI2NjYztcbn1cbi5ib3ggLmJveC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmJveC5ib3gtZGVmYXVsdCB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2QyZDZkZTtcbiAgICBtaW4taGVpZ2h0OiAyMTFweDtcbn1cbi5lbXB0eSB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XG59XG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/adminapi/adminapi.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/adminapi/adminapi.component.ts ***!
  \******************************************************/
/*! exports provided: AdminapiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminapiComponent", function() { return AdminapiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





/** Constants used to fill up our data base. */
const COLORS = [
    '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
    '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const DESCRIPTION = [
    'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569',
    'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569', 'MMA +1-916-836-4569'
];
const STATUS = [
    'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED', 'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED', 'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED',
    'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED', 'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED', 'FAILED', 'FAILED', 'FAILED', 'SUCCEED', 'FAILED', 'SUCCEED'
];
const DATE = [
    '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18',
    '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18', '2019-05-05 00:54:18'
];
const AMOUNT = [
    '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00',
    '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00', '88.00', '24.00', '65.00', '89.00', '43.00', '54.00', '88.00', '23.00'
];
const USERNAME = [
    '_sdMaia23', '_Ashesr12', 'Olivisa_1', '123Atticus', '324Amelia', 'J34ack', '2121Charlotte', '54232', '.Isla', 'Oliver',
    'Isabella', '_Jasper', 'Cora', 'Levi', '.Violet', 'Arthur', 'Mia', 'Thomas', '.12Elizabeth'
];
const EMAIL = [
    'its.ronaldo1@gmail.com', 'emmanuel.wediko@gmail.com', 'robertbaconfitness@yahoo.com', 'tremonrobinson32@gmail.com', 'tremonrobinson32@gmail.com', 'robertbaconfitness@yahoo.com',
    'tremonrobinson32@gmail.com', 'rtgbrt34@yahoo.com', 'tremonrobinson32@gmail.com', 'robertbaconfitness@yahoo.com', 'its.ronaldo1@gmail.com',
    'robertbaconfitness@yahoo.com', 'its.ronaldo1@gmail.com', 'Levi', 'tremonrobinson32@gmail.com', 'rtgbrt34@yahoo.com',
    'its.ronaldo1@gmail.com	', 'rtgbrt34@yahoo.com	', 'its.ronaldo1@gmail.com'
];
const PLAN = [
    'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial',
    'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial', 'OPFX $77/mo 7 Day Trial'
];
let AdminapiComponent = class AdminapiComponent {
    constructor() {
        this.displayedColumns = ['date', 'username', 'email', 'plan', 'description', 'amount', 'status'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminapiComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminapiComponent.prototype, "sort", void 0);
AdminapiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminapi',
        template: __webpack_require__(/*! raw-loader!./adminapi.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminapi/adminapi.component.html"),
        styles: [__webpack_require__(/*! ./adminapi.component.css */ "./src/app/admin/adminapi/adminapi.component.css")]
    })
], AdminapiComponent);

/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
        status: STATUS[Math.round(Math.random() * (COLORS.length - 1))],
        description: DESCRIPTION[Math.round(Math.random() * (COLORS.length - 1))],
        amount: AMOUNT[Math.round(Math.random() * (COLORS.length - 1))],
        date: DATE[Math.round(Math.random() * (COLORS.length - 1))],
        username: USERNAME[Math.round(Math.random() * (COLORS.length - 1))],
        email: EMAIL[Math.round(Math.random() * (COLORS.length - 1))],
        plan: PLAN[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "./src/app/admin/adminbilling/adminbilling.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/adminbilling/adminbilling.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth{\n  font-weight: bold;\n}\n\n/* th, td {\n  width: 220px;\n} */\n\n/* td:last-child{\n  width: 400px!important;\n} */\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\ntd, th {\n  border-right: 1px solid #e0e0e0;\n  padding: 5px 10px!important;\n  white-space: nowrap;\n}\n\n.admin_payouts .col-md-3{\n padding: 0 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5iaWxsaW5nL2FkbWluYmlsbGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7R0FFRzs7QUFDSDs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluYmlsbGluZy9hZG1pbmJpbGxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50aHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIHRoLCB0ZCB7XG4gIHdpZHRoOiAyMjBweDtcbn0gKi9cbi8qIHRkOmxhc3QtY2hpbGR7XG4gIHdpZHRoOiA0MDBweCFpbXBvcnRhbnQ7XG59ICovXG5cbnRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW5fcGF5b3V0cyAuY29sLW1kLTN7XG4gcGFkZGluZzogMCAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/adminbilling/adminbilling.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminbilling/adminbilling.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminbillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminbillingComponent", function() { return AdminbillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_billing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-billing.component */ "./src/app/admin/adminbilling/new-billing.component.ts");
/* harmony import */ var _adminbilling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminbilling.service */ "./src/app/admin/adminbilling/adminbilling.service.ts");








let AdminbillingComponent = class AdminbillingComponent {
    constructor(dialog, billingService) {
        this.dialog = dialog;
        this.billingService = billingService;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.searchActive = false;
        this.displayedColumns = ['name', 'description', 'onoff', 'currency', 'price', 'cycle', 'term', 'alter'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.billingService.getBillings());
    }
    openAddFileDialog() {
        const fileNameDialogRef = this.dialog.open(_new_billing_component__WEBPACK_IMPORTED_MODULE_6__["NewBillingComponent"]);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // onrefresh
    onRefresh() {
        console.log('it isw');
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    // filter
    onActiveSearch() {
        this.searchActive = !this.searchActive;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdminbillingComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _adminbilling_service__WEBPACK_IMPORTED_MODULE_7__["BillingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminbillingComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminbillingComponent.prototype, "sort", void 0);
AdminbillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminbilling',
        template: __webpack_require__(/*! raw-loader!./adminbilling.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminbilling/adminbilling.component.html"),
        styles: [__webpack_require__(/*! ./adminbilling.component.css */ "./src/app/admin/adminbilling/adminbilling.component.css")]
    })
], AdminbillingComponent);



/***/ }),

/***/ "./src/app/admin/adminbilling/adminbilling.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/adminbilling/adminbilling.service.ts ***!
  \************************************************************/
/*! exports provided: BillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingService", function() { return BillingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BillingService = class BillingService {
    constructor() {
        this.BILLINGS_DATA = [
        // {name: 'On-Point FX Signals 7-Day FREE 7', description: 'Access our 7-Day INTENSIVE Private Forex Training resources', oneOff: 'NO', currency: 'USD', price: '643', cycle: 21, term: 'Forever'}
        ];
    }
    getBillings() {
        return this.BILLINGS_DATA.slice();
    }
};
BillingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillingService);



/***/ }),

/***/ "./src/app/admin/adminbilling/new-billing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/adminbilling/new-billing.component.ts ***!
  \*************************************************************/
/*! exports provided: NewBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBillingComponent", function() { return NewBillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewBillingComponent = class NewBillingComponent {
    constructor() {
        this.currency = 'empty';
    }
};
NewBillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog biling_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
      </button> 
         Add Billing
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name *" value=""> 
              </mat-form-field>
          </div>
      </div>    
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field class="example-full-width">
                  <textarea matInput placeholder="Description *" ></textarea>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
            <mat-form-field class="example-full-width" >
              <textarea matInput placeholder="Statement Description *" value="" ></textarea>
            </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3">
               <mat-form-field>
                  <input matInput placeholder="Price *" value=""> 
               </mat-form-field>
            </div>
            <div class="col-sm-3">
                  <mat-form-field>
                  <mat-label></mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="usd">USD</mat-option>
                    <mat-option value="eur">EUR</mat-option>
                    <mat-option value="gbp">GBP</mat-option>
                    <mat-option value="cad">CAD</mat-option>
                    <mat-option value="aud">AUD</mat-option>
                    <mat-option value="jpy">JPY</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <span style="font-size: 14px;
                  position: relative; top: -3px; color: #757575;">One-Off Payment</span>
                 <mat-checkbox> is one-off</mat-checkbox>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
                <mat-form-field>
                  <input matInput placeholder="Bill every" value=""> 
                </mat-form-field>
            </div>
            <div class="col-sm-3">
                  <mat-form-field>
                  <mat-label></mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="day">Day</mat-option>
                    <mat-option value="month">Month</mat-option>
                    <mat-option value="year">Year</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                  <mat-label>Trial</mat-label>
                  <mat-select [(value)]="currency">
                    <mat-option value="empty"></mat-option>
                    <mat-option value="day">No-trial</mat-option>
                    <mat-option value="month">Trial- Credit Card Required</mat-option>
                    <mat-option value="year">Trial- Credit Card Not Required</mat-option>
                  </mat-select>
                </mat-form-field>
            </div>
        </div> 
        <div class="row">
            <div class="col-xs-12" style="font-size:12px;">
              <p>When the user subscribes on this plan then active the following plan:</p>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Sub-Plan *" value=""> 
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Sub-Coupon *" value="--Without Default Couple" disable=""> 
                </mat-form-field>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
    })
], NewBillingComponent);



/***/ }),

/***/ "./src/app/admin/adminchatroom/adminchatroom.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/adminchatroom/adminchatroom.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  th{\n    font-weight: bold;\n  }\n  \n  /* th, td {\n    width: 220px;\n  } */\n  \n  /* td:last-child{\n    width: 400px!important;\n  } */\n  \n  th.mat-column-position, td.mat-column-position {\n    padding-left: 8px;\n  }\n  \n  td, th {\n    border-right: 1px solid #e0e0e0;\n    padding: 5px 10px!important;\n    white-space: nowrap;\n  }\n  \n  .admin_payouts .col-md-3{\n   padding: 0 15px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5jaGF0cm9vbS9hZG1pbmNoYXRyb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztLQUVHOztFQUNIOztLQUVHOztFQUVIO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7O0VBRUE7R0FDQyxlQUFlO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5jaGF0cm9vbS9hZG1pbmNoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRoe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAvKiB0aCwgdGQge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgfSAqL1xuICAvKiB0ZDpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiA0MDBweCFpbXBvcnRhbnQ7XG4gIH0gKi9cbiAgXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgXG4gIC5hZG1pbl9wYXlvdXRzIC5jb2wtbWQtM3tcbiAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/adminchatroom/adminchatroom.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminchatroom/adminchatroom.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminchatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminchatroomComponent", function() { return AdminchatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_cahtroom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-cahtroom.component */ "./src/app/admin/adminchatroom/new-cahtroom.component.ts");
/* harmony import */ var _deletechatroom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deletechatroom.component */ "./src/app/admin/adminchatroom/deletechatroom.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _adminchatroom_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adminchatroom.service */ "./src/app/admin/adminchatroom/adminchatroom.service.ts");










let AdminchatroomComponent = class AdminchatroomComponent {
    constructor(dialog, auth, chatRoomService) {
        this.dialog = dialog;
        this.auth = auth;
        this.chatRoomService = chatRoomService;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.displayedColumns = ['name', 'description', 'type', 'plan', 'coupon', 'sort', 'checkout', 'alter'];
        this.rooms = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.chatRoomService.getChatRooms());
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
    }
    openAddFileDialog() {
        this.createRoomDialogRef = this.dialog.open(_new_cahtroom_component__WEBPACK_IMPORTED_MODULE_6__["NewChatroomComponent"]);
        this.createRoomDialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
    deleteRoom(room) {
        this.deleteRoomDialogRef = this.dialog.open(_deletechatroom_component__WEBPACK_IMPORTED_MODULE_7__["DeleteChatroomComponent"], {
            data: room
        });
    }
    editRoom(room) {
        this.editRoomDialogRef = this.dialog.open(_new_cahtroom_component__WEBPACK_IMPORTED_MODULE_6__["NewChatroomComponent"]);
    }
    getCoupons(coupon) {
        console.log(coupon);
        if (coupon && coupon.length > 0) {
            return JSON.stringify(coupon);
        }
        else {
            return 'N/A';
        }
    }
    ngOnInit() {
        this.auth.getRoomsList().subscribe((response) => {
            if (response.hasOwnProperty("success") && response.hasOwnProperty("data")) {
                this.rooms = response.data;
            }
            else {
                this.rooms = [];
            }
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // onrefresh
    onRefresh() {
        console.log('it isw');
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdminchatroomComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _adminchatroom_service__WEBPACK_IMPORTED_MODULE_9__["ChatRoomService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminchatroomComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminchatroomComponent.prototype, "sort", void 0);
AdminchatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminchatroom',
        template: __webpack_require__(/*! raw-loader!./adminchatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminchatroom/adminchatroom.component.html"),
        styles: [__webpack_require__(/*! ./adminchatroom.component.css */ "./src/app/admin/adminchatroom/adminchatroom.component.css")]
    })
], AdminchatroomComponent);



/***/ }),

/***/ "./src/app/admin/adminchatroom/adminchatroom.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminchatroom/adminchatroom.service.ts ***!
  \**************************************************************/
/*! exports provided: ChatRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomService", function() { return ChatRoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatRoomService = class ChatRoomService {
    constructor() {
        this.ROOMS_DATA = [
            { name: 'market-masters', description: 'desc', type: 'public', plan: 'usd', coupon: 'N/A', sort: '' }
        ];
    }
    getChatRooms() {
        return this.ROOMS_DATA.slice();
    }
};
ChatRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatRoomService);



/***/ }),

/***/ "./src/app/admin/adminchatroom/deletechatroom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/adminchatroom/deletechatroom.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChatroomComponent", function() { return DeleteChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let DeleteChatroomComponent = class DeleteChatroomComponent {
    constructor(data, dialogRef, auth) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.auth = auth;
        console.log(this.data);
        this.room = this.data;
    }
    ngOnInit() { }
    deleteChatRoom() {
        console.log(this.data);
        this.auth.deleteChatRoom(this.data._id);
    }
    closeDialog() {
        this.dialogRef.closeAll();
    }
};
DeleteChatroomComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DeleteChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
          <span aria-hidden="true">×</span>
      </button> 
         # {{room.title}}
      </h4>
   </div>
   <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <p>Are your sure you want to delete Room : <b>{{room.title}}</b></p>
              <p>Once you delete the room, it cannot be recovered and you will loose all the data in the room, including messages, photos, links and other media content.</p>
              <p>Are you sure?</p>
          </div>
      </div>
   </div>
    <div class="modal-footer wrap-div">
        <button mat-dialog-close  class="btn btn-default pull-left" type="button" (click)="closeDialog()">Cancel</button>
        <button (click)="deleteChatRoom()" class="btn btn-blue">Confirm Delete</button>
    </div>
</div>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DeleteChatroomComponent);



/***/ }),

/***/ "./src/app/admin/adminchatroom/new-cahtroom.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/adminchatroom/new-cahtroom.component.ts ***!
  \***************************************************************/
/*! exports provided: NewChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChatroomComponent", function() { return NewChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let NewChatroomComponent = class NewChatroomComponent {
    constructor(auth, dialogRef) {
        this.auth = auth;
        this.dialogRef = dialogRef;
        this.status = 'type1';
        this.errorMessage = {};
        this.newChatRoom = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            is_visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            post_access: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    }
    createChatRoom() {
        console.log(this.newChatRoom.value);
        let chatRoomData = this.validate();
        if (chatRoomData) {
            this.auth.createNewRoom(this.newChatRoom.value).subscribe((data) => {
                if (data && data.hasOwnProperty('success')) {
                    console.log("room created", data);
                    this.dialogRef.closeAll();
                    location.reload();
                }
                else {
                    this.dialogRef.closeAll();
                }
            });
        }
        else {
            console.log("validation failed...", this.errorMessage);
        }
    }
    closeDialog() {
        this.dialogRef.closeAll();
    }
    validate() {
        let data = this.newChatRoom.value;
        if (!data.title) {
            this.errorMessage = { message: "Please enter a valid room title" };
            return false;
        }
        if (!data.description) {
            this.errorMessage = { message: "Please enter a valid room description" };
            return false;
        }
        if (!data.status) {
            this.errorMessage = { message: "Please set a valid room type" };
            return false;
        }
        if (!data.post_access) {
            this.errorMessage = { message: "Please set a valid postAccess for the room" };
            return false;
        }
        return true;
    }
};
NewChatroomComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
NewChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button type="button" class="close" aria-label="Close">
         <span aria-hidden="true" (click)="closeDialog()">×</span>
         </button>
         # New Chatroom
      </h4>
   </div>
   <form [formGroup]= "newChatRoom" (ngSubmit)="createChatRoom()">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name" value="" formControlName="title" name="title" style="cursor: text;" required>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Descriptions" value="" formControlName="description" name="description" style="cursor: text;" required>
              </mat-form-field>
          </div>
      </div>
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <mat-label>Type</mat-label>
                    <mat-select [(value)]="status" formControlName="status">
                        <mat-option value="public">Public - The room is accessible to everybody</mat-option>
                        <mat-option value="premium">Premium - The room is associated with at least one billing plan</mat-option>
                        <mat-option value="private">Private - Only selected users have access</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Options</h5>
                    <mat-checkbox formControlName="is_visible" >The room is visible -</mat-checkbox>
                        <span class="text-muted">
                            <i>The room is displayed on the left sidebar</i>
                        </span>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Who is able to post messages:</h5>
                <mat-radio-group aria-label="Select an option" formControlName="post_access">
                    <mat-radio-button class="wrap-div " value="1">everyone</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="2"> only admins/moderators/instructors</mat-radio-button>
                    <mat-radio-button class="wrap-div" value="3"> only admins/moderators/instructors and premium users</mat-radio-button>
                </mat-radio-group>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" class="btn btn-default pull-left" type="button" (click)="closeDialog()">Cancel</button>
         <button class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
    })
], NewChatroomComponent);



/***/ }),

/***/ "./src/app/admin/admincompliance/admincompliance.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admincompliance/admincompliance.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  th{\n    font-weight: bold;\n  }\n  \n  th.mat-column-position, td.mat-column-position {\n    padding-left: 8px;\n  }\n  \n  td, th {\n    border-right: 1px solid #e0e0e0;\n    padding: 5px 10px!important;\n    white-space: nowrap;\n  }\n  \n  .admin_payouts .col-md-3{\n   padding: 0 15px;\n  }\n  \n  .toolbox .form-group {\n    margin-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5jb21wbGlhbmNlL2FkbWluY29tcGxpYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCOztFQUVBO0dBQ0MsZUFBZTtFQUNoQjs7RUFDQTtJQUNFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluY29tcGxpYW5jZS9hZG1pbmNvbXBsaWFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGh7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICB0aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICAuYWRtaW5fcGF5b3V0cyAuY29sLW1kLTN7XG4gICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLnRvb2xib3ggLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admincompliance/admincompliance.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admincompliance/admincompliance.component.ts ***!
  \********************************************************************/
/*! exports provided: AdmincomplianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincomplianceComponent", function() { return AdmincomplianceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _admincompliance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admincompliance.service */ "./src/app/admin/admincompliance/admincompliance.service.ts");






let AdmincomplianceComponent = class AdmincomplianceComponent {
    constructor(complianceService) {
        this.complianceService = complianceService;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.displayedColumns = ['date', 'user', 'ip', 'report'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.complianceService.getCompliances());
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // onrefresh
    onRefresh() {
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdmincomplianceComponent.ctorParameters = () => [
    { type: _admincompliance_service__WEBPACK_IMPORTED_MODULE_5__["ComplianceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdmincomplianceComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdmincomplianceComponent.prototype, "sort", void 0);
AdmincomplianceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admincompliance',
        template: __webpack_require__(/*! raw-loader!./admincompliance.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admincompliance/admincompliance.component.html"),
        styles: [__webpack_require__(/*! ./admincompliance.component.css */ "./src/app/admin/admincompliance/admincompliance.component.css")]
    })
], AdmincomplianceComponent);



/***/ }),

/***/ "./src/app/admin/admincompliance/admincompliance.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admincompliance/admincompliance.service.ts ***!
  \******************************************************************/
/*! exports provided: ComplianceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceService", function() { return ComplianceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComplianceService = class ComplianceService {
    constructor() {
        this.COMPLIANCE_DATA = [
        // {
        //     date: '',
        //     user: '',
        //     ip: '',
        //     report: ''
        // }
        ];
    }
    getCompliances() {
        return this.COMPLIANCE_DATA.slice();
    }
};
ComplianceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComplianceService);



/***/ }),

/***/ "./src/app/admin/admincontacts/admincontacts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admincontacts/admincontacts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth{\n  font-weight: bold;\n}\n\nth, td {\n  width: 220px;\n}\n\nth:nth-child(1), tr td:nth-child(1) {\n  width: 50px;\n  max-width: 50px;\n  min-width: 50px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\ntd, th {\n  border-right: 1px solid #e0e0e0;\n  padding: 5px 10px!important;\n}\n\ntd:last-child, th:last-child {\n  text-align: right;\n  min-width: 120px;\n  width: 120px;\n}\n\n.adminClass {\n  font-weight: bold\n }\n\n/* editContacts */\n\n.media-body-left {\n  float: left;\n  width: 85px;\n  vertical-align: top;\n  border-radius: 50%;\n  overflow: hidden;\n  height: 85px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.media-body-left img{\n  border-radius: 50%;\n  width: 100%;\n}\n\n.media-body-right {\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 10px;\n}\n\n.modal-header button{\n  color: #888;\n}\n\n.profile_dialog mat-form-field{\n  width: 100%;\n}\n\n.profile_dialog .col-sm-12 {\npadding: 0 15px;\n}\n\n.profile_dialog .row{\n  margin: 0!important;\n  padding: 0!important;\n}\n\n.profile_dialog .col-sm-7 {\n  padding: 0 15px;\n}\n\n.profile_dialog .col-sm-5 {\n  padding: 0 15px;\n}\n\n.profile_dialog .col-sm-4 {\n  padding: 0 15px;\n}\n\n.media-body-right p.info {\n  font-size: 12px;\n  color: #888!important;\n  margin: 0;\n}\n\n.media-body-right h4 {\n  margin-top: 5px;\n  margin-bottom: 7px;\n}\n\n.media-body-right p{\n  margin-bottom: 7px;\n}\n\n.security .alert-info{\n  background: #1A83F5!important;\n  border: #1A83F5!important;\n}\n\n.security .alert-info p{\n  color: #fff!important;\n}\n\ntable{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5jb250YWN0cy9hZG1pbmNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBO0VBQ0U7Q0FDRDs7QUFDQSxpQkFBaUI7O0FBQ2xCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5jb250YWN0cy9hZG1pbmNvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxudGh7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50aCwgdGQge1xuICB3aWR0aDogMjIwcHg7XG59XG50aDpudGgtY2hpbGQoMSksIHRyIHRkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbnRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xufVxudGQ6bGFzdC1jaGlsZCwgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4uYWRtaW5DbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkXG4gfVxuIC8qIGVkaXRDb250YWN0cyAqL1xuLm1lZGlhLWJvZHktbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDg1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVkaWEtYm9keS1sZWZ0IGltZ3tcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZWRpYS1ib2R5LXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tb2RhbC1oZWFkZXIgYnV0dG9ue1xuICBjb2xvcjogIzg4ODtcbn0gICBcbi5wcm9maWxlX2RpYWxvZyBtYXQtZm9ybS1maWVsZHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZV9kaWFsb2cgLmNvbC1zbS0xMiB7XG5wYWRkaW5nOiAwIDE1cHg7XG59XG4ucHJvZmlsZV9kaWFsb2cgLnJvd3tcbiAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZV9kaWFsb2cgLmNvbC1zbS03IHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnByb2ZpbGVfZGlhbG9nIC5jb2wtc20tNSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wcm9maWxlX2RpYWxvZyAuY29sLXNtLTQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4ubWVkaWEtYm9keS1yaWdodCBwLmluZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODg4IWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuLm1lZGlhLWJvZHktcmlnaHQgaDQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5tZWRpYS1ib2R5LXJpZ2h0IHB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5zZWN1cml0eSAuYWxlcnQtaW5mb3tcbiAgYmFja2dyb3VuZDogIzFBODNGNSFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogIzFBODNGNSFpbXBvcnRhbnQ7XG59XG4uc2VjdXJpdHkgLmFsZXJ0LWluZm8gcHtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xufVxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admincontacts/admincontacts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admincontacts/admincontacts.component.ts ***!
  \****************************************************************/
/*! exports provided: AdmincontactsComponent, EditContactComponent, DeleteContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincontactsComponent", function() { return AdmincontactsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactComponent", function() { return EditContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContactComponent", function() { return DeleteContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-contact.component */ "./src/app/admin/admincontacts/new-contact.component.ts");
/* harmony import */ var _invite_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invite-contact.component */ "./src/app/admin/admincontacts/invite-contact.component.ts");
/* harmony import */ var _admincontacts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admincontacts.service */ "./src/app/admin/admincontacts/admincontacts.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../adminsettings/new-avatar.service */ "./src/app/admin/adminsettings/new-avatar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let AdmincontactsComponent = class AdmincontactsComponent {
    constructor(dialog, contactsService, auth) {
        this.dialog = dialog;
        this.contactsService = contactsService;
        this.auth = auth;
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage'];
        this.selected = -1;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.searchActive = false;
        this.displayedColumns = ['img', 'fullname', 'email', 'phone', 'subscription', 'type', 'devices', 'registered', 'lastActivity', 'action'];
        // dataSource = new MatTableDataSource(
        //   [
        //   // {firstname: 'mohit kumar', email: 'mohit@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
        //   // {firstname: 'kuldeep spall', email: 'spallkuldeep@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
        //   // {firstname: 'johan smith', email: 'smith@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'},
        //   // {firstname: 'thomas jordan', email: 'thomas121@gmail.com', phone_number: 8783823748, created_at: '2020-04-11 10:15:11', updated_at:'2020-06-17 10:53:34'}
        // ]
        // );
        this.dataSourceEmpty = true;
    }
    /*checkbox change event*/
    onChange(event) {
        console.log(event);
    }
    openAddFileDialog() {
        const fileNameDialogRef = this.dialog.open(_new_contact_component__WEBPACK_IMPORTED_MODULE_6__["NewContactComponent"]);
    }
    openEditDialog(contact) {
        const fileNameDialogRef = this.dialog.open(EditContactComponent, {
            width: '600px',
            data: contact
        });
    }
    openDeleteDialog(contact) {
        const fileNameDialogRef = this.dialog.open(DeleteContactComponent, {
            data: contact
        });
    }
    openInviteContactDialog() {
        const fileNameDialogRef1 = this.dialog.open(_invite_contact_component__WEBPACK_IMPORTED_MODULE_7__["InviteContactComponent"]);
    }
    ngOnInit() {
        this.loadContacts();
    }
    getRandomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }
    loadContacts() {
        this.showSpinner = true;
        this.mode = 'indeterminate';
        this.auth.getAllSystemUsers().subscribe((response) => {
            if (response.success) {
                this.showSpinner = false;
                this.mode = 'determinate';
                if (response.data.length > 0) {
                    this.dataSourceEmpty = false;
                }
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                this.showSpinner = false;
                this.mode = 'determinate';
            }
        });
    }
    // ALTER TABLE users ADD COLUMN created_date NOT NULL DEFAULT 'foo';
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // filter
    onActiveSearch() {
        this.searchActive = !this.searchActive;
    }
};
AdmincontactsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _admincontacts_service__WEBPACK_IMPORTED_MODULE_8__["ContactsService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdmincontactsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdmincontactsComponent.prototype, "sort", void 0);
AdmincontactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admincontactss',
        template: __webpack_require__(/*! raw-loader!./admincontacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/admincontacts.component.html"),
        styles: [__webpack_require__(/*! ./admincontacts.component.css */ "./src/app/admin/admincontacts/admincontacts.component.css")]
    })
], AdmincontactsComponent);

//edit contact dialog
let EditContactComponent = class EditContactComponent {
    constructor(userService, data, localStorage, newAvatarService) {
        this.userService = userService;
        this.data = data;
        this.localStorage = localStorage;
        this.newAvatarService = newAvatarService;
        this.editContacts = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](`${this.data.firstname} ${this.data.lastname}`),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](this.data.email),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](null),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](this.data.role_id === 1 ? "Admin" : "User")
        });
        this.ELEMENT_DATA = [
        // {plan: '7 Day Trial', trial: '', CC: '', period: '2020-06-12', canceled: 'NO'},
        ];
        this.contactForm = [];
        this.displayedColumns = ['plan', 'trial', 'CC', 'period', 'canceled'];
        this.dataSource = this.ELEMENT_DATA;
        this.adminImgPath = this.localStorage.get('admin_user_profile');
        this.contact = this.data;
    }
    ngOnInit() {
        this.user = this.userService.getUser();
        this.newAvatarService.newAvatar.subscribe(newPath => {
            this.adminImgPath = this.localStorage.get('admin_user_profile');
        });
    }
    preview(files) {
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.adminImgPath = reader.result;
            this.localStorage.set("admin_user_profile", this.adminImgPath);
            this.newAvatarService.newAvatar.next(true);
        };
    }
};
EditContactComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"] },
    { type: _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_12__["NewAvatarService"] }
];
EditContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-contact-dialog',
        template: __webpack_require__(/*! raw-loader!./edit-contact.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/edit-contact.dialog.html"),
        styles: [__webpack_require__(/*! ./admincontacts.component.css */ "./src/app/admin/admincontacts/admincontacts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], EditContactComponent);

//delete contact dialog
let DeleteContactComponent = class DeleteContactComponent {
    constructor(data) {
        this.data = data;
        this.contact = this.data;
    }
};
DeleteContactComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
DeleteContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-contact-dialog',
        template: __webpack_require__(/*! raw-loader!./delete-contact.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admincontacts/delete-contact.dialog.html"),
        styles: [__webpack_require__(/*! ./admincontacts.component.css */ "./src/app/admin/admincontacts/admincontacts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], DeleteContactComponent);



/***/ }),

/***/ "./src/app/admin/admincontacts/admincontacts.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admincontacts/admincontacts.service.ts ***!
  \**************************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
let ContactsService = class ContactsService {
    // CONTACTS_DATA: ContactsInterface[] = [
    //     { imgPath: '//cdn.echofin.co/avatars/f02df689.png', 
    //       fullname: 'aman singh', 
    //       email: '', 
    //       phoneNumber: '', 
    //       subscription: '', 
    //       type: '', 
    //       deviceNumber: '', 
    //       registered: ' 2020-04-11 10:15:11', 
    //       lastActivity: '' 
    //     }
    // ];
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this._url = "../../assets/data";
    }
    getContacts() {
        // return this.auth.getAllSystemUsers();
        // return this.http.get<ContactsInterface[]>(this._url + '/data.json');
    }
};
ContactsService.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactsService);



/***/ }),

/***/ "./src/app/admin/admincontacts/invite-contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admincontacts/invite-contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: InviteContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteContactComponent", function() { return InviteContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InviteContactComponent = class InviteContactComponent {
};
InviteContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button  mat-dialog-close  class="close">
             <span aria-hidden="true">×</span>
         </button>
         Invite Contact
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field  >
               <mat-label>Emails</mat-label>
               <textarea matInput placeholder="users emails comma seperated" style="height:100px;"></textarea>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button class="btn btn-blue">Invite</button>
      </div>
   </form>
</div>
  `
    })
], InviteContactComponent);



/***/ }),

/***/ "./src/app/admin/admincontacts/new-contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admincontacts/new-contact.component.ts ***!
  \**************************************************************/
/*! exports provided: NewContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContactComponent", function() { return NewContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





let NewContactComponent = class NewContactComponent {
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.isLoading = false;
        this.isValid = true;
        this.newUserData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            repeat_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            send_mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            agency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userService.getUser().agency_id),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
        });
    }
    createUser() {
        let userData = this.validateData();
        if (userData) {
            this.isLoading = true;
            console.log(userData);
            this.auth.createUserAdmin(userData).subscribe((data) => {
                console.log(data);
                if (data && data.hasOwnProperty('success')) {
                    location.reload();
                }
                else {
                    console.log("registration failed----");
                }
            });
        }
        else {
            console.log("registration failed----");
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateData() {
        let userData = this.newUserData.value;
        var procesData = { email: "", password: "", firstname: "", lastname: "", username: "", role_id: "", agency_id: "", status: "" };
        if (this.validateEmail(userData.email)) {
            procesData.email = userData.email;
            this.errorMessageEmail = false;
        }
        else {
            this.isValid = false;
            this.errorMessageEmail = "Please enter a valid email";
            return false;
        }
        if (userData.fullname) {
            var name = userData.fullname.trim().split(' ');
            if (name.length > 1) {
                var name = userData.fullname.trim().split(' ');
                procesData.firstname = name[0];
                name.shift();
                procesData.lastname = name.join(' ');
            }
            else {
                this.isValid = false;
                this.errorMessageFullname = "Please enter in format \"FirstName LastName\"";
                return false;
            }
            this.errorMessageFullname = false;
        }
        else {
            this.isValid = false;
            this.errorMessageFullname = "Fullname is required";
            return false;
        }
        if (userData.password) {
            this.errorMessagePassword = false;
            procesData.password = userData.password;
        }
        else {
            this.isValid = false;
            this.errorMessagePassword = "Password is required";
            return false;
        }
        if (userData.repeat_password !== userData.password) {
            console.log("Password does not Match");
            this.isValid = false;
            this.errorMessageRepeatPassword = "Password does not Match";
            return false;
        }
        if (userData.role) {
            this.errorMessageRole = false;
            procesData.role_id = userData.role;
        }
        else {
            this.isValid = false;
            this.errorMessageRole = "Please Select a Role";
            return false;
        }
        if (userData.username) {
            this.errorMessageUsername = false;
            procesData.username = userData.username;
        }
        else {
            this.isValid = false;
            this.errorMessageUsername = "Please Choose a Username";
            return false;
        }
        // procesData.send_mail = userData.send_mail;
        procesData.agency_id = userData.agency_id;
        procesData.status = userData.status;
        return procesData;
    }
};
NewContactComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
NewContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
         <button  mat-dialog-close  class="close">
             <span aria-hidden="true">×</span>
         </button>
         Add Contact
      </h4>
   </div>
   <form [formGroup]="newUserData" (ngSubmit)="createUser()">
      <div class="modal-body wrap-div">
         <div *ngIf="isLoading" class="loading-indicator">
            <mat-spinner style="margin:0 auto;" mode="indeterminate"></mat-spinner>
         </div>
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
                <input matInput formControlName="fullname" name="fullname" placeholder="Full Name">
                <p style="margin:0px;" *ngIf="!isValid && errorMessageFullname">{{errorMessageFullname}}</p>
            </mat-form-field>
          </div>
        </div>
        <div class="row">    
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput formControlName="email" name="email" placeholder="Email">
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageEmail">{{errorMessageEmail}}</p>
               </mat-form-field>
            </div>
            <div class="col-sm-6">
               <mat-form-field>
                  <input matInput formControlName="username" name="username" placeholder="Username">
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageUsername">{{errorMessageUsername}}</p>
               </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
               <mat-form-field>
                  <mat-select formControlName="role" name="role" placeholder="Role">
                     <mat-option value="1">Admin</mat-option>
                     <mat-option value="3">Instructor</mat-option>
                     <mat-option value="4">Moderator</mat-option>
                     <mat-option value="2">User</mat-option>
                  </mat-select>
                  <p style="margin:0px;" *ngIf="!isValid && errorMessageRole">{{errorMessageRole}}</p>
                  <mat-hint>
                     <a class="">
                           <i class="fa fa-info-circle"></i>
                     </a>
                  </mat-hint>
               </mat-form-field>
            </div>
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput formControlName="password" name="password" placeholder="Password">
                      <p style="margin:0px;" *ngIf="!isValid && errorMessagePassword">{{errorMessagePassword}}</p>
                  </mat-form-field>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6">
                  <mat-form-field>
                      <input matInput formControlName="repeat_password" name="repeat_password" placeholder="Repeat Password">
                      <p style="margin:0px;" *ngIf="!isValid && errorMessageRepeatPassword">{{errorMessageRepeatPassword}}</p>
                  </mat-form-field>
            </div>
            <div class="col-sm-6">
               <div class="checkbox">
                  <label>
                  <input type="checkbox" formControlName="send_mail" name="send_mail" class=""> Send a welcome email
                  </label>
               </div>
            </div> 
         </div>
      </div>
      <div class="modal-footer wrap-div">
         <button autofocus="" mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button type="submit"  class="btn btn-blue">Create</button>
      </div>
   </form>
</div>
  `
    })
], NewContactComponent);



/***/ }),

/***/ "./src/app/admin/admincoupons/admincoupons.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admincoupons/admincoupons.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  th{\n    font-weight: bold;\n  }\n  \n  th.mat-column-position, td.mat-column-position {\n    padding-left: 8px;\n  }\n  \n  td, th {\n    border-right: 1px solid #e0e0e0;\n    padding: 5px 10px!important;\n    white-space: nowrap;\n  }\n  \n  .admin_payouts .col-md-3{\n   padding: 0 15px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5jb3Vwb25zL2FkbWluY291cG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCOztFQUVBO0dBQ0MsZUFBZTtFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluY291cG9ucy9hZG1pbmNvdXBvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGh7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgXG4gIC5hZG1pbl9wYXlvdXRzIC5jb2wtbWQtM3tcbiAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/admin/admincoupons/admincoupons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admincoupons/admincoupons.component.ts ***!
  \**************************************************************/
/*! exports provided: AdmincouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincouponsComponent", function() { return AdmincouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_coupons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-coupons.component */ "./src/app/admin/admincoupons/new-coupons.component.ts");
/* harmony import */ var _admincoupons_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admincoupons.service */ "./src/app/admin/admincoupons/admincoupons.service.ts");








let AdmincouponsComponent = class AdmincouponsComponent {
    constructor(couponService, dialog) {
        this.couponService = couponService;
        this.dialog = dialog;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.searchActive = false;
        this.displayedColumns = ['name', 'amount', 'currency', 'percentoff', 'alter'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.couponService.getCoupons());
    }
    openAddFileDialog() {
        const fileNameDialogRef = this.dialog.open(_new_coupons_component__WEBPACK_IMPORTED_MODULE_6__["NewCouponsComponent"]);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    // onrefresh
    onRefresh() {
        console.log('it isw');
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    // filter
    onActiveSearch() {
        this.searchActive = !this.searchActive;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdmincouponsComponent.ctorParameters = () => [
    { type: _admincoupons_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdmincouponsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdmincouponsComponent.prototype, "sort", void 0);
AdmincouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admincoupons',
        template: __webpack_require__(/*! raw-loader!./admincoupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admincoupons/admincoupons.component.html"),
        styles: [__webpack_require__(/*! ./admincoupons.component.css */ "./src/app/admin/admincoupons/admincoupons.component.css")]
    })
], AdmincouponsComponent);



/***/ }),

/***/ "./src/app/admin/admincoupons/admincoupons.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admincoupons/admincoupons.service.ts ***!
  \************************************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CouponService = class CouponService {
    constructor() {
        this.COUPONS_DATA = [
        // {name: 'On-Point FX Signals 7-Day FREE O', amount: 23, currency: 'USD', percentOff: '100%'}    
        ];
    }
    getCoupons() {
        return this.COUPONS_DATA.slice();
    }
};
CouponService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CouponService);



/***/ }),

/***/ "./src/app/admin/admincoupons/new-coupons.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/admincoupons/new-coupons.component.ts ***!
  \*************************************************************/
/*! exports provided: NewCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCouponsComponent", function() { return NewCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewCouponsComponent = class NewCouponsComponent {
    constructor() {
        this.duration = 'once';
        this.discounttype = "";
    }
};
NewCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog biling_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
        </button> 
         Add Coupon
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name *" value="">
              </mat-form-field>
          </div>
      </div>
        <div class="row">
            <div class="col-sm-6">
                <mat-form-field>
                    <mat-label>Discount Type</mat-label>
                    <mat-select [(value)]="discounttype">
                    <mat-option value="Percentage">Percentage (%)</mat-option>
                    <mat-option value="Value">Value</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Percent Off" value="" >
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <mat-form-field>
                    <mat-label>Duration</mat-label>
                    <mat-select [(value)]="duration">
                    <mat-option value="once">once</mat-option>
                    <mat-option value="forever">Forever</mat-option>
                    <mat-option value="Repeating">Repeating</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="col-sm-6">
                <mat-form-field>
                    <input matInput placeholder="Months" value="" >
                </mat-form-field>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
    })
], NewCouponsComponent);



/***/ }),

/***/ "./src/app/admin/admindashboard/admindashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admindashboard/admindashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admindashboard/admindashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admindashboard/admindashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: AdmindashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function() { return AdmindashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admincontacts_admincontacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admincontacts/admincontacts.service */ "./src/app/admin/admincontacts/admincontacts.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let AdmindashboardComponent = class AdmindashboardComponent {
    constructor(contactsService, auth) {
        this.contactsService = contactsService;
        this.auth = auth;
        this.selected = 'option2';
        this.mode = 'determinate';
        this.showSpinner = false;
        this.contactsEmpty = true;
        // set screenWidth on page load
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
        };
    }
    getRandomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }
    ngOnInit() {
        this.loadContacts();
    }
    loadContacts() {
        this.showSpinner = true;
        this.mode = 'indeterminate';
        this.auth.getAllSystemUsers().subscribe((response) => {
            if (response.success) {
                this.showSpinner = false;
                this.mode = 'determinate';
                if (response.data.length > 0) {
                    this.contactsEmpty = false;
                }
                this.contacts = response.data;
                this.contacts.slice(0, 3);
            }
            else {
                this.showSpinner = false;
                this.mode = 'determinate';
            }
        });
    }
};
AdmindashboardComponent.ctorParameters = () => [
    { type: _admincontacts_admincontacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admindashboard',
        template: __webpack_require__(/*! raw-loader!./admindashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admindashboard/admindashboard.component.html"),
        styles: [__webpack_require__(/*! ./admindashboard.component.css */ "./src/app/admin/admindashboard/admindashboard.component.css")]
    })
], AdmindashboardComponent);

angular.module('app', ['chart.js']);
angular.module('app')
    .controller('MyController', function ($scope, $timeout) {
    $scope.labels = ["08/08/2019", "08/09/2019", "08/12/2019", "08/13/2019", "08/15/2019", "08/23/2019", "08/24/2019"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40, 66],
        [28, 48, 40, 19, 86, 27, 90, 55]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    // Simulate async data update
    $timeout(function () {
        $scope.data = [
            [28, 48, 40, 19, 86, 27, 90, 76],
            [65, 59, 80, 81, 56, 55, 40, 45]
        ];
    }, 3000);
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});


/***/ }),

/***/ "./src/app/admin/admindashboard/substring.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admindashboard/substring.pipe.ts ***!
  \********************************************************/
/*! exports provided: SubstringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstringPipe", function() { return SubstringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubstringPipe = class SubstringPipe {
    transform(value, args) {
        return value.substring(0, 1);
    }
};
SubstringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'substring'
    })
], SubstringPipe);



/***/ }),

/***/ "./src/app/admin/adminmarketing/adminmarketing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/adminmarketing/adminmarketing.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nsection.admin-marketing {\n    max-width: 860px;\n    margin: 0 auto;\n}\n.admin-marketing h1{\n    margin: 10px 0;\n}\n.col-md-12{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.toolbar-spacer{\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n.stats {\n    width: 10%;\n    text-align: center;\n}\n.stats p{\n    margin: 0;\n}\nmat-tab-group h3{\n margin: 0 0 10px 0;\n}\nmat-tab-body{\n    background-color: #fff;\n}\n.col-md-12 a:focus{\n outline: none!important;\n}\n.name_and_desc p{\n margin-bottom: 0;\n}\n.name_and_desc {\n    margin-left: 5px;\n}\n.pt-70{\n    padding-top: 70px;\n}\n.new_marketing{\n    margin-top: 20px;\n}\n.admin-marketing mat-form-field{\n width: 300px;\n position: relative;\n bottom: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5tYXJrZXRpbmcvYWRtaW5tYXJrZXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbm1hcmtldGluZy9hZG1pbm1hcmtldGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5zZWN0aW9uLmFkbWluLW1hcmtldGluZyB7XG4gICAgbWF4LXdpZHRoOiA4NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5hZG1pbi1tYXJrZXRpbmcgaDF7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY29sLW1kLTEye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b29sYmFyLXNwYWNlcntcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zdGF0cyB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RhdHMgcHtcbiAgICBtYXJnaW46IDA7XG59XG5tYXQtdGFiLWdyb3VwIGgze1xuIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbm1hdC10YWItYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNvbC1tZC0xMiBhOmZvY3Vze1xuIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xufVxuLm5hbWVfYW5kX2Rlc2MgcHtcbiBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5hbWVfYW5kX2Rlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucHQtNzB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG59XG4ubmV3X21hcmtldGluZ3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmFkbWluLW1hcmtldGluZyBtYXQtZm9ybS1maWVsZHtcbiB3aWR0aDogMzAwcHg7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuIGJvdHRvbTogLTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/adminmarketing/adminmarketing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/adminmarketing/adminmarketing.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminmarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmarketingComponent", function() { return AdminmarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminmarketingComponent = class AdminmarketingComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminmarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminmarketing',
        template: __webpack_require__(/*! raw-loader!./adminmarketing.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminmarketing/adminmarketing.component.html"),
        styles: [__webpack_require__(/*! ./adminmarketing.component.css */ "./src/app/admin/adminmarketing/adminmarketing.component.css")]
    })
], AdminmarketingComponent);



/***/ }),

/***/ "./src/app/admin/adminoffers/adminoffers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/adminoffers/adminoffers.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth{\n  font-weight: bold;\n}\n\nth, td {\n  width: 220px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\ntd, th {\n  border-right: 1px solid #e0e0e0;\n  padding: 5px 10px!important;\n  white-space: nowrap;\n}\n\ntd:last-child, th:last-child {\n  text-align: right;\n  min-width: 120px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5vZmZlcnMvYWRtaW5vZmZlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5vZmZlcnMvYWRtaW5vZmZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50aHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxudGgubWF0LWNvbHVtbi1wb3NpdGlvbiwgdGQubWF0LWNvbHVtbi1wb3NpdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG50ZCwgdGgge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBwYWRkaW5nOiA1cHggMTBweCFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG50ZDpsYXN0LWNoaWxkLCB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/adminoffers/adminoffers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/adminoffers/adminoffers.component.ts ***!
  \************************************************************/
/*! exports provided: AdminoffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminoffersComponent", function() { return AdminoffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-offer.component */ "./src/app/admin/adminoffers/new-offer.component.ts");
/* harmony import */ var _adminoffers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminoffers.service */ "./src/app/admin/adminoffers/adminoffers.service.ts");








let AdminoffersComponent = class AdminoffersComponent {
    constructor(dialog, offersService) {
        this.dialog = dialog;
        this.offersService = offersService;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.displayedColumns = ['username', 'email', 'plan', 'startt', 'endt', 'no', 'start', 'end', 'canceled', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.offersService.getOffers());
        this.searchActive = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
    }
    openAddFileDialog() {
        this.fileNameDialogRef = this.dialog.open(_new_offer_component__WEBPACK_IMPORTED_MODULE_6__["NewOfferComponent"]);
    }
    // onrefresh
    onRefresh() {
        console.log('it isw');
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    // filter
    onActiveSearch() {
        this.searchActive = !this.searchActive;
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdminoffersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _adminoffers_service__WEBPACK_IMPORTED_MODULE_7__["OffersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminoffersComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminoffersComponent.prototype, "sort", void 0);
AdminoffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminoffers',
        template: __webpack_require__(/*! raw-loader!./adminoffers.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminoffers/adminoffers.component.html"),
        styles: [__webpack_require__(/*! ./adminoffers.component.css */ "./src/app/admin/adminoffers/adminoffers.component.css")]
    })
], AdminoffersComponent);



/***/ }),

/***/ "./src/app/admin/adminoffers/adminoffers.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminoffers/adminoffers.service.ts ***!
  \**********************************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersService = class OffersService {
    constructor() {
        this.OFFERS_DATA = [
        // {username: 'wayne' ,    email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial',  startTrial: '', endTrial: '', noCC: 'NO', start: '2020-05-12', end: '2020-06-12', canceled: 'NO'}
        ];
    }
    getOffers() {
        return this.OFFERS_DATA.slice();
    }
};
OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OffersService);



/***/ }),

/***/ "./src/app/admin/adminoffers/new-offer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminoffers/new-offer.component.ts ***!
  \**********************************************************/
/*! exports provided: NewOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferComponent", function() { return NewOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewOfferComponent = class NewOfferComponent {
};
NewOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_subs new_user_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
      </button> 
         Add New Offer
      </h4>
   </div>
   <form class="">
      <div class="modal-body wrap-div">
        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
            <mat-label>User</mat-label>
                <input matInput placeholder="Select Or Search">
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
               <mat-label>Chatroom</mat-label>
               <mat-select placeholder="Select">
                  <mat-option value="option1">On Point FX Signals 🇺🇸 (USA)</mat-option>
                  <mat-option value="option1">1-on-1 Training</mat-option>
                  <mat-option value="option1">Market Analysis</mat-option>
                  <mat-option value="option1">The Golden Circle</mat-option>
                  <mat-option value="option1">Präzise FX Signals 🇩🇪 (GER)</mat-option>
                  <mat-option value="option1">chat dev</mat-option>
                  <mat-option>7 Day Intense Private Training</mat-option>
                  <mat-option>Website Testing A/B</mat-option>
               </mat-select>
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <mat-form-field>
               <mat-label>Billing</mat-label>
               <mat-select placeholder="Select">
                  <mat-option value="Select">Select</mat-option>
               </mat-select>
            </mat-form-field>
          </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
         <button class="btn btn-blue">Save</button>
      </div>
   </form>
</div>
  `
    })
], NewOfferComponent);



/***/ }),

/***/ "./src/app/admin/adminonlineativity/adminonlineativity.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/adminonlineativity/adminonlineativity.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media-body table {\n    width: 100%;\n  }\n  \n  .media-body .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .media-body th{\n    font-weight: bold;\n  }\n  \n  td, th{\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n}\n  \n  .media-body th.mat-column-position, .media-body td.mat-column-position {\n    padding-left: 8px;\n  }\n  \n  .media-body td, .media-body th {\n    padding: 5px 10px!important;\n  }\n  \n  table, .table {\n    color: #554444;\n    background: #ffffff;\n  }\n  \n  .well{\n    background-color: #f5f5f5;\n    border: 1px solid #e3e3e3;\n  }\n  \n  .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n    border-top: 1px solid #e0e0e0;\n  }\n  \n  .box .box-body {\n    padding: 15px;\n  }\n  \n  td:first-child {\n    width: 35px;\n}\n  \n  td:first-child button{\n    color: #333;\n}\n  \n  .box .box-body {\n    padding: 15px;\n}\n  \n  .idle-badge span {\n    width: 10px;\n    height: 10px;\n    display: block;\n    padding: 0;\n    margin: 4px;\n    border-radius: 5px;\n}\n  \n  table a {\n    color: #3c8dbc!important;\n}\n  \n  .page-online .status-badge span {\n    font-size: .8rem;\n    width: 50px;\n    display: block;\n    padding: .4rem;\n    margin-top: 2px;\n}\n  \n  h2{\n    margin: 10px 0;\n}\n  \n  hr {\n    border-top: 1px solid #d2d6de;\n}\n  \n  .dl-horizontal dt {\n  float: left;\n  width: 160px;\n  clear: left;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n  \n  .session-row {\n  padding-left: 20px;\n  position: relative;\n}\n  \n  .idle-badge {\n  float: left;\n}\n  \n  .label-default {\n  background-color: #d2d6de;\n  color: #444;\n}\n  \n  .idle-badge span {\n  width: 10px;\n  height: 10px;\n  display: block;\n  padding: 0;\n  margin: 4px;\n  border-radius: 5px;\n}\n  \n  dd {\n  margin-left: 200px;\n}\n  \n  /* .progress {\n  height: 15px;\n  margin: 2px 0;\n}\n.progress {\n  position: relative;\n  z-index: 1;\n  height: 6px;\n  background-color: #f5f5f5;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n} */\n  \n  .popover_text{\n  position: relative;\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n  \n  .popover_text:hover .popover_text + .popover_tooltop{\n  display: block;\n}\n  \n  .popover_tooltop{\n  position: absolute;\n  right: 0;\n  display: none;\n}\n  \n  .collapse_row{\n  display: none;\n}\n  \n  .popover-inner {\n  width: 400px;\n  background: #fff;\n  border: 1px solid #ccc;\n  z-index: 99999;\n  position: relative;\n}\n  \n  .dl-horizontal-sm dt{\n  width: 80px;\n}\n  \n  .dl-horizontal-sm dd {\n  margin-left: 90px;\n  white-space: normal;\n  font-weight: normal;\n}\n  \n  .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999;\n  border-right-color: rgba(0,0,0,.25);\n}\n  \n  .arrow {\n  border-width: 11px;\n}\n  \n  .arrow, .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  left: -20px\n}\n  \n  .right>.arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #e3e3e3;\n}\n  \n  .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5vbmxpbmVhdGl2aXR5L2FkbWlub25saW5lYXRpdml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFRjtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFDQTtJQUNFLGFBQWE7RUFDZjs7RUFDQTtJQUNFLFdBQVc7QUFDZjs7RUFDQTtJQUNJLFdBQVc7QUFDZjs7RUFDQTtJQUNJLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7RUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0FBQ25COztFQUNBO0lBQ0ksY0FBYztBQUNsQjs7RUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7RUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztFQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7Ozs7Ozs7Ozs7OztHQVlHOztFQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtBQUNmOztFQUNBO0VBQ0UsYUFBYTtBQUNmOztFQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixtQ0FBbUM7QUFDckM7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQjtBQUNGOztFQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbm9ubGluZWF0aXZpdHkvYWRtaW5vbmxpbmVhdGl2aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaWEtYm9keSB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tZWRpYS1ib2R5IC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tZWRpYS1ib2R5IHRoe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxudGQsIHRoe1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbiAgLm1lZGlhLWJvZHkgdGgubWF0LWNvbHVtbi1wb3NpdGlvbiwgLm1lZGlhLWJvZHkgdGQubWF0LWNvbHVtbi1wb3NpdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gIC5tZWRpYS1ib2R5IHRkLCAubWVkaWEtYm9keSB0aCB7XG4gICAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xuICB9XG4gIFxuICB0YWJsZSwgLnRhYmxlIHtcbiAgICBjb2xvcjogIzU1NDQ0NDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG4gIC53ZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgfVxuICAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0aCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLCAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCwgLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgfVxuICAuYm94IC5ib3gtYm9keSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDM1cHg7XG59XG50ZDpmaXJzdC1jaGlsZCBidXR0b257XG4gICAgY29sb3I6ICMzMzM7XG59XG4uYm94IC5ib3gtYm9keSB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5pZGxlLWJhZGdlIHNwYW4ge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbnRhYmxlIGEge1xuICAgIGNvbG9yOiAjM2M4ZGJjIWltcG9ydGFudDtcbn1cbi5wYWdlLW9ubGluZSAuc3RhdHVzLWJhZGdlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogLjRyZW07XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuaDJ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5ociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMmQ2ZGU7XG59XG4uZGwtaG9yaXpvbnRhbCBkdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTYwcHg7XG4gIGNsZWFyOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2Vzc2lvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pZGxlLWJhZGdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubGFiZWwtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmQ2ZGU7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmlkbGUtYmFkZ2Ugc3BhbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5kZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cbi8qIC5wcm9ncmVzcyB7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAycHggMDtcbn1cbi5wcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0gKi9cbi5wb3BvdmVyX3RleHR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wb3BvdmVyX3RleHQ6aG92ZXIgLnBvcG92ZXJfdGV4dCArIC5wb3BvdmVyX3Rvb2x0b3B7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBvcG92ZXJfdG9vbHRvcHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb2xsYXBzZV9yb3d7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucG9wb3Zlci1pbm5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgei1pbmRleDogOTk5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kbC1ob3Jpem9udGFsLXNtIGR0e1xuICB3aWR0aDogODBweDtcbn1cblxuLmRsLWhvcml6b250YWwtc20gZGQge1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmFycm93IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0xMXB4O1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG59XG5cbi5hcnJvdyB7XG4gIGJvcmRlci13aWR0aDogMTFweDtcbn1cbi5hcnJvdywgLmFycm93OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbGVmdDogLTIwcHhcbn1cbi5yaWdodD4uYXJyb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgbGVmdDogMXB4O1xuICBib3R0b206IC0xMHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTNlM2UzO1xufVxuLmFycm93OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICBjb250ZW50OiBcIlwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/adminonlineativity/adminonlineativity.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/adminonlineativity/adminonlineativity.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminonlineativityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminonlineativityComponent", function() { return AdminonlineativityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





/** Constants used to fill up our data base. */
const COLORS = [
    '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --', '-- never --',
    '-- never --', '-- never --', '-- never --', '-- never --', '-- never --'
];
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const DEVICES = [
    '1 Devices', '2 Devices', '1 Devices', '2 Devices', '1 Devices', '1 Devices', '1 Devices', '1 Devices', '1 Devices',
    '1 Devices', '2 Devices', '1 Devices', '2 Devices', '1 Devices', '1 Devices',
];
const USER = [
    'puneetsethi25', 'puneetsethi25', ' kuldeepspall231', 'puneetsethi25', 'tarunjangra3223', 'puneetsethi25', 'kuldeepspall231',
    'tarunjangra3223', 'puneetsethi25', 'kuldeepspall231', 'puneetsethi25', 'mohitkumar23', 'puneetsethi25', 'tarunjangra3223',
];
const SESSIONS = [
    '1 sessions', '1 sessions', '2 sessions', '4 sessions', '3 sessions', '5 sessions', '2 sessions', '2 sessions',
    '2 sessions', '5 sessions', '5 sessions', '5 sessions', '5 sessions', '5 sessions', '5 sessions', '5 sessions',
];
const IP = [
    '2 ips', '1 ips', '3 ips', '2 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips',
    '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '3 ips', '2 ips', '3 ips',
];
let AdminonlineativityComponent = class AdminonlineativityComponent {
    constructor() {
        this.displayedColumns = ['empty', 'user', 'activesessions', 'sessions', 'ip', 'devices'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](users);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngAfterViewInit() {
        $('.collapse_carret').click(function () {
            $('.collapse_carret .fa-angle-right').toggleClass('fa-angle-down');
            $('.collapse_row').toggle(500);
        });
        $('.popover_text').click(function () {
            $('.popover_tooltop').toggle(100);
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminonlineativityComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminonlineativityComponent.prototype, "sort", void 0);
AdminonlineativityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminonlineativity',
        template: __webpack_require__(/*! raw-loader!./adminonlineativity.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminonlineativity/adminonlineativity.component.html"),
        styles: [__webpack_require__(/*! ./adminonlineativity.component.css */ "./src/app/admin/adminonlineativity/adminonlineativity.component.css")]
    })
], AdminonlineativityComponent);

/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
        devices: DEVICES[Math.round(Math.random() * (COLORS.length - 1))],
        user: USER[Math.round(Math.random() * (COLORS.length - 1))],
        sessions: SESSIONS[Math.round(Math.random() * (COLORS.length - 1))],
        ip: IP[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "./src/app/admin/adminsales/adminsales.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/adminsales/adminsales.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth{\n  font-weight: bold;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\ntd, th {\n  border-right: 1px solid #e0e0e0;\n  padding: 5px 10px!important;\n  white-space: nowrap;\n}\n\n.admin_payouts .col-md-3{\n padding: 0 15px;\n}\n\n.toolbox .form-group {\n  margin-right: 15px;\n}\n\n.media-body table {\n  width: 100%;\n}\n\n.media-body .mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.media-body th{\n  font-weight: bold;\n}\n\n.media-body th.mat-column-position, .media-body td.mat-column-position {\n  padding-left: 8px;\n}\n\n.media-body td, .media-body th {\n  border-right: 1px solid #e0e0e0;\n  padding: 5px 10px!important;\n}\n\n.media-body td:last-child, .media-body th:last-child {\n  text-align: center;\n  min-width: 120px;\n  width: 120px;\n}\n\ntable, .table {\n  color: #554444;\n  background: #ffffff;\n}\n\n.well{\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n}\n\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n  border-top: 1px solid #e0e0e0;\n}\n\n.box .box-body {\n  padding: 15px;\n}\n\n.paymentCalendarDate {\n  position: absolute;\n  top: 2px;\n  left: 4px;\n  font-size: .5rem;\n  color: rgba(0,0,0,.5);\n}\n\n.paymentCalendarTd {\n  position: relative;\n  border: none;\n}\n\n.paymentCalendarAmount {\n  font-family: monospace;\n  padding: 5px 0;\n  display: block;\n  font-size: 0.9rem;\n}\n\n.media-right .table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.box-header h3.box-title{\n  font-size: 15px;\n}\n\n.paymentCalendarTd.today {\n  border: solid 1px #666;\n  box-shadow: inset 0 0 5px rgba(0,0,0,.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5zYWxlcy9hZG1pbnNhbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbnNhbGVzL2FkbWluc2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG50aHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbnRkLCB0aCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHBhZGRpbmc6IDVweCAxMHB4IWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFkbWluX3BheW91dHMgLmNvbC1tZC0ze1xuIHBhZGRpbmc6IDAgMTVweDtcbn1cbi50b29sYm94IC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cbi5tZWRpYS1ib2R5IHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZWRpYS1ib2R5IC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVkaWEtYm9keSB0aHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZWRpYS1ib2R5IHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIC5tZWRpYS1ib2R5IHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLm1lZGlhLWJvZHkgdGQsIC5tZWRpYS1ib2R5IHRoIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogNXB4IDEwcHghaW1wb3J0YW50O1xufVxuLm1lZGlhLWJvZHkgdGQ6bGFzdC1jaGlsZCwgLm1lZGlhLWJvZHkgdGg6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG50YWJsZSwgLnRhYmxlIHtcbiAgY29sb3I6ICM1NTQ0NDQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ud2VsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5ib3ggLmJveC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wYXltZW50Q2FsZW5kYXJEYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogNHB4O1xuICBmb250LXNpemU6IC41cmVtO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG59XG4ucGF5bWVudENhbGVuZGFyVGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wYXltZW50Q2FsZW5kYXJBbW91bnQge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLm1lZGlhLXJpZ2h0IC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTBlMGUwO1xufVxuLmJveC1oZWFkZXIgaDMuYm94LXRpdGxle1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucGF5bWVudENhbGVuZGFyVGQudG9kYXkge1xuICBib3JkZXI6IHNvbGlkIDFweCAjNjY2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwwLDAsLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/adminsales/adminsales.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminsales/adminsales.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsalesComponent", function() { return AdminsalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _adminsales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminsales.service */ "./src/app/admin/adminsales/adminsales.service.ts");






let AdminsalesComponent = class AdminsalesComponent {
    constructor(salesService) {
        this.salesService = salesService;
        this.mode = 'determinate';
        this.showSpinner = false;
        this.displayedColumns = ['date', 'fullname', 'email', 'plan', 'description', 'amount', 'status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.salesService.getSalesData());
        this.searchActive = false;
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // onrefresh
    onRefresh() {
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    // filter
    onActiveSearch() {
        this.searchActive = !this.searchActive;
    }
};
AdminsalesComponent.ctorParameters = () => [
    { type: _adminsales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminsalesComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminsalesComponent.prototype, "sort", void 0);
AdminsalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminsales',
        template: __webpack_require__(/*! raw-loader!./adminsales.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminsales/adminsales.component.html"),
        styles: [__webpack_require__(/*! ./adminsales.component.css */ "./src/app/admin/adminsales/adminsales.component.css")]
    })
], AdminsalesComponent);



/***/ }),

/***/ "./src/app/admin/adminsales/adminsales.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/adminsales/adminsales.service.ts ***!
  \********************************************************/
/*! exports provided: SalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesService", function() { return SalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SalesService = class SalesService {
    constructor() {
        this.SALES_DATA = [
        //  {date: '2020-05-04', fullname: 'wayne' , email: 'wayne@gmail.com', plan: 'OPFX $77/mo 7 Day Trial', description: 'MMA +1-916-836-4569', amount: 87978, status:'Succeed'}
        ];
    }
    getSalesData() {
        return this.SALES_DATA.slice();
    }
};
SalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SalesService);



/***/ }),

/***/ "./src/app/admin/adminservices/adminservices.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/adminservices/adminservices.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  th{\n    font-weight: bold;\n  }\n  \n  th.mat-column-position, td.mat-column-position {\n    padding-left: 8px;\n  }\n  \n  td, th {\n    border-right: 1px solid #e0e0e0;\n    padding: 5px 10px!important;\n    white-space: nowrap;\n  }\n  \n  .admin_payouts .col-md-3{\n   padding: 0 15px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5zZXJ2aWNlcy9hZG1pbnNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7O0VBRUE7R0FDQyxlQUFlO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5zZXJ2aWNlcy9hZG1pbnNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRoe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICB0aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICAuYWRtaW5fcGF5b3V0cyAuY29sLW1kLTN7XG4gICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/adminservices/adminservices.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminservices/adminservices.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminservicesComponent", function() { return AdminservicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-services.component */ "./src/app/admin/adminservices/new-services.component.ts");
/* harmony import */ var _adminservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminservices.service */ "./src/app/admin/adminservices/adminservices.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");









let AdminservicesComponent = class AdminservicesComponent {
    constructor(localStorage, dialog, serviceService) {
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.serviceService = serviceService;
        this.mode = 'determinate';
        this.showSpinner = false;
        // ServicesDataSource = new MatTableDataSource([]);
        this.displayedColumns = ['name', 'description', 'url', 'plan', 'coupon', 'sort', 'checkout', 'alter'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.serviceService.getServices());
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
    }
    openAddFileDialog() {
        this.fileNameDialogRef = this.dialog.open(_new_services_component__WEBPACK_IMPORTED_MODULE_6__["NewServicesComponent"]);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // var parsedData = JSON.parse(this.localStorage.get('newService'));
        // this.ServicesDataSource = new MatTableDataSource(parsedData);
    }
    // onrefresh
    onRefresh() {
        this.showSpinner = true;
        this.mode = 'indeterminate';
        setTimeout(() => {
            this.mode = 'determinate';
            this.showSpinner = false;
        }, 1000);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
AdminservicesComponent.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _adminservices_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminservicesComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminservicesComponent.prototype, "sort", void 0);
AdminservicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminservices',
        template: __webpack_require__(/*! raw-loader!./adminservices.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminservices/adminservices.component.html"),
        styles: [__webpack_require__(/*! ./adminservices.component.css */ "./src/app/admin/adminservices/adminservices.component.css")]
    })
], AdminservicesComponent);



/***/ }),

/***/ "./src/app/admin/adminservices/adminservices.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminservices/adminservices.service.ts ***!
  \**************************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceService = class ServiceService {
    constructor() {
        this.SERVICES_DATA = [
        //{name: 'On Point FX Signals O', description: 'Access our 7-Day INTENSIVE Private Forex Training resources', url: 'www.mmagoldencircle.com/market-mastermind-1', plan:'USD', coupon: '',sort: '', }
        ];
    }
    getServices() {
        return this.SERVICES_DATA.slice();
    }
};
ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ "./src/app/admin/adminservices/new-services.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/adminservices/new-services.component.ts ***!
  \***************************************************************/
/*! exports provided: NewServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewServicesComponent", function() { return NewServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adminservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminservices.service */ "./src/app/admin/adminservices/adminservices.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");




let NewServicesComponent = class NewServicesComponent {
    constructor(localstorage, adminServiceOfService) {
        this.localstorage = localstorage;
        this.adminServiceOfService = adminServiceOfService;
        this.type = 'type1';
        this.newService = {
            name: '',
            description: '',
            url: '',
            plan: '',
            coupon: '',
            sort: ''
        };
    }
    ngOnInit() {
        console.log(this.adminServiceOfService);
    }
    onSubmit() {
        this.adminServiceOfService.SERVICES_DATA.push(this.newService);
        const storageService = this.adminServiceOfService.SERVICES_DATA;
        this.localstorage.set('newService', JSON.stringify(storageService));
        console.log(this.adminServiceOfService);
        this.newService = {
            name: '',
            description: '',
            url: '',
            plan: '',
            coupon: '',
            sort: ''
        };
    }
};
NewServicesComponent.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _adminservices_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }
];
NewServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog chatroom_dialog">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
        </button> 
         Add Service
      </h4>
   </div>
   <form >
      <div class="modal-body wrap-div">
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Name *" value="" name="name" [(ngModel)]="newService.name" > 
              </mat-form-field>
          </div>
      </div>    
      <div class="row">
          <div class="col-xs-12">
              <mat-form-field>
                <input matInput placeholder="Description *" value="" name="description" [(ngModel)]="newService.description"> 
              </mat-form-field>
          </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <input matInput placeholder="icon" value="rss"  class="example-right-align" >
                    <span matPrefix><span class="fa fa-rss fa-fw"></span>&nbsp;</span>
                </mat-form-field>
                <span class="bottom_line">Enter the icon name you like from this library <a target="_blank" href="http://fontawesome.io/icons">http://fontawesome.io/icons</a></span>
            </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <input matInput placeholder="" value=""  name="url" class="example-right-align" [(ngModel)]="newService.url">
                    <span matPrefix>https://&nbsp;</span>
                </mat-form-field>
            </div>
      </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <input matInput placeholder="Params" value="" name="params" > 
                </mat-form-field>
            </div>
        </div>  
      <div class="row">
            <div class="col-xs-12">
                <mat-form-field>
                    <mat-label>Type</mat-label>
                    <mat-select [(value)]="type" >
                        <mat-option value="type1">Public - The page is accessible to everybody</mat-option>
                        <mat-option value="type2">Premium - The page is associated with at least one billing plan</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
            <h5>Options</h5>
                    <mat-checkbox> Open the page in a new web browser window -</mat-checkbox> 
                        <span class="text-muted">
                            <i>Select this when the page does not allow iframe or it is HTTP</i>
                        </span><br>

                        <mat-checkbox>The page is visible -</mat-checkbox> 
                        <span class="text-muted">
                            <i>The page is displayed on the left sidebar</i>
                        </span>
            </div>
        </div>
      </div>
      <div class="modal-footer wrap-div">
         <button mat-dialog-close  class="btn btn-default pull-left" type="button" >Cancel</button>
         <button class="btn btn-blue" (click)="onSubmit()">Create</button>
      </div>
   </form>
</div>
  `
    })
], NewServicesComponent);



/***/ }),

/***/ "./src/app/admin/adminsettings/adminsettings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/adminsettings/adminsettings.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-new {\n    background: #1e88e5;\n    border-radius: 0 3px 3px 0;\n    color: #FFF;\n    margin: 11px 0 0 -2px;\n    padding: 2px 11px;\n    position: absolute;\n}\n.img-thumbnail {\n    padding: 4px;\n    line-height: 1.42857;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n}\nsection.admin-widget {\n    max-width: 860px;\n    margin: 0 auto;\n}\ntable, .table {\n    color: #333;\n    background: #ffffff;\n}\nh4 small {\n    font-weight: 400;\n    line-height: 1;\n    color: #777;\n}\np {\n    color: #333!important;\n    font-size: 1em;\n}\nh4 {\n    font-size: 1.2em;\n    margin: 10px 0;\n}\n.col-md-4{\n    padding:0 15px;\n}\n.lead {\n    border: solid 1px #eee;\n    padding: 15px 25px;\n    border-radius: 5px;\n    box-shadow: inset 0 0 30px #eee;\n    font-size: 16px;\n}\n.page-header {\n    margin: 10px 0 20px 0;\n    font-size: 20px;\n}\n.page-header {\n    padding-bottom: 9px;\n    border-bottom: 1px solid #eee;\n}\ntd{\n    border-top: 1px solid #ededed!important;\n}\n.row{\n    padding: 15px 0;\n}\n.admin-widget h3 {\n    font-size: 1.4em;\n}\ntable a{\n    color: #007590;\n}\n.box-body {\n    padding: 15px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5zZXR0aW5ncy9hZG1pbnNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFFdkMsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbnNldHRpbmdzL2FkbWluc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1uZXcge1xuICAgIGJhY2tncm91bmQ6ICMxZTg4ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgbWFyZ2luOiAxMXB4IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDJweCAxMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5pbWctdGh1bWJuYWlsIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuc2VjdGlvbi5hZG1pbi13aWRnZXQge1xuICAgIG1heC13aWR0aDogODYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG50YWJsZSwgLnRhYmxlIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuaDQgc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICM3Nzc7XG59XG5wIHtcbiAgICBjb2xvcjogIzMzMyFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5jb2wtbWQtNHtcbiAgICBwYWRkaW5nOjAgMTVweDtcbn1cbi5sZWFkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggI2VlZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZS1oZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbnRke1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZGVkIWltcG9ydGFudDtcbn1cbi5yb3d7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuLmFkbWluLXdpZGdldCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cbnRhYmxlIGF7XG4gICAgY29sb3I6ICMwMDc1OTA7XG59XG4uYm94LWJvZHkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/adminsettings/adminsettings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminsettings/adminsettings.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminsettingsComponent, NewTeamAvatarDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsettingsComponent", function() { return AdminsettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamAvatarDialog", function() { return NewTeamAvatarDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _custom_script_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-script.component */ "./src/app/admin/adminsettings/custom-script.component.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _new_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-avatar.service */ "./src/app/admin/adminsettings/new-avatar.service.ts");






let AdminsettingsComponent = class AdminsettingsComponent {
    constructor(dialog, localStorage, newAvatarService) {
        this.dialog = dialog;
        this.localStorage = localStorage;
        this.newAvatarService = newAvatarService;
        this.adminImgPath = this.localStorage.get('admin_user_profile');
    }
    openteamavatar() {
        const fileNameDialogRef = this.dialog.open(NewTeamAvatarDialog);
    }
    openscript() {
        const fileNameDialogRef = this.dialog.open(_custom_script_component__WEBPACK_IMPORTED_MODULE_3__["CustomScriptComponent"]);
    }
    ngOnInit() {
        this.newAvatarService.newAvatar.subscribe(() => {
            this.adminImgPath = this.localStorage.get('admin_user_profile');
        });
    }
};
AdminsettingsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _new_avatar_service__WEBPACK_IMPORTED_MODULE_5__["NewAvatarService"] }
];
AdminsettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminsettings',
        template: __webpack_require__(/*! raw-loader!./adminsettings.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminsettings/adminsettings.component.html"),
        styles: [__webpack_require__(/*! ./adminsettings.component.css */ "./src/app/admin/adminsettings/adminsettings.component.css")]
    })
], AdminsettingsComponent);

// new avatar dialog
let NewTeamAvatarDialog = class NewTeamAvatarDialog {
    constructor(localStorage, newAvatarService) {
        this.localStorage = localStorage;
        this.newAvatarService = newAvatarService;
        this.adminImgPath = this.localStorage.get('admin_user_profile');
    }
    ngOnInit() {
    }
    preview(files) {
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.adminImgPath = reader.result;
            this.localStorage.set("admin_user_profile", this.adminImgPath);
        };
    }
    onUpload() {
        this.newAvatarService.newAvatar.next(true);
    }
};
NewTeamAvatarDialog.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _new_avatar_service__WEBPACK_IMPORTED_MODULE_5__["NewAvatarService"] }
];
NewTeamAvatarDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'new-teamavatar',
        template: __webpack_require__(/*! raw-loader!./new-teamavatar.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminsettings/new-teamavatar.dialog.html"),
        styles: [__webpack_require__(/*! ./adminsettings.component.css */ "./src/app/admin/adminsettings/adminsettings.component.css")]
    })
], NewTeamAvatarDialog);



/***/ }),

/***/ "./src/app/admin/adminsettings/custom-script.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminsettings/custom-script.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomScriptComponent", function() { return CustomScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomScriptComponent = class CustomScriptComponent {
};
CustomScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_subs new_user_dialog new-teamavatar">
   <div class="modal-header">
      <h4 class="modal-title">
        <button  mat-dialog-close  class="close">
            <span aria-hidden="true">×</span>
        </button> 
         Custom Scripts
      </h4>
   </div>
    <div class="modal-body wrap-div">
            <p>General Script</p>
            <p class="p_12">This script is loaded at the bottom of the page in the chat app</p>
            <form class="example-form">
                <textarea type="text" rows="7" class="inputText" placeholder=
"<script>
    console.log(&quot;ADMIN SCRIPT LOADED&quot;);
</script>" style="width:100%; margin-bottom:20px;"></textarea>  

<p>Finished Payment Script</p>
<p class="p_12">This script is loaded when the user submit the payment form or wizard</p>
    <textarea type="text" rows="7" class="inputText" placeholder=
"<script>
    console.log(&quot;ADMIN PAYMENT SCRIPT LOADED&quot;);
</script>" 
style="width:100%;"></textarea>  
            </form>
    </div>        
    <div class="modal-footer wrap-div">
    <button mat-dialog-close class="btn btn-default pull-left" type="button">Cancel</button>
        <button class="btn btn-blue">Upload</button>
    </div>
</div>
  `
    })
], CustomScriptComponent);



/***/ }),

/***/ "./src/app/admin/adminsettings/new-avatar.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/adminsettings/new-avatar.service.ts ***!
  \***********************************************************/
/*! exports provided: NewAvatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAvatarService", function() { return NewAvatarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let NewAvatarService = class NewAvatarService {
    constructor() {
        this.newAvatar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
};
NewAvatarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewAvatarService);



/***/ }),

/***/ "./src/app/admin/adminwidget/adminwidget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/adminwidget/adminwidget.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-new {\n    background: #1e88e5;\n    border-radius: 0 3px 3px 0;\n    color: #FFF;\n    margin: 11px 0 0 -2px;\n    padding: 2px 7px;\n    position: absolute;\n    font-size: 12px;\n}\n.img-thumbnail {\n    padding: 4px;\n    line-height: 1.42857;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 50%;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n}\nsection.admin-widget {\n    max-width: 860px;\n    margin: 0 auto;\n}\ntable, .table {\n    color: #333;\n    background: #ffffff;\n}\nh4 small {\n    font-weight: 400;\n    line-height: 1;\n    color: #777;\n}\np {\n    color: #333!important;\n    font-size: 1em;\n}\nh4 {\n    font-size: 1.2em;\n    margin: 10px 0;\n}\n.col-md-4{\n    padding:0 15px;\n}\n.lead {\n    border: solid 1px #eee;\n    padding: 15px 25px;\n    border-radius: 5px;\n    box-shadow: inset 0 0 30px #eee;\n    font-size: 16px;\n}\n.page-header {\n    margin: 10px 0 20px 0;\n    font-size: 20px;\n}\n.page-header {\n    padding-bottom: 9px;\n    border-bottom: 1px solid #eee;\n}\ntd{\n    border-top: 1px solid #ededed!important;\n}\n.row{\n    padding: 15px 0;\n}\n.admin-widget h3 {\n    font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW53aWRnZXQvYWRtaW53aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBRXZDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW53aWRnZXQvYWRtaW53aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1uZXcge1xuICAgIGJhY2tncm91bmQ6ICMxZTg4ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgbWFyZ2luOiAxMXB4IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pbWctdGh1bWJuYWlsIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuc2VjdGlvbi5hZG1pbi13aWRnZXQge1xuICAgIG1heC13aWR0aDogODYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG50YWJsZSwgLnRhYmxlIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuaDQgc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICM3Nzc7XG59XG5wIHtcbiAgICBjb2xvcjogIzMzMyFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5jb2wtbWQtNHtcbiAgICBwYWRkaW5nOjAgMTVweDtcbn1cbi5sZWFkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggI2VlZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZS1oZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbnRke1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZGVkIWltcG9ydGFudDtcbn1cbi5yb3d7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuLmFkbWluLXdpZGdldCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/adminwidget/adminwidget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/adminwidget/adminwidget.component.ts ***!
  \************************************************************/
/*! exports provided: AdminwidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminwidgetComponent", function() { return AdminwidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _customwidget_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customwidget-dialog.component */ "./src/app/admin/adminwidget/customwidget-dialog.component.ts");
/* harmony import */ var _configure_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configure-dialog.component */ "./src/app/admin/adminwidget/configure-dialog.component.ts");
/* harmony import */ var _adminwidget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminwidget.service */ "./src/app/admin/adminwidget/adminwidget.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");







let AdminwidgetComponent = class AdminwidgetComponent {
    constructor(dialog, adminwidgetService, localStorage) {
        this.dialog = dialog;
        this.adminwidgetService = adminwidgetService;
        this.localStorage = localStorage;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_2__["VERSION"];
        this.topBarWidgets = this.adminwidgetService.topbar;
        this.widgetStatus = this.localStorage.get('widget');
    }
    openAddFileDialog() {
        this.fileNameDialogRef = this.dialog.open(_customwidget_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CustomwidgetComponent"]);
    }
    openConfigureDialog() {
        this.fileNameDialogRef = this.dialog.open(_configure_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfiguredialogComponent"]);
    }
    ngOnInit() {
    }
};
AdminwidgetComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _adminwidget_service__WEBPACK_IMPORTED_MODULE_5__["AdminWidgetService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
AdminwidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminwidget',
        template: __webpack_require__(/*! raw-loader!./adminwidget.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/adminwidget/adminwidget.component.html"),
        styles: [__webpack_require__(/*! ./adminwidget.component.css */ "./src/app/admin/adminwidget/adminwidget.component.css")]
    })
], AdminwidgetComponent);



/***/ }),

/***/ "./src/app/admin/adminwidget/adminwidget.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminwidget/adminwidget.service.ts ***!
  \**********************************************************/
/*! exports provided: AdminWidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWidgetService", function() { return AdminWidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminWidgetService = class AdminWidgetService {
    constructor() {
        this.topbar = [
            { name: 'Charts', img: 'https://cdn.echofin.co/widgets/echofin.commodities.jpg', description: 'TradingView' }
        ];
    }
};
AdminWidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminWidgetService);



/***/ }),

/***/ "./src/app/admin/adminwidget/configure-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/adminwidget/configure-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConfiguredialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguredialogComponent", function() { return ConfiguredialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adminwidget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminwidget.service */ "./src/app/admin/adminwidget/adminwidget.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");




let ConfiguredialogComponent = class ConfiguredialogComponent {
    constructor(adminWidgetService, localStorage) {
        this.adminWidgetService = adminWidgetService;
        this.localStorage = localStorage;
        this.position = 'right-bar';
        this.widget = this.localStorage.get('widget');
    }
    onDisabledWidget() {
        this.adminWidgetService.widget = true;
        this.widget = !this.widget;
        this.localStorage.set('widget', this.adminWidgetService.widget);
    }
    onEnableWidget() {
        this.adminWidgetService.widget = false;
        this.widget = !this.widget;
        this.localStorage.set('widget', this.adminWidgetService.widget);
    }
};
ConfiguredialogComponent.ctorParameters = () => [
    { type: _adminwidget_service__WEBPACK_IMPORTED_MODULE_2__["AdminWidgetService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
ConfiguredialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog custom_widget">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
          <span aria-hidden="true">×</span>
      </button> 
         Configure Widget
      </h4>
   </div>
   <div class="modal-body wrap-div">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <div class="text-primary text-center">
                    <h4>This is a third party widget</h4>
                    <p>This widget is preconfigured by a third party. You may only disabled it and/or uninstall it.</p>
                </div>
            </div>
        </div>  
   </div>

   <div class="modal-footer wrap-div text-center">
      <button class="btn btn-md btn-warning" (click)="onDisabledWidget()" *ngIf="!widget">
            <span class="fa fa-times fa-fw"></span> disable
        </button>
        <button class="btn btn-md btn-warning" (click)="onEnableWidget()" *ngIf="widget">
            <span class="fa fa-check fa-fw"></span> Enable
        </button>
      <button class="btn btn-md btn-danger">
            <span class="fa fa-trash-o fa-fw"></span> uninstall
        </button>
    </div>
</div>
  `
    })
], ConfiguredialogComponent);



/***/ }),

/***/ "./src/app/admin/adminwidget/customwidget-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/adminwidget/customwidget-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomwidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomwidgetComponent", function() { return CustomwidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomwidgetComponent = class CustomwidgetComponent {
    constructor() {
        this.position = 'right-bar';
    }
};
CustomwidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content new_user_dialog custom_widget">
   <div class="modal-header">
      <h4 class="modal-title">
      <button  mat-dialog-close  class="close">
          <span aria-hidden="true">×</span>
      </button> 
         Configure Widget
      </h4>
   </div>
   <div class="modal-body wrap-div">
      <mat-tab-group>
            <mat-tab>
              <ng-template mat-tab-label>
                  <i class="fa fa-bars" aria-hidden="true"></i>
                Details
              </ng-template>
              <div class="row">
                  <div class="col-xs-12">
                    <mat-form-field>
                        <input matInput placeholder="Title *">
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                      <div class="col-xs-12">
                          <mat-form-field>
                              <input matInput placeholder="Url *" value=""  class="example-right-align">
                              <span matPrefix>https:// &nbsp;</span>
                          </mat-form-field>
                      </div>
                </div>  
                <div class="row">
                    <div class="col-xs-12">
                    <mat-form-field>
                        <mat-label>Position *</mat-label>
                        <mat-select [(value)]="position">
                            <mat-option value="right-bar">Right-bar</mat-option>
                            <mat-option value="top-bar">Top-bar</mat-option>
                        </mat-select>
                    </mat-form-field>
                    </div>
                </div>  
                <div class="row">
                    <div class="col-sm-6">
                      <div class="checkbox">
                        <label>
                        <input type="checkbox" class="">  Enabled widget to users
                        </label>
                      </div>
                    </div>  
                </div>
            </mat-tab>
            <mat-tab >
              <ng-template mat-tab-label>
              <i class="fa fa-credit-card" aria-hidden="true"></i>
                Billing
              </ng-template>
              <div class="row">
                  <div class="col-sm-6">
                    <div class="checkbox">
                      <label>
                      <input type="checkbox" class=""> Enable billing plans
                      </label>
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                   <p>Anyone who has paid for any of the plans should receive the premium widget version</p>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">On Point FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                         <input type="checkbox" class="">On-Point FX Signals 7-Day FREE Trial
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Private Forex Mentoring
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> 7-Day INTENSIVE Private Forex Training
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> On Point FX Signals (Telegram)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  On Point FX Signals 7-Days FREE and then $57/mo
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                           <input type="checkbox" class="">  $0 test
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">  FX Signals $57 Early-bird Special
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">   Market Masters FX Signals Transfer Form
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Market Masters VIP Forex Signals Transfer Form
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">On Point FX Signals $97/mo
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> No Credit Card Test
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                         <input type="checkbox" class=""> MMA On Point FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">MMA OPFX Julio Vasquez
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Exclusive 1-on-1 Training
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> MMA Signals Transfer
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                           <input type="checkbox" class="">7-Day Intense Forex Training (3 Month Plan)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> OPFX $77/mo 7 Day Trial
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX $77/mo No Trial
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX $77/mo 7 Day Trial (No CC Required)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">   OPFX Recurly
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  7-Day Training Recurly
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    7-Day Training Deal Recurly
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  OPFX PP
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    7-Day Training PP
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">7-Day Training Deal PP
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">OPFX $77/mo 7 Day Trial (No CC Required)*
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Marcos OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">Isaac OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">  Allen OPFS FREE TRIAL (NO CC)
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">    Market Mastermind (Deal)
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Privte Mentorship
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                          <input type="checkbox" class="">Prazise FX Signals
                        </label>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class="">Website Testing A/B
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                      <div class="checkbox checkbox-form">
                        <label>
                        <input type="checkbox" class=""> Chat Development
                        </label>
                      </div>
                  </div>
              </div>
              <p>* The Primary plan appears in the in-chat billing form</p>
              <div class="row">
                  <div class="col-xs-12">
                    <p>Apply the following coupon in the Primary plan</p>
                    <mat-form-field>
                        <mat-label>Position *</mat-label>
                        <mat-select [(value)]="position">
                            <mat-option value="right-bar">Right-bar</mat-option>
                            <mat-option value="top-bar">Top-bar</mat-option>
                        </mat-select>
                    </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="">  Widget has a different URL for premium users                        
                        </label>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class="">  Custom upgrade-banner message                        
                        </label>
                      </div>
                  </div>
              </div>
            </mat-tab>
            <mat-tab>
              <ng-template mat-tab-label>
                <i class="fa fa-ellipsis-v fa-fw" aria-hidden="true"></i>
                Advanced
              </ng-template>
              <div class="row">
                  <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                        <input type="checkbox" class="">   Enable Advanced Mode                       
                        </label>
                      </div>
                  </div>
              </div>
              <div class="alert bg-green">
                    <strong>Documentation</strong>
                    <br>
                    <p>You may find the full documentation on implementing the widget functions and callback at
                        <a href="#">widgets documentation</a>
                    </p>
              </div> 
              <div class="alert alert-default">
                  Widget credentials will be generated upon saving
              </div>
              <hr>
              <div>
                  <p>System user's properties to pass in the frame url</p>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox> Username</mat-checkbox>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox>  Email</mat-checkbox>
              </div>
              <div class="col-sm-3">
                        <mat-checkbox>  Team Name</mat-checkbox>
              </div>
              <div class="col-sm-3">
                      <mat-checkbox> Billing</mat-checkbox>
              </div>
              <p>Custom properties to pass in the frame url</p>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-4">
                        <mat-form-field>
                            <input matInput placeholder="key *">
                        </mat-form-field>
                  </div>
                  <div class="col-sm-8">
                        <mat-form-field>
                            <input matInput placeholder="value">
                        </mat-form-field>
                  </div>
              </div>
              <div class="row">
              <div class="col-xs-12">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" class=""> Enable callback functions     
                        </label>
                      </div>
                  </div>
              </div>
              
              

            </mat-tab>
          </mat-tab-group>
   </div>

   <div class="modal-footer wrap-div">
      <button mat-dialog-close  class="btn btn-default pull-left" type="button">Cancel</button>
      <button class="btn btn-blue">Create</button>
    </div>
</div>
  `
    })
], CustomwidgetComponent);



/***/ }),

/***/ "./src/app/admin/registration-setiings/registration-setiings.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/registration-setiings/registration-setiings.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.admin-widget {\n    max-width: 860px;\n    margin: 0 auto;\n}\n.box-body {\n    padding: 15px;\n}\nmat-slide-toggle{\n    position: absolute;\n    right: 20px;\n}\nmat-list-item span{\n    position: absolute;\n    right: 20px;\n}\nmat-list-item{\n    border-bottom: 1px solid #ddd;\n}\nmat-list-option{\n    border-bottom: 1px solid #eee;\n}\nmat-list-option:last-child{\n    border: none;\n}\nmat-selection-list:focus{\n    outline: none!important;\n}\nmat-selection-list mat-list-option:focus{\n    outline: none!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0cmF0aW9uLXNldGlpbmdzL3JlZ2lzdHJhdGlvbi1zZXRpaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lzdHJhdGlvbi1zZXRpaW5ncy9yZWdpc3RyYXRpb24tc2V0aWluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uYWRtaW4td2lkZ2V0IHtcbiAgICBtYXgtd2lkdGg6IDg2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmJveC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxubWF0LXNsaWRlLXRvZ2dsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5tYXQtbGlzdC1pdGVtIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xufVxubWF0LWxpc3QtaXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbm1hdC1saXN0LW9wdGlvbntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbm1hdC1saXN0LW9wdGlvbjpsYXN0LWNoaWxke1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbm1hdC1zZWxlY3Rpb24tbGlzdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcbn1cbm1hdC1zZWxlY3Rpb24tbGlzdCBtYXQtbGlzdC1vcHRpb246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/registration-setiings/registration-setiings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/registration-setiings/registration-setiings.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegistrationSetiingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSetiingsComponent", function() { return RegistrationSetiingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegistrationSetiingsComponent = class RegistrationSetiingsComponent {
    constructor() {
        this.RegistrationList = ['Phone Number', 'Country', 'State', 'City', 'Date Of Birth'];
    }
    ngOnInit() {
    }
};
RegistrationSetiingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-setiings',
        template: __webpack_require__(/*! raw-loader!./registration-setiings.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/registration-setiings/registration-setiings.component.html"),
        styles: [__webpack_require__(/*! ./registration-setiings.component.css */ "./src/app/admin/registration-setiings/registration-setiings.component.css")]
    })
], RegistrationSetiingsComponent);



/***/ }),

/***/ "./src/app/admin/topbar/topbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/topbar/topbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* profile dialog */\n.media-body-left {\n    float: left;\n    width: 85px;\n    vertical-align: top;\n    border-radius: 50%;\n    overflow: hidden;\n    height: 85px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.media-body-left img{\n    border-radius: 50%;\n    width: 100%;\n}\n.media-body-right {\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 10px;\n}\n.modal-header button{\n    color: #888;\n}\n.profile_dialog mat-form-field{\n    width: 100%;\n}\n.profile_dialog .col-sm-12 {\n padding: 0 15px;\n}\n.profile_dialog .row{\n    margin: 0!important;\n    padding: 0!important;\n}\n.profile_dialog .col-sm-7 {\n    padding: 0 15px;\n}\n.profile_dialog .col-sm-5 {\n    padding: 0 15px;\n}\n.profile_dialog .col-sm-4 {\n    padding: 0 15px;\n}\n.media-body-right p.info {\n    font-size: 12px;\n    color: #888!important;\n    margin: 0;\n}\n.media-body-right h4 {\n    margin-top: 5px;\n    margin-bottom: 7px;\n}\n.media-body-right p{\n    margin-bottom: 7px;\n}\n.security .alert-info{\n    background: #1A83F5!important;\n    border: #1A83F5!important;\n}\n.security .alert-info p{\n    color: #fff!important;\n}\ntable{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcm9maWxlIGRpYWxvZyAqL1xuLm1lZGlhLWJvZHktbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lZGlhLWJvZHktbGVmdCBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1lZGlhLWJvZHktcmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1vZGFsLWhlYWRlciBidXR0b257XG4gICAgY29sb3I6ICM4ODg7XG59ICAgXG4ucHJvZmlsZV9kaWFsb2cgbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZV9kaWFsb2cgLmNvbC1zbS0xMiB7XG4gcGFkZGluZzogMCAxNXB4O1xufVxuLnByb2ZpbGVfZGlhbG9nIC5yb3d7XG4gICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cbi5wcm9maWxlX2RpYWxvZyAuY29sLXNtLTcge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wcm9maWxlX2RpYWxvZyAuY29sLXNtLTUge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wcm9maWxlX2RpYWxvZyAuY29sLXNtLTQge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5tZWRpYS1ib2R5LXJpZ2h0IHAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODg4IWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWVkaWEtYm9keS1yaWdodCBoNCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5tZWRpYS1ib2R5LXJpZ2h0IHB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLnNlY3VyaXR5IC5hbGVydC1pbmZve1xuICAgIGJhY2tncm91bmQ6ICMxQTgzRjUhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogIzFBODNGNSFpbXBvcnRhbnQ7XG59XG4uc2VjdXJpdHkgLmFsZXJ0LWluZm8gcHtcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/topbar/topbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/topbar/topbar.component.ts ***!
  \**************************************************/
/*! exports provided: TopbarComponent, ProfileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDialog", function() { return ProfileDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminsettings/new-avatar.service */ "./src/app/admin/adminsettings/new-avatar.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");







let TopbarComponent = class TopbarComponent {
    constructor(userService, authService, dialog) {
        this.userService = userService;
        this.authService = authService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.user = this.userService.getUser();
    }
    onProfile() {
        const fileNameDialogRef = this.dialog.open(ProfileDialog, {
            width: '600px',
        });
    }
    logout() {
        this.authService.logout();
    }
};
TopbarComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/admin/topbar/topbar.component.css")]
    })
], TopbarComponent);

// profile dialog
let ProfileDialog = class ProfileDialog {
    constructor(userService, localStorage, newAvatarService) {
        this.userService = userService;
        this.localStorage = localStorage;
        this.newAvatarService = newAvatarService;
        this.ELEMENT_DATA = [
        // {plan: '7 Day Trial', trial: '', CC: '', period: '2020-06-12', canceled: 'NO'},
        ];
        this.displayedColumns = ['plan', 'trial', 'CC', 'period', 'canceled'];
        this.dataSource = this.ELEMENT_DATA;
        this.adminImgPath = this.localStorage.get('admin_user_profile');
    }
    ngOnInit() {
        this.user = this.userService.getUser();
        this.newAvatarService.newAvatar.subscribe(newPath => {
            this.adminImgPath = this.localStorage.get('admin_user_profile');
        });
    }
    preview(files) {
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.adminImgPath = reader.result;
            this.localStorage.set("admin_user_profile", this.adminImgPath);
            this.newAvatarService.newAvatar.next(true);
        };
    }
};
ProfileDialog.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _adminsettings_new_avatar_service__WEBPACK_IMPORTED_MODULE_4__["NewAvatarService"] }
];
ProfileDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-dialog',
        template: __webpack_require__(/*! raw-loader!./profile.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/admin/topbar/profile.dialog.html"),
        styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/admin/topbar/topbar.component.css")]
    })
], ProfileDialog);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admindashboard/admindashboard.component */ "./src/app/admin/admindashboard/admindashboard.component.ts");
/* harmony import */ var _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admincontacts/admincontacts.component */ "./src/app/admin/admincontacts/admincontacts.component.ts");
/* harmony import */ var _admin_adminsales_adminsales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/adminsales/adminsales.component */ "./src/app/admin/adminsales/adminsales.component.ts");
/* harmony import */ var _admin_adminoffers_adminoffers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/adminoffers/adminoffers.component */ "./src/app/admin/adminoffers/adminoffers.component.ts");
/* harmony import */ var _admin_adminbilling_adminbilling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/adminbilling/adminbilling.component */ "./src/app/admin/adminbilling/adminbilling.component.ts");
/* harmony import */ var _onpoint_room_onpoint_room_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./onpoint-room/onpoint-room.component */ "./src/app/onpoint-room/onpoint-room.component.ts");
/* harmony import */ var _admin_admincoupons_admincoupons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admincoupons/admincoupons.component */ "./src/app/admin/admincoupons/admincoupons.component.ts");
/* harmony import */ var _admin_adminchatroom_adminchatroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/adminchatroom/adminchatroom.component */ "./src/app/admin/adminchatroom/adminchatroom.component.ts");
/* harmony import */ var _admin_adminservices_adminservices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/adminservices/adminservices.component */ "./src/app/admin/adminservices/adminservices.component.ts");
/* harmony import */ var _admin_adminapi_adminapi_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/adminapi/adminapi.component */ "./src/app/admin/adminapi/adminapi.component.ts");
/* harmony import */ var _admin_admincompliance_admincompliance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admincompliance/admincompliance.component */ "./src/app/admin/admincompliance/admincompliance.component.ts");
/* harmony import */ var _admin_adminwidget_adminwidget_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/adminwidget/adminwidget.component */ "./src/app/admin/adminwidget/adminwidget.component.ts");
/* harmony import */ var _admin_adminmarketing_adminmarketing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/adminmarketing/adminmarketing.component */ "./src/app/admin/adminmarketing/adminmarketing.component.ts");
/* harmony import */ var _admin_adminonlineativity_adminonlineativity_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/adminonlineativity/adminonlineativity.component */ "./src/app/admin/adminonlineativity/adminonlineativity.component.ts");
/* harmony import */ var _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/adminsettings/adminsettings.component */ "./src/app/admin/adminsettings/adminsettings.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _admin_registration_setiings_registration_setiings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/registration-setiings/registration-setiings.component */ "./src/app/admin/registration-setiings/registration-setiings.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.admin.guard */ "./src/app/auth.admin.guard.ts");


























const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]],
        children: [
            { path: 'dashboard', component: _admin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdmindashboardComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'contacts', component: _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_8__["AdmincontactsComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'sales', component: _admin_adminsales_adminsales_component__WEBPACK_IMPORTED_MODULE_9__["AdminsalesComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'offers', component: _admin_adminoffers_adminoffers_component__WEBPACK_IMPORTED_MODULE_10__["AdminoffersComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'billing', component: _admin_adminbilling_adminbilling_component__WEBPACK_IMPORTED_MODULE_11__["AdminbillingComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'coupons', component: _admin_admincoupons_admincoupons_component__WEBPACK_IMPORTED_MODULE_13__["AdmincouponsComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'chatrooms', component: _admin_adminchatroom_adminchatroom_component__WEBPACK_IMPORTED_MODULE_14__["AdminchatroomComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'services', component: _admin_adminservices_adminservices_component__WEBPACK_IMPORTED_MODULE_15__["AdminservicesComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'api', component: _admin_adminapi_adminapi_component__WEBPACK_IMPORTED_MODULE_16__["AdminapiComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'settings', component: _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_21__["AdminsettingsComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'registration-settings', component: _admin_registration_setiings_registration_setiings_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationSetiingsComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'compliance', component: _admin_admincompliance_admincompliance_component__WEBPACK_IMPORTED_MODULE_17__["AdmincomplianceComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'widgets', component: _admin_adminwidget_adminwidget_component__WEBPACK_IMPORTED_MODULE_18__["AdminwidgetComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'marketing', component: _admin_adminmarketing_adminmarketing_component__WEBPACK_IMPORTED_MODULE_19__["AdminmarketingComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
            { path: 'onlineactivity', component: _admin_adminonlineativity_adminonlineativity_component__WEBPACK_IMPORTED_MODULE_20__["AdminonlineativityComponent"], canActivate: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_25__["AuthAdminGuard"]] },
        ]
    },
    { path: 'onpoint-room', component: _onpoint_room_onpoint_room_component__WEBPACK_IMPORTED_MODULE_12__["OnpointRoomComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: '**', redirectTo: '/dashboard' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'andrade-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_local_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.local.config */ "./src/app/app.local.config.ts");



let AppConfig = class AppConfig {
    constructor() {
        this.config = {
            name: 'MarketMaster Academy',
            title: 'Communication App with Admin Panel & Dashboard App with Angular 8.0 support',
            version: '1.0.0',
            apiUrl: 'https://api.marketmasteracademy.com/',
            nodeServerUrl: 'https://chat.marketmasteracademy.com/',
            debug: true,
        };
    }
    getConfig() {
        return Object.assign(this.config, new _app_local_config__WEBPACK_IMPORTED_MODULE_2__["AppLocalConfig"]().getConfig());
    }
};
AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppConfig);



/***/ }),

/***/ "./src/app/app.local.config.ts":
/*!*************************************!*\
  !*** ./src/app/app.local.config.ts ***!
  \*************************************/
/*! exports provided: AppLocalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLocalConfig", function() { return AppLocalConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppLocalConfig = class AppLocalConfig {
    constructor() {
        this.config = {
            apiUrl: 'http://dev.api.ricky.24x7.cloud/api/v1/',
            nodeServerUrl: 'http://dev.api.ricky.24x7.cloud/',
            // apiUrl: 'http://localhost:3007/api/v1/',
            // nodeServerUrl: 'http://localhost:3007/',
            name: 'MarketMaster Academy',
            title: 'Communication App with Admin Panel & Dashboard App with Angular 8.0 support',
            version: '1.0.0',
            debug: true,
        };
    }
    getConfig() {
        return this.config;
    }
};
AppLocalConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppLocalConfig);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _app_local_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.local.config */ "./src/app/app.local.config.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./models/index */ "./src/app/models/index.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _rightarea_rightarea_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rightarea/rightarea.component */ "./src/app/rightarea/rightarea.component.ts");
/* harmony import */ var _chatarea_chatarea_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chatarea/chatarea.component */ "./src/app/chatarea/chatarea.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _lockedchatroom_lockedchatroom_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lockedchatroom/lockedchatroom.component */ "./src/app/lockedchatroom/lockedchatroom.component.ts");
/* harmony import */ var _directchatroom_directchatroom_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directchatroom/directchatroom.component */ "./src/app/directchatroom/directchatroom.component.ts");
/* harmony import */ var _admin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admindashboard/admindashboard.component */ "./src/app/admin/admindashboard/admindashboard.component.ts");
/* harmony import */ var _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./unlockchatroom/unlockchatroom.component */ "./src/app/unlockchatroom/unlockchatroom.component.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var _admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/admin-sidebar/admin-sidebar.component */ "./src/app/admin/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admincontacts/admincontacts.component */ "./src/app/admin/admincontacts/admincontacts.component.ts");
/* harmony import */ var _admin_adminsales_adminsales_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/adminsales/adminsales.component */ "./src/app/admin/adminsales/adminsales.component.ts");
/* harmony import */ var _admin_admincontacts_new_contact_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admincontacts/new-contact.component */ "./src/app/admin/admincontacts/new-contact.component.ts");
/* harmony import */ var _admin_adminbilling_new_billing_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/adminbilling/new-billing.component */ "./src/app/admin/adminbilling/new-billing.component.ts");
/* harmony import */ var _admin_adminoffers_new_offer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/adminoffers/new-offer.component */ "./src/app/admin/adminoffers/new-offer.component.ts");
/* harmony import */ var _admin_adminoffers_adminoffers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/adminoffers/adminoffers.component */ "./src/app/admin/adminoffers/adminoffers.component.ts");
/* harmony import */ var _profile_sidebar_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./profile-sidebar/profile-sidebar.component */ "./src/app/profile-sidebar/profile-sidebar.component.ts");
/* harmony import */ var _onpoint_room_onpoint_room_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./onpoint-room/onpoint-room.component */ "./src/app/onpoint-room/onpoint-room.component.ts");
/* harmony import */ var _sidenav_locked_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sidenav/locked-dialog.component */ "./src/app/sidenav/locked-dialog.component.ts");
/* harmony import */ var _admin_adminbilling_adminbilling_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/adminbilling/adminbilling.component */ "./src/app/admin/adminbilling/adminbilling.component.ts");
/* harmony import */ var _admin_admincoupons_admincoupons_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/admincoupons/admincoupons.component */ "./src/app/admin/admincoupons/admincoupons.component.ts");
/* harmony import */ var _admin_admincoupons_new_coupons_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/admincoupons/new-coupons.component */ "./src/app/admin/admincoupons/new-coupons.component.ts");
/* harmony import */ var _admin_adminchatroom_adminchatroom_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/adminchatroom/adminchatroom.component */ "./src/app/admin/adminchatroom/adminchatroom.component.ts");
/* harmony import */ var _admin_adminchatroom_new_cahtroom_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/adminchatroom/new-cahtroom.component */ "./src/app/admin/adminchatroom/new-cahtroom.component.ts");
/* harmony import */ var _admin_adminchatroom_deletechatroom_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/adminchatroom/deletechatroom.component */ "./src/app/admin/adminchatroom/deletechatroom.component.ts");
/* harmony import */ var _admin_adminservices_adminservices_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/adminservices/adminservices.component */ "./src/app/admin/adminservices/adminservices.component.ts");
/* harmony import */ var _admin_adminservices_new_services_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/adminservices/new-services.component */ "./src/app/admin/adminservices/new-services.component.ts");
/* harmony import */ var _admin_adminapi_adminapi_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/adminapi/adminapi.component */ "./src/app/admin/adminapi/adminapi.component.ts");
/* harmony import */ var _admin_admincompliance_admincompliance_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/admincompliance/admincompliance.component */ "./src/app/admin/admincompliance/admincompliance.component.ts");
/* harmony import */ var _admin_adminwidget_adminwidget_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/adminwidget/adminwidget.component */ "./src/app/admin/adminwidget/adminwidget.component.ts");
/* harmony import */ var _admin_adminwidget_customwidget_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./admin/adminwidget/customwidget-dialog.component */ "./src/app/admin/adminwidget/customwidget-dialog.component.ts");
/* harmony import */ var _admin_adminwidget_configure_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/adminwidget/configure-dialog.component */ "./src/app/admin/adminwidget/configure-dialog.component.ts");
/* harmony import */ var _admin_adminonlineativity_adminonlineativity_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin/adminonlineativity/adminonlineativity.component */ "./src/app/admin/adminonlineativity/adminonlineativity.component.ts");
/* harmony import */ var _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/adminsettings/adminsettings.component */ "./src/app/admin/adminsettings/adminsettings.component.ts");
/* harmony import */ var _admin_adminsettings_custom_script_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./admin/adminsettings/custom-script.component */ "./src/app/admin/adminsettings/custom-script.component.ts");
/* harmony import */ var _admin_admincontacts_invite_contact_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./admin/admincontacts/invite-contact.component */ "./src/app/admin/admincontacts/invite-contact.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var _admin_adminmarketing_adminmarketing_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./admin/adminmarketing/adminmarketing.component */ "./src/app/admin/adminmarketing/adminmarketing.component.ts");
/* harmony import */ var _admin_registration_setiings_registration_setiings_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./admin/registration-setiings/registration-setiings.component */ "./src/app/admin/registration-setiings/registration-setiings.component.ts");
/* harmony import */ var _admin_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./admin/topbar/topbar.component */ "./src/app/admin/topbar/topbar.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./auth.admin.guard */ "./src/app/auth.admin.guard.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _admin_admindashboard_substring_pipe__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./admin/admindashboard/substring.pipe */ "./src/app/admin/admindashboard/substring.pipe.ts");




































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgotpasswordComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_20__["ErrorComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["SidenavComponent"],
            _rightarea_rightarea_component__WEBPACK_IMPORTED_MODULE_23__["RightareaComponent"],
            _chatarea_chatarea_component__WEBPACK_IMPORTED_MODULE_24__["ChatareaComponent"],
            _lockedchatroom_lockedchatroom_component__WEBPACK_IMPORTED_MODULE_26__["LockedchatroomComponent"],
            _directchatroom_directchatroom_component__WEBPACK_IMPORTED_MODULE_27__["DirectchatroomComponent"],
            _admin_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_28__["AdmindashboardComponent"],
            _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__["UnlockchatroomComponent"],
            _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_30__["UserPanelComponent"],
            _admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["AdminSidebarComponent"],
            _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__["AdmincontactsComponent"],
            _admin_adminsales_adminsales_component__WEBPACK_IMPORTED_MODULE_33__["AdminsalesComponent"],
            _admin_adminoffers_new_offer_component__WEBPACK_IMPORTED_MODULE_36__["NewOfferComponent"],
            _admin_adminoffers_adminoffers_component__WEBPACK_IMPORTED_MODULE_37__["AdminoffersComponent"],
            _profile_sidebar_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_38__["ProfileSidebarComponent"],
            _onpoint_room_onpoint_room_component__WEBPACK_IMPORTED_MODULE_39__["OnpointRoomComponent"],
            _sidenav_locked_dialog_component__WEBPACK_IMPORTED_MODULE_40__["lockeddialogComponent"],
            _admin_adminbilling_adminbilling_component__WEBPACK_IMPORTED_MODULE_41__["AdminbillingComponent"],
            _admin_adminbilling_new_billing_component__WEBPACK_IMPORTED_MODULE_35__["NewBillingComponent"],
            _admin_admincoupons_admincoupons_component__WEBPACK_IMPORTED_MODULE_42__["AdmincouponsComponent"],
            _admin_admincoupons_new_coupons_component__WEBPACK_IMPORTED_MODULE_43__["NewCouponsComponent"],
            _admin_adminchatroom_adminchatroom_component__WEBPACK_IMPORTED_MODULE_44__["AdminchatroomComponent"],
            _admin_adminchatroom_new_cahtroom_component__WEBPACK_IMPORTED_MODULE_45__["NewChatroomComponent"],
            _admin_adminservices_adminservices_component__WEBPACK_IMPORTED_MODULE_47__["AdminservicesComponent"],
            _admin_adminservices_new_services_component__WEBPACK_IMPORTED_MODULE_48__["NewServicesComponent"],
            _admin_adminapi_adminapi_component__WEBPACK_IMPORTED_MODULE_49__["AdminapiComponent"],
            _admin_admincompliance_admincompliance_component__WEBPACK_IMPORTED_MODULE_50__["AdmincomplianceComponent"],
            _admin_adminwidget_adminwidget_component__WEBPACK_IMPORTED_MODULE_51__["AdminwidgetComponent"],
            _admin_adminwidget_customwidget_dialog_component__WEBPACK_IMPORTED_MODULE_52__["CustomwidgetComponent"],
            _admin_adminwidget_configure_dialog_component__WEBPACK_IMPORTED_MODULE_53__["ConfiguredialogComponent"],
            _admin_adminonlineativity_adminonlineativity_component__WEBPACK_IMPORTED_MODULE_54__["AdminonlineativityComponent"],
            _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_55__["AdminsettingsComponent"],
            _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_55__["NewTeamAvatarDialog"],
            _admin_adminsettings_custom_script_component__WEBPACK_IMPORTED_MODULE_56__["CustomScriptComponent"],
            _admin_adminchatroom_deletechatroom_component__WEBPACK_IMPORTED_MODULE_46__["DeleteChatroomComponent"],
            _admin_admincontacts_new_contact_component__WEBPACK_IMPORTED_MODULE_34__["NewContactComponent"],
            _admin_admincontacts_invite_contact_component__WEBPACK_IMPORTED_MODULE_57__["InviteContactComponent"],
            _admin_adminmarketing_adminmarketing_component__WEBPACK_IMPORTED_MODULE_59__["AdminmarketingComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["ChartsDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["MarketHoursDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["FXHeatmapDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["Coin360Dialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["LiveTVDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["FXCrossRatesDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OtherChartDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["ZoomDialog"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["ManageBrockersDialog"],
            _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__["MediaUploadDialog"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DataFlashDialog"],
            _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__["NewSignalDialog"],
            _admin_registration_setiings_registration_setiings_component__WEBPACK_IMPORTED_MODULE_60__["RegistrationSetiingsComponent"],
            _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["InviteFriendDialog"],
            _admin_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_61__["ProfileDialog"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_62__["AdminComponent"],
            _admin_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_61__["TopbarComponent"],
            _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__["EditContactComponent"],
            _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__["DeleteContactComponent"],
            _admin_admindashboard_substring_pipe__WEBPACK_IMPORTED_MODULE_65__["SubstringPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            angular_web_storage__WEBPACK_IMPORTED_MODULE_15__["AngularWebStorageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_58__["MatTableExporterModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_64__["CdkTableModule"]
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"],
            _app_config__WEBPACK_IMPORTED_MODULE_18__["AppConfig"],
            _app_local_config__WEBPACK_IMPORTED_MODULE_19__["AppLocalConfig"],
            _models_index__WEBPACK_IMPORTED_MODULE_21__["User"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
            _auth_admin_guard__WEBPACK_IMPORTED_MODULE_63__["AuthAdminGuard"]
        ],
        entryComponents: [_admin_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_61__["ProfileDialog"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["InviteFriendDialog"], _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__["DeleteContactComponent"], _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__["NewSignalDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DataFlashDialog"], _unlockchatroom_unlockchatroom_component__WEBPACK_IMPORTED_MODULE_29__["MediaUploadDialog"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["ManageBrockersDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["ZoomDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OtherChartDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["FXCrossRatesDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["LiveTVDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["Coin360Dialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["FXHeatmapDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["MarketHoursDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["ChartsDialog"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesDialog"], _admin_admincontacts_invite_contact_component__WEBPACK_IMPORTED_MODULE_57__["InviteContactComponent"], _admin_admincontacts_admincontacts_component__WEBPACK_IMPORTED_MODULE_32__["EditContactComponent"], _admin_admincontacts_new_contact_component__WEBPACK_IMPORTED_MODULE_34__["NewContactComponent"], _admin_adminoffers_new_offer_component__WEBPACK_IMPORTED_MODULE_36__["NewOfferComponent"],
            _sidenav_locked_dialog_component__WEBPACK_IMPORTED_MODULE_40__["lockeddialogComponent"], _admin_adminbilling_new_billing_component__WEBPACK_IMPORTED_MODULE_35__["NewBillingComponent"], _admin_adminwidget_customwidget_dialog_component__WEBPACK_IMPORTED_MODULE_52__["CustomwidgetComponent"], _admin_admincoupons_new_coupons_component__WEBPACK_IMPORTED_MODULE_43__["NewCouponsComponent"],
            _admin_adminchatroom_new_cahtroom_component__WEBPACK_IMPORTED_MODULE_45__["NewChatroomComponent"], _admin_adminservices_new_services_component__WEBPACK_IMPORTED_MODULE_48__["NewServicesComponent"], _admin_adminwidget_configure_dialog_component__WEBPACK_IMPORTED_MODULE_53__["ConfiguredialogComponent"], _admin_adminsettings_adminsettings_component__WEBPACK_IMPORTED_MODULE_55__["NewTeamAvatarDialog"],
            _admin_adminsettings_custom_script_component__WEBPACK_IMPORTED_MODULE_56__["CustomScriptComponent"], _admin_adminchatroom_deletechatroom_component__WEBPACK_IMPORTED_MODULE_46__["DeleteChatroomComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth.admin.guard.ts ***!
  \*************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let AuthAdminGuard = class AuthAdminGuard {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    canActivate(next, state) {
        if (!this.auth.isAdmin) {
            this.route.navigate(["/dashboard"]);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthAdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthAdminGuard);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    canActivate(next, state) {
        if (!this.auth.isLoggedIn) {
            this.route.navigate(["/login"]);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/chatarea/chatarea.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatarea/chatarea.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRhcmVhL2NoYXRhcmVhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chatarea/chatarea.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatarea/chatarea.component.ts ***!
  \************************************************/
/*! exports provided: ChatareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatareaComponent", function() { return ChatareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let ChatareaComponent = class ChatareaComponent {
    constructor(ws, sanitizer) {
        this.ws = ws;
        this.sanitizer = sanitizer;
        this.widgets = [];
        this.iframeSrc = [];
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };
        this.widgets = this.ws.getWidgets();
        this.widgets.forEach(wid => {
            this.iframeSrc.push(sanitizer.bypassSecurityTrustResourceUrl(wid.link));
        });
    }
    ngOnInit() {
    }
};
ChatareaComponent.ctorParameters = () => [
    { type: _services_widget_service__WEBPACK_IMPORTED_MODULE_2__["WidgetService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
ChatareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatarea',
        template: __webpack_require__(/*! raw-loader!./chatarea.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatarea/chatarea.component.html"),
        styles: [__webpack_require__(/*! ./chatarea.component.css */ "./src/app/chatarea/chatarea.component.css")]
    })
], ChatareaComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* top bar */\n.nav-trial-container{\n  line-height: 30px;\n}\n.nav-trial-container a{\n  display: block;\n  font-size: 10px;\n  line-height: 12px;\n  font-weight: 700;\n  color: #e26727;\n  position: relative;\n  top: -5px;\n  cursor: pointer;\n  width: 70px;\n  white-space: normal;\n  text-decoration: none;\n}\n.button_wrap{\n  float: right;\n  color: #e26727;\n  width: 74px;\n  height: 74px;\n  text-align: center;\n  position: relative;\n  margin: 0 5px;\n  background-color: antiquewhite;\n}\n.rectangular-btn{\n  padding: 0 0px;\n  width: 80px;\n  background: rgba(226, 103, 39, 0.8)!important;\n  color: #fff;\n  border-radius: 0;\n  margin: 0;\n  border-left: 1px solid #eee;\n}\n.rectangular-btn::after{\n  display: none;\n}\n.rectangular-btn a{\n  color: #fff;\n}\n.dashboard-btn{\n  background: #e26727!important;\n}\n.hamburgerHeader {\n  color: #e26727;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdG9wIGJhciAqL1xuLm5hdi10cmlhbC1jb250YWluZXJ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLm5hdi10cmlhbC1jb250YWluZXIgYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZTI2NzI3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ1dHRvbl93cmFwe1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZTI2NzI3O1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuLnJlY3Rhbmd1bGFyLWJ0bntcbiAgcGFkZGluZzogMCAwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNiwgMTAzLCAzOSwgMC44KSFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbn1cbi5yZWN0YW5ndWxhci1idG46OmFmdGVye1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlY3Rhbmd1bGFyLWJ0biBhe1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kYXNoYm9hcmQtYnRue1xuICBiYWNrZ3JvdW5kOiAjZTI2NzI3IWltcG9ydGFudDtcbn1cbi5oYW1idXJnZXJIZWFkZXIge1xuICBjb2xvcjogI2UyNjcyNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, ChartsDialog, MarketHoursDialog, FXHeatmapDialog, Coin360Dialog, LiveTVDialog, FXCrossRatesDialog, OtherChartDialog, ZoomDialog, DataFlashDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDialog", function() { return ChartsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketHoursDialog", function() { return MarketHoursDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FXHeatmapDialog", function() { return FXHeatmapDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coin360Dialog", function() { return Coin360Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTVDialog", function() { return LiveTVDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FXCrossRatesDialog", function() { return FXCrossRatesDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherChartDialog", function() { return OtherChartDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDialog", function() { return ZoomDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFlashDialog", function() { return DataFlashDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _admin_adminwidget_adminwidget_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin/adminwidget/adminwidget.service */ "./src/app/admin/adminwidget/adminwidget.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let DashboardComponent = class DashboardComponent {
    constructor(document, router, auth, socketService, user, userService, dialog, adminWidgetService, localStorage) {
        this.document = document;
        this.router = router;
        this.auth = auth;
        this.socketService = socketService;
        this.user = user;
        this.dialog = dialog;
        this.adminWidgetService = adminWidgetService;
        this.localStorage = localStorage;
        this.darkTheme = false;
        this.isAdmin = false;
        this.chartsDisable = this.localStorage.get('widget');
        this.userService = userService;
        this.socketService.initSocket();
        this.isAdmin = this.auth.isAdmin;
        this.document.body.classList.remove('black-theme');
        //for mat-drawer responsive
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };
    }
    ngOnInit() { }
    onRedirectAdmin() {
        this.router.navigate(['admin/dashboard']);
        this.document.body.classList.remove('dark-theme');
    }
    openChartsDialog() {
        const dialog = this.dialog.open(ChartsDialog);
    }
    openMarketHoursDialog() {
        const dialog = this.dialog.open(MarketHoursDialog);
    }
    openFXHeatmapDialog() {
        const dialog = this.dialog.open(FXHeatmapDialog);
    }
    openCoin360Dialog() {
        const dialog = this.dialog.open(Coin360Dialog);
    }
    openLiveTVDialog() {
        const dialog = this.dialog.open(LiveTVDialog);
    }
    openFXCrossRatesDialog() {
        const dialog = this.dialog.open(FXCrossRatesDialog);
    }
    openOtherChartDialog() {
        const dialog = this.dialog.open(OtherChartDialog);
    }
    openZoomDialog() {
        const dialog = this.dialog.open(ZoomDialog);
    }
    openDataFlashDialog() {
        const dialog = this.dialog.open(DataFlashDialog);
    }
    setRoomTitle(roomTitle) {
        this.roomTitle = roomTitle;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _models__WEBPACK_IMPORTED_MODULE_5__["User"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _admin_adminwidget_adminwidget_service__WEBPACK_IMPORTED_MODULE_7__["AdminWidgetService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]))
], DashboardComponent);

// charts Dialog
let ChartsDialog = class ChartsDialog {
};
ChartsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'charts-dialog',
        template: __webpack_require__(/*! raw-loader!./charts-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/charts-dialog.html"),
    })
], ChartsDialog);

// Market Hours Dialog
let MarketHoursDialog = class MarketHoursDialog {
};
MarketHoursDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'market-hours-dialog',
        template: __webpack_require__(/*! raw-loader!./market-hours-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/market-hours-dialog.html"),
    })
], MarketHoursDialog);

// FX Heatmap Dialog
let FXHeatmapDialog = class FXHeatmapDialog {
};
FXHeatmapDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fx-heatmap-dialog',
        template: __webpack_require__(/*! raw-loader!./fx-heatmap-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fx-heatmap-dialog.html"),
    })
], FXHeatmapDialog);

// COIN360 Dialog
let Coin360Dialog = class Coin360Dialog {
};
Coin360Dialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'coin-360-dialog',
        template: __webpack_require__(/*! raw-loader!./coin-360-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/coin-360-dialog.html"),
    })
], Coin360Dialog);

// LIVE TV Dialog
let LiveTVDialog = class LiveTVDialog {
};
LiveTVDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'live-tv-dialog',
        template: __webpack_require__(/*! raw-loader!./live-tv-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/live-tv-dialog.html"),
    })
], LiveTVDialog);

// FX Cross Rates Dialog 
let FXCrossRatesDialog = class FXCrossRatesDialog {
};
FXCrossRatesDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fx-cross-rates-dialog',
        template: __webpack_require__(/*! raw-loader!./fx-cross-rates-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/fx-cross-rates-dialog.html"),
    })
], FXCrossRatesDialog);

// Other Chart Dialog
let OtherChartDialog = class OtherChartDialog {
};
OtherChartDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'other-chart-dialog',
        template: __webpack_require__(/*! raw-loader!./other-chart-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/other-chart-dialog.html"),
    })
], OtherChartDialog);

// zoom Dialog
let ZoomDialog = class ZoomDialog {
};
ZoomDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'zoom-dialog',
        template: __webpack_require__(/*! raw-loader!./zoom-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/zoom-dialog.html"),
    })
], ZoomDialog);

// data flash Dialog
let DataFlashDialog = class DataFlashDialog {
};
DataFlashDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'data-flash-dialog',
        template: __webpack_require__(/*! raw-loader!./data-flash-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/data-flash-dialog.html"),
    })
], DataFlashDialog);



/***/ }),

/***/ "./src/app/directchatroom/directchatroom.component.css":
/*!*************************************************************!*\
  !*** ./src/app/directchatroom/directchatroom.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0Y2hhdHJvb20vZGlyZWN0Y2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGNoYXRyb29tL2RpcmVjdGNoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtY29tbWVudHMtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlNlwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/directchatroom/directchatroom.component.ts":
/*!************************************************************!*\
  !*** ./src/app/directchatroom/directchatroom.component.ts ***!
  \************************************************************/
/*! exports provided: DirectchatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectchatroomComponent", function() { return DirectchatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DirectchatroomComponent = class DirectchatroomComponent {
    constructor() { }
    ngOnInit() {
    }
};
DirectchatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-directchatroom',
        template: __webpack_require__(/*! raw-loader!./directchatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/directchatroom/directchatroom.component.html"),
        styles: [__webpack_require__(/*! ./directchatroom.component.css */ "./src/app/directchatroom/directchatroom.component.css")]
    })
], DirectchatroomComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    searchResult() {
        this.router.navigate(['/app', 'dashboard']);
    }
};
ErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            class: 'error-page app'
        },
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\n  height: 100vh;\n  width: 100%;\n  background-image: url('/assets/pre-login-background-brown-and-blue-circles.jpg');\n  background-size: cover;\n}\n\n.sidenav-container{\n  background-color: rgba(66, 28, 0, 0.3);\n}\n\n.app-logo{\n  display: block;\n  margin: auto;\n  height: auto;\n}\n\n.input-field{\n  position: relative;\n  padding: 2px;\n  margin: 15px 0;\n  vertical-align: middle;\n  min-height: 35px;\n  float: left;\n  width: 100%;\n}\n\n.mat-drawer-content {\n  margin: 0!important;\n}\n\n.sidenav-container{\n  color: #fff;\n  height: 100vh;\n}\n\n.login-form{\n  text-align: center;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.signup-forget {\n  margin: 5px 0 5px 0;\n  float: left;\n  width: 100%;\n}\n\n.signup-forget p:nth-child(1){\nfloat: left;\n}\n\n.signup-forget p:nth-child(2){\nfloat: right;\n}\n\nh1{\n  margin-bottom: 10px;\n  font-weight: 400;\n}\n\nh1 + p{\n  margin-bottom: 20px;\n  margin-top: 0;\n  font-size: .9em;\n}\n\nP{\n  font-size: .9em;\n}\n\ninput:focus ~ .floating-label,\ninput:not(:focus):valid ~ .floating-label{\ntop: -2px;\nbottom: 10px;\nleft: 0px;\nfont-size: 13px;\nopacity: 0.5;\n}\n\n.inputText{\nfont-size: 14px;\nwidth: 100%;\nheight: 35px;\n}\n\n.floating-label {\nposition: absolute;\npointer-events: none;\nleft: 0px;\ncolor: #fff;\n-webkit-transition: 500ms ease-in-out;\ntransition: 500ms ease-in-out;\ntop: 12px;\nopacity: 0.7;\n}\n\n.input-group{\nposition: relative;\nfloat: left;\npadding-bottom: 0;\nheight: 30px;\nwidth: 100%;\n}\n\ninput:focus{\n  box-shadow: none;\n  outline: none;\n}\n\n::-webkit-input-placeholder {\n  color: rgb(153, 153, 153);\n}\n\n::-moz-placeholder {\n  color: rgb(153, 153, 153);\n}\n\n::-ms-input-placeholder {\n  color: rgb(153, 153, 153);\n}\n\n::placeholder {\n  color: rgb(153, 153, 153);\n}\n\na {\ntext-decoration: none!important;\n}\n\n:-ms-input-placeholder {\ncolor: rgb(153, 153, 153);\n}\n\n::-ms-input-placeholder {\ncolor: rgb(153, 153, 153);\n}\n\ninput:focus{\nborder-bottom: 2px solid  rgb(225, 102, 38);\n}\n\ninput{\n  -webkit-box-ordinal-group: 3;\n  order: 2;\n  display: block;\n  margin-top: 0;\n  background: none;\n  padding: 2px 2px 1px;\n  border-width: 0 0 1px;\n  -webkit-transition: 500ms ease-in-out;\n  transition: 500ms ease-in-out;\n  line-height: 26px;\n  height: 30px;\n  -ms-flex-preferred-size: 26px;\n  border-radius: 0;\n  font-size: 20px;\n  border-style: solid;\n  width: 100%;\n  color: #fff;\n  box-sizing: border-box;\n  float: left;\n  border-bottom: 1px solid rgb(160, 81, 38);\n}\n\nbutton{\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  color: rgba(255,255,255,0.87);\n  background-color: #1A83F5;\n  padding-top: 5px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  min-height: 46px;\n  min-width: 88px;\n  line-height: 36px;\n  vertical-align: middle;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 0;\n  padding: 0 6px;\n  margin: 20px 0 6px 0;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-family: inherit;\n  text-decoration: none;\n  overflow: hidden;\n  -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n  transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n  width: 100%;\n}\n\n.img-cont::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n\n.sidebar-footer {\n  text-align: center;\n}\n\n.img-cont{\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.img-cont .final-img{\n  display: inline-block;\n  margin: 0 auto;\n  max-width: 520px;\n  z-index: 9;\n  padding: 0 10px;\n}\n\n.img-cont .final-img img{\n  width: 100%;\n}\n\n#wrapper {\n  height:100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n#wrapper td {\n  vertical-align: middle;\n  text-align: center;\n}\n\nmat-sidenav {\n  padding: 0px;\n  -webkit-transform: none;\n          transform: none;\n  visibility: visible;\n  width: auto!important;\n  max-width: 470px;\n  margin: 0 auto;\n  position: static;\n  height: auto;\n  vertical-align: middle;\n  border: none!important;\n  margin-top: 0px; color:#fff;\n  position: relative;\n  overflow:visible;\n  padding-top: 140px;\n  background: transparent;\n  box-shadow: none!important;\n}\n\n.main-logo{\n  max-width: 400px;\n  width: auto;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n}\n\n.footer-logo{\n  display: -webkit-box;\n  display: flex;\n}\n\n.store-logos{\n  display: -webkit-box;\n  display: flex;\n}\n\n.footer-reserved {\n  font-size: .7em;\n  margin: 15px 0 15px;\n  line-height: 1.5em;\n  text-align: center;\n}\n\n.top-div {\nheight: 190px;\nwidth: 100%;\n}\n\n.mat-drawer-inner-container {\n-webkit-box-orient: vertical;\n-webkit-box-direction: normal;\n        flex-direction: column;\ndisplay: -webkit-box;\ndisplay: flex;\n}\n\n.foot-logo {\nz-index: 1;\nwidth: 120px;\nposition: absolute;\nbottom: 10px;\ncolor: #FFF;\ntext-shadow: 1px 1px 0 #000;\nleft: 15px;\n}\n\na:-webkit-any-link {\ncolor: -webkit-link;\ncursor: pointer;\ntext-decoration: underline;\n}\n\n.foot-logo img {\nwidth: 100%;\n}\n\n@media screen and (max-width:767px){\n.main-logo{\n  position: absolute;\n  max-width: 320px!important;\n  left: 0;\n  right: 0;\n  top: -170px;\n}\nmat-sidenav{\n  padding-top: 0;\n  height: 100vh;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n  background-image: linear-gradient(to top, #e26727 , #0e2226);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%!important;\n  max-width: 100%;\n}\n}\n\n/* Absolute Center Spinner */\n\n.loading-indicator {\nposition: fixed;\nz-index: 999;\nheight: 2em;\noverflow: show;\nmargin: auto;\ntop: 0;\nleft: 0;\nbottom: 0;\nright: 0;\n}\n\n/* Transparent Overlay */\n\n.loading-indicator:before {\ncontent: '';\ndisplay: block;\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground-color: rgba(0,0,0,0.3);\n}\n\n.circle{\nheight: 270px;\n  width: 270px;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n  background-image: linear-gradient(to top, #e26727 , #0e2226);\n  border-radius: 50%;\n  margin: -130px auto 0 auto;\n  display: inline-block;\n  color: #fff;\n  position: relative;\n}\n\n.circle h1{\n  position: absolute;\n  vertical-align: bottom;\n  bottom: 80px;\n  left: 14px;\n  font-size: 23px;\n}\n\n.circle p{\nposition: absolute;\nvertical-align: bottom;\nbottom: 5px;\nleft: 0;\nmax-width: 260px;\ncolor: #fff;\ntext-align: center;\npadding: 0 25px;\n}\n\n.circle p span{\ncolor: #fff!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0ZBQWdGO0VBQ2hGLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQU87VUFBUCxPQUFPO0VBQ1Asb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEsU0FBUztBQUNULFlBQVk7QUFDWixTQUFTO0FBQ1QsZUFBZTtBQUNmLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1gsWUFBWTtBQUNaOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1QsV0FBVztBQUNYLHFDQUE2QjtBQUE3Qiw2QkFBNkI7QUFDN0IsU0FBUztBQUNULFlBQVk7QUFDWjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixXQUFXO0FBQ1g7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUZBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUZBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUZBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUNBO0VBQ0UsNEJBQTRCO0VBRTVCLFFBQVE7RUFDUixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFDQTtFQUNFLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw2R0FBNkc7RUFDN0cscUdBQXFHO0VBQ3JHLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQWU7VUFBZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUUsVUFBVTtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYOztBQUVBO0FBQ0EsNEJBQXNCO0FBQXRCLDZCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsb0JBQWE7QUFBYixhQUFhO0FBQ2I7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osV0FBVztBQUNYLDJCQUEyQjtBQUMzQixVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjs7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFDQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4RkFBNEQ7RUFBNUQsNERBQTREO0VBQzVELG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTs7QUFDQSw0QkFBNEI7O0FBQzVCO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWixXQUFXO0FBQ1gsY0FBYztBQUNkLFlBQVk7QUFDWixNQUFNO0FBQ04sT0FBTztBQUNQLFNBQVM7QUFDVCxRQUFRO0FBQ1I7O0FBRUEsd0JBQXdCOztBQUN4QjtBQUNBLFdBQVc7QUFDWCxjQUFjO0FBQ2QsZUFBZTtBQUNmLE1BQU07QUFDTixPQUFPO0FBQ1AsV0FBVztBQUNYLFlBQVk7QUFDWixpQ0FBaUM7QUFDakM7O0FBQ0E7QUFDQSxhQUFhO0VBQ1gsWUFBWTtFQUNaLDhGQUE0RDtFQUE1RCw0REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1gsT0FBTztBQUNQLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjs7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3ByZS1sb2dpbi1iYWNrZ3JvdW5kLWJyb3duLWFuZC1ibHVlLWNpcmNsZXMuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgMjgsIDAsIDAuMyk7XG59XG5cbi5hcHAtbG9nb3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmlucHV0LWZpZWxke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBtYXJnaW46IDAhaW1wb3J0YW50O1xufVxuLnNpZGVuYXYtY29udGFpbmVye1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sb2dpbi1mb3Jte1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lnbnVwLWZvcmdldCB7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWdudXAtZm9yZ2V0IHA6bnRoLWNoaWxkKDEpe1xuZmxvYXQ6IGxlZnQ7XG59XG4uc2lnbnVwLWZvcmdldCBwOm50aC1jaGlsZCgyKXtcbmZsb2F0OiByaWdodDtcbn1cbmgxe1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaDEgKyBwe1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IC45ZW07XG59XG5Qe1xuICBmb250LXNpemU6IC45ZW07XG59XG5cbmlucHV0OmZvY3VzIH4gLmZsb2F0aW5nLWxhYmVsLFxuaW5wdXQ6bm90KDpmb2N1cyk6dmFsaWQgfiAuZmxvYXRpbmctbGFiZWx7XG50b3A6IC0ycHg7XG5ib3R0b206IDEwcHg7XG5sZWZ0OiAwcHg7XG5mb250LXNpemU6IDEzcHg7XG5vcGFjaXR5OiAwLjU7XG59XG5cbi5pbnB1dFRleHR7XG5mb250LXNpemU6IDE0cHg7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMzVweDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnBvaW50ZXItZXZlbnRzOiBub25lO1xubGVmdDogMHB4O1xuY29sb3I6ICNmZmY7XG50cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcbnRvcDogMTJweDtcbm9wYWNpdHk6IDAuNztcbn1cbi5pbnB1dC1ncm91cHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmZsb2F0OiBsZWZ0O1xucGFkZGluZy1ib3R0b206IDA7XG5oZWlnaHQ6IDMwcHg7XG53aWR0aDogMTAwJTtcbn1cblxuXG5pbnB1dDpmb2N1c3tcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufVxuYSB7XG50ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbmNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbmNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XG59XG5pbnB1dDpmb2N1c3tcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgcmdiKDIyNSwgMTAyLCAzOCk7XG59XG5pbnB1dHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcbiAgLXdlYmtpdC1vcmRlcjogMjtcbiAgb3JkZXI6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAycHggMnB4IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjAsIDgxLCAzOCk7XG59XG5idXR0b257XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjI2KTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTgzRjU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gIG1pbi13aWR0aDogODhweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWdyaWQtcm93LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBtYXJnaW46IDIwcHggMCA2cHggMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksYmFja2dyb3VuZC1jb2xvciAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGJhY2tncm91bmQtY29sb3IgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbWctY29udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAuNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uc2lkZWJhci1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW1nLWNvbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1nLWNvbnQgLmZpbmFsLWltZ3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmltZy1jb250IC5maW5hbC1pbWcgaW1ne1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3dyYXBwZXIge1xuICBoZWlnaHQ6MTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuI3dyYXBwZXIgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgcGFkZGluZzogMHB4O1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4OyBjb2xvcjojZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OnZpc2libGU7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xufVxuLm1haW4tbG9nb3tcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5mb290ZXItbG9nb3tcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zdG9yZS1sb2dvc3tcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb290ZXItcmVzZXJ2ZWQge1xuICBmb250LXNpemU6IC43ZW07XG4gIG1hcmdpbjogMTVweCAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9wLWRpdiB7XG5oZWlnaHQ6IDE5MHB4O1xud2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuZGlzcGxheTogZmxleDtcbn1cbi5mb290LWxvZ28ge1xuei1pbmRleDogMTtcbndpZHRoOiAxMjBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmJvdHRvbTogMTBweDtcbmNvbG9yOiAjRkZGO1xudGV4dC1zaGFkb3c6IDFweCAxcHggMCAjMDAwO1xubGVmdDogMTVweDtcbn1cbmE6LXdlYmtpdC1hbnktbGluayB7XG5jb2xvcjogLXdlYmtpdC1saW5rO1xuY3Vyc29yOiBwb2ludGVyO1xudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZm9vdC1sb2dvIGltZyB7XG53aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuLm1haW4tbG9nb3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDMyMHB4IWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTE3MHB4O1xufVxubWF0LXNpZGVuYXZ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTI2NzI3ICwgIzBlMjIyNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxufVxuLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cbi5sb2FkaW5nLWluZGljYXRvciB7XG5wb3NpdGlvbjogZml4ZWQ7XG56LWluZGV4OiA5OTk7XG5oZWlnaHQ6IDJlbTtcbm92ZXJmbG93OiBzaG93O1xubWFyZ2luOiBhdXRvO1xudG9wOiAwO1xubGVmdDogMDtcbmJvdHRvbTogMDtcbnJpZ2h0OiAwO1xufVxuXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXG4ubG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcbmNvbnRlbnQ6ICcnO1xuZGlzcGxheTogYmxvY2s7XG5wb3NpdGlvbjogZml4ZWQ7XG50b3A6IDA7XG5sZWZ0OiAwO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG59XG4uY2lyY2xle1xuaGVpZ2h0OiAyNzBweDtcbiAgd2lkdGg6IDI3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTI2NzI3ICwgIzBlMjIyNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAtMTMwcHggYXV0byAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaXJjbGUgaDF7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm90dG9tOiA4MHB4O1xuICBsZWZ0OiAxNHB4O1xuICBmb250LXNpemU6IDIzcHg7XG59XG4uY2lyY2xlIHB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG52ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuYm90dG9tOiA1cHg7XG5sZWZ0OiAwO1xubWF4LXdpZHRoOiAyNjBweDtcbmNvbG9yOiAjZmZmO1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogMCAyNXB4O1xufVxuLmNpcmNsZSBwIHNwYW57XG5jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
    })
], ForgotpasswordComponent);



/***/ }),

/***/ "./src/app/lockedchatroom/lockedchatroom.component.css":
/*!*************************************************************!*\
  !*** ./src/app/lockedchatroom/lockedchatroom.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  background-color: #00a2c8!important;\n  border-color: #019dc0!important;\n  color: #fff!important;\n}\n.empty-messages img.small {\n  height: 230px;\n  max-width: 100%;\n}\n.page-data > img {\n  margin: 0;\n}\n.empty-messages {\n  width: 100%;\n  text-align: center;\n  padding: 90px 0 0;\n  font-size: 2em;\n  color: #bbb;\n}\n@media(max-width:768px){\n  .empty-messages img {\n    max-width: 90%;\n    height: unset!important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ja2VkY2hhdHJvb20vbG9ja2VkY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvY2tlZGNoYXRyb29tL2xvY2tlZGNoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMmM4IWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDE5ZGMwIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xufVxuLmVtcHR5LW1lc3NhZ2VzIGltZy5zbWFsbCB7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5wYWdlLWRhdGEgPiBpbWcge1xuICBtYXJnaW46IDA7XG59XG4uZW1wdHktbWVzc2FnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA5MHB4IDAgMDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjYmJiO1xufVxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XG4gIC5lbXB0eS1tZXNzYWdlcyBpbWcge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGhlaWdodDogdW5zZXQhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/lockedchatroom/lockedchatroom.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lockedchatroom/lockedchatroom.component.ts ***!
  \************************************************************/
/*! exports provided: LockedchatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedchatroomComponent", function() { return LockedchatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LockedchatroomComponent = class LockedchatroomComponent {
    constructor() { }
    ngOnInit() {
    }
};
LockedchatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lockedchatroom',
        template: __webpack_require__(/*! raw-loader!./lockedchatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/lockedchatroom/lockedchatroom.component.html"),
        styles: [__webpack_require__(/*! ./lockedchatroom.component.css */ "./src/app/lockedchatroom/lockedchatroom.component.css")]
    })
], LockedchatroomComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .login-container{\n    height: 100vh;\n    width: 100%;\n    background-image: url('/assets/pre-login-background-brown-and-blue-circles.jpg');\n    background-size: cover;\n  }\n\n  .sidenav-container{\n    background-color: rgba(66, 28, 0, 0.3);\n  }\n\n  .app-logo{\n    display: block;\n    margin: auto;\n    height: auto;\n  }\n\n  .input-field{\n    position: relative;\n    padding: 2px;\n    margin: 15px 0;\n    vertical-align: middle;\n    min-height: 35px;\n    float: left;\n    width: 100%;\n  }\n\n  .mat-drawer-content {\n    margin: 0!important;\n  }\n\n  .sidenav-container{\n    color: #fff;\n    height: 100vh;\n  }\n\n  .login-form{\n    text-align: center;\n    overflow: hidden;\n    -webkit-box-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  .signup-forget {\n    margin: 5px 0 5px 0;\n    float: left;\n    width: 100%;\n}\n\n  .signup-forget p:nth-child(1){\n  float: left;\n}\n\n  .signup-forget p:nth-child(2){\n  float: right;\n}\n\n  h1{\n    margin-bottom: 10px;\n    font-weight: 400;\n  }\n\n  h1 + p{\n    margin-bottom: 20px;\n    margin-top: 0;\n    font-size: .9em;\n  }\n\n  P{\n    font-size: .9em;\n  }\n\n  input:focus ~ .floating-label,\ninput:not(:focus):valid ~ .floating-label{\n  top: -2px;\n  bottom: 10px;\n  left: 0px;\n  font-size: 13px;\n  opacity: 0.5;\n}\n\n  .inputText{\n  font-size: 14px;\n  width: 100%;\n  height: 35px;\n}\n\n  .floating-label {\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  color: #fff;\n  -webkit-transition: 500ms ease-in-out;\n  transition: 500ms ease-in-out;\n  top: 12px;\n  opacity: 0.7;\n}\n\n  .input-group{\n  position: relative;\n  float: left;\n  padding-bottom: 0;\n  height: 30px;\n  width: 100%;\n}\n\n  input:focus{\n    box-shadow: none;\n    outline: none;\n  }\n\n  ::-webkit-input-placeholder {\n    color: rgb(153, 153, 153);\n}\n\n  ::-moz-placeholder {\n    color: rgb(153, 153, 153);\n}\n\n  ::-ms-input-placeholder {\n    color: rgb(153, 153, 153);\n}\n\n  ::placeholder {\n    color: rgb(153, 153, 153);\n}\n\n  a {\n  text-decoration: none!important;\n}\n\n  :-ms-input-placeholder {\n  color: rgb(153, 153, 153);\n}\n\n  ::-ms-input-placeholder {\n  color: rgb(153, 153, 153);\n}\n\n  input:focus{\n  border-bottom: 2px solid  rgb(225, 102, 38);\n}\n\n  input{\n    -webkit-box-ordinal-group: 3;\n    order: 2;\n    display: block;\n    margin-top: 0;\n    background: none;\n    padding: 2px 2px 1px;\n    border-width: 0 0 1px;\n    -webkit-transition: 500ms ease-in-out;\n    transition: 500ms ease-in-out;\n    line-height: 26px;\n    height: 30px;\n    -ms-flex-preferred-size: 26px;\n    border-radius: 0;\n    font-size: 20px;\n    border-style: solid;\n    width: 100%;\n    color: #fff;\n    box-sizing: border-box;\n    float: left;\n    border-bottom: 1px solid rgb(160, 81, 38);\n  }\n\n  button{\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n    color: rgba(255,255,255,0.87);\n    background-color: #1A83F5;\n    padding-top: 5px;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    min-height: 46px;\n    min-width: 88px;\n    line-height: 36px;\n    vertical-align: middle;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-grid-row-align: center;\n    align-items: center;\n    text-align: center;\n    border-radius: 3px;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 0;\n    padding: 0 6px;\n    margin: 20px 0 6px 0;\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 14px;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n    text-decoration: none;\n    overflow: hidden;\n    -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n    transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n    width: 100%;\n  }\n\n  .img-cont::after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: .4;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n  }\n\n  .sidebar-footer {\n    text-align: center;\n}\n\n  .img-cont{\n    width: 100%;\n    height: 100vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n  }\n\n  .img-cont .final-img{\n    display: inline-block;\n    margin: 0 auto;\n    max-width: 520px;\n    z-index: 9;\n    padding: 0 10px;\n  }\n\n  .img-cont .final-img img{\n    width: 100%;\n  }\n\n  #wrapper {\n    height:100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n\n  #wrapper td {\n    vertical-align: middle;\n    text-align: center;\n  }\n\n  mat-sidenav {\n    padding: 0px;\n    -webkit-transform: none;\n            transform: none;\n    visibility: visible;\n    width: auto!important;\n    max-width: 470px;\n    margin: 0 auto;\n    position: static;\n    height: auto;\n    vertical-align: middle;\n    border: none!important;\n    margin-top: 0px; color:#fff;\n    position: relative;\n    overflow:visible;\n    padding-top: 140px;\n    background: transparent;\n    box-shadow: none!important;\n  }\n\n  .main-logo{\n    max-width: 400px;\n    width: auto;\n    margin: 0 auto;\n    position: absolute;\n    top: 0;\n  }\n\n  .footer-logo{\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .store-logos{\n    display: -webkit-box;\n    display: flex;\n  }\n\n  .footer-reserved {\n    font-size: .7em;\n    margin: 15px 0 15px;\n    line-height: 1.5em;\n    text-align: center;\n}\n\n  .top-div {\n  height: 190px;\n  width: 100%;\n}\n\n  .mat-drawer-inner-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: -webkit-box;\n  display: flex;\n}\n\n  .foot-logo {\n  z-index: 1;\n  width: 120px;\n  position: absolute;\n  bottom: 10px;\n  color: #FFF;\n  text-shadow: 1px 1px 0 #000;\n  left: 15px;\n}\n\n  a:-webkit-any-link {\n  color: -webkit-link;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n  .foot-logo img {\n  width: 100%;\n}\n\n  @media screen and (max-width:767px){\n  .main-logo{\n    position: absolute;\n    max-width: 320px!important;\n    left: 0;\n    right: 0;\n    top: -150px;\n  }\n  mat-sidenav{\n    padding-top: 0;\n    height: 100vh;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n    background-image: linear-gradient(to top, #e26727 , #0e2226);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%!important;\n    max-width: 100%;\n  }\n}\n\n  /* Absolute Center Spinner */\n\n  .loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n  /* Transparent Overlay */\n\n  .loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n\n  .circle{\n  height: 270px;\n    width: 270px;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n    background-image: linear-gradient(to top, #e26727 , #0e2226);\n    border-radius: 50%;\n    margin: -130px auto 0 auto;\n    display: inline-block;\n    color: #fff;\n    position: relative;\n}\n\n  .circle h1{\n  position: absolute;\n  vertical-align: bottom;\n  bottom: 70px;\n  left: 85px;\n}\n\n  .circle p{\n  position: absolute;\n  vertical-align: bottom;\n  bottom: 15px;\n  left: 0;\n  max-width: 270px;\n  color: #fff;\n  text-align: center;\n  padding: 0 25px;\n}\n\n  .circle p span{\n  color: #fff!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0ZBQWdGO0lBQ2hGLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQU87WUFBUCxPQUFPO0lBQ1Asb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztBQUNmOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsWUFBWTtBQUNkOztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0VBRUEsU0FBUztFQUNULFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsV0FBVztFQUNYLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULFlBQVk7QUFDZDs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0VBR0U7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUNBO0lBQ0UseUJBQXlCO0FBQzdCOztFQUZFO0lBQ0UseUJBQXlCO0FBQzdCOztFQUZFO0lBQ0UseUJBQXlCO0FBQzdCOztFQUZFO0lBQ0UseUJBQXlCO0FBQzdCOztFQUNBO0VBQ0UsK0JBQStCO0FBQ2pDOztFQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztFQUNFO0lBQ0UsNEJBQTRCO0lBRTVCLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFDQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHlDQUF5QztFQUMzQzs7RUFDQTtJQUNFLHVDQUF1QztJQUN2Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw2R0FBNkc7SUFDN0cscUdBQXFHO0lBQ3JHLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtFQUNaOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osdUJBQWU7WUFBZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlLEVBQUUsVUFBVTtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0VBQzVCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjs7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztFQUVBO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYiw4RkFBNEQ7SUFBNUQsNERBQTREO0lBQzVELG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFDRjs7RUFDQSw0QkFBNEI7O0VBQzVCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0VBRUEsd0JBQXdCOztFQUN4QjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0VBQ0E7RUFDRSxhQUFhO0lBQ1gsWUFBWTtJQUNaLDhGQUE0RDtJQUE1RCw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmxvZ2luLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wcmUtbG9naW4tYmFja2dyb3VuZC1icm93bi1hbmQtYmx1ZS1jaXJjbGVzLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuc2lkZW5hdi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgMjgsIDAsIDAuMyk7XG4gIH1cblxuICAuYXBwLWxvZ297XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaW5wdXQtZmllbGR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZW5hdi1jb250YWluZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAubG9naW4tZm9ybXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2lnbnVwLWZvcmdldCB7XG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaWdudXAtZm9yZ2V0IHA6bnRoLWNoaWxkKDEpe1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaWdudXAtZm9yZ2V0IHA6bnRoLWNoaWxkKDIpe1xuICBmbG9hdDogcmlnaHQ7XG59XG4gIGgxe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBoMSArIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgfVxuICBQe1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgfVxuXG4gIGlucHV0OmZvY3VzIH4gLmZsb2F0aW5nLWxhYmVsLFxuaW5wdXQ6bm90KDpmb2N1cyk6dmFsaWQgfiAuZmxvYXRpbmctbGFiZWx7XG4gIHRvcDogLTJweDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaW5wdXRUZXh0e1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5mbG9hdGluZy1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGxlZnQ6IDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xuICB0b3A6IDEycHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5pbnB1dC1ncm91cHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuICBpbnB1dDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufVxuaW5wdXQ6Zm9jdXN7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgcmdiKDIyNSwgMTAyLCAzOCk7XG59XG4gIGlucHV0e1xuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDM7XG4gICAgLXdlYmtpdC1vcmRlcjogMjtcbiAgICBvcmRlcjogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDJweCAxcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjAsIDgxLCAzOCk7XG4gIH1cbiAgYnV0dG9ue1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjI2KTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE4M0Y1O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWluLWhlaWdodDogNDZweDtcbiAgICBtaW4td2lkdGg6IDg4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBtYXJnaW46IDIwcHggMCA2cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxiYWNrZ3JvdW5kLWNvbG9yIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxiYWNrZ3JvdW5kLWNvbG9yIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1nLWNvbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICAuaW1nLWNvbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5pbWctY29udCAuZmluYWwtaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG4gIC5pbWctY29udCAuZmluYWwtaW1nIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICN3cmFwcGVyIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgI3dyYXBwZXIgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgbWF0LXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA0NzBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4OyBjb2xvcjojZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgfVxuICAubWFpbi1sb2dve1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICAuZm9vdGVyLWxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc3RvcmUtbG9nb3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZm9vdGVyLXJlc2VydmVkIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9wLWRpdiB7XG4gIGhlaWdodDogMTkwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvb3QtbG9nbyB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICMwMDA7XG4gIGxlZnQ6IDE1cHg7XG59XG5hOi13ZWJraXQtYW55LWxpbmsge1xuICBjb2xvcjogLXdlYmtpdC1saW5rO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvb3QtbG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAubWFpbi1sb2dve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDMyMHB4IWltcG9ydGFudDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTE1MHB4O1xuICB9XG4gIG1hdC1zaWRlbmF2e1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2UyNjcyNyAsICMwZTIyMjYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4vKiBBYnNvbHV0ZSBDZW50ZXIgU3Bpbm5lciAqL1xuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGhlaWdodDogMmVtO1xuICBvdmVyZmxvdzogc2hvdztcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cbi5sb2FkaW5nLWluZGljYXRvcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG59XG4uY2lyY2xle1xuICBoZWlnaHQ6IDI3MHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTI2NzI3ICwgIzBlMjIyNik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogLTEzMHB4IGF1dG8gMCBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2lyY2xlIGgxe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJvdHRvbTogNzBweDtcbiAgbGVmdDogODVweDtcbn1cbi5jaXJjbGUgcHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBib3R0b206IDE1cHg7XG4gIGxlZnQ6IDA7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cbi5jaXJjbGUgcCBzcGFue1xuICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let LoginComponent = class LoginComponent {
    constructor(document, auth, user, router) {
        this.document = document;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.isLoading = false;
        this.isValid = true;
        this.incorrectLogin = false;
        this.loginUseData = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.document.body.classList.remove('black-theme');
        this.document.body.classList.remove('dark-theme');
    }
    ngOnInit() {
        if (this.user.getLoginUserId()) {
            this.router.navigate(['/dashboard']);
        }
    }
    loginUser() {
        let userData = this.validateData();
        if (userData) {
            this.isLoading = true;
            this.auth.loginUser(userData.email, userData.password).subscribe((response) => {
                this.isLoading = false;
                if (response.success) {
                    this.auth.loginSuccess(response);
                }
                else {
                    this.isLoading = false;
                    this.loginFailed(response);
                }
            });
        }
        else {
            console.log(this.errorMessageLogin);
        }
    }
    loginFailed(response) {
        this.incorrectLogin = true;
        this.isValid = false;
        this.errorMessageLogin = response.error.message;
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateData() {
        let userData = this.loginUseData.value;
        var procesData = { email: "", password: "" };
        if (this.validateEmail(userData.email)) {
            procesData.email = userData.email;
            this.errorMessageEmail = false;
        }
        else {
            this.isValid = false;
            this.errorMessageEmail = "Please enter a valid email";
            return false;
        }
        if (userData.password) {
            this.errorMessagePassword = false;
            procesData.password = userData.password;
        }
        else {
            this.isValid = false;
            this.errorMessagePassword = "Password is required";
            return false;
        }
        return procesData;
    }
};
LoginComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _models__WEBPACK_IMPORTED_MODULE_3__["User"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");












































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/Events.ts":
/*!**********************************!*\
  !*** ./src/app/models/Events.ts ***!
  \**********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
    Event["JOIN_ROOM"] = "joinRoom";
    Event["ROOM_LIST"] = "nsRoomList";
    Event["ROOM_HISTORY"] = "historyCatchUp";
    Event["INCOMING_MESSAGE"] = "messageToClients";
    Event["OUTGOING_MESSAGE"] = "newMessageToServer";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");

class User {
    constructor() { }
    getLoginUser() {
        return localStorage.getItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName) ? localStorage.getItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName).toString() : localStorage.getItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName);
    }
    getLoginUserId() {
        if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
            return false;
        }
        else {
            return JSON.parse(this.getLoginUser()).id;
        }
    }
    getUserChatId() {
        if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
            return false;
        }
        else {
            console.log(JSON.parse(this.getLoginUser()), "JSON.parse(this.getLoginUser())");
            return JSON.parse(this.getLoginUser()).chat_id;
        }
    }
    getLoginUserRole() {
        if (this.getLoginUser() === "undefined" || !this.getLoginUser()) {
            return false;
        }
        else {
            return JSON.parse(this.getLoginUser()).role_id;
        }
    }
    getUserRole() {
        if (this.getLoginUser()) {
            return JSON.parse(this.getLoginUser()).status;
        }
        return false;
    }
    userIsAdmin() {
        if (this.getLoginUser()) {
            return (JSON.parse(this.getLoginUser()).status == 1 ? true : false);
        }
        return false;
    }
    getUser() {
        return JSON.parse(this.getLoginUser());
    }
    getFirstName() {
        return JSON.parse(this.getLoginUser()).userFirstname;
    }
    getLastName() {
        return JSON.parse(this.getLoginUser()).userLastname;
    }
    getFullName() {
        return JSON.parse(this.getLoginUser()).userFirstname + ' ' + JSON.parse(this.getLoginUser()).userLastname;
    }
    setLoginUser(response) {
        localStorage.setItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName, JSON.stringify(response.data));
        localStorage.setItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageAccessToken, response.token);
    }
    get() {
        return localStorage.getItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName);
    }
    setAllRooms(rooms) {
        localStorage.setItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageAllRooms, JSON.stringify(rooms));
    }
    getRooms() {
        return JSON.parse(localStorage.getItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageAllRooms));
    }
    clear() {
        localStorage.clear();
    }
    logout() {
        localStorage.clear();
        localStorage.removeItem(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"].localStorageUserName);
    }
}


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/app/models/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });




/***/ }),

/***/ "./src/app/onpoint-room/onpoint-room.component.css":
/*!*********************************************************!*\
  !*** ./src/app/onpoint-room/onpoint-room.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ucG9pbnQtcm9vbS9vbnBvaW50LXJvb20uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/onpoint-room/onpoint-room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/onpoint-room/onpoint-room.component.ts ***!
  \********************************************************/
/*! exports provided: OnpointRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnpointRoomComponent", function() { return OnpointRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OnpointRoomComponent = class OnpointRoomComponent {
    constructor() {
        // set screenWidth on page load
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
        };
    }
    ngOnInit() {
    }
};
OnpointRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onpoint-room',
        template: __webpack_require__(/*! raw-loader!./onpoint-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/onpoint-room/onpoint-room.component.html"),
        styles: [__webpack_require__(/*! ./onpoint-room.component.css */ "./src/app/onpoint-room/onpoint-room.component.css")]
    })
], OnpointRoomComponent);



/***/ }),

/***/ "./src/app/profile-sidebar/profile-sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile-sidebar/profile-sidebar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtc2lkZWJhci9wcm9maWxlLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-sidebar/profile-sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile-sidebar/profile-sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSidebarComponent", function() { return ProfileSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileSidebarComponent = class ProfileSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('.btnClose').click(function () {
            $('.card_box').toggleClass('show_hide');
        });
        $('.panelUser').click(function () {
            $('.card_box').toggleClass('show_hide');
        });
    }
};
ProfileSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-sidebar',
        template: __webpack_require__(/*! raw-loader!./profile-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-sidebar/profile-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./profile-sidebar.component.css */ "./src/app/profile-sidebar/profile-sidebar.component.css")]
    })
], ProfileSidebarComponent);



/***/ }),

/***/ "./src/app/rightarea/rightarea.component.css":
/*!***************************************************!*\
  !*** ./src/app/rightarea/rightarea.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0YXJlYS9yaWdodGFyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rightarea/rightarea.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rightarea/rightarea.component.ts ***!
  \**************************************************/
/*! exports provided: RightareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightareaComponent", function() { return RightareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightareaComponent = class RightareaComponent {
    constructor() { }
    ngOnInit() {
    }
    loadTopWidget(event) { }
};
RightareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rightarea',
        template: __webpack_require__(/*! raw-loader!./rightarea.component.html */ "./node_modules/raw-loader/index.js!./src/app/rightarea/rightarea.component.html"),
        styles: [__webpack_require__(/*! ./rightarea.component.css */ "./src/app/rightarea/rightarea.component.css")]
    })
], RightareaComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(http, local, session, user, router) {
        this.http = http;
        this.local = local;
        this.session = session;
        this.user = user;
        this.router = router;
        this.USER_KEY = 'login_user';
        this.rooms = [
            {
                coupons: [],
                _id: "5d944c3c6bd7c7241e4472fb",
                title: "market-masters",
                status: "public",
                created_date: "2019-10-02T07:05:32.649Z",
            },
            {
                coupons: [],
                _id: "5d944c4a6bd7c7241e4472fc",
                title: "customers",
                status: "public",
                created_date: "2019-10-02T07:05:46.630Z",
            },
            {
                coupons: [],
                _id: "5d9745f3f1c0075164fb78dc",
                title: "Angular: Empty Fiddle",
                "description": "desc",
                status: "public",
                "post_access": 1,
                created_date: "2019-10-04T13:15:31.204Z",
            },
            {
                coupons: [],
                _id: "5eb9bfae11ea7133e7ff961a",
                title: "Test Chat",
                "description": "This is the chat to test out",
                status: "public",
                "post_access": 1,
                created_date: "2020-05-11T21:12:14.703Z",
            },
            {
                coupons: [],
                _id: "5ecd90cc11ea7133e7ff9662",
                title: "7 Day FX Mastery",
                "description": "7 day fx mastery",
                status: "public",
                "post_access": 1,
                created_date: "2020-05-26T21:57:32.772Z",
            },
            {
                coupons: [],
                _id: "5ed29d8a11ea7133e7ff9674",
                title: "Ricky test",
                "description": "test",
                status: "public",
                "post_access": 1,
                created_date: "2020-05-30T17:53:14.043Z",
            },
            {
                coupons: [],
                _id: "5ed54fc111ea7133e7ff967f",
                title: "Another test",
                "description": "test",
                status: "public",
                "post_access": 1,
                created_date: "2020-06-01T18:58:09.109Z",
            }
        ];
    }
    get isLoggedIn() {
        return this.user.getLoginUserId() ? true : false;
    }
    get isAdmin() {
        return this.user.getLoginUserRole() == 1 ? true : false;
    }
    createUserAdmin(data) {
        return this.http.createUserAdmin(data);
    }
    registerUser(data) {
        return this.http.registerUser(data).subscribe((data) => {
            if (data && data.hasOwnProperty('success')) {
                this.loginSuccess(data);
            }
            else {
                this.loginFailed();
            }
        });
    }
    createNewRoom(data) {
        return this.http.createNewRoom(data);
    }
    deleteChatRoom(data) {
        return this.http.deleteChatRoom(data);
    }
    getRoomsList() {
        return this.http.getRoomsList();
    }
    loginUser(email, password) {
        return this.http.getUserDetails({ email, password });
    }
    getAllSystemUsers() {
        return this.http.getAllSystemUsers();
    }
    loginSuccess(user) {
        this.initlializeUser(user);
        // this.setAllRooms()
    }
    initlializeUser(response) {
        this.user.setLoginUser(response);
        // this.setAllRooms();
        this.afterLogin();
    }
    setAllRooms() {
        return this.http.getRoomsList();
    }
    afterLogin() {
        this.router.navigate(['/dashboard']);
    }
    loginFailed() {
    }
    logout() {
        this.user.logout();
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] },
    { type: _models__WEBPACK_IMPORTED_MODULE_4__["User"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

var HttpService_1;



let HttpService = HttpService_1 = class HttpService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.appConfig = {};
        // tslint:disable-next-line: variable-name
        this.access_token_auth = true;
        this.appConfig = this.config.getConfig();
    }
    static getAuthUser() {
        // return new User().getLoginUser();
    }
    /**
     * Constructs a `POST` request that interprets the body as a
     * JSON object and returns the response body as a JSON object.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a JSON object.
     */
    getUserDetails(params) {
        return this.http.post(this.getEndPoint('loginUser', 'POST'), params);
    }
    registerUser(params) {
        return this.http.post(this.getEndPoint('registerUser', 'POST'), params);
    }
    /**
     *
     * @param params
     * node server api calls
     */
    createNewRoom(params) {
        return this.http.post(this.getNodeServerEndPoint('createNewRoom', 'POST'), params);
    }
    getRoomsList() {
        return this.http.post(this.getNodeServerEndPoint('allRoomsList', 'POST'), {});
    }
    deleteChatRoom(roomId) {
        return this.http.post(this.getNodeServerEndPoint('deleteChatRoom', 'POST'), roomId);
    }
    /**
     *
     * admin api calls
     */
    getAllSystemUsers() {
        return this.http.post(this.getEndPoint('getAllSystemUsers', 'POST'), null, this.buildOptions());
    }
    createUserAdmin(params) {
        return this.http.post(this.getEndPoint('createUserAdmin', 'POST'), params, this.buildOptions());
    }
    buildOptions() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(HttpService_1.localStorageAccessToken));
        return { headers: headers };
    }
    // tslint:disable-next-line: variable-name
    getEndPoint(string, method, queryParam = '') {
        if (method === 'GET') {
            return this.getBaseUrl() + this.getApiEndPoint(string) + '?' + queryParam;
        }
        return this.getBaseUrl() + this.getApiEndPoint(string);
    }
    getNodeServerEndPoint(string, method, queryParam = '') {
        if (method === 'GET') {
            return this.getBaseUrlNodeServer() + this.getApiEndPoint(string) + '?' + queryParam;
        }
        return this.getBaseUrlNodeServer() + this.getApiEndPoint(string);
    }
    getBaseUrl() {
        return this.appConfig.apiUrl;
    }
    getBaseUrlNodeServer() {
        return this.appConfig.nodeServerUrl;
    }
    execute(str, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${localStorage.getItem(HttpService_1.localStorageAccessToken)}`)
        };
        return this.http.post(this.getEndPoint(str, 'POST'), data, httpOptions);
    }
    getCommonEndPoints() {
        return {
            loginUser: 'login',
            registerUser: 'register',
            createUserAdmin: 'admin/create-user',
            allRoomsList: 'api/rooms',
            deleteChatRoom: 'api/deleteroom',
            createNewRoom: 'api/createroom',
            getAllSystemUsers: 'admin/contacts'
        };
    }
    getApiEndPoint(str) {
        // tslint:disable-next-line: variable-name
        const end_points = this.getCommonEndPoints();
        if (end_points[str] != null) {
            return end_points[str];
        }
        throw new Error(' No end point find with name ' + str);
    }
};
HttpService.localStorageUserName = 'login_user';
HttpService.localStorageAllRooms = 'all_rooms';
HttpService.localStorageAccessToken = 'access_token';
HttpService.ctorParameters = () => [
    { type: _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpService);



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Events */ "./src/app/models/Events.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");






let SocketService = class SocketService {
    constructor(appConfig) {
        this.appConfig = appConfig;
    }
    initSocket() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(`${this.appConfig.config.nodeServerUrl}user`);
    }
    joinRoom(roomId) {
        this.socket.emit(_models_Events__WEBPACK_IMPORTED_MODULE_4__["Event"].JOIN_ROOM, roomId);
    }
    sendMessage(message) {
        this.socket.emit(_models_Events__WEBPACK_IMPORTED_MODULE_4__["Event"].OUTGOING_MESSAGE, message);
    }
    onEvent(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on(event, (data) => {
                observer.next(data);
            });
        });
    }
};
SocketService.ctorParameters = () => [
    { type: _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");



let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    getUser() {
        return this.userModel.getUser();
    }
    getUserId() {
        return this.userModel.getLoginUserId();
    }
    getUserChatId() {
        return this.userModel.getUserChatId();
    }
    userIsAdmin() {
        return this.userModel.userIsAdmin();
    }
    getRooms() {
        return this.userModel.getRooms();
    }
};
UserService.ctorParameters = () => [
    { type: _models_User__WEBPACK_IMPORTED_MODULE_2__["User"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetService = class WidgetService {
    constructor() {
        this.widgetList = [
            {
                "id": "1",
                "name": "FX Quotes",
                "link": "https://tradetools.tk/t/forex/?v0.1",
                "frame": "<iframe class='widgets-iframe ng-scope' ng-src='https://tradetools.tk/t/forex/?v0.1' ng-if='!w.iframeError' frameborder='0' src='https://tradetools.tk/t/forex/?v0.1' width='100%'></iframe>",
                "status": "1"
            },
            {
                "id": "2",
                "name": "FX Calculators",
                "link": "https://tradetools.tk/t/fxcalculators/",
                "status": "1"
            },
            {
                "id": "3",
                "name": "Commodities",
                "link": "https://tradetools.tk/t/commodities/?v0.4",
                "status": "1"
            },
            {
                "id": "4",
                "name": "Talking Twitter",
                "link": "https://flask.echofin.co:443/?m=xwidget&v=2",
                "status": "1"
            }
        ];
    }
    getWidgets() {
        return this.widgetList;
    }
};
WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WidgetService);



/***/ }),

/***/ "./src/app/sidenav/locked-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sidenav/locked-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: lockeddialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockeddialogComponent", function() { return lockeddialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let lockeddialogComponent = class lockeddialogComponent {
    constructor() {
        this.paymethod = 'option1';
        this.selectedcycle = 'weekly';
    }
};
lockeddialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="modal-content locked-dialog">
    <div class="">
      <div class="modal-header">
          Locked Chatroom
      </div>
      <div style="font-size: 1.7rem;    text-align: center;    padding: 4rem;">
          Please contact team admin
      </div>
  </div>
</div>
  `
    })
], lockeddialogComponent);



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* preferences dialog */\nmat-form-field{\n  width: 100%;\n}\n.modal-footer{\n  border-top: 1px solid #ddd;\n}\nmat-checkbox{\n  width: 100%;\n  display: block;\n}\n.rooms-overflow {\n  padding: 0px 30px;\n    height: 196px;\n    overflow-y: auto;\n    margin: 10px 0;\n}\n.blockandmute-body {\n  border: 1px solid #ddd;\n  padding: 10px;\n  margin: 10px 0;\n}\n.blockandmute-body button{\n  color: #fff!important;;\n}\n.blockandmute-body .label{\n  margin-right: 5px;\n}\n.content .empty-msg{\n  padding: 5px 0 15px;\n  text-align: left;\n  font-size: 1.1rem;\n  color: #666;\n}\n.form-group label {\n  font-weight: bold;\n}\n.blockandmute-title{\n font-weight: bold;\n}\n.preference-container .active{\n  border-left: 2px solid #0C2124!important;\n  background-color: #e26727!important;\n  color: #fff!important;\n}\n.preference-container .content{\n  background: #fff;\n  padding: 10px!important;\n  border-top: 1px solid #ddd;\n}\n.preference-container > .row{\n  display: -webkit-box;\n  display: flex;\n}\n.preference-container > .row .col-md-3{\n  -webkit-box-flex: 1;\n          flex: auto 0;\n  background: #eee;\n}\n.preference-container > .row .col-md-9{\n  -webkit-box-flex: 1;\n          flex: auto 0;\n}\n.preference-container .upload_file{\n position: relative;\n}\n.preference-container .content.profile .btn{\n  width: 100%;\n}\n.preference-container .upload_file input{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  z-index: 1;\n  line-height: 38px;\n  cursor: pointer;\n }\n.avatarThumb{\n   border: 1px solid #ddd;\n }\n.add_own_brocker h4 a {\n  margin-top: 10px!important;\n}\n@media screen and (max-width:767px){\n  .preference-container > .row{\n    display: block;\n  }\n }\n/* manage_Brocker dialog */\n.manage_Brocker_container {\n  padding: 0 15px;\n}\n.add_own_brocker h4{\n  margin: 20px 0 10px 0;\n  font-size: 18px;\n}\n/* dark theme toggle */\nmat-slide-toggle{\n  position: relative;\n  top: -5px;\n}\n#team-wrapper{\n  padding:10px 0;\n}\n/* invite friend dialog */\n.media-right{\n  position: relative;\n  bottom: -10px;\n}\n.invite_friend_container{\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxtQ0FBbUM7RUFDbkMscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQVk7VUFBWixZQUFZO0FBQ2Q7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCO0FBQ0E7R0FDRSxzQkFBc0I7Q0FDeEI7QUFDQTtFQUNDLDBCQUEwQjtBQUM1QjtBQUNDO0VBQ0M7SUFDRSxjQUFjO0VBQ2hCO0NBQ0Q7QUFDQSwwQkFBMEI7QUFDMUI7RUFDQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBLHNCQUFzQjtBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSx5QkFBeUI7QUFDekI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZWZlcmVuY2VzIGRpYWxvZyAqL1xubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vZGFsLWZvb3RlcntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5tYXQtY2hlY2tib3h7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yb29tcy1vdmVyZmxvdyB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIGhlaWdodDogMTk2cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5ibG9ja2FuZG11dGUtYm9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmJsb2NrYW5kbXV0ZS1ib2R5IGJ1dHRvbntcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50Oztcbn1cbi5ibG9ja2FuZG11dGUtYm9keSAubGFiZWx7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRlbnQgLmVtcHR5LW1zZ3tcbiAgcGFkZGluZzogNXB4IDAgMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ibG9ja2FuZG11dGUtdGl0bGV7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJlZmVyZW5jZS1jb250YWluZXIgLmFjdGl2ZXtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMEMyMTI0IWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyNjcyNyFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cbi5wcmVmZXJlbmNlLWNvbnRhaW5lciAuY29udGVudHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuLnByZWZlcmVuY2UtY29udGFpbmVyID4gLnJvd3tcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcmVmZXJlbmNlLWNvbnRhaW5lciA+IC5yb3cgLmNvbC1tZC0ze1xuICBmbGV4OiBhdXRvIDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4ucHJlZmVyZW5jZS1jb250YWluZXIgPiAucm93IC5jb2wtbWQtOXtcbiAgZmxleDogYXV0byAwO1xufVxuLnByZWZlcmVuY2UtY29udGFpbmVyIC51cGxvYWRfZmlsZXtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlZmVyZW5jZS1jb250YWluZXIgLmNvbnRlbnQucHJvZmlsZSAuYnRue1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcmVmZXJlbmNlLWNvbnRhaW5lciAudXBsb2FkX2ZpbGUgaW5wdXR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gLmF2YXRhclRodW1ie1xuICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiB9XG4gLmFkZF9vd25fYnJvY2tlciBoNCBhIHtcbiAgbWFyZ2luLXRvcDogMTBweCFpbXBvcnRhbnQ7XG59XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gIC5wcmVmZXJlbmNlLWNvbnRhaW5lciA+IC5yb3d7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiB9XG4gLyogbWFuYWdlX0Jyb2NrZXIgZGlhbG9nICovXG4gLm1hbmFnZV9Ccm9ja2VyX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5hZGRfb3duX2Jyb2NrZXIgaDR7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLyogZGFyayB0aGVtZSB0b2dnbGUgKi9cbm1hdC1zbGlkZS10b2dnbGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNXB4O1xufVxuI3RlYW0td3JhcHBlcntcbiAgcGFkZGluZzoxMHB4IDA7XG59XG4vKiBpbnZpdGUgZnJpZW5kIGRpYWxvZyAqL1xuLm1lZGlhLXJpZ2h0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTEwcHg7XG59XG4uaW52aXRlX2ZyaWVuZF9jb250YWluZXJ7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent, ManageBrockersDialog, PreferencesDialog, InviteFriendDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBrockersDialog", function() { return ManageBrockersDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesDialog", function() { return PreferencesDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendDialog", function() { return InviteFriendDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _locked_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locked-dialog.component */ "./src/app/sidenav/locked-dialog.component.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let SidenavComponent = class SidenavComponent {
    constructor(document, userService, authService, socketService, dialog, localstorage) {
        this.document = document;
        this.socketService = socketService;
        this.dialog = dialog;
        this.localstorage = localstorage;
        this.rooms = [];
        this.roomId = "";
        this.selectedRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = {
            firstname: String,
            lastname: String
        };
        this.imgURL = this.localstorage.get('imgURL');
        this.auth = authService;
        this.userService = userService;
        this.adminImgPath = this.localstorage.get('admin_user_profile');
    }
    onDarkTheme() {
        if (this.darkTheme == true) {
            this.localstorage.set("theme", false);
            this.document.body.classList.remove('dark-theme');
        }
        else {
            this.localstorage.set("theme", true);
            this.document.body.classList.add('dark-theme');
        }
    }
    onManageBrockerDialog() {
        const dialog = this.dialog.open(ManageBrockersDialog, {
            width: '900px',
        });
    }
    ngOnChanges(changes) {
    }
    openAddFileDialog() {
        const fileNameDialogRef = this.dialog.open(_locked_dialog_component__WEBPACK_IMPORTED_MODULE_5__["lockeddialogComponent"]);
    }
    openPreferencesDialog() {
        const dialogRef = this.dialog.open(PreferencesDialog, {
            width: '650px',
        });
    }
    onInviteFriendDialog() {
        const dialogRef = this.dialog.open(InviteFriendDialog, {
            width: '600px',
        });
    }
    clickRoom(room) {
        if (room.status == 'private') {
            this.openAddFileDialog();
        }
        else {
            this.socketService.joinRoom(room._id);
            this.selectedRoom.emit(room.title);
        }
    }
    ngOnInit() {
        this.darkTheme = this.localstorage.get('theme');
        if (this.darkTheme == true) {
            this.document.body.classList.add('dark-theme');
        }
        else {
            this.document.body.classList.remove('dark-theme');
        }
        this.user = this.userService.getUser();
        this.auth.setAllRooms().subscribe((rooms) => {
            this.setRoomsData(rooms);
        });
    }
    setRoomsData(rooms) {
        if (rooms && rooms.success && rooms.data.length > 0) {
            this.rooms = rooms.data;
            this.roomId = rooms.data[0]._id;
            this.socketService.joinRoom(rooms.data[0]._id);
            this.selectedRoom.emit(rooms.data[0].title);
        }
        else {
            this.rooms = [];
        }
    }
    ngAfterViewInit() {
        $('.rooms_list a').click(function () {
            $('.rooms_list a').removeClass('active');
            $(this).addClass('active');
        });
    }
    logout() {
        this.auth.logout();
    }
};
SidenavComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavComponent.prototype, "selectedRoom", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]))
], SidenavComponent);

// manage Brockers (webtraser add)
let ManageBrockersDialog = class ManageBrockersDialog {
    // manage Brockers (webtraser add)
    constructor() {
        this.addOwn = false;
        this.addFromList = true;
    }
    onClickOwn() {
        this.addOwn = false;
        this.addFromList = true;
    }
    onClickList() {
        this.addFromList = false;
        this.addOwn = true;
    }
};
ManageBrockersDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'manage-brockers-dialog',
        template: __webpack_require__(/*! raw-loader!./manage-brockers-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/manage-brockers-dialog.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
    })
], ManageBrockersDialog);

// preferences dialog
let PreferencesDialog = class PreferencesDialog {
    constructor(localstorage) {
        this.localstorage = localstorage;
        this.profile = true;
        this.imgURL = this.localstorage.get('imgURL');
    }
    ngOnChanges() {
    }
    onProfile() {
        this.profile = true;
        this.notification = false;
        this.blockMute = false;
        this.billing = false;
        this.advanced = false;
    }
    onNotification() {
        this.profile = false;
        this.notification = true;
        this.blockMute = false;
        this.billing = false;
        this.advanced = false;
    }
    onBlockMute() {
        this.profile = false;
        this.notification = false;
        this.blockMute = true;
        this.billing = false;
        this.advanced = false;
    }
    onBilling() {
        this.profile = false;
        this.notification = false;
        this.blockMute = false;
        this.billing = true;
        this.advanced = false;
    }
    onAdvanced() {
        this.profile = false;
        this.notification = false;
        this.blockMute = false;
        this.billing = false;
        this.advanced = true;
    }
    preview(files) {
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.localstorage.set("imgURL", this.imgURL);
        };
    }
};
PreferencesDialog.ctorParameters = () => [
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
PreferencesDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'preferences-dialog',
        template: __webpack_require__(/*! raw-loader!./preferences-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/preferences-dialog.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
    })
], PreferencesDialog);

// invite friend dialog
let InviteFriendDialog = class InviteFriendDialog {
    // invite friend dialog
    constructor() {
        this.value = `https://MarketMastersAcademy.echofin.co`;
    }
};
InviteFriendDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'invite-friend-dialog',
        template: __webpack_require__(/*! raw-loader!./invite-friend-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/invite-friend-dialog.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
    })
], InviteFriendDialog);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\n  height: 100vh;\n  width: 100%;\n  background-image: url('/assets/pre-login-background-brown-and-blue-circles.jpg');\n  background-size: cover;\n  overflow-y: auto;\n}\n\n.sidenav-container{\n  background-color: rgba(66, 28, 0, 0.3);\n}\n\n.app-logo{\n  display: block;\n  margin: auto;\n  height: auto;\n}\n\n.input-field{\n  position: relative;\n  padding: 2px;\n  margin: 15px 0;\n  vertical-align: middle;\n  min-height: 35px;\n  float: left;\n  width: 100%;\n}\n\n.mat-drawer-content {\n  margin: 0!important;\n}\n\n.sidenav-container{\n  color: #fff;\n  height: 100vh;\n}\n\n.login-form{\n  text-align: center;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.signup-forget {\n  margin: 5px 0 5px 0;\n  float: left;\n  width: 100%;\n  text-align: center;\n}\n\nh1{\n  margin-bottom: 10px;\n  font-weight: 400; \n}\n\nh1 + p{\n  margin-bottom: 20px;\n  margin-top: 0;\n  font-size: .9em;\n}\n\nP{\n  font-size: .9em;\n}\n\ninput:focus ~ .floating-label{\ntop: -2px;\nbottom: 10px;\nleft: 0px;\nfont-size: 13px;\nopacity: 0.5;\n}\n\n.inputText{\nfont-size: 14px;\nwidth: 100%;\nheight: 35px;\n}\n\n.floating-label {\nposition: absolute;\npointer-events: none;\nleft: 0px;\ncolor: #fff;\n-webkit-transition: 500ms ease-in-out;\ntransition: 500ms ease-in-out;\ntop: 12px;\nopacity: 0.7;\n}\n\n.input-group{\nposition: relative;\nfloat: left;\npadding-bottom: 0;\nheight: 30px;\nwidth: 100%;\n}\n\ninput:focus{\n  box-shadow: none;\n  outline: none;\n}\n\n::-webkit-input-placeholder { \n  color: rgb(153, 153, 153);\n}\n\n::-moz-placeholder { \n  color: rgb(153, 153, 153);\n}\n\n::-ms-input-placeholder { \n  color: rgb(153, 153, 153);\n}\n\n::placeholder { \n  color: rgb(153, 153, 153);\n}\n\na {\ntext-decoration: none!important;\n}\n\n:-ms-input-placeholder { \ncolor: rgb(153, 153, 153);\n}\n\n::-ms-input-placeholder { \ncolor: rgb(153, 153, 153);\n}\n\ninput:focus{\nborder-bottom: 2px solid  rgb(225, 102, 38);\n}\n\ninput{\n  -webkit-box-ordinal-group: 3;\n  order: 2;\n  display: block;\n  margin-top: 0;\n  background: none;\n  padding: 2px 2px 1px;\n  border-width: 0 0 1px;\n  -webkit-transition: 500ms ease-in-out;\n  transition: 500ms ease-in-out;\n  line-height: 26px;\n  height: 30px;\n  -ms-flex-preferred-size: 26px;\n  border-radius: 0;\n  font-size: 20px;\n  border-style: solid;\n  width: 100%;\n  color: #fff;\n  box-sizing: border-box;\n  float: left;\n  border-bottom: 1px solid rgb(160, 81, 38);\n}\n\nbutton{\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  color: rgba(255,255,255,0.87);\n  background-color: #1A83F5;\n  padding-top: 5px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  min-height: 46px;\n  min-width: 88px;\n  line-height: 36px;\n  vertical-align: middle;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 3px;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 0;\n  padding: 0 6px;\n  margin: 20px 0 6px 0;\n  white-space: nowrap;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-family: inherit;\n  text-decoration: none;\n  overflow: hidden;\n  -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n  transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n  width: 100%;\n}\n\n.img-cont::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: .4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n\n.sidebar-footer {\n  text-align: center;\n}\n\n.img-cont{\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.img-cont .final-img{\n  display: inline-block;\n  margin: 0 auto;\n  max-width: 520px;\n  z-index: 9;\n  padding: 0 10px;\n}\n\n.img-cont .final-img img{\n  width: 100%;\n}\n\n#wrapper {\n  height:100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n#wrapper td {\n  vertical-align: middle;\n  text-align: center;\n}\n\nmat-sidenav {\n  padding: 0px;\n  -webkit-transform: none;\n          transform: none;\n  visibility: visible;\n  width: auto!important;\n  max-width: 470px;\n  margin: 40px auto 10px auto;\n  position: static;\n  height: auto;\n  vertical-align: middle;\n  border: none!important;\n  color:#fff; \n  position: relative;\n  overflow:visible;\n  padding-top: 140px;\n  background: transparent;\n  box-shadow: none!important;\n}\n\n.main-logo{\n  max-width: 400px;\n  width: auto;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n}\n\n.footer-logo{\n  display: -webkit-box;\n  display: flex;\n}\n\n.store-logos{\n  display: -webkit-box;\n  display: flex;\n}\n\n.footer-reserved {\n  font-size: .7em;\n  margin: 15px 0 15px;\n  line-height: 1.5em;\n  text-align: center;\n}\n\n.top-div {\nheight: 190px;\nwidth: 100%;\n}\n\n.mat-drawer-inner-container {\n-webkit-box-orient: vertical;\n-webkit-box-direction: normal;\n        flex-direction: column;\ndisplay: -webkit-box;\ndisplay: flex;\n}\n\n.foot-logo {\nz-index: 1;\nwidth: 120px;\nposition: absolute;\nbottom: 10px;\ncolor: #FFF;\ntext-shadow: 1px 1px 0 #000;\nleft: 15px;\n}\n\na:-webkit-any-link {\ncolor: -webkit-link;\ncursor: pointer;\ntext-decoration: underline;\n}\n\n.foot-logo img {\nwidth: 100%;\n}\n\n@media screen and (max-width:767px){\n  .main-logo{\n    position: absolute;\n    max-width: 320px!important;\n    left: 0;\n    right: 0;\n    top: -100px;\n  }\n  mat-sidenav{\n    padding-top: 0;\n    height: 100vh;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n    background-image: linear-gradient(to top, #e26727 , #0e2226);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%!important;\n    max-width: 100%;\n  }\n}\n\n/* Absolute Center Spinner */\n\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n\n.circle{\n  height: 270px;\n    width: 270px;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#e26727) , to(#0e2226));\n    background-image: linear-gradient(to top, #e26727 , #0e2226);\n    border-radius: 50%;\n    margin: -130px auto 0 auto;\n    display: inline-block;\n    color: #fff;\n    position: relative;\n}\n\n.circle h1{\n  position: absolute;\n  vertical-align: bottom;\n  bottom: 60px;\n  left: 77px;\n}\n\n.circle p{\n  position: absolute;\n  vertical-align: bottom;\n  bottom: 15px;\n  left: 0;\n  max-width: 270px;\n  color: #fff;\n  text-align: center;\n  padding: 0 25px;\n}\n\n.circle p span{\n  color: #fff!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnRkFBZ0Y7RUFDaEYsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBTztVQUFQLE9BQU87RUFDUCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsWUFBWTtBQUNaLFNBQVM7QUFDVCxlQUFlO0FBQ2YsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVCxXQUFXO0FBQ1gscUNBQTZCO0FBQTdCLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsWUFBWTtBQUNaOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLFdBQVc7QUFDWDs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRkE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRkE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRkE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBQ0E7RUFDRSw0QkFBNEI7RUFFNUIsUUFBUTtFQUNSLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUNBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZHQUE2RztFQUM3RyxxR0FBcUc7RUFDckcsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBZTtVQUFmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYOztBQUVBO0FBQ0EsNEJBQXNCO0FBQXRCLDZCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsb0JBQWE7QUFBYixhQUFhO0FBQ2I7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osV0FBVztBQUNYLDJCQUEyQjtBQUMzQixVQUFVO0FBQ1Y7O0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjs7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7RUFDYjtFQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYiw4RkFBNEQ7SUFBNUQsNERBQTREO0lBQzVELG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFDRjs7QUFDQSw0QkFBNEI7O0FBQzVCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUEsd0JBQXdCOztBQUN4QjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxhQUFhO0lBQ1gsWUFBWTtJQUNaLDhGQUE0RDtJQUE1RCw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wcmUtbG9naW4tYmFja2dyb3VuZC1icm93bi1hbmQtYmx1ZS1jaXJjbGVzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDI4LCAwLCAwLjMpO1xufVxuXG4uYXBwLWxvZ297XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5pbnB1dC1maWVsZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LWRyYXdlci1jb250ZW50IHtcbiAgbWFyZ2luOiAwIWltcG9ydGFudDtcbn0gXG4uc2lkZW5hdi1jb250YWluZXJ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luLWZvcm17XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWdudXAtZm9yZ2V0IHtcbiAgbWFyZ2luOiA1cHggMCA1cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxe1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwOyBcbn1cbmgxICsgcHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAuOWVtO1xufVxuUHtcbiAgZm9udC1zaXplOiAuOWVtO1xufVxuXG5pbnB1dDpmb2N1cyB+IC5mbG9hdGluZy1sYWJlbHtcbnRvcDogLTJweDtcbmJvdHRvbTogMTBweDtcbmxlZnQ6IDBweDtcbmZvbnQtc2l6ZTogMTNweDtcbm9wYWNpdHk6IDAuNTtcbn1cblxuLmlucHV0VGV4dHtcbmZvbnQtc2l6ZTogMTRweDtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAzNXB4O1xufVxuXG4uZmxvYXRpbmctbGFiZWwge1xucG9zaXRpb246IGFic29sdXRlO1xucG9pbnRlci1ldmVudHM6IG5vbmU7XG5sZWZ0OiAwcHg7XG5jb2xvcjogI2ZmZjtcbnRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xudG9wOiAxMnB4O1xub3BhY2l0eTogMC43O1xufVxuLmlucHV0LWdyb3Vwe1xucG9zaXRpb246IHJlbGF0aXZlO1xuZmxvYXQ6IGxlZnQ7XG5wYWRkaW5nLWJvdHRvbTogMDtcbmhlaWdodDogMzBweDtcbndpZHRoOiAxMDAlO1xufVxuXG5cbmlucHV0OmZvY3Vze1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuOjpwbGFjZWhvbGRlciB7IFxuICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufSBcbmEge1xudGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IFxuY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcbn0gXG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgXG5jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufSBcbmlucHV0OmZvY3Vze1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICByZ2IoMjI1LCAxMDIsIDM4KTtcbn1cbmlucHV0e1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xuICAtd2Via2l0LW9yZGVyOiAyO1xuICBvcmRlcjogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDJweCAycHggMXB4O1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2MCwgODEsIDM4KTtcbn1cbmJ1dHRvbntcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMjYpO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBODNGNTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgbWluLXdpZHRoOiA4OHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogMjBweCAwIDZweCAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxiYWNrZ3JvdW5kLWNvbG9yIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksYmFja2dyb3VuZC1jb2xvciAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZy1jb250OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IC40O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbn1cbi5zaWRlYmFyLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWctY29udHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWctY29udCAuZmluYWwtaW1ne1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaW1nLWNvbnQgLmZpbmFsLWltZyBpbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jd3JhcHBlciB7XG4gIGhlaWdodDoxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG4jd3JhcHBlciB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LXNpZGVuYXYge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ3MHB4O1xuICBtYXJnaW46IDQwcHggYXV0byAxMHB4IGF1dG87XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgY29sb3I6I2ZmZjsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6dmlzaWJsZTtcbiAgcGFkZGluZy10b3A6IDE0MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4ubWFpbi1sb2dve1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLmZvb3Rlci1sb2dve1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnN0b3JlLWxvZ29ze1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvb3Rlci1yZXNlcnZlZCB7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbiAgbWFyZ2luOiAxNXB4IDAgMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3AtZGl2IHtcbmhlaWdodDogMTkwcHg7XG53aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5kaXNwbGF5OiBmbGV4O1xufVxuLmZvb3QtbG9nbyB7XG56LWluZGV4OiAxO1xud2lkdGg6IDEyMHB4O1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOiAxMHB4O1xuY29sb3I6ICNGRkY7XG50ZXh0LXNoYWRvdzogMXB4IDFweCAwICMwMDA7XG5sZWZ0OiAxNXB4O1xufVxuYTotd2Via2l0LWFueS1saW5rIHtcbmNvbG9yOiAtd2Via2l0LWxpbms7XG5jdXJzb3I6IHBvaW50ZXI7XG50ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5mb290LWxvZ28gaW1nIHtcbndpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gIC5tYWluLWxvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogMzIwcHghaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtMTAwcHg7XG4gIH1cbiAgbWF0LXNpZGVuYXZ7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZTI2NzI3ICwgIzBlMjIyNik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgaGVpZ2h0OiAyZW07XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuLmxvYWRpbmctaW5kaWNhdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi5jaXJjbGV7XG4gIGhlaWdodDogMjcwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlMjY3MjcgLCAjMGUyMjI2KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAtMTMwcHggYXV0byAwIGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaXJjbGUgaDF7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm90dG9tOiA2MHB4O1xuICBsZWZ0OiA3N3B4O1xufVxuLmNpcmNsZSBwe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJvdHRvbTogMTVweDtcbiAgbGVmdDogMDtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLmNpcmNsZSBwIHNwYW57XG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignupComponent = class SignupComponent {
    constructor(auth, user, router) {
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.useData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    }
    ngOnInit() {
    }
    registerUser() {
        let userData = this.validateData();
        if (userData) {
            this.auth.registerUser(userData);
        }
        else {
            console.log(this.errorMessage);
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateData() {
        let userData = this.useData.value;
        var procesData = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            status: 0,
        };
        if (userData.fullname) {
            let name = userData.fullname.split(" ", 2);
            procesData.firstname = name[0];
            if (name.length > 1) {
                procesData.lastname = name[1];
            }
        }
        else {
            this.errorMessage = { message: "Please enter a valid fullname" };
            return false;
        }
        if (this.validateEmail(userData.email)) {
            procesData.email = userData.email;
        }
        else {
            this.errorMessage = { message: "Please enter a valid email" };
            return false;
        }
        if (userData.username) {
            procesData.username = userData.username;
        }
        else {
            this.errorMessage = { message: "Please enter a valid username" };
            return false;
        }
        if (userData.password && userData.cpassword && userData.password == userData.cpassword) {
            procesData.password = userData.password;
        }
        else {
            this.errorMessage = { message: "Password does not match" };
            return false;
        }
        return procesData;
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _models__WEBPACK_IMPORTED_MODULE_4__["User"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/unlockchatroom/unlockchatroom.component.css":
/*!*************************************************************!*\
  !*** ./src/app/unlockchatroom/unlockchatroom.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap_messages{\n  position:absolute;\n  width:100%;\n  top:10px;\n  bottom:10px;  \n  height: calc(100vh - 140px);\n}\n.message_list{\n  position:absolute;\n    bottom:0px;\n    right:0px;\n    left:0px;\n    overflow-y:auto;\n    max-height:100%;\n}\nform{\n  position: absolute;\nheight: 0px;\nbottom: 0;\nwidth: 99%;\n}\n.wrap_messages .msg_delivered:last-child {\n  padding-bottom: 15px;\n}\n/* upload */\n.upload_file_for_chat{\n  position: relative;\n  width: 50px;\n  height: 45px;\n  overflow: hidden;\n  float: left;\n  border-right: 2px solid #ddd;\n}\n.upload_file_for_chat input{\n  position: absolute;\n  width: 50px;\n  height: 46px;\n  cursor: pointer;\n  opacity: 0;\n}\n.media_upload_container{\n  padding: 15px;\n}\n.col-sm-9{\n  padding-right: 15px;\n}\n/* new signal */\n.signal-table mat-form-field {\n max-width: 110px;\n padding: 0 2px;\n}\n.signal-table th{\n  font-weight: 400;\n  font-size: 14px;\n}\n.signal-table{\n  color: #444;\n}\nmat-form-field{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5sb2NrY2hhdHJvb20vdW5sb2NrY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGlCQUFpQjtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIsV0FBVztBQUNYLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLGVBQWU7QUFDZjtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VubG9ja2NoYXRyb29tL3VubG9ja2NoYXRyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcF9tZXNzYWdlc3tcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjEwMCU7XG4gIHRvcDoxMHB4O1xuICBib3R0b206MTBweDsgIFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XG59XG4ubWVzc2FnZV9saXN0e1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBib3R0b206MHB4O1xuICAgIHJpZ2h0OjBweDtcbiAgICBsZWZ0OjBweDtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgbWF4LWhlaWdodDoxMDAlO1xufVxuZm9ybXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuaGVpZ2h0OiAwcHg7XG5ib3R0b206IDA7XG53aWR0aDogOTklO1xufVxuLndyYXBfbWVzc2FnZXMgLm1zZ19kZWxpdmVyZWQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLyogdXBsb2FkICovXG4udXBsb2FkX2ZpbGVfZm9yX2NoYXR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG4udXBsb2FkX2ZpbGVfZm9yX2NoYXQgaW5wdXR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuLm1lZGlhX3VwbG9hZF9jb250YWluZXJ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY29sLXNtLTl7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4vKiBuZXcgc2lnbmFsICovXG4uc2lnbmFsLXRhYmxlIG1hdC1mb3JtLWZpZWxkIHtcbiBtYXgtd2lkdGg6IDExMHB4O1xuIHBhZGRpbmc6IDAgMnB4O1xufVxuLnNpZ25hbC10YWJsZSB0aHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ25hbC10YWJsZXtcbiAgY29sb3I6ICM0NDQ7XG59XG5tYXQtZm9ybS1maWVsZHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/unlockchatroom/unlockchatroom.component.ts":
/*!************************************************************!*\
  !*** ./src/app/unlockchatroom/unlockchatroom.component.ts ***!
  \************************************************************/
/*! exports provided: UnlockchatroomComponent, MediaUploadDialog, NewSignalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockchatroomComponent", function() { return UnlockchatroomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaUploadDialog", function() { return MediaUploadDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSignalDialog", function() { return NewSignalDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");






let UnlockchatroomComponent = class UnlockchatroomComponent {
    constructor(socketService, userService, dialog, localstorage) {
        this.socketService = socketService;
        this.dialog = dialog;
        this.localstorage = localstorage;
        this.messages = [];
        this.selectedRoom = {
            _id: String
        };
        this.chat = {
            message: ""
        };
        this.imgURL = this.localstorage.get('imgURL');
        this.userId = userService.getUserChatId();
        this.adminImgPath = this.localstorage.get('admin_user_profile');
    }
    ngOnInit() {
        this.socketService.onEvent("messageToClients").subscribe((message) => {
            this.messages.push(message.data);
        });
        this.socketService.onEvent('historyCatchUp').subscribe((response) => {
            this.messages = (response.hasOwnProperty('data') ? response.data : []);
        });
    }
    onUpload(event) {
        const dialog = this.dialog.open(MediaUploadDialog, {
            width: '598px',
        });
    }
    openNewSignal() {
        const dialog = this.dialog.open(NewSignalDialog, {
            width: '598px',
        });
    }
    sendMessage() {
        if (this.chat.message) {
            let msg = {
                text: this.chat.message,
                type: 0,
                senderId: this.userId
            };
            this.socketService.sendMessage(msg);
            this.chat.message = "";
        }
    }
};
UnlockchatroomComponent.ctorParameters = () => [
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UnlockchatroomComponent.prototype, "selectedRoom", void 0);
UnlockchatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unlockchatroom',
        template: __webpack_require__(/*! raw-loader!./unlockchatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/unlockchatroom.component.html"),
        styles: [__webpack_require__(/*! ./unlockchatroom.component.css */ "./src/app/unlockchatroom/unlockchatroom.component.css")]
    })
], UnlockchatroomComponent);

// media upload
let MediaUploadDialog = class MediaUploadDialog {
};
MediaUploadDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'media-upload-dialog',
        template: __webpack_require__(/*! raw-loader!./media-upload-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/media-upload-dialog.html"),
        styles: [__webpack_require__(/*! ./unlockchatroom.component.css */ "./src/app/unlockchatroom/unlockchatroom.component.css")]
    })
], MediaUploadDialog);

// new Signal
let NewSignalDialog = class NewSignalDialog {
    ngAfterViewInit() {
        $('.editTitle').click(function () {
            $(this).prev().focus();
        });
        $('.btn-group p a.btn').click(function () {
            $('.btn-group p a.btn').removeClass('active');
            $(this).addClass('active');
        });
    }
};
NewSignalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'new-signal-dialog',
        template: __webpack_require__(/*! raw-loader!./new-signal-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/unlockchatroom/new-signal-dialog.html"),
        styles: [__webpack_require__(/*! ./unlockchatroom.component.css */ "./src/app/unlockchatroom/unlockchatroom.component.css")]
    })
], NewSignalDialog);



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.ts ***!
  \****************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserPanelComponent = class UserPanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-panel',
        template: __webpack_require__(/*! raw-loader!./user-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-panel/user-panel.component.html"),
        styles: [__webpack_require__(/*! ./user-panel.component.css */ "./src/app/user-panel/user-panel.component.css")]
    })
], UserPanelComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/puneetsethi/Downloads/development/angular/Circle-Chat/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map