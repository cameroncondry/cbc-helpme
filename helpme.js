/**
 *    "Help Me" JavaScript Library v1.1.1
 *
 *    Copyright 2014 Cameron Condry
 *    Released under the MIT license
 */

;(function (window) {
    'use strict';

    var hm = function () {};

    hm.prototype = {
        // comparators
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

        // array functions

        // delegate to native Array.isArray
        isArray: Array.isArray || function (obj) {
            return obj.toString.apply(obj) === '[object Array]';
        },

        slice: Array.prototype.slice,

        // object functions

        // extend a given object's properties with object(s)
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
                        if (this.isArray(sourceOption)) {
                            clone = targetOption && this.isArray(targetOption) ? targetOption : [];
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

        // merge two or more objects without altering
        merge: function (obj) {
            var args = [{}];

            this.each(arguments, function (i, arg) {
                args.push(arg);
            });

            return this.extend.apply(this, args);
        },

        // collection functions

        // iterate over a collection with a given callback
        each: function (obj, callback) {
            if (!this.isObject(obj) && !this.isArray(obj)) return obj;

            var i, length = obj.length;

            if (this.isArray(obj)) {
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

        // helper functions

        log: function () {
            console.log(this.slice.call(arguments));
        },
        proxy: function (fn, context) {
            return function () {
                return fn.apply(context, arguments);
            }
        },
        trim: function (value) {
            return this.isString(value) ? value.trim() : value;
        },
        triggerError: function (msg) {
            throw msg || 'Generic Exception Thrown';
        }
    };

    // expose library to global scope
    window.hm = new hm();
}(window));
