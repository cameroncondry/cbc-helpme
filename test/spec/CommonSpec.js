describe('Comparator Functions', function () {
    var hm = window.hm;
    var types = {
        'undefined': void 0,
        'null': null,
        'boolean': true,
        'string': 'Hello World',
        'number': 42,
        'object': {'one': 1, 'two': 2, 'three': 3},
        'function': function () {}
    };

    beforeEach(function () {
        var type;

        jasmine.addMatchers({
            toBeFalseForAllOtherTypes: function () {
                return {
                    compare: function (original) {
                        var valid = true;
                        var method, message;

                        for (type in types) {
                            if (types.hasOwnProperty(type)) {
                                method = 'is' + (type.charAt(0).toUpperCase() + type.slice(1));
                                if (method !== original && !hm[method](types[type])) {
                                    valid = false;
                                    message = "Expected '" + original + "' to be false for '" + type + "'";
                                }
                            }
                        }

                        return {
                            pass: valid,
                            message: message
                        }
                    }
                }
            }
        });
    });

    it('hm.isUndefined() returns true when argument is undefined', function () {
        expect(hm.isUndefined(types.undefined)).toBe(true);
        expect('isUndefined').toBeFalseForAllOtherTypes();
    });

    it('hm.isNull() should return true when argument is null', function () {
        expect(hm.isNull(types.null)).toBe(true);
        expect('isNull').toBeFalseForAllOtherTypes();
    });

    it('hm.isBoolean() should return true when argument is a boolean', function () {
        expect(hm.isBoolean(types.boolean)).toBe(true);
        expect('isBoolean').toBeFalseForAllOtherTypes();
    });

    it('hm.isString() should return true when argument is a string', function () {
        expect(hm.isString(types.string)).toBe(true);
        expect('isString').toBeFalseForAllOtherTypes();
    });

    it('hm.isNumber() should return true when argument is a number', function () {
        expect(hm.isNumber(types.number)).toBe(true);
        expect('isNumber').toBeFalseForAllOtherTypes();
    });

    it('hm.isFunction() should return true when argument is a function', function () {
        expect(hm.isFunction(types.function)).toBe(true);
        expect('isFunction').toBeFalseForAllOtherTypes();
    });

    it('hm.isObject() should return true when argument is an object or array', function () {
        expect(hm.isObject([1, 2, 3])).toBe(true);
        expect(hm.isObject(types.object)).toBe(true);

    });

    it('hm.isPlainObject() should return true when argument is a plain object', function () {
        expect(hm.isPlainObject(types.object)).toBe(true);
        expect(hm.isPlainObject(document.createElement('div'))).toBe(false);
    });
});
