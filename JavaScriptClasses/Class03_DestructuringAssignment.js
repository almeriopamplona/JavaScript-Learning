/*****************************************************************************
 *                    CLASS 03: DESTRUCTING ASSIGNMENT                       *
 *****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 * Date  : 26.09.2020                                                        *
 *****************************************************************************
 * ES6 makes destructuring arrays as easy as destructuring objects           *
 *                                                                           *
 * One key difference between the spread operator and array destructuring is *
 * that the spread operator unpacks all contents of an array into a comma-   *
 * -separated list. Consequently, you cannot pick or choose which elements   *
 * you want to assign to variables                                           *
 *                                                                           *
 * Destructuring an array lets us do exactly that:                           *
 *                                                                           *
 *		const [a, b] = [1, 2, 3, 4, 5, 6];                                     *
 *		consonsonsole.log(a, b); // 1, 2                                       *
 *                                                                           *  
 *	The variable a is assigned the first value of the array, and b is        *
 *	assigned the second value of the array. We can also access the alue at   * 
 *	any index in an array with destructuring by using commasto reach the     *
 *	the desired index:                                                       *
 *                                                                           *
 *		const [a, b,,, c] = [1, 2, 3, 4, 5, 6];                                *
 *		console.log(a, b, c); // 1, 2, 5                                       *
 *****************************************************************************
 *                                                                           *
 *	In some situations involving array destructuring, we might want to       *
 *	collect the rest of the elements into a separate array                   *
 *                                                                           *
 *	The result is similar to Array.prototype.slice(), as shown below:        *
 *	                                                                         *
 *		const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];                             *
 *		console.log(a, b); // 1, 2                                             *
 *		console.log(arr); // [3, 4, 5, 7]                                      *
 *                                                                           *
 *	Variables a and b take the first and second values from the array. After *
 *	that, because of the rest parameter's presence, arr gets the rest of the *
 *	values in the form of an array. The rest element only works correctly as * 
 *	the last variable in the list. As in, you cannot use the rest parameter  * 
 *	to catch a subarray that leaves out the last element of the original     * 
 *	array.                                                                   *
 *	                                                                         *
 *****************************************************************************/

let a = 8, b = 6;

[b, a] = [a, b];

console.log(a, b);

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list){
	"use strict";

	const [c, d, ...arr] = list;

	return arr; 
}

const arr = removeFirstTwo(source);
