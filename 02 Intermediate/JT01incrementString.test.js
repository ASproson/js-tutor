const incrementString = require('./JS01incrementString')

describe('incrementString', () => {
    it('returns type string', () => {
        expect(typeof incrementString('foo')).toEqual('string')
    }),
    it('returns foo1 when passed foo', () => {
        expect(incrementString('foo')).toEqual('foo1')
    }),
    it('returns foo43 when passed foo0042', () => {
        expect(incrementString('foo0042')).toEqual('foo43')
    }),
    it('returns foo100 when passed foo99', () => {
        expect(incrementString('foo99')).toEqual('foo100')
    }),
    it('returns foo2 when passed foo001', () => {
        expect(incrementString('foo001')).toEqual('foo2')
    })
})