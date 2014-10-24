# 2014.10.24 - Version 1.1.0 (Stable)

## Features
- **proxy:**
    - Added the ability to proxy functions with a specific context
- **triggerError:**
    - Added a wrapper around **throw** to provide exception handling

## Bug Fixes
- **extend:**
    - Updated to handle NodeType objects
    - Updated to return encountered arrays as arrays instead of objects
    - Updated to copy undefined values into target object

- **merge:**
    - Removed redundance slice call for the arguments

## Breaking Changes
- **forEach:**
    - Renamed to **each**, no functionality changes

# 2014.08.28 - Version 1.0.0 (Stable)
- Initial release
