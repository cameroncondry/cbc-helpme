beforeEach(function () {
    jasmine.addMatchers({
        toBeFalseForAllOtherTypes: function () {
            return {
                compare: function (original, types) {
                    var valid = true;

                    for (type in types) {
                        // capitalize type for method name
                        var method = 'is' + (type.charAt(0).toUpperCase() + type.slice(1));

                        if (method !== original) {
                            // run each type through original method
                            if (false !== hm[original](types[type])) {
                                expect(original + '(' + type + ')').toBe(false);
                                valid = false;
                            }
                        }
                    }

                    return {
                        pass: valid
                    };
                }
            };
        }
    });
});
