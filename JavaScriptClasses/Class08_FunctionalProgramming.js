/* ---------------------------------------------------------
	FUNCTIONAL PROGRAMMING

	finctional programming is a style programming where
	solutions are simple, isolated funcitons, without any
	side effects outside of the scope.

	INPUT -> PROCESS -> OUTPUT

	Functional programming is about:

	1) Isolated functions - there is no dependece on the 
	state of the program, which includes global variables
	that are subjects to change;

	2) Pure functions - the same input always gives the
	same output;

	3) Functions with limited side effects - any changes,
	or mutations, to the state of the program outside the 
	function are careffully controlled
--------------------------------------------------------- */
// Function that returns a string representing a cup of   //
// green tea (inline function )                           //
const prepareTea = () => 'greenTea';                      
                                                          
// Give a function (representing the tea type) and number //
// of cups needed, the following function returns an ar-  //
// ray of strings (each representing a cup of a specific  //
// type of tea).                                          //

const getTea = (numOfCups) => {
	const teaCups = [];

	for(let cups = 1; cups <= numOfCups; cups++) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
}

// Now we call getTea funcution to get 40 cups of tea for //
// the team, and store them in the tea4TeamFCC variable.  //

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);

/* ---------------------------------------------------------
	FUNCTIONAL PROGRAMMING: UNDERSTAND FP TERMINOLAGY

	The FCC Team had a mood swing and now wants two types
	of tea: green tea and black tea. General Fact: Client
	mood swings are pretty common.

	With that information, we'll need to revisit the getTea
	function. We can modify getTea to accept a function as
	a parameter to be able to change the type of tea it
	prepares. This makes getTea more flexible, and gives 
	the programmer more control when client requests 
	change.

	But first, let's cover some functinal terminology:

	Callbacks: are functions that are slipped or passed
	into another function to decide the invocation of that
	function. You may have seen them passed to another
	methods, for example in filter, the callback function 
	tells JavaScript the criteria for how to filter an ar-
	ray. 

	Functions that can be assigned to a variable, passed 
	into another function, or returned from another 
	function just like any other normal value. are called
	first class functinos. In JavaScript. all funcitons are 
	first class functions. 

	The functions that take a funcitno as an argument, or
	return a function as a return valire are called higher 
	order functions.

	When the functions are passed in to another function 
	or returned from another function, then those which gets
	passed in or returned can be called a lambda.
--------------------------------------------------------- */

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTeaOptions = (prepareTea, numOfCups) => {
	const teaCups = [];

	for(let cups = 1; cups <= numOfCups; cups++){
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}

	return teaCups;
};   

let tea4GreenTeamFCC = getTeaOptions(prepareGreenTea, 27);
let tea4BlackTeamFCC = getTeaOptions(prepareBlackTea, 13);

console.log("Number of black teas are " + 
    tea4BlackTeamFCC.length + ".");
console.log("Number of green teas are " + 
	tea4GreenTeamFCC.length + ".");

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: UNDERSTAND THE HAZARDS OF USING IM-
PERATIVE CODE

FP is a good habit. It keeps your code easy to manage, and 
saves you from sneaky bugs. But before we get there. let's
look at an imperative approach to programming to highlight 
where you may have issues.

In English (and many other languages), the imperative 
tense is used to give commands. Similarly, an imperative
style in programming is one that gives the computer a set
of statements to perform a task.

Often the statements change the state of the program, like
updating global variables. A classic example i writing a 
for loop that gives exact directions to iterate over the 
indices of an array.

IN contrast, FP is a form of declarative programming. You 
tell the computer what you want done by calling a method 
or a function.

JavaScript offers many predifined methods that handle 
common tasks so you don't need to write out how the com-
puter should perform them. For example, instead of using
the for loop, you should call the map method which handles
the details of iterating over an array. This helps to 
avoid semantic errors, like the "OffByOneErros" that were 
covered in the Debugging section.

Consider the scenario: you are browsing the web in your 
browser, and want to track the tabs you have opened. Let's
try to model this using some simple object-oriented code.

A window object is made up of tabs, and you usually more 
than one window open. The titles of each site in each 
Window object is held in an array. After working in the 
browser (opening new tabs, merging windows, and closing
tabs), you want to print the tabs that are still open. 
Closed tabs are removed from the array and nw tabs (for 
simplicitye) get added to the end of it.

The code editor shows an implementation of this functio-
nality with functions for tabOpen(), tabClose(), and 
join(). The array tabs is part of the Window object that 
stores the name of the open pages.	
--------------------------------------------------------- */

