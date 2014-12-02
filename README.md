# hm - HelpMe

"Help Me" - A friend that helps you out in your time of need.

HelpMe is a lightweight library that provides common functionality for any JavaScript application.


## Installation

It is recommended that you include the HelpMe library is by installing the package through [Bower](http://bower.io/).

Create a bower.json file in your project:
```json
{
    "dependencies": {
        "helpme": "1.2.0"
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

HelpMe provides a slew of common comparators that provide a consistent way for basic data validation in any library.

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
