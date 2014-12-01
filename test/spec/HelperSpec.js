describe('Helper Functions', function () {
    var hm = window.hm;

    it('hm.proxy() defines a custom context', function () {
        var customContext = function () {};
        var method = hm.proxy(function () {
            return this;
        }, new customContext());

        expect(method() instanceof customContext).toBe(true);
    });

    it('hm.trim() removes spaces from beginning and end of string', function () {
        expect(hm.trim(' Hello World ')).toBe('Hello World');
    });
});