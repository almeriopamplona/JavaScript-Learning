/* ---------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SUM ALL NUMBERS IN A 
RANGE

We will pass you an array of two numbers. Return the sum 
of those two numbers plus the sum of all numbers between 
them. The lowest number will not always com first.

For example, sumAll([4,1]) should return 10 because sum of 
all the numbers between 1 and 4 (both inclusive) is 10
--------------------------------------------------------- */

// first solution:

function sumAll_1(arr){
	let obj = arr.sort((a,b) => a === b ? 0 : a < b ? -1: 1);
	
	let sum = 0;

	for(let i = obj[0]; i <= obj[1]; i++){
		sum += i;
	}	

	return sum;
}

console.log(sumAll_1([10,5]));

// second solution:

function sumAll_2(arr){
	let sum = 0;

	for(let i = Math.min(...arr); i <= Math.max(...arr);i++){
		sum += i;
	}

	return sum;
}

console.log(sumAll_2([10,5]));

/* ---------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: DIFF TWO ARRAYS

Compare two arrays and return a new array with any items 
only found in one of the two given arrays, but not both. In 
other words, return the symmetric difference of the two
arrays. 
--------------------------------------------------------- */

// first solution

function diffArray(arr1, arr2) {

  let newArr = [];

  for(let i = 0; i < arr2.length; i++){
    if(arr1.find(obj => obj == arr2[i]) == undefined){
    	newArr.push(arr2[i]);
    }
  }
  
  for(let i = 0; i < arr1.length; i++){
   	if(arr2.find(obj => obj == arr1[i]) == undefined){
     	newArr.push(arr1[i]);
    }
  }

  return newArr;
}

console.log(diffArray(
	["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]
	));

// second solution

function diffArray(arr1,arr2) {
	return arr1
		.concat(arr2)
		.filter(item => 
			!arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray(
	["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]
	));

/* ---------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SEEK AND DESTROY

You will be provided with an initial array (the first 
argument in the destroyer function), followed by one or 
more arguments. Remove all elements from the initial 
array that are of the same value as these arguments.
--------------------------------------------------------- */

function destroyer(arr, ...args){
	return arr.filter(obj => !args.includes(obj));
}	

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], 
	"tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", 
	"hotdog", 92, 65, "grandma", "bugati", "trojan", 
	"yacht"], "yacht", "possum", "trollo", "safari", 
	"hotdog", "grandma", "bugati", "trojan"));	

/* ---------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: WHEREFORE ART THOU

Make a function that looks through an array of objects (
first argument) and returns an array of all objects that
matching name and value pairs (second argument). Each name
and value of the source objects has to be present in the 
object from the collection if it is to be included in the
returned array.

For example, if the first arguments is [{first: "Romeo",
last: "Montague"}, {first: "Mercutio", last: null}, {
first: "Tybalt", last:"CApulet"}], and the second argument
is {last: "Capulet"}, then you must return the third 
object and its value, that was passed on as the second 
argument.
--------------------------------------------------------- */

function whatIsInAName(collection, source) {
 // new array
  	let arr = [];

 // array with the keys of source
  	let sourceKeys = Object.keys(source);

 // total number of keys in source 	
  	let maxKeys    = sourceKeys.length;

  	for(let i = 0; i < collection.length; i++){
  
     // make an array wiht the keys from collection[i]:
    	let aux   = Object.keys(collection[i]);

     // start a counter:   
    	let count = 0;

      /*
		Now, we want to compare if there is keys in 
		collection[i] equals to all keys in source, and 
		finally, we want to know if all values of those keys
		are equal.
     */   
       	for(let j = 0; j < maxKeys; j++){
    
        	if(aux.some(obj => obj === sourceKeys[j]) && 
          	   collection[i][sourceKeys[j]] == source[sourceKeys[j]]){
          		
          		count++

            }
        }

    	if(count == maxKeys){ arr.push(collection[i])}

    }

  	return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, 
	{ "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
	{ "apple": 1, "cookie": 2 }) );

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], 
	{"a": 1, "b": 9999, "c": 3}));

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
	{ first: "Mercutio", last: null }, 
	{ first: "Tybalt", last: "Capulet" }], 
	{ last: "Capulet" }));

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SPINAL TAP CASE

