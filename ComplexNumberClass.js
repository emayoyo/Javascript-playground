/*
Create two classes:
- one that defines a complex number (ex: ComplexNumber): this must contain two private attributes (ex: real and imaginary) and helper methods (ex: constructor, getter type methods ex: get realNumber, get imaginaryNumber)
- one that acts like a calculator (ex: ComplexCalculator): this class must receive two parameters of the class type defined in the previous point (ex: ComplexNumber) in the constructor, two private attributes in which to store the two complex numbers (ex : x and y) and four methods to calculate the sum, multiplication, difference and division of the 2 two complex numbers sent in the class constructor (eg function names: sum, multiply, difference, division and modulo).
Give an example for each operation (sum, difference etc.).
*/

// @TODO implement rest of the methods specified

class ComplexNumber {
    #realNumber;
    #imaginaryNumber;
    constructor(realNumber, imaginaryNumber) {
        this.#realNumber = realNumber;
        this.#imaginaryNumber = imaginaryNumber;
    }
    get realNumber(){
        return this.#realNumber;
    }
    get imaginaryNumber(){
        return this.#imaginaryNumber;
    }
}

class ComplexCalculator {
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sum(){
        const realSum = this.x.realNumber + this.y.realNumber;
        const imaginarySum = this.x.imaginaryNumber + this.y.imaginaryNumber;
        return new ComplexNumber(realSum, imaginarySum);
    }
    difference(){
        const realDiff = this.x.realNumber - this.y.realNumber;
        const imaginaryDiff = this.x.imaginaryNumber - this.y.imaginaryNumber;
        return new ComplexNumber(realDiff, imaginaryDiff);
    }
}

const complexNum1 = new ComplexNumber(2, 3);
const complexNum2 = new ComplexNumber(1, 2);
const calculator = new ComplexCalculator(complexNum1, complexNum2);
const sumResult = calculator.sum();
console.log('Sum', sumResult.realNumber, '+', sumResult.imaginaryNumber + 'i');