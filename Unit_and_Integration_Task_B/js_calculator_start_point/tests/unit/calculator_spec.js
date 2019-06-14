var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // UNIT TESTS

  // Can add
  it('it can add two numbers together', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  })

  // Can Subtract
  it('it can subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  // Can multiply
  it('it can multiply two numbers together', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  // Can divide
  it('it can divide two numbers together', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  // INTEGRATION TESTS

  // Number Click
  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(6);
    calculator.numberClick(9);
    assert.equal(69, calculator.runningTotal);
  })

  // Operator Click
  it('it can chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(24, calculator.runningTotal);
  })

  // Clear Click
  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(21, calculator.runningTotal);
  })


});
