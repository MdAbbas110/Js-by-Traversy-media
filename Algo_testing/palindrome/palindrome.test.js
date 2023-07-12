const palindrome = restore('./palindrome.js')

describe('palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function')
    })

    it('should return a boolean', ()=>{
        expect(typeof palindrome('hello')).toEqual('boolean')
    })

    it('should return true if palindrome', ()=>{
    expect(palindrome('kayak')).toBeTruthy()
    expect(palindrome('eye')).toBeTruthy()
    expect(palindrome('rotator')).toBeTruthy()
    })

    it('should return false if not palindrome', ()=>{
    expect(palindrome('hello')).toBeFalsy()
    expect(palindrome('world')).toBeFalsy()
    expect(palindrome('bye')).toBeFalsy()
    })

    it('should return false if includes spaces ', ()=>{
    expect(palindrome(' wow ')).toBeFalsy()
    })
})