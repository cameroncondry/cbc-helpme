
describe('Common Utilities', function () {
    var hm = window.hm;
    var types;

    beforeEach(function () {
        types = {
            'undefined': void 0,
            'null': null,
            'boolean': true,
            'string': 'Hello World',
            'number': 42,
            'array': [1, 2, 3],
            'object': {'one': 1, 'two': 2, 'three': 3},
            'function': function () {}
        };
    });

    it('hm.isUndefined() should return true when variable is undefined', function () {
        expect(hm.isUndefined(types.undefined)).toBe(true);
        expect('isUndefined').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isNull() should return true when variable is null', function () {
        expect(hm.isNull(types.null)).toBe(true);
        expect('isNull').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isBoolean() should return true when variable is a boolean', function () {
        expect(hm.isBoolean(types.boolean)).toBe(true);
        expect('isBoolean').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isString() should return true when variable is a string', function () {
        expect(hm.isString(types.string)).toBe(true);
        expect('isString').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isNumber() should return true when variable is a number', function () {
        expect(hm.isNumber(types.number)).toBe(true);
        expect('isNumber').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isFunction() should return true when variable is a function', function () {
        expect(hm.isFunction(types.function)).toBe(true);
        expect('isFunction').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isArray() should return true when variable is an array', function () {
        expect(hm.isArray(types.array)).toBe(true);
        expect('isArray').toBeFalseForAllOtherTypes(types);
    });

    it('hm.isObject() should return true when variable is an object or array', function () {
        expect(hm.isObject(types.array)).toBe(true);
        expect(hm.isObject(types.object)).toBe(true);
    });

    it('hm.isPlainObject() should return true when variable is a plain object', function () {
        expect(hm.isPlainObject(types.object)).toBe(true);
        expect(hm.isPlainObject(document.createElement('div'))).toBe(false);
    });
});

