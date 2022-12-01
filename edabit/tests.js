const newArray = appendObjTo(myArray, {hello: "world!"})

capt.push( [ (test.indexOf("#")-2), row])
// JavaScript program to add array into
// an object using push() function
  
// Creating a JS object to add array into
var Obj = {             
    arrayOne: ['Geeks', 'for', 'Geeks'],
    arrayTwo: [[3,4]]
};
  
// Array to be inserted
var arraynew = [1,2]; 
  
// Pushing of array into arrayTwo
Obj['arrayTwo'].push(arraynew);     
  
alert(Obj.arrayTwo);
      


// case 1
// case 2
// 4 side
// 4 height
// 5 shoots
// 1
// case 3
// inside function
// ____
// ____
// inside function
// ____
// undefined

// let result = text.indexOf("welcome");
    
//     while (counter === 0) {
//         cases = nums;
//         counter++;
//     } 
// while (counter === 1) {
        
//         counter++;
        
//         console.log(side + " side")
//         console.log(height + " height")
//         console.log(shoots + " shoots")
//         console.log(counter)
//     } 
// while ( counter <= 9 ){
//         counter++;
//         if(newCounter %2=== 1) {
//             boatChecker(nums,side,newCounter-1,boats1);
//             newCounter++;

//         } else {
//             boatChecker(nums,side,newCounter-1,boats2);
//             row++;
//             newCounter++;
//         }

// } 
//     while ( counter <= 14) {
//         counter++;
//         let cannon = (nums[0], nums[1])
//         if(boats1.length>=boats2.length) {
//             length = boats1.lenght} else {
//                 length = boats2.length
//             }
        
//         for(g=0; g<length; g++ ){
//             if(cannon === boats1[g]){
//                 player2++
//             }
//             if(cannon === boats2[g]){
//                 player1++
//             }
//         }
//     }
//         while (14< counter) {
            
//             if(player1> player2) {
//                 console.log("player one wins")
//                 counter = 0
//                 console.log("else ENNDDD " + counter  )
//             } else if (player2> player1) {
//                 console.log("player two wins")
//                 counter = 0
//                 console.log("else ENNDDD " + counter  )
//             } else {
//                 console.log("draw")
//                 counter = 0
//                 console.log("else ENNDDD " + counter  )
//             }
//         }
// }








let counter = 0;

  switch (true) {

    

    case counter === 0:
      console.log("first case");
      counter++
      break;

    case counter < 5:
      console.log("second case");
      counter++
      break;

    case counter < 10:
        counter++
        console.log("3rd case")
  }


// expected output: true

// let nameList = ["Will Smith",
// "Agent Smith",
// "Peter Pan",
// "Micky Mouse",
// "Minnie Mouse",
// "Peter Gunn"];

// // reverse all the names so that the last names are sorted,
// let reverse = [];

// for(a= 0; a< nameList.length; a++) {
//     reverse.push(nameList[a].split(" ").reverse().join(" "))
// }

// // sort the names
// reverse.sort()
// nameList= []

// // change the names back so first name is first
// for(a= 0; a< reverse.length; a++) {
//     nameList.push(reverse[a].split(" ").reverse().join(" "))
// }

// let finalList= []
// let found = 0
// console.log(reverse)
// //check the list for 2 or more first names
// for(c=0; c<nameList.length; c++) {
//    let name = nameList[c].split(" ")
//    for(d=0; d<nameList.length; d++) {
//        let testName = nameList[d].split(" ")
//        if(name[0] === testName[0]){
//            found +=1
//        }
//    }

//    if(found>1){
//        finalList.push(nameList[c])
//        found = 0
//    } else {
//        finalList.push(name[0])
//        found = 0
//    }
// }

// console.log(finalList)

// for(a=0; a<final.length; a++) {
//     let word = final[a]
//     let temp = word.split(" ")
//     console.log(temp[0])

//     for(m=1; m<final.length; m++) {
//         if(Text.search(temp))
//     }
// }

// const numbers = [1, 22, 33, 33, 33, 111, 111, 111, 33, 111, 111, 111, 111, 33, 33,33,111]
// let total = 1;
// let final = 0;
// for(a=0; a< numbers.length; a++) {
//     let testNumber = numbers[a]
//     for(i= a+1; i<numbers.length; i++){
//         if(testNumber === numbers[i]) {
//             total++
//         }
//     }

//     if(total> final) {
//         final = total
//         total = 1;
//     } else {
//         total = 1
//     }
// }

// console.log(final)

// let sumOfCubes= []
// let total = 0;
// for(a=0; a<sumOfCubes.length; a++){
//     total += (sumOfCubes[a] * sumOfCubes[a]* sumOfCubes[a])

// }
// console.log(total)

// const REGEXP = /\d{2}\:\d{2}/
// const REGEXP = /[^a-z0-9 ]/gi

// console.log("1234cba5678".match(/[^abc]/g))
// console.log("excludenumbers123".match(/[^1-3]/g))

// function filterArray(arr) {
// 	let newArray = [];
// 		for(a=0; a<arr.length; a++) {
//         if((!isNaN(arr[a])) && (typeof(arr[a])!="string")){
//             newArray.push(arr[a])
//         }
//     }
// 	return newArray
// }

