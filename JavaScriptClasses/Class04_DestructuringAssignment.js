/*****************************************************************************
 *                    CLASS 04: DESTRUCTING ASSIGNMENT                       *
 *****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 * Date  : 26.09.2020                                                        *
 *****************************************************************************
 *                                                                           *
 * ES6: Use Destructuring Assignment to Pass an Object as a Function's       *
 * Parameters                                                                *
 *                                                                           *
 * In some cases, you can destructure the object in a function argument      *
 * itself.                                                                   * 
 *	                                                                     *
 * Consider the code below:                                                  *
 *                                                                           *
 *     const profileUpdate = (profileData) => {                              *
 *     const { name, age, nationality, location } = profileData;             *
 *     // do something with these variables                                  *
 *     }                                                                     *
 *                                                                           * 
 * This effectively destructures the object sent into the function. This     *
 * can also be done in-place:                                                *
 *                                                                           *
 *     const profileUpdate = ({ name, age, nationality, location })          *
 *     => {/* do something with these fields *//*}                           *
 *                                                                           * 
 * This removes some extra lines and makes our code look neat. This has the  *
 *  added benefit of not having to manipulate an entire object in a function *
 *  — only the fields that are needed are copied inside the function.        *
 *                                                                           *
 *****************************************************************************/
const stats = {
	max               : 56.78,
	standard_deviation: 4.34,
	median            : 34.54,
	mode              : 23.85,
	min               : -0.75,
	average           : 35.85

};

const half = ({max,min}) => 0.5*(max + min);

console.log(half(stats));