Convert a string to spinal case. Spinal case is all-lower-words-joined-by-
dashes.
---------------------------------------------------------------------------- */

function spinalCase(str) {
	
	return str.match(/[A-Z][a-z]+|[a-z][a-z]+/g)
		.filter(arr => arr !== '')
		.join("-").toLowerCase();

}

let strStudy = [
	'This Is Spinal Tap',
	'thisIsSpinalTap',
	'The_Andy_Griffith_Show',
	'Teletubbies say Eh-oh',
	'AllThe-small Things'	
];

console.log('\nSPINAL TAP CASE ------------------------------------------ \n');

for(let i = 0; i < strStudy.length; i++){

	console.log(spinalCase(strStudy[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: PIG LATIN

Pig Latin is a way of altering English Words. The rules are as follows:

- if a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add 'ay' to it.

- if a word begins with a vowel, just add 'way' at the end.
---------------------------------------------------------------------------- */

function translatePigLatin(str){

	let consonantRegex  = /^[^aeiou]+/i;

	if(consonantRegex.test(str)){

		let tempStr = str.match(consonantRegex);

		return str.split(consonantRegex)
			.filter(arr => arr !== '')
			.concat([tempStr,'ay'])
			.join('');
	} else {

		return str.split()
			.filter(arr => arr !== '')
			.concat(['way'])
			.join('');

	}
}

strStudy = [
	'california',
	'paragraphs',
	'glove',
	'algorithm',
	'eight',
	'schwartz',
	'rhythm'
];

console.log('\nPIG LATIN -------------------------------------------------\n');

for( let i = 0; i < strStudy.length; i++){

	console.log(translatePigLatin(strStudy[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SEARCH AND REPLACE

Perform a search and replace on the sentence using te arguments provided and 
return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Preserve the case of the first character in the original world when you are
replacing 
---------------------------------------------------------------------------- */

function myReplace(str, before, after){

	if (/^[A-Z]/.test(before)){

		return str.replace(new RegExp(before), after.replace(/^\w/,after[0]
			.toUpperCase()));

	} else {


		return str.replace(new RegExp(before), after.replace(/^\w/,after[0]
			.toLowerCase()));
	}	
}

let myStr = [
	'Let us go to the store',
	'He is Sleeping on the couch',
	'I think we should look up there',
	'This has a spellngi error',
	'His name is Tom',
	'Let us get back to more Coding'
];

let beforeStr = [
	'store',
	'Sleeping',
	'up',
	'spellngi',		
	'Tom',
	'Coding'
];

let afterStr = [
	'mall',
	'sitting',
	'Down',
	'spelling',
	'john',
	'algorithm'
]

console.log('\nSEARCH AND REPLACE-----------------------------------------\n');

for(let i = 0; i < myStr.length; i++){

	console.log( myReplace(myStr[i], beforeStr[i], afterStr[i]) );
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: DNA PAIRING 

The DNA strands is missing the pairing element. Take each character, get its 
pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided
character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [['G','C'],['C','G'],['G','C']].

The character and its pair are paired up in an array, and all the arrays are 
grouped into one encapsulating array. 
---------------------------------------------------------------------------- */

function pairElement(str){

	let tempArr = str.match(/\w/g);
	let result  = [];

	for(let i = 0; i < tempArr.length; i++){

		if(tempArr[i] === 'A'){

			result.push(['A','T']);

		} else if (tempArr[i] === 'T'){

			result.push(['T','A']);

		} else if (tempArr[i] === 'C'){

			result.push(['C','G']);

		} else if (tempArr[i] === 'G'){

			result.push(['G','C']);

		} else {

			return 'The sequence has some character different from A, T, C or G'; 
		}
	}

	return result;

}

let dnaFilLament = ['ATCGA','TTGAG','CTCTA'];

console.log('\nDNA PAIRING------------------------------------------------\n');

for(let i = 0; i < dnaFilLament.length; i++){

	console.log(pairElement(dnaFilLament[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: MISSING LETTERS

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
---------------------------------------------------------------------------- */

function fearNoLetter(str){

	let alphaToNum = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let numToAlpha = {
        1:'a' , 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 9:'i', 10:'j',
        11:'k', 12:'l', 13:'m', 14:'n', 15:'o', 16:'p', 17:'q', 18:'r', 19:'s',
        20:'t', 21:'u', 22:'v', 23:'w', 24:'x:', 25:'y', 26:'z'
    };

	let tempArr = str.match(/\w/g);

	for(let i = 0; i < tempArr.length-1; i++){
		if ( (alphaToNum[tempArr[i]] - alphaToNum[tempArr[i+1]]) < -1){
			
			return numToAlpha[alphaToNum[tempArr[i]] + 1];
		} 
	}

	return undefined;
}

let missingLetter = [
	'abce',
	'abcdefghjklmno',
	'stvwx',
	'bcdf',
	'abcdefghijklmnopqrstuvwxyz'
];

console.log('\nMISSING LETTERS--------------------------------------------\n');

for(let i = 0; i < missingLetter.length; i++){
	
	console.log(fearNoLetter(missingLetter[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SORTED UNION

Write a function that takes two or more arrays and returns a new array of
unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in 
their original, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final 
array should be not be sorted in numerical order.
---------------------------------------------------------------------------- */

// if instead of an array of arrays one set separated arrays, like:
// 
//		uniteUnique([1,2,3], [5,2,1], [7,8,9]);
//
// then, the functtion must be changed to:
//
//		function uniteUnique(...arr){}
//

function uniteUnique(arr){

	let tempArr = [...arr[0]];

	for(let i = 1; i < arr.length; i++){
		
		let auxArr = [...arr[i]];

		for(let j = 0; j < arr[0].length; j++){
			for(let m = 0; m < arr[i].length; m++){
				if(arr[0][j] == arr[i][m]){

					auxArr = auxArr.filter(aux => aux !== arr[i][m]);

				}
			}
		}

		tempArr = tempArr.concat(auxArr);
	}

	return tempArr;
}

let testArr = {
	first : [ [1,3,2], [5,2,1,4], [2,1] ],
	second: [ [1,2,3], [5,2,1] ],
	third : [ [1,2,3], [5,2,1,4], [2,1], [6,7,8] ]
};

console.log('\nSORTED UNION-----------------------------------------------\n');

for( test in testArr ){

	console.log( uniteUnique(testArr[test]) );	
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: CONVERT HTML ENTITIES

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
string to their corresponding HTML entities.

---------------------------------------------------------------------------- */

function convertHTML(str){


	if (/&/.test(str)){

		return str.replace(/&/g, '&amp;');

	} else if (/</.test(str)){

		let auxStr = str.replace(/</g, '&lt;');

		if (/>/.test(auxStr)){

			return auxStr.replace(/>/g,'&gt;');

		} else {

			return auxStr;

		}
	
	} else if (/>/.test(str)){

		let auxStr =  str.replace(/>/g, '&gt;');

		if (/</.test(auxStr)){

			return auxStr.replace(/</g,'&lt;');

		} else {

			return auxStr;
			
		}

	} else if (/"/.test(str)){

		return str.replace(/"/g, '&quot;');
	
	} else if (/'/.test(str)){

		return str.replace(/'/g, '&apos;');

	} else {

		return str;
	}

}

testArr = [
	'Dolce & Gabbana',
	'Hamburgers < Pizza < Tacos',
	'Sixty > twelve',
	'Stuff in "quotation marks"',
	'Schindler\'s List',
	'<>',
	'abc'
];

console.log('\nCONVERT HTML ENTITIES--------------------------------------\n');

for(let i = 0; i < testArr.length; i++){

	console.log(convertHTML(testArr[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SUM ALL ODD FIBONACCI NUMBERS

Given a positive integer num, return sum of all Fibonacci numbers that are less
than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number of Fibonacci sequence are 1, 1, 2, 3, 5 and 8. 

For example, sumFibs(10) should return 10, because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.
---------------------------------------------------------------------------- */

function sumFibs(num){

	function fibonacciGenerator(position){

		if (position <= 1){ return 1; }

		return fibonacciGenerator((position - 1)) + fibonacciGenerator((position - 2));
	}

	let fibonacciSequence = [];
	let sum = 0;

	for(let i = 0; i < num; i++){

		fibonacciSequence.push(fibonacciGenerator(i));

		if (fibonacciSequence[i] > num){ 
			
			break;

		} else if ( (fibonacciSequence[i] % 2) != 0 ){
			
			sum += fibonacciSequence[i];
		}

	}	
	return sum;
	//return fibonacciSequence;
}

console.log('\nSUM ALL ODD FIBONACCI NUMBERS------------------------------\n');

testArr = [1, 1000, 4000000, 4, 75024, 75025];
//         1, 1785, 4613732, 5, 60696, 135721

for(let i = 0; i < testArr.length; i++){

	console.log(sumFibs(testArr[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SUM ALL PRIMES

A prime number is a whole number greater than 1 with exactly two divisors: 1
and itself. For example, 2 is a prime number because it is only divisible by 1
and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less 
than or equal to num.
---------------------------------------------------------------------------- */

function sumPrimes(num){

	let primeSequence = [];
	let sum = 0;

	for(let i = 2; i <= num; i++){

		let isPrime = true;

		for(let j = 2; j < i; j++){

			if( ((i % j) === 0) && (j !== i) ){
			
				isPrime = false;
			}
		}

		if(isPrime){ 
			
			primeSequence.push(i); 
			
			sum += i; 
		}
	}

	return sum; 
}

testArr = [10, 977];

console.log('\nSUM ALL PRIMES---------------------------------------------\n');

for(let i = 0; i < testArr.length; i++){
	
	console.log(sumPrimes(testArr[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: SMALLEST COMMON MULTIPLE

Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 
3 that is also evenly divisible by all numbers between 1 and 3. The answer here
would be 6.
---------------------------------------------------------------------------- */

function gcd(a, b) { 
   	if (a === 0) return b;

   	return gcd(b % a, a); 
} 

function lcm(a,b) {
	
	if(a > b){

		return (a/gcd(a,b))*b;
		
	} else {

		return (b/gcd(a,b))*a;
	}
}

function smallestCommons(arr){

	let tempArr = [];

	let sortedArr = arr.sort((a,b) => a === b ? 0 : a < b ? -1: 1);

	for(let i = arr[0]; i < arr[1]; i++){

		tempArr.push(lcm(i,i+1));
	}		

	if (tempArr.length > 1){

		while (tempArr.length > 1) {

			let auxArr = [];

			for(let i = 0; i < tempArr.length - 1; i++){

				auxArr.push(lcm(tempArr[i],tempArr[i+1]));
			}

			tempArr = [...auxArr];
		}
	}

	return tempArr[0];
}

console.log('\nSMALLEST COMMON MULTIPLE-----------------------------------\n');

testArr = [[1,5],[5,1],[2,10],[1,13],[23,18]];
//           60,   60,  2520, 360360, 6056820
for(let i = 0; i < testArr.length; i++){
	
	console.log(smallestCommons(testArr[i]));
}	


/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: DROP IT

Given the array arr, iterate through and remove each element starting from 
the first element (the 0 index) until the function returns true when the 
iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array. 
---------------------------------------------------------------------------- */

function dropElements(arr, func){

	let tempArr = [...arr];

	for( let i = 0; i < arr.length; i++){

		if(func(arr[i])){

			return tempArr;

		} else {

			tempArr.shift(arr[i]);
		}
	}

	return tempArr;
}

testArr = [
	[1, 2, 3, 4],
	[0, 1, 0, 1],
	[1, 2, 3],
	[1, 2, 3, 4],
	[1, 2, 3, 7, 4],
	[1, 2, 3, 9, 2],
	[1,2,3]
];

let testFunctions = [
	function(n) {return n >= 3; },
	function(n) {return n === 1;},
	function(n) {return n > 0;  },
	function(n) {return n > 5;  },
	function(n) {return n > 3;  },
	function(n) {return n > 2;  },
	function(n){return n < 3;   },	
]

console.log('\nDROP IT----------------------------------------------------\n');

for(let i = 0; i < testArr.length; i++){

	console.log(dropElements(testArr[i], testFunctions[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: STEAMROLLER

Flatten a nested array. You must account for varying levels of nesting.
---------------------------------------------------------------------------- */

function steamrollArray(arr){

	let tempArr = [];

	let flatten = function(arg){

		if(!Array.isArray(arg)){

			tempArr.push(arg);
		
		} else {

			for (let index in arg) {

				flatten(arg[index]);
			}
		}
	}

	arr.forEach(flatten);

	return tempArr;
}


testArr = [
	[ [['a']], [['b']] ],
	[ 1, [2], [3, [[4]]] ],
	[ 1,  [], [3, [[4]]] ],
	[ 1,  {}, [3, [[4]]] ],
];

console.log('\nSTEAMROLLER------------------------------------------------\n');

for( let i = 0; i < testArr.length; i++){

	console.log(steamrollArray(testArr[i]));
}


/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: BINARY AGENTS

Return an English translated sentence of the passed bunary string.

The binary string will be space separated.
---------------------------------------------------------------------------- */

function binaryAgent(str){

	return str.match(/\d+/g)
		.map(arr => arr = String.fromCharCode(parseInt(arr, 2)))
		.join('');		
}

testArr = [
	'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111',
	'01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
];

console.log('\nBINARY AGENTS----------------------------------------------\n');

for(let i = 0; i < testArr.length; i++){
	
	console.log(binaryAgent(testArr[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: EVERYTHING BE TRUE

Check if the predicate (second argument) is truthy on all elements of a 
collection (first argument).

In other words, you are given an array collection of objects. The predicate pre
will be an object property and you need to return true if its value is truthy. 
Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated 
in Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
---------------------------------------------------------------------------- */

function truthCheck(collection, pre){

	for(let i = 0; i < collection.length; i++){

		if(!collection[i].hasOwnProperty(pre)){ return false;}

		if(collection[i][pre] === 0   || collection[i][pre] === null || 
		   collection[i][pre] === ""  || collection[i][pre] === []   ||
		   collection[i][pre] === 'no'|| collection[i][pre] === undefined)
		   {return false;}

		if((typeof collection[i][pre] !== 'string') && 
			isNaN(collection[i][pre])){ return false; }
	}

	return true;
}

console.log('\nEVERYTHING BE TRUE-----------------------------------------\n');


testArr = [
	[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
	 {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],

	[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, 
	 {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],

	[{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", 
	  "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5},
	  {"user": "Po", "sex": "female", "age": 4}],

	[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, 
	 {"name": "FastForward", "onBoat": null}],

	[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true,
	 "alias": "Repete"}, {"name": "FastForward", "onBoat": true}],

	[{"single": ""}, {"single": "double"}],

	[{"single": "double"}, {"single": undefined}],

	[{"single": "double"}, {"single": NaN}],
];

let testProperty = ['sex', 'sex','age', 'onBoat','onBoat', 'single', 'single', 
	'single', 'single'];

for(let i = 0; i < testArr.length; i++){
	
	console.log(truthCheck(testArr[i],testProperty[i]));
}

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: ARGUMENTS OPTINAL 

Create a function that sums two argumnts together. If only one argument is 
provided, then return a function that expects one argument and returns the sum.

for example, 
---------------------------------------------------------------------------- */

function addTogether(num1, num2){

	if(num2 !== undefined){

		if (typeof num1 == 'number' && typeof num2 == 'number'){

			return num1 + num2;	
		
		} else {

			return undefined;
		}
		

	} else {

		if (typeof num1 == 'number'){ 

			return function(num3) {
				
				if (typeof num3 == 'number'){
					
					return num1 + num3;

				} else {

					return undefined;
				}
			}

		
		} else {

			return undefined;
		}
	}
}

console.log('\nARGUMENTS OPTINAL------------------------------------------\n');

console.log(addTogether(2,3));
console.log(addTogether(23,30));
console.log(addTogether(5)(7));
console.log(addTogether('http://bit.ly/IqT6zt'));
console.log(addTogether(2)('3'));
console.log(addTogether(2)([3]));

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: MAKE A PERSON

Fill in the object constructor with the following methods below:

getFirstName();

getLastName();

getFullName();

setFirstName(first);

setLastName(last);

setFullName(firstAndLast);

---------------------------------------------------------------------------- */

var Person = function(firstAndLast) {


	this.getFirstName = function(){
  		
  		return firstAndLast.split(' ')[0];
  	};

  	this.getLastName = function(){

  		return firstAndLast.split(' ')[1];
  	};

 	this.getFullName = function() {
    	
    	return firstAndLast;
  	};

  	this.setFirstName = function(first){

  		firstAndLast = [first, firstAndLast.split(' ')[1]].join(' ');
  	}

  	this.setLastName = function(last){

  		firstAndLast = [firstAndLast.split(' ')[0],
  			last].join(' ');
  	}

  	this.setFullName = function(newFirstAndLast){

  		firstAndLast = newFirstAndLast;
  	}
  	return firstAndLast;
};

console.log('\nARGUMENTS OPTINAL------------------------------------------\n');

let bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

// Setting last name function test:
bob.setLastName('Curry');        // function callback

console.log(bob.getFullName());  // printing  

bob.setLastName('Ross');         // correcting to the original state

// --------------------------------------------------------------------------//
// Setting first name function test:
bob.setFirstName('Haskell');     // function callback

console.log(bob.getFullName());  // printing 

bob.setFirstName('Bob');         // correcting to the original state

// ------------------------------------------------------------------------- //
// Setting full name function test:
bob.setFullName('Haskell Curry');

console.log(bob.getFullName());

/* ----------------------------------------------------------------------------
INTERMEDIATE ALGORITHM SCRIPTING: MAP THE DEBRIS

Return a new array that transforms the elements' average altitude into their 
orbital periods (in seconds).

The array will contain objects in format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being 
orbited is Earth  
---------------------------------------------------------------------------- */

function orbitalPeriod(arr) {

	let tempArr = [...arr];

	const GM             = 398600.4418;
	const pi             = Math.PI;
	const earthRadius    = 6367.4447;
	const semiMajorAxis  = arr.map(aux => aux['avgAlt'] + earthRadius);
	const semiMajorAxis3 = semiMajorAxis.map(aux => Math.pow(aux,3));

	for(let i = 0; i < tempArr.length;i++){

		tempArr[i]['orbitalPeriod'] = Math.round(2.0*pi*Math.sqrt(
		semiMajorAxis3[i]/GM));
	
		delete tempArr[i]['avgAlt'];
	}

	return tempArr;
}

console.log('\nARGUMENTS OPTINAL------------------------------------------\n');

testArr = [
	[{name: "sputnik", avgAlt: 35873.5553}],
	[{name: "iss"    , avgAlt: 413.6     }, 
	 {name: "hubble" , avgAlt: 556.7     }, 
	 {name: "moon"   , avgAlt: 378632.553}]
]
console.log(testArr.map(aux => orbitalPeriod(aux)))
