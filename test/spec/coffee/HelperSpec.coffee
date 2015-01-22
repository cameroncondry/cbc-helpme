describe 'Collection Functions', ->
    hm = window.hm

    it 'proxy: define a custom context', ->
        class customContext

        method = hm.proxy customContext, ->
            return this

        expect(method()).toBe(customContext, 'Expected method to return instance of customContext')

    it 'watchMethod: does not modify non-function', ->
        test =
            method: 42

        hm.watchMethod test, 'method', ->

        expect(test.method).toBe(42)

    it 'watchMethod: intercepts object method', ->
        callbackCalled = false
        methodCalled = false

        test =
            method: ->
                methodCalled = true

        hm.watchMethod test, 'method', ->
            callbackCalled = true

        test.method()

        expect(callbackCalled).toBe(true, 'Expected watchMethod callback to be called')
        expect(methodCalled).toBe(true, 'Expected method to be called')