const removeEveryOther = require('./JS02removeEveryOther')

describe('removeEveryOther()', () => {
    it('returns [] when passed [1]', () => {
        expect(removeEveryOther([1])).toEqual([])
    }),
    it('returns [2, 4] when passed [1, 2, 3, 4]', () => {
        expect(removeEveryOther([1,2,3,4])).toEqual([2, 4])
    }),
    it('returns [22, 50] when passed [10, 22, 44, 50, 11]', () => {
        expect(removeEveryOther([10, 22, 44, 50, 11])).toEqual([22, 50])
    })
})