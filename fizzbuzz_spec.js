var should = chai.should()
describe('function add', function () {
  it('若該整數能被 3 整除，回傳 Fizz', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })

  it('若該整數能被 5 整除，回傳 Buzz', function () {
    var result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })

  it('若該整數能被 3 和 5 同時整除，回傳 FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })

  it('若都不能整除，回傳該整數', function () {
    var result = fizzBuzz(16)
    result.should.be.equal(16)
  })
})