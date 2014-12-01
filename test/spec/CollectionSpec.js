describe('Collection Functions', function () {
    var hm = window.hm;

    it('hm.each() iterates over numerical array with 5 indices', function () {
        var iterations = 0;
        var array = [1, 2, 3, 4, 5];

        hm.each(array, function () {
            iterations++;
        });

        expect(iterations).toBe(5);
    });

    it('hm.extend() returns modified object', function () {
        var object1 = {variable1: 42};
        var object2 = {variable2: 'Hello World'};
        var actual = hm.extend(object1, object2);

        expect(actual).toBe(object1);
        expect(actual.variable1).toBe(42);
        expect(actual.variable2).toBe('Hello World');
    });

    it('hm.extend() modifies first object passed as an argument', function () {
        var object1 = {variable1: 42};
        var object2 = {variable2: 'Hello World'};

        hm.extend(object1, object2);

        expect(object1.variable1).toBe(42);
        expect(object1.variable2).toBe('Hello World');
    });

    it('hm.extend() only modifies the first argument', function () {
        var object1 = {variable1: 42};
        var object2 = {variable2: 'Hello World'};

        hm.extend(object1, object2);

        expect(object1.variable1).toBe(42);
        expect(object2.variable1).toBe(undefined);
    });

    it('hm.extend() overwrites existing variables', function () {
        var object1 = {variable: 'original'};
        var object2 = {variable: 'altered'};

        hm.extend(object1, object2);

        expect(object1.variable).toBe('altered');
    });

    it('hm.extend() merges objects with nested variables', function () {
        var object1 = {one: 1, nested: {two: 2}};
        var object2 = {three: 3, nested: {four: 4}, deep: {object: {five: 5}}};

        hm.extend(object1, object2);

        expect(object1.one).toBe(1);
        expect(object1.nested.two).toBe(2);
        expect(object1.three).toBe(3);
        expect(object1.nested.four).toBe(4);
        expect(object1.deep.object.five).toBe(5);
    });

    it('hm.extend() copies nested objects instead of references', function () {
        var object1 = {};
        var object2 = {variable: {one: 1}};

        hm.extend(object1, object2);

        object1['variable']['one'] = 2;

        expect(object2.variable.one).toBe(1);
    });
});
