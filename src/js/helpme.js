/**
 * "Help Me" JavaScript Library v1.4.0
 * Copyright 2014-2016 Cameron Condry
 * Released under the MIT license
 */
(function () {
  var HelpMe;

  HelpMe = (function () {
    function HelpMe() {}

    /* Comparators */

    HelpMe.prototype.isUndefined = function(obj) {
      return obj === void 0;
    };

    HelpMe.prototype.isNull = function(obj) {
      return obj === null;
    };

    HelpMe.prototype.isBoolean = function(obj) {
      return typeof obj === 'boolean';
    };

    HelpMe.prototype.isString = function(obj) {
      return typeof obj === 'string';
    };

    HelpMe.prototype.isNumber = function(obj) {
      return typeof obj === 'number';
    };

    HelpMe.prototype.isFunction = function(obj) {
      return typeof obj === 'function';
    };

    HelpMe.prototype.isObject = function(obj) {
      return typeof obj === 'object' && !!obj;
    };

    HelpMe.prototype.isPlainObject = function(obj) {
      return this.isObject(obj) && !this.isArray(obj) && !obj.nodeType;
    };

    HelpMe.prototype.isArray = Array.isArray || function(obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        };

    /* Collections */

    HelpMe.prototype.range = function (start, stop, step) {
      step = step || 1;

      var range = [];
      var i;

      for (i = start; i < stop; i += step) {
        range.push(i);
      }

      return range;
    };

    HelpMe.prototype.each = function (obj, callback) {
      if (!this.isObject(obj) && !this.isArray(obj)) {
        return obj;
      }

      var i = -1;
      var keys = this.isArray(obj) || obj.length ? this.range(0, obj.length) : Object.keys(obj);
      var ref = keys.length;

      while (ref--) {
        i++;
        callback.call(obj[keys[i]], obj[keys[i]], keys[i]);
      }
    };

    HelpMe.prototype.extend = function(obj) {
      var target = obj || {};

      if (!this.isObject(target)) {
        target = {};
      }

      this.each(arguments, (function (item, key) {
        if (key == 0) return;

        var clone, targetOption;

        this.each(item, (function (_item, _key) {
          targetOption = target[_key];

          if (targetOption === target) return;

          target[_key] = _item;

          if (this.isPlainObject(_item)) {
            clone = this.isObject(targetOption) ? targetOption : {};

            if (this.isArray(_item)) {
              clone = this.isArray(targetOption) ? targetOption : [];
            }

            target[_key] = this.extend(clone, _item);
          }
        }).bind(this))
      }).bind(this));

      return target;
    };

    /* Helpers */

    HelpMe.prototype.watchMethod = function (obj, method, callback) {
      var original = obj[method];

      if (this.isFunction(original)) {
        obj[method] = function () {
          callback.apply(this, arguments);
          original.apply(obj, arguments);
        }.bind(this);
      }
    };

    return HelpMe;
  })();

  /* Register with Globals */

  if (typeof window !== 'undefined') {
    window.hm = new HelpMe();
  }

  /* Register with AMD */

  if (typeof define !== 'undefined') {
    define('hm', [], function() {
      return new HelpMe();
    });
  }

  /* Register with CommonJS */

  if (typeof module !== 'undefined') {
    module.exports = new HelpMe();
  }

})();
