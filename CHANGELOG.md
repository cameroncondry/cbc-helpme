# 2015.01.20 - Version 1.3.0

## Features
- Rewritten using [Coffee Script](http://coffeescript.org/)

## Updated
- **"hm.proxy(fn, context)"** -> **"hm.proxy(context, fn)"**


# 2014.12.02 - Version 1.2.1

## Features
- Added more detailed documentation.
- **hm.watchMethod()** passes the original arguments into the interceptor


# 2014.12.01 - Version 1.2.0

## Features
- Added bower for jasmine testing suite dependency
- Registered HelpMe as a bower package
- Refactored Jasmine test suite
- Updated library to register with globals and AMD

## Deprecated
- Unregistered as a composer package
- Removed the minified version of the library
- Removed due to being outside the scope of the library
    - **hm.isArray()**
    - **hm.log()**
    - **hm.merge()**
    - **hm.slice()**
    - **hm.triggerError()**


# 2014.10.24 - Version 1.1.0

## Features
- **hm.proxy()**
    - Added the ability to proxy functions with a specific context
- **hm.triggerError()**
    - Added a wrapper around **throw** to provide exception handling

## Bug Fixes
- **hm.extend()**
    - Updated to handle NodeType objects
    - Updated to return encountered arrays as arrays instead of objects
    - Updated to copy undefined values into target object

- **hm.merge()**
    - Removed redundant slice call for the arguments

## Deprecated
- **hm.forEach()**
    - Renamed to **each**, no functionality changes

# 2014.08.28 - Version 1.0.0

- Initial release
