

//spliting words
const potatoes = (str) => str.split("potato").length - 1;


// function timeForMilkAndCookies(date) {
// 	if(date.getUTCMonth() === 11 && date.getDate()=== 24){
// 		return true
// 	} else {
// 		return false
// 	}
// }
// let a = timeForMilkAndCookies(new Date(1980, 11, 24))

// console.log(a)

// function multiSum(num, ten=10) {
//     if (ten === 1){
//         return num
//     }
//     console.log( num * ten + (multiSum(num, ten-1)))
// }

// multiSum(20)

//leep year test
// console.log('--------------------');
// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//         console.log("1st January is being a Sunday  "+year);
//     }
// console.log('--------------------');


// remove first letter and add to back
// let word = "Brendan";
// let letter;
// let newword;

// function moveLetters() {
//   letter = word.charAt(0);
//   word = word.slice(1);
//   newword = word + letter;
//   word = newword;

//   console.log(newword);
// }
// setInterval(moveLetters, 2000);


// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0]; // assuming no other children
//   var text = textNode.data;

//   setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }



// // area of triangel
// let sideLength = [5,6,7]
// let a;
// let squared = 0;

// for (var i =0; i < sideLength.length; i++) {

//     a = sideLength[i];
//     squared += a*a;
// }

// console.log(Math.sqrt(squared).toFixed(2))

// // get time and date
// let date = new Date();
// let day = date.toLocaleDateString('en-us', { weekday:"long"});
// let time = date.toLocaleTimeString();

// console.log(day);
// console.log(time);
