/////////////////////////////////////////////////////
// Refreshing Array functions
const numberArrayRefreshing = [1,2,3]
const doubleNumArray = numberArrayRefreshing.map((num) => {
    return num*2
});

console.log(numberArrayRefreshing )
console.log(doubleNumArray)

/////////////////////////////////////////////////////
// Reference and Primitive
const numberRef = 1;
const numberReference2 = numberRef;
console.log(numberReference2);

const personRef = {
    name : 'brendan'
};

const secondPerson = personRef;
//this will change the name 
personRef.name = "brendan changed name";
console.log(secondPerson);


const personRef2 = {
    name : 'brendan no change'
};

const secondPerson2 = {...personRef2};
//this wont change
personRef.name = "brendan changed name";
console.log(secondPerson2);

/////////////////////////////////////////////////////
// Destrucuring
// easily extracy array elements or object propertise and store them in variables

//array
[a,b] = ['Hello', 'Brendan']
console.log(a)
console.log(b)

const numberArray = [1,2,3];
[num1, ,num2] = numberArray;
console.log(num1, num2)

/////////////////////////////////////////////////////
// Spread and rest operator
// ...

const oldArray = [ 10, 9, 8];
const newArray = [ ...oldArray,1,2]

const oldObect = {name: 'brendan3', age: 4}
const newObject = {...oldObect, newProp:5}

console.log(newArray);
console.log(newObject);

function sortArgs(...args){
    return args.sort()
}

const filter = (...args) => args.filter(el => el === 1);

console.log("filter")
console.log(filter(1,2,3));
/////////////////////////////////////////////////////
// Classes properties and methods

/*
    Proterties are like "variables attached to classes/objects"

//  ES6
constructor() {
    this.myProperty ="value"
}

//  ES7
myProperty = "value"
*/


/*
    Methods are like "functions attached to classes/objects"

//  ES6
myMethod(){....}

//  ES7
myMethod = () => {...}
*/

class Human2 {
    gender2 = "male2";
    printGender2 = () => {
        console.log(this.gender2)
    }
}

class Person2 extends Human2 {
    name2 = "brendan2";
    printMyName2 = () => {
        console.log(this.name2);
    }
}

const person2 = new Person2();
person2.printGender2();
person2.printMyName2();

/////////////////////////////////////////////////////
// Classes
class Human {
    constructor(){
        this.gender = "male";
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    name = "Brendan"
    age = 4011
    constructor(){
        //super calls HUMAN class
        super();
        this.nickName = "Breno test"
    }
    printNickName(){
        console.log(this.nickName);
    }
    
}

const person = new Person();
person.printNickName();
person.printGender();
console.log(person.age)

/////////////////////////////////////////////////////
// let/const/var
var myName = "Brehipah";
console.log(myName);

let myAge = "23";
console.log(myAge);

// arrow function
let mytest = (a) => {
    b = a*4;
    console.log(b)
}
mytest(4)

const myDetails = (name, age) => {
    console.log(name, age);
}
myDetails("brendan", 40);

//long exmaple
const muliply = (number) => {
    return number * 20;
}
console.log(muliply(10));

//short example
const mult = n => n * 6;
console.log(mult(2));

