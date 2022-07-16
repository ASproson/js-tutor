const canDivideBy = require('./JS00canDivideBy')

describe('canDivideBy()', () => {
    test('when passed 1, returns []', () => {
        expect(canDivideBy(1)).toEqual([])
    }),
    test('when passed 4, returns [1, 2]', () => {
        expect(canDivideBy(4)).toEqual([1, 2])
    }),
    test('when passed 5, returns [1]', () => {
        expect(canDivideBy(5)).toEqual([1])
    }),
    test('when passed 10, returns [1, 2, 5]', () => {
        expect(canDivideBy(10)).toEqual([1, 2, 5])
    })
})