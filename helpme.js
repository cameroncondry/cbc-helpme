/**
 *    "Help Me" JavaScript Library v1.0.0
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
            return toString.call(obj) === '[object Array]';
        },

        slice: Array.slice,

        // object functions

        // extend a given object's properties with object(s)
        extend: function (obj) {
            var src, copy, options, clone, i = 1;
            var target = arguments[0] || {};
            var length = arguments.length;

            // enforce target as object
            target = this.isObject(target) ? target : {};

            // update all properties to target
            for (; i < length; i++) {
                options = arguments[i] || {};

                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // protect against obvious recusion
                    if (target === copy) continue;

                    // deep copy if object is encountered
                    if (copy && this.isObject(copy)) {
                        // extend the clone instead of original object
                        clone = src && this.isObject(src) ? src : {};

                        target[name] = this.extend(clone, copy);
                    }

                    // do not copy undefined values
                    else if (!this.isUndefined(copy)) {
                        target[name] = copy;
                    }
                }
            }

            return target;
        },

        // merge two or more objects without altering
        merge: function (obj) {
            var args = [{}];
            args.push.apply(args, this.slice(arguments));

            return this.extend.apply(this, args);
        },

        // collection functions

        // iterate over a collection with a given callback
        forEach: function (obj, callback) {
            if (!this.isObject(obj) && !this.isArray(obj)) return obj;

            var i, length = obj.length;

            if (this.isArray(obj)) {
                for (i = 0; i < length; i++) {
                    callback.call(obj[i], i, obj[i]);
                }
            } else {
                for (i in obj) {
                    callback.call(obj[i], i, obj[i]);
                }
            }

            return obj;
        },

        // helper functions

        trim: function (value) {
            return this.isString(value) ? value.trim() : value;
        },
        log: function (value) {
            console.log(this.slice(arguments));
        }
    };

    // expose library to global scope
    window.hm = new hm;
}(window));