// Creating the objet named Window, which has essencially //
// the array with all opened tabs. This means that we ne- //
// basically an instance named tabs to allocate this array//

var Window = function(tabs){
	
	this.tabs = tabs;
}

// Now, we want a method to join or merge different lists//
// of opened tabs. So, the  Parent Object has a property //
// such that a Child Object can receive another Child    //
// Object and concacnate the first with the second.      //

Window.prototype.join = function(otherWindow){
	
	this.tabs = this.tabs.concat(otherWindow.tabs);
	
	return this;
};

// The tabOpen will just open a new fresh tab             //

Window.prototype.tabOpen = function(tab){
	this.tabs.push('new tab');
	return this;
};

// tabClose will split the tab array into two parts: befo-//
// the tab we adressed to close and after this tab. Then, //
// we build a new array with just these two parts and     //
// assignment it to our tab variable.                     //

Window.prototype.tabClose = function(index){

	this.tabs.splice(index,1);

	return this;
};

// Now let's create a work browser window:                //

var workWindow = new Window([
	'GMail', 
	'Inbox', 
	'Work mail', 
	'Docs', 
	'freeCodeCamp'
]);

// Then a social media browser window:                     //

var socialWindow = new Window([
	'FB', 
	'Gitter', 
	'Reddit', 
	'Twitter', 
	'Medium'
]); 

// Finally a video browser window:

var videoWindow = new Window([
	'Netflix', 
	'YouTube', 
	'Vimeo', 
	'Vine'
]);

var finalTabs = socialWindow
	.tabOpen()
	.join(videoWindow.tabClose(2))
	.join(workWindow.tabClose(1))
	.tabOpen();

console.log(finalTabs);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: AVOID MUTATIONS AND SIDE EFFECTS
USING FP

In the previous example, the function splice() changed the 
variable that we called or something in the object.

One of the core principles of functional programming is to 
not change things. Changes lead to bugs. It's easier to 
prevent bugs knowing that ypur functions don't change 
anything, including the function arguments or any global 
variable.

Recall that in FP, changing or altering things is called
"mutation", and the outcome is called a "side effect". A
function, ideally, should be a "pure function", meaning
that it does not cause any side effects.

Now, fill in the code for the function "incrementer" so it 
returns the value of the global variable "fixedValue" 
increased by one.	
--------------------------------------------------------- */

var fixedValue = 4;

function incrementer(){
	return fixedValue + 1;
}

console.log(incrementer());

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: OASS ARGUMENTS TO AVOID EXTERNAL 
DEPENDENCE IN A FUNCTION

We did not alter the global variable value, but the 
function incrementer would not work without the global 
variable fixedValue being here.

Another principal of functional programming it to always 
declare your dependencies explicitly. This means if a 
function depends on a variable or object being present, 
then pass that variable or object directly into the func-
tion as an argument.

The are several good consequences from this principal. The 
function is easier to test, you know exactly what input it 
takes, and it won't depend on anything else in your 
program.

This can give you more confidence when you alter, remove, 
or add new code. You would know what you can or cannot 
change and you can see where the potential traps are.

Finally, the function would always produce the same output
for the same set of inputs, no matter what part of the 
code executes it.
--------------------------------------------------------- */

function incrementer(arg){
	return arg + 1;
}

console.log(incrementer(fixedValue));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: REFACATOR GLOBAL VARIABLES OUT OF 
FUNCTIONS

So far, we have seen two distinc principles for functional
programming:

1) Do not alter variable or object - create new variables
and objects and return them if need be from a function;

2) Declare function arguments - any computation inside a 
function depends only on the arguments, not on any global
object variable.

Adding one number is not very exciting, but we can apply 
these principles when working with arrays or more complex
objects.
--------------------------------------------------------- */

let bookList = [
	"The Hound of the Baskervilles", 
	"On The Electrodynamics of Moving Bodies", 
	"Philosophiæ Naturalis Principia Mathematica", 
	"Disquisitiones Arithmeticae"];

function add(bookName,bookList){
	let aux = [...bookList];
	aux.push(bookName);
	return aux;
}

function remove(bookName, bookList){
	let aux = [...bookList];
	let index = aux.indexOf(bookName);
	if (index >= 0){
			
		aux.splice(index,1);
			
		return aux;
	}	
	
	console.log(bookName+" does not exist in this list.");
}

console.log(add("Proud and Prejudice", bookList));
console.log(remove("Philosophiæ Naturalis Principia Mathematica", 
	bookList));
remove("Adidas", bookList);

console.log(bookList);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE THE METHOD TO EXTRACT DATA FROM
AN ARRAY

