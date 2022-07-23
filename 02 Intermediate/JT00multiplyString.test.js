const multiplyString = require('./JS00multiplyStrings')

describe('multiplyStreing()', () => {
    it('returns a type string', () => {
        expect(typeof multiplyString('2', '3')).toEqual('string')
    }),
    it('returns 6 when passed 2, 3', () => {
        expect(multiplyString('2', '3')).toEqual('6')
    }),
    it('returns 2070 when passed 30, 69', () => {
        expect(multiplyString('30', '69')).toEqual('2070')
    }),
    it('returns 2070 when passed 11, 85', () => {
        expect(multiplyString('11', '85')).toEqual('935')
    }),
    it('returns 0 when passed 2, 0', () => {
        expect(multiplyString('2', '0')).toEqual('0')
    }),
    it('returns 0 when passed 0, 20', () => {
        expect(multiplyString('0', '20')).toEqual('0')
    }),
    it('returns 20 when passed 0000001, 20', () => {
        expect(multiplyString('0000001', '20')).toEqual('20')
    }),
    it('returns 3027 when passed 1009, 03', () => {
        expect(multiplyString('1009', '03')).toEqual('3027')
    }),
    it('returns 5619135910 when passed 98765, 56894', () => {
        expect(multiplyString('98765', '56894')).toEqual('5619135910')
    })
})