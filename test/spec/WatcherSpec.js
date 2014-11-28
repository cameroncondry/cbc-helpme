describe('Debug watcher', function () {
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
});
