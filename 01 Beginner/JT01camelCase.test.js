const camelCase = require('./JS01camelCase')

describe('camelCase()', () => {
    it('returns thisSentence when passed this sentence', () => {
        expect(camelCase('this sentence')).toEqual('thisSentence')
    }),
    it('returns brownFoxJumpsOverMonkey when passed brown fox jumps over monkey', () => {
        expect(camelCase('brown fox jumps over monkey')).toEqual('brownFoxJumpsOverMonkey')
    }),
    it('returns helloWorldItsMe when passed hello world its me', () => {
        expect(camelCase('hello world its me')).toEqual('helloWorldItsMe')
    })
})