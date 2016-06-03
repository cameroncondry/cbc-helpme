# hm - HelpMe

"Help Me" - A friend that helps you out in your time of need.

HelpMe is a lightweight library that provides common functionality for any JavaScript application.


## Installation

It is recommended that you include the HelpMe library is by installing the package through [Bower](http://bower.io/).

Create a bower.json file in your project:
```json
{
    "dependencies": {
        "helpme": "1.4.0"
    }
}
```

Then, run the following bower command to install HelpMe:
```
$ bower install
```

Alternatively, you can clone/download the library and install the package manually.


## Basic Usage

### Comparators

HelpMe provides a slew of common comparators that provide a consistent way to add basic data validation to any library.

#### Basic Comparators:

```javascript
hm.isUndefined(undefined);      // true
hm.isNull(null);                // true
hm.isBoolean(true);             // true
hm.isString('Hello World');     // true
hm.isNumber(42);                // true
```

#### Advanced Comparators:

"**hm.isArray()**" returns true when provided an array.
```javascript
hm.isObject([]);                // true
hm.isObject(null);              // false
```

"**hm.isObject()**" returns true when provided an object or array.
```javascript
hm.isObject({});                // true
hm.isObject([]);                // true
hm.isObject(null);              // false
```

"**hm.isPlainObject()**" returns true when provided any object that isn't a DOM object.
```javascript
hm.isPlainObject({});                               // true
hm.isPlainObject(document.createElement('div'));    // false
```

"**hm.isFunction()**" returns true when provided a callable function.
```javascript
hm.isFunction(function () {});  // true
hm.isFunction({});              // false
```

### Collections

#### hm.each(object, callback)

Iterates over objects and arrays, applying a callback to each iteration. The key and values are passed into the callback as the first and second argument respectively.

```javascript
var testObject = {
    name: 'John',
    request: 'Help Me!'
};

hm.each(testObject, function (key, value) {
    console.log(key + ': ' + value);
});

/* Output:
 * name: John
 * request: Help Me!
 */
```

#### hm.extend(object1 [, object2, ..., objectN])

Merges the parameters of one or more objects together into the first object.

```javascript
var object1 = {
    value1: 'hello',
    value2: 'world'
};

var object2 = {
    value2: 'John'
};

hm.extend(object1, object2);

/* Result:
 * object1 = {
 *      value1: 'hello',
 *      value2: 'John'
 * }
 *
 * object2 = {
 *      value2: 'John'
 * }
 */
```

**hm.extend()** will also return the result, allowing for the possibility to make a new object without overwriting any other objects.

```javascript
var object1 = {
    value1: 'hello',
    value2: 'world'
};

var object2 = {
    value2: 'John'
};

var object3 = hm.extend({}, object1, object2);

/* Result:
 * object1 = {
 *      value1: 'hello',
 *      value2: 'world'
 * }
 *
 * object2 = {
 *      value2: 'John'
 * }
 *
 * object3 = {
 *      value1: 'hello',
 *      value2: 'John'
 * }
 */
```

Finally, **hm.extend()** handles deep merges gracefully by default.

```javascript
var object1 = {
    value1: 'hello',
    deep1: {
        value2: 'world'
    }
};

var object2 = {
    deep1: {
        value2: 'John'
    },
    deep2: {
        method1: function () {}
    }
};

hm.extend(object1, object2);

/* Result:
 * object1 = {
 *      value1: 'hello',
 *      deep1: {
 *          value2: 'John'
 *      },
 *      deep2: {
 *          method1: function () {}
 *      }
 * }
 */
```

### Helpers

#### hm.watchMethod(object, method, callback)

TODO


## Contributing

TODO

## Testing

All functionality is covered by the Jasime JavaScript testing framework. View "test/suite.html" for the test results.


## License

The MIT License (MIT)

Copyright (c) 2014-2016 Cameron Condry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.






