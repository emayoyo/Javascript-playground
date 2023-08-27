/*
    Create 5 functions that calculate the following things:
    - square: will receive a (numeric) argument and return the square value of that argument.
    - half: will receive a (numeric) argument and return half of its value.
    - percent: it will receive two (numerical) arguments, it is necessary to calculate what percentage the first number represents from the second
    - area: you will receive a radius (numeric) argument, the area of ​​the circle with the given radius must be calculated. Optionally round the result to two decimal places

    - Finally, a function that receives a (numeric) argument and will perform the following operations:
    - It will apply the half function on the given argument and save the 'result' in a result variable
    - The result variable will be used as an input parameter for the square function, the result will be saved in the 'resultSquare' variable
    - The variable resultSquare will be used as the radius in the area function and the area of ​​the circle will be calculated 
        with the value of the radius equal to the variable resultSquare and the result will be saved in a variable 'resultArea'.
    - The percentage of the area (resultArea) in the square (resultSquare) is returned from the function

    - Optional: validate that the parameters sent are the correct date type (eg: numeric)

Example:
    - square, if we send parameter 4, the result must be 16;
    - for the half function, if we send parameter 7, the result must be 3.5
    - for the percent function, if we send the first parameter 3 and the second parameter 6, the result must be 50% (that is, 3 is 50% of 6)
    - for the area function, if we send radius 3, the area must be 28.274333
    - for the last function, if we send parameter 6, we will do the following operations:
    a) half of 6 = 3p
    b) square of 3 = 9
    c) the area of ​​the circle with radius 9 = 254 469
    d) the percentage of the square in the area (9 out of 257 469 represents 3.5367%)
*/

document.getElementById("functions").innerHTML = `<h2># Functions</h2>`;


function square(number) {
  return number * number;
}

let x1 = 2;
let xSquared = square(x1);
console.log(xSquared);
displayOnPage(`<p> ${x1} squared is: ${xSquared}</p>`);


function half(number) {
  return number / 2;
}
let x2 = 10;
let xHalf = half(x2);
console.log(xHalf);
displayOnPage(`<p>Half of ${x2} is: ${xHalf}</p>`);


function percent(num1, num2) {
  return (100 * num1) / num2;
}
let x3 = 3;
let y3 = 6;
let xyPercent = percent(x3, y3);
console.log(xyPercent);
displayOnPage(`<p> ${x3} percent of ${y3} is: ${xyPercent}%</p>`);


function area(radius) {
  return Math.PI * radius ** 2;
}

let x4 = 3;
let circleArea = area(x4);
console.log(circleArea);
displayOnPage(`<p>Area of a circle with radius ${x4} is: ${circleArea}</p>`);


function calculateParcentArea(number) {
  let result = half(number);
  let resultSquare = square(result);
  let resultArea = area(resultSquare);
  return percent(resultSquare, resultArea);
}
let initialNumber = 6;
let percentAriaFromHalfSquared = calculateParcentArea(initialNumber)
console.log();
displayOnPage(`<p>Percent area of half squared of ${initialNumber} is: ${percentAriaFromHalfSquared}%</p>`)




function displayOnPage(html) {
  document.getElementById("functions").innerHTML += html;
}
