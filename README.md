# hm - HelpMe

"Help Me" - A friend that helps you out in your time of need.

HelpMe is a lightweight library that provides common functionality for any JavaScript application.


## Installation

It is recommended that you include the HelpMe library is by installing the package through [Bower](http://bower.io/).

Create a bower.json file in your project:
```json
{
    "dependencies": {
        "helpme": "1.3.0"
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
    name: 'Cameron',
    request: 'Help Me!'
};

hm.each(testObject, function (key, value) {
    console.log(key + ': ' + value);
});

/* Output:
 * name: Cameron
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
    value2: 'cameron'
};

hm.extend(object1, object2);

/* Result:
 * object1 = {
 *      value1: 'hello',
 *      value2: 'cameron'
 * }
 *
 * object2 = {
 *      value2: 'cameron'
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
    value2: 'cameron'
};

var object3 = hm.extend({}, object1, object2);

/* Result:
 * object1 = {
 *      value1: 'hello',
 *      value2: 'world'
 * }
 *
 * object2 = {
 *      value2: 'cameron'
 * }
 *
 * object3 = {
 *      value1: 'hello',
 *      value2: 'cameron'
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
        value2: 'cameron'
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
 *          value2: 'cameron'
 *      },
 *      deep2: {
 *          method1: function () {}
 *      }
 * }
 */
```

### Helpers

#### hm.trim(string)

Provides a safe string trimming function that will return the original item if a string is not encountered.

```javascript
var string = hm.trim(' Hello World ');

/* Result:
 * string = 'Hello World'
 */
```

#### hm.proxy(callback, context)

#### hm.watchMethod(object, method, callback)


## Contributing

coffee install -wcm -o src/js/ src/coffee/

## Testing


## License