// filterArray([1, 2, "a", "b", 54, 1])

// console.log(newArraay)

// //finding letters in string
// function charCount(myChar, str) {
// 	console.log( [...str].filter(x => x===myChar).length);
// }

// charCount("B", "o+¨jwqaoåaq'¨jgafkpk qermoomamoåadfabbb")

// function error(n) {

//     return n===1 ? "Check the fan: e1"
//           : n===2 ? "Emergency stop: e2"
//           : n===3 ? "Pump Error: e3"
//           : n===4 ? "c: e4"
//           : n ===5 ?"Temperature Sensor Error: e5"
// 	:101

// }

// function sortDrinkByPrice(drinks){

//     console.log( drinks.sort((a,b)=> a.price - b.price))
//    }

// sortDrinkByPrice([
//     {name: 'peach', price: 23},
// 	{name: 'lemonade', price: 90},
// 	{name: 'lime', price: 432},
//     {name: 'peach', price: 23},
//   ])

// function move(...steps) {
//     let cord = [0, 0];
//     let counter = 1;
//   for(var a = 0; a < steps.length; a++) {

//     if (counter === 1) {
//       cord[1] += steps[a];
//       console.log(cord + " counter: " + counter + " 1st")
//     } else if (counter ===2 ) {
//       cord[0] += steps[a];
//       console.log(cord + " counter: " + counter + " 2nd")
//     } else if (counter ===3) {
//       cord[1] -= steps[a];
//       console.log(cord + " counter: " + counter + " 3rd")
//     } else {
//       cord[0] -= steps[a];
//       console.log(cord + " counter: " + counter + " 4th")
//     }
//     counter++
//     if(counter ===5){
//         counter = 1
//     }
//   }
// console.log(cord)
// }

// move(1, 0, 2, 0, 3, 0, 4, 0, 5, 0)

// let test = -17

// let answer = [];

// if(test%2 != 0) {
//     console.log("wew")
//     let half = test / 2
//     answer.unshift(Math.ceil(half))
//     answer.unshift(Math.floor(half))

// } else {
//     let half = test / 2
//     answer.unshift(half)
//     answer.unshift(half)
// }

// console.log(answer)

// let arr1 = [1, 2, 3, 4];
// let arr2 = [0, 6];

// function canNest(arr1, arr2) {
// 	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

// let test = Math.min(...arr1)> Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ? "can": "cant test"
// console.log(test)

// let test = "this is a test\nSeems to work"

// for(a=0;  a<test.length; a++) {
//     console.log(test[a])
// }

// // function for finding type of tag Example html, css, text

// function analyzeContent(content) {
//     var result = { contentType: "" }
//     var detectHTML = /<[^!>]+>/;
//     var detectCSS = /[^}{\/]+ ?{/;
//     var match = 0;
//     if (detectHTML.test(content)) {
//         result.contentType = "HTML";
//         result.tags = {};
//         match = content.match(/<[^/ >!]+/gi) || [];
//         for (var i = 0; i < match.length; i++) {
//             var value = match[i].replace(/[<\s]+/, "");
//             result.tags[value] = (result.tags[value] == null) ? 1 : result.tags[value] + 1;
//         }
//     } else if (detectCSS.test(content)) {
//         result.contentType = "CSS";
//         result.cssTargets = {};
//         match = content.match(/([^%}{\/]+) ?{/gi) || [];
//         for (var i = 0; i < match.length; i++) {
//             var value = match[i].replace(/(\s*{|\n+\s*|^\s+)/g, "");
//             if (value != "") {
//                 result.cssTargets[value] = (result.cssTargets[value] == null) ? 1 : result.cssTargets[value] + 1;
//             }
//         }
//     } else {
//         result.contentType = "TEXT";
//         result.lineNumber = (content.match(/\n/g) || []).length + 1;
//     }
//     return result;
// }

// function tuckIn(arr1, arr2) {
// 	let arr3 = arr1.concat(arr2)
// 	arr3.sort()
// 	return arr3
// }

// tuckIn([1,2,3,4],[11,22,33,44])

// console(tuckIn())

// let test = [1, 7, 1, 7, 1, 7, 1]
// let total = 0
// for(a= 0; a< test.length; a++) {
//     if(test[a] === test[a+2] && test[a] != test[a+1]) {
//         total++
//     }
// }
// console.log(total)

// let sevenBoom = [71, 2, 3, 4, 5, 6];

// for(let a= 0; a<sevenBoom.length; a++) {
//     let testing = sevenBoom[a].toString()
//     if(testing.includes("7") === true){
//         console.log("true")
//     } else {

//     }
// }

// let better = 0;
// function isFirstSuperior(arr1, arr2) {

// 	for(let a = 0; a<arr1.length; a++){
//         if(arr1[a] >arr2[a]){
//             better++
//         }

//     }
//     if(better>0){
//         return true
//     } else {
//         return false
//     }
// }
// isFirstSuperior([1, 2, 4], [1, 2, 3]);
// console.log(better)

// let countTrue = ([ true, false, false, false]);
// let counter = 0
// for(let a= 0; a<countTrue.length; a++) {
//     if (countTrue[a] === true) {
//         counter++;
//     }
// }
// console.log(counter);
