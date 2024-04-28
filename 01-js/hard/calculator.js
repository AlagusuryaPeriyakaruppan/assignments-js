/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  // The constructor method is a special method of a class for creating and initializing an object instance of that class.
  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result += n;
  }

  subtract(n) {
    this.result -= n;
  }

  multiply(n) {
    this.result *= n;
  }

  divide(n) {
    if(n===0){
      throw new Error("Division by zero is not allowed")
    }
    this.result /= n;
  }

  clear() {
    this.result = 0
  }

  calculate(expression){
    //trim the starting and trailing spaces and then remove all the occurences of spaces
    // \s+ : This is a regular expression pattern that matches one or more whitespace characters, including spaces, tabs, and newlines.
    expression = expression.replace(/\s+/g, '').trim();


  if(!/^[0-9+*/\-().]+$/.test(expression)){
      throw new Error("Invalid Expression")
  }

    if (expression.includes('/0')) {
      throw new Error('Division by zero is not allowed');
    }

   this.result = eval(expression)
  }


  getResult() {
    return this.result;
  }
}

// const calculator = new Calculator();
// calculator.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');

// console.log(calculator.getResult());

// const calculator2 = new Calculator();
// calculator2.calculate('10 / 0');

// console.log(calculator2.getResult());
module.exports = Calculator;
