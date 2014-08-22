# hm - Help Me

"Help Me" - A friend that helps you out in your time of need.

Help Me is a lightweight library that provides common functionality for any JavaScript application.

## Installation

Add the project to your composer file:

***composer.json***
```
{
    "require": {
        "cameroncondry/helpme": "1.0.*"
    }
}
```

## Methods

### Extend

```js
hm.extend(obj, obj);
```

### Merge

```javascript
hm.extend(obj, obj);
```

### ForEach

```javascript
hm.forEach(obj, callback);
```

### Trim

```js
hm.trim('value');
```

### Log

```js
hm.log(obj);
```

## Comparators

```js
hm.isUndefined(obj);
hm.isNull(obj);
hm.isBoolean(obj);
hm.isString(obj);
hm.isNumber(obj);
hm.isObject(obj);
hm.isFunction(obj);
hm.isArray(obj);
```
