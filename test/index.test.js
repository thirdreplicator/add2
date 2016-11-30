var expect = require('chai').expect;
var add2 = require('..');

describe('add2', function() {
  it('should add 2 numbers', function() {
    var result = add2(3, 4);
    expect(result).to.eql(7);
  })
})
