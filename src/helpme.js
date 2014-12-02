/**
 *    "Help Me" JavaScript Library v1.2.0
 *
 *    Copyright 2014-2015 Cameron Condry
 *    Released under the MIT license
 */

;(function (window, define) {
    'use strict';

    var HelpMe = function () {};

    HelpMe.prototype = {
        // Comparator Functions
        // --------------------

        // "undefined" can be redefined
        isUndefined: function (obj) {
            return obj === void 0;
        },
        isNull: function (obj) {
            return obj === null;
        },
        isBoolean: function (obj) {
            return typeof obj === 'boolean';
        },
        isPlainObject: function (obj) {
            return this.isObject(obj) && !obj.nodeType;
        },
        isString: function (obj) {
            return typeof obj === 'string';
        },
        isNumber: function (obj) {
            return typeof obj === 'number';
        },
        isObject: function (obj) {
            return typeof obj === 'object' && !!obj;
        },
        isFunction: function (obj) {
            return typeof obj === 'function';
        },

        // Collection Functions
        // --------------------

        each: function (obj, callback) {
            if (!this.isObject(obj) && !Array.isArray(obj)) return obj;

            var i, length = obj.length;

            if (Array.isArray(obj)) {
                for (i = 0; i < length; i++) {
                    callback.call(obj[i], i, obj[i]);
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        callback.call(obj[i], i, obj[i]);
                    }
                }
            }

            return obj;
        },

        extend: function (obj) {
            var target = arguments[0] || {};

            target = this.isObject(target) ? target : {};

            this.each(arguments, this.proxy(function (i, arg) {
                var name, value;

                if (i === 0 || !this.isObject(arg)) {
                    return;
                }

                for (name in arg) {
                    value = arg[name];

                    var targetOption = target[name];
                    var sourceOption = value;
                    var clone;

                    // prevent obvious recursion
                    if (value === target) {
                        return;
                    }

                    // do not recurse over NodeType objects
                    if (this.isPlainObject(sourceOption)) {
                        if (Array.isArray(sourceOption)) {
                            clone = targetOption && Array.isArray(targetOption) ? targetOption : [];
                        } else {
                            clone = targetOption && this.isObject(targetOption) ? targetOption : {};
                        }

                        target[name] = this.extend(clone, sourceOption);
                    } else {
                        target[name] = sourceOption;
                    }
                }

            }, this));

            return target;
        },

        // Helper Functions
        // ----------------

        proxy: function (fn, context) {
            return function () {
                return fn.apply(context, arguments);
            }
        },
        trim: function (value) {
            return this.isString(value) ? value.trim() : value;
        },
        watchMethod: function (object, method, callback) {
            var original = object[method];

            if (this.isFunction(original)) {
                object[method] = this.proxy(function () {
                    callback.apply(this, arguments);
                    original.apply(object, arguments);
                }, this);
            }

            return this;
        }

    };

    // register with globals
    if (window) {
        window.hm = new HelpMe();
    }

    // register with amd
    if (define) {
        define('helpme', [], function () {
            return new HelpMe();
        });
    }
})(
    typeof window !== 'undefined' ? window : undefined,
    typeof define !== 'undefined' ? define : undefined
);

