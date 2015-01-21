###
    "Help Me" JavaScript Library v1.3.0
    Copyright 2014-2015 Cameron Condry
    Released under the MIT license
    Documentation found in README.md
###

'use strict'

class HelpMe

    ### Comparator Functions ###

    isUndefined: (obj) ->
        obj == undefined

    isNull: (obj) ->
        obj == null

    isBoolean: (obj) ->
        typeof obj == 'boolean'

    isString: (obj) ->
        typeof obj == 'string'

    isNumber: (obj) ->
        typeof obj == 'number'

    isFunction: (obj) ->
        typeof obj == 'function'

    isObject: (obj) ->
        typeof obj == 'object' and !!obj

    isPlainObject: (obj) ->
        this.isObject obj and !obj.nodeType

    isArray: Array.isArray || (obj) ->
        Object.prototype.toString.call(obj) == '[object Array]'

    ### Collection Functions ###

    each: (obj, callback) ->
        if !this.isObject obj and !this.isArray obj
            return obj

        length = obj.length

        if this.isArray obj
            for i in [0..length] by 1
                callback.call obj[i], i, obj[i]
        else
            for i of obj
                if obj.hasOwnProperty i
                    callback.call obj[i], i, obj[i]

        obj

    extend: (obj) ->
        target = arguments[0] or {}
        target = {} if !this.isObject(target)

        this.each arguments, (i, arg) =>
            return if i == 0

            for name of arg
                value = arg[name]
                targetOption = target[name]
                sourceOption = value

                return if value == target

                if this.isPlainObject sourceOption
                    if this.isArray sourceOption
                        clone = if this.isArray targetOption then targetOption else []
                    else
                        clone = if this.isObject targetOption then targetOption else {}

                    target[name] = this.extend(clone, sourceOption)
                else
                    target[name] = sourceOption

            return

        return target

    ### Helper Functions ###

    proxy: (context, fn) ->
        ->
            fn.apply(context, arguments)

    trim: (value) ->
        if this.isString(value) then value.trim() else value

    watchMethod: (obj, method, callback) ->
        original = obj[method]

        if this.isFunction original
            obj[method] =>
                callback.apply(this, arguments)
                original.apply(obj, arguments)
                return

        return this

### register with globals ###
if window?
    window.hm = new HelpMe()

### register with amd ###
if define?
    define 'hm', [], ->
        new HelpMe()