So far we learned to use pure functions to avoid side 
effects in a program. Also, we have seen the value in ha-
ving a function only depend on its input arguments.

This is only the beginning. As its names suggests, func-
tional programming is centered around a theory of func-
tions.

It would make sense to be able to pass them as arguments
to other functions, and return a function from another
function. Functions are considered first class objects in
JavaScript, which means they can be used like any other
object. They can be saved in variables, stored in an
object, or passed as function arguments.

Let's start with some simple array functions, which are 
methods on the array object prototype. In this exercise
we are looking at Array.prototype.map(), or more simply
map.

The map method iterates over each item in an array and 
returns a new array containing the result of calling the 
callback function on each element. It does this without 
mutating the original array.

When the callback is used, it is passed three arguments. 
The first argument is the current element being processed.
The second is the index ot that element and the third is
the array upon which the map method was called.
--------------------------------------------------------- */

let watchList = [
{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(arr => 
	({
		"title" : arr.Title,
	 	"rating": arr.imdbRating
	}) 
);

console.log(ratings);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: INMPLEMENT MAP ON A PROTOTYPE

As you have seen from applying Array.prototype.map(), or 
simply map() earlier, the map() method returns an array 
of the same length as the on it was called pn. It also 
does not alter the original array, as long as its callback
function does not.

In other words, map() is a pure function, and its output 
depends solely on its inputs. Plus, it takes another 
function as its argument.

It would teach us a lot about map to try to implement a 
version of it that behaves exactly like the Array.proto-
type.map() with a for loop or Array.prototype.forEach().

Note: a pure function is allowed to alter local variables 
defined within its scope, although, it's preferable to 
avoid that as well.
--------------------------------------------------------- */


Array.prototype.myMap = function (callback){

	let newArr = [];

	for(let i = 0; i < this.length; i++){
		newArr.push(callback(this[i]));
	}  

	return newArr;
};

console.log( watchList.myMap( arr => 
	({"title": arr.Title, 
	  "rating": arr.imdbRating
	}) 
));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE THE FILTER METHOD TO EXTRACT 
DATA FROM AN ARRAY

Another useful array function is Array.prototype.filter(),
or simply filter().

filter() calls a function on each element of an array and 
returns a new array containing only elements for which 
that function returns true. IN other words, it filters the
array, based on the function passed to it. Like map, it 
does this without needing to modify the original array.

The callback function accepts three arguments. The first 
argument is current element being processed. The second
is the index of that element and the third is the array 
upon which the filter method was called.

--------------------------------------------------------- */

const filteredList = watchList.map( arr => 
	({"title": arr.Title, 
	  "rating": arr.imdbRating
	}) 
).filter(arr => arr.rating >= 8.0);

console.log(filteredList);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: IMPLEMENT THE FILTER METHOD ON A 
PROTOTYPE

It would teach us a lot about the filter method if we try
to implement a version of it that behaves exactly like 
Array.prototype.filter(). It can use either for loop or 
Array.prototype.forEach().
--------------------------------------------------------- */

Array.prototype.myFilter = function(callback){
	let newArr = [];

	for(let i = 0; i < this.length; i++){
		if( callback(this[i]) ){ newArr.push(this[i]) };
	}
	return newArr;
};

console.log( watchList.myMap( arr => 
	({"title": arr.Title, 
	  "rating": arr.imdbRating
	})
).myFilter(arr => arr.rating >= 8.0));


/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: RETURN PART OF AN ARRAY USING THE 
SLICE METHOD

The slice method retunrs a copy of certain elements of an 
array. It can take two arguments, the first gives the 
index of where to begin the slice, the second is the index 
for where to end the slice (and it1s non inclusive). If 
the arguments are not provided, the default is to start at
the beginning of the array through the end, which is an 
easy way to make a copy of the entire array. The slice
method does not mutate the original array, but returns a 
new one.
--------------------------------------------------------- */

let anim    = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
let newAnim = anim.slice(1,3);

console.log(newAnim);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: REMOVE ELEMENTS FROM AN ARRAY 
USING SLICE INSTEAD OF SPLICE

A common pattern while working with array is when you want
to remove items and keep the rest of the array.JavaScript 
offers the splice method for this, which takes arguments 
for the index of where to start removing items, then the 
number of items to remove. If the second argument is not 
provided, the default is to remove items through the end.
However, splice method mutates the original array it 
called on. 

AS we saw, the slice method does not mutate the original 
array, but return a new one which can be saved into a va-
riable. Recall that the slice mehtod takes two arguments
for the indices to begin and end the slice, and returns 
those items in a new array. Using the slice method instead
of splice helps avoid any array-mutating side effets.
--------------------------------------------------------- */

function nonMutatingSplice(cities, index, num){

	if (num > 0){
		let beforeIndex = cities.slice(0,index);
		let afterIndex  = cities.slice(index+num, 
			cities.length);
		return beforeIndex.concat(afterIndex);
	} else if (num === 0) {
		return cities;
	} else if (num === undefined){
		return cities.slice(0,index);
	}
}

let inputCities = ["Chicago", "Delhi", "Islamabad", "London", 
	"Berlin"];

//inputCities.splice(4,0);

//console.log(inputCities);

console.log(nonMutatingSplice(inputCities,3,1));
console.log(inputCities);

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE THE REDUCE METHOD TO ANALYZE 
DATA

Array.prototype.reduce(), or simply reduce(). is the most 
general of all array operations in JavaScript. You can 
solve almost any array processing problem using the reduce 
method.

The reduce method allows for more general forms of array 
processing, and it's possibl to show that both filter and 
map can be derived as special applications of reduce. The 
reduce iterates over each item in an array and returns a 
single value (string, number, object, array). This achieved
via a callback function htat is called on each iteration.

The callback function accepts four arguments. Ther first 
argument is known as the accumulator, which gets assigned
the return value of the callback function from the pre-
vious iteration, the second is the current element being 
processed, the third is the index of that element and the 
fouth is the array which reduce is called.

In addition to the callback function, reduce has an add-
tional paramenter which takes an initial value for the ac-
cumulator. If this seconf parameter is not used, then the 
first iteration is skipped and the second iteration gets
passed the first element of the array as the accumulator.

See below for an example using reduce on the users array:

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum 
+ user.age, 0);
console.log(sumOfAges); // 64

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, 
                             camperCat: 10 }
