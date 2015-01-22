describe 'Collection Functions', ->
    hm = window.hm

    it 'each: iterates over 5 items in an array', ->
        iterations = 0
        items = [1, 2, 3, 4, 5]

        hm.each items, ->
            iterations++

        expect(iterations).toBe(5)

    it 'each: iterates of all items in an object', ->
        obj =
            name: 'John'
            age: 42

        hm.each obj, (key, value) ->
            expect(['name', 'age'].indexOf(key)).toBeGreaterThan(-1)
            expect(['John', 42].indexOf(value)).toBeGreaterThan(-1)

    it 'extend: only modifies first object passed as an argument', ->
        obj1 =
            name: 'John'
        obj2 =
            age: 42

        hm.extend obj1, obj2

        expect(obj1.name).toBe('John')
        expect(obj1.age).toBe(42)
        expect(obj2.name).toBe(undefined)
        expect(obj2.age).toBe(42)

    it 'extend: returns modified object', ->
        obj1 =
            name: 'John'
        obj2 =
            age: 42

        result = hm.extend obj1, obj2

        expect(result.name).toBe('John')
        expect(result.age).toBe(42)

    it 'extend: overwrites existing variables', ->
        obj1 =
            name: 'John',
            age: 42
        obj2 =
            name: 'Fred'

        hm.extend obj1, obj2

        expect(obj1.name).toBe('Fred')
        expect(obj1.age).toBe(42)

    it 'extend: merges objects with nested variables', ->
        obj1 =
            person:
                name: 'John'
        obj2 =
            animal:
                type: 'duck'
            person:
                name: 'Fred'
                age: 42

        hm.extend obj1, obj2

        expect(obj1.person.name).toBe('Fred')
        expect(obj1.person.age).toBe(42)
        expect(obj1.animal.type).toBe('duck')

    it 'extend: extended objects are copies and not references', ->
        obj1 = {}
        obj2 =
            name: 'John'

        hm.extend obj1, obj2

        obj1.name = 'Fred'

        expect(obj2.name).toBe('John')