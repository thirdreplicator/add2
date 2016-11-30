import { expect } from 'chai'
import add2 from '../dist/'

describe('add2', function() {
  it('should add 2 numbers', function() {
    var result = add2(3, 4);
    expect(result).to.eql(7);
  })
})