--------------------------------------------------------- */

function getRating (object){
    
    let callback1 = arr => (
    	{ "director": arr.Director, 
	  	  "rating": arr.imdbRating*1
		})
    let callback2 = arr => arr.director === "Christopher Nolan";
    let callback3 = (sum, arr) => sum + arr.rating

	let averageRating = object.map(callback1)
		.filter(callback2);

	let total = averageRating.length;	
	
	averageRating = averageRating.reduce(callback3, 0.0);

	return averageRating/total;
}

console.log(getRating(watchList));


function getRating2(object){

	/*
		If we want a counter, we must always instaciate it 
		out of .reduce(). Furthermore, every condition must
		return the accumulator inside the "if" and out the 
		"if".
	*/
	let count = 0;

	let averageRating = object.reduce((sum,arr) => {
		if (arr.Director === "Christopher Nolan"){
			count+=1;
			return sum + arr.imdbRating*1;
		}
		return sum;
	}, 0)

	return averageRating/count;
}

console.log(getRating2(watchList));



/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE HIGHER-ORDER FUNCIONS MAP, 
FILTER, OR REDUCE TO SOLVE COMPLEX PROBLEM

Now that you have worked through a few challenges using 
higher-order functions like map(), filter(), and reduce(), 
you now get to apply them to solve a more complex challenge.

We have definde a function named squareList. You need to 
complete the code for the squareList function using any com-
bination of map(), filter(), and reduce() so that it returns 
a new array containing only the square of only the positive
integers (decimal numbers are not integers) when an array
of real numbers is passed to it an axample of an array con-
taining only real numbers is [-1, 4, 8, 5, 3, -3.2].

--------------------------------------------------------- */

function squareList(arr) {

	let obj = arr.filter(aux => Number.isInteger(aux) 
		&& aux >= 0)
	    .map(aux => Math.pow(aux,2));
    
    return obj;
}

let listRealNumbers = [-1, 4, 8, 5, 3, -3.2];

console.log(squareList(listRealNumbers));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: SORT AN ARRAY ALPHABETICALLY USING 
THE SORT METHOD

The sort method sorts the elements of an array according to
the callback function.

--------------------------------------------------------- */

