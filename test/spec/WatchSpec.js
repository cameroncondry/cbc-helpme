describe('Watch Functions', function () {
    var hm = window.hm;

    it('hm.watchMethod() does not modify non-function', function () {
        var test = {
            method: 42
        };

        hm.watchMethod(test, 'method', function () {});

        expect(test.method).toBe(42);
    });

    it('hm.watchMethod() intercepts object method', function () {
        var callbackCalled = false;
        var methodCalled = false;
        var test = {
            method: function () {
                methodCalled = true;
            }
        };

        hm.watchMethod(test, 'method', function () {
            callbackCalled = true;
        });

        test.method();

        expect(callbackCalled).toBe(true);
        expect(methodCalled).toBe(true);
    });

    it('hm.watchMethod() passes original arguments to interceptor', function () {
        var expectedArguments = [5, 10];
        var callbackArguments;
        var methodArguments;
        var test = {
            method: function () {
                methodArguments = Array.prototype.slice.call(arguments, 0);
            }
        };

        hm.watchMethod(test, 'method', function () {
            callbackArguments = Array.prototype.slice.call(arguments, 0);
        });

        test.method.apply(this, expectedArguments);

        expect(callbackArguments).toEqual(expectedArguments);
        expect(methodArguments).toEqual(expectedArguments);
    });
});
