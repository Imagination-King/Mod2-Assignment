console.log("Hello World!")

/* 3 Examples of basic arithmetic in JS */
/*
console.log(6 * 7) //42
console.log(5 ** 2) //25
console.log(6 % 3) //0
*/
/* 2 Examples of declaring variables in JS*/
/*
let x = 5
var y = 6
let z = 3
console.log(x) //5
console.log(y) //6
console.log(z) //3
*/
/* 2 Examples of using variables in arithmetic operations in JS */
/*
let a = x + 5 //10
let b = y++ //6
let c = ++y //7
console.log(a)
console.log(b)
console.log(c)
*/

/*let myNum = "42"
myNum = Number(myNum)
console.log(myNum)
console.log(typeof myNum)*/

/*let str = 'world'
console.log(str)
let result = ''
for(let i = 1; i <= str.length; i++)
  result = result.concat(str.at(-i))
console.log(result)*/

/*num = 9119
let result = '';
let digit;
numStr = num.toString();
for(let i = 0; i < numStr.length; i++) {
  digit = parseInt(numStr.at(i))
  digit = Math.pow(digit, 2)
  result = result.concat(digit.toString())
}
console.log(result);*/

let text = "Visit W3 Schools";
let result = text.replace(/[aeiou]/ig, "!");
console.log(text, result)