function alphabeticalOrder(arr) {

     return arr.sort((a,b) => {
        if(a === b) {
       		return 0
       	}else if(a < b){
       		return -1
        }else{
       		return 1
       	}
     });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: RETURN A SORTED ARRAY WITHOUT CHAN-
CHING THE ORIGINAL ARRAY

A side effect of the sort() method is that it changes the 
order of the elements in the original array. In other words,
it mutates the array in place. Once way to avoid this is 
the fist concatenate an empty array to the one being sorted
(remember that slice() and concat return a new array), then
run the sort method.
--------------------------------------------------------- */

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let aux = [...arr]; 
  
  return aux.sort((a,b) => a === b ? 0: a < b ? -1 : 1);
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: SPLIT A STRING INTO AN ARRAY USING
THE SPLIT METHOD

The split() method splits a string into an array of 
strings. It takes an argunment for the delimiter, which can 
be a character to use to break up the string or a regular 
expression. For example, if the delimeter is a spacem you
get an array of words, and if the delimeter is an empty 
stringe, you set an array of each character in the string.

Here are two examples that split one string by spaces, 
then another by digits using a regular expression:

var str = "Hello World";
var bySpace = str.split(" "); //["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); 
//["How", "are", "you", "today"]
--------------------------------------------------------- */

function splitify(str) {return str.split(/\W/);}

console.log(splitify("Hello World,I-am code"));

/* 
obs: See the MDN Documentation for specific expressions to 
solve some specific problem
*/

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: COMBINE AN ARRAY INTO A STRING
USING THE JOIN METHOD

The join() method is used to join the element of an array 
together to create a string. It makes an argument for the 
delimiter that is used to separate the array elemnts in 
the string.
--------------------------------------------------------- */

function sensitify(str){

	return str.split(/\W/).join(" ");
}

console.log(sensitify("May-the-force-be-with-you"));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: APPLY FUNCTIONAL PROGRAMMING TO 
CONVERT STRINGS TO URL SLUGS

The last several challenges covered a number of useful 
array and string methods that follow functional program-
ming principles. We've also learned about reduce(), which
is a powerful method used to reduce problems to simpler 
forms. From computing averages to sorting, any array 
operation can be achieved by applying it. Recall that map
and filter are special cases of reduce.

Let's combine what we've learned to solve a pratical 
problem.

Many content management sites (CMS) have the titles of a 
post added to part of URL for simple bookmarking purposes.
For example, if you write a Medium post titled "Stop Using
Reduce", it's likely the URL would have some form of title
string in it (".../stop-using-reduce"). You may have 
already this on the freeCodeCamp site.
--------------------------------------------------------- */

function urlSlug(title){
	let str = title.toLowerCase();
	
	return str.split(/\W/)
		.filter(arr => arr !== '')
		.join("-");
}

let title = "Winter Is   Coming";

console.log(urlSlug(title));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE THE EVERY METHOD TO CHECK THAT 
EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA

The every() method with array to check if every element 
passes a particular test. It returns a Boolean value.
--------------------------------------------------------- */

function checkEveryPositive(arr){
	return arr.every(obj => obj >= 0);
}

console.log(checkEveryPositive([1, 2, 3, -4, 5]));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: USE THE SOME METHOD TO CHECK THAT 
EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA

The some() method with array to check if some element 
passes a particular test. It returns a Boolean value.
--------------------------------------------------------- */

function checkSomePositive(arr){
	return arr.some(obj => obj >= 0);
}

console.log(checkSomePositive([1, 2, 3, -4, 5]));

/* ---------------------------------------------------------
FUNCTIONAL PROGRAMMING: INTRODUCTION TO CURRYING AND PARTIAL
APPLICATION

The arity of a function is the number of arguments it 
requires. Curring a function means to convert a fucntion of
N arity into N functions of arity 1.

In other words, it restructures a function so it takes one 
argument, then returns another function that takes the next
argument, and so on.

 - Un-curried function 

 		function unCurried(x,y){ return x + y; }

 - Curried function
 
 		function curried(x){ return function(y){ 
 			return x + y; 
 		}} 	
 - Alternative using ES6
 
 		const curried = x => y => x + y;

 	curried(1)(2) // returns 3

This is useful if your program can not supply all the 
arguments to a function at one time. You can save each
function call into a variable, which will hold the 
returned function reference that takes the next argument
when it is available. Here's an example using the curried
function in the example above:

 	var funcForY = curried(1);
 	console.log(funcForY(2)); //Prints 3

Similary, partial application can be described as applying 
a few arguments to a funciton at a time and returning ano-
ther function that is applied to more arguments. Here's an
example:

 - Impartial function 

 		function impartial(x,y,z){ return x + y + z; }

 - Partial function

 		var partialFn = impartial.binf(this, 1, 2);

 		partialFn(10); // returns 13		


--------------------------------------------------------- */

function addCurried1(x){
	return function (y){
		return function(z){
			return x + y + z;
		}
	}
}

console.log(addCurried1(10)(20)(30));

let addCurried2 = x => y => z => x + y + z;

console.log(addCurried2(10)(20)(30));
