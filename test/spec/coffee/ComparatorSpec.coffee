describe 'Comparator Functions', ->
    hm = window.hm
    noop = ->

    beforeEach ->
        jasmine.addMatchers {
                toBeFalseForTypes: ->
                    return {
                        compare: (method, types) ->
                            results =
                                pass: true

                            for i, type of types
                                if method.call hm, type
                                    results.pass = false
                                    results.message = 'Expected ' + Object.prototype.toString.call(type) + ' to be false'

                            return results
                    }
            }
        return

    it 'isUndefined: returns true when argument is undefined', ->
        expect(hm.isUndefined undefined).toBe(true)

    it 'isUndefined: returns false when argument is not undefined', ->
        expect(hm.isUndefined).toBeFalseForTypes([
            null, true, 'string', 42, [], {}, noop
        ])

    it 'isNull: returns true when argument is null', ->
        expect(hm.isNull null).toBe(true)

    it 'isNull: returns false when argument is not null', ->
        expect(hm.isNull).toBeFalseForTypes([
            undefined, true, 'string', 42, [], {}, noop
        ])

    it 'isBoolean: returns true when argument is a boolean', ->
        expect(hm.isBoolean true).toBe(true)

    it 'isBoolean: returns false when argument is not a boolean', ->
        expect(hm.isBoolean).toBeFalseForTypes([
            undefined, null, 'string', 42, [], {}, noop
        ])

    it 'isString: returns true when argument is a string', ->
        expect(hm.isString 'string').toBe(true)

    it 'isString: returns false when argument is not a string', ->
        expect(hm.isString).toBeFalseForTypes([
            undefined, null, true, 42, [], {}, noop
        ])

    it 'isNumber: returns true when argument is a number', ->
        expect(hm.isNumber 42).toBe(true)

    it 'isNumber: returns false when argument is not a number', ->
        expect(hm.isNumber).toBeFalseForTypes([
            undefined, null, true, 'string', [], {}, noop
        ])

    it 'isFunction: returns true when argument is a function', ->
        expect(hm.isFunction noop).toBe(true)

    it 'isFunction: returns false when argument is not a function', ->
        expect(hm.isFunction).toBeFalseForTypes([
            undefined, null, true, 'string', 42, [], {}
        ])

    it 'isArray: returns true when argument is an array', ->
        expect(hm.isArray []).toBe(true)

    it 'isArray: returns false when argument is not an array', ->
        expect(hm.isArray).toBeFalseForTypes([
            undefined, null, true, 'string', 42, {}, noop
        ])

    it 'isObject: returns true when argument is an object', ->
        expect(hm.isObject []).toBe(true)
        expect(hm.isObject {}).toBe(true)

    it 'isObject: returns false when argument is not an object', ->
        expect(hm.isObject).toBeFalseForTypes([
            undefined, null, true, 'string', 42, noop
        ])

    it 'isPlainObject: returns true when argument is a plain object', ->
        expect(hm.isPlainObject {}).toBe(true)

    it 'isPlainObject: returns false when argument is not a plain object', ->
        expect(hm.isPlainObject).toBeFalseForTypes([
            undefined, null, true, 'string', 42, [], noop, document.createElement('div')
        ])
