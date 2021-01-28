/*****************************************************************************
 *                         REGULAR EXPRESSIONS                               *
 *****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 * Date  : 26.09.2020                                                        *
 *****************************************************************************
 * ES6: Use Destructuring Assignment to Extract Values from Objects          *	
 *                                                                           *
 * Destructuring assignment is special syntax introduced in ES6, for nearly  *
 * assigning values taken directly from an object.                           *
 *                                                                           *
 * Consider the following ES5 code:                                          *
 *                                                                           *
 *   const user = { name: 'John Doe', age: 34 };                             *
 *                                                                           *
 *   const name = user.name; // name = 'John Doe'                            *
 *   const age = user.age; // age = 34                                       *
 *                                                                           *
 * Here's an equivalent assignment statement using the ES6 destructuring     *    
 * syntax:                                                                   *
 *                                                                           *
 *   const { name, age } = user;                                             *
 *	 // name = 'John Doe', age = 34                                          *
 *                                                                           *
 * Here, the name and age variables will be created and assigned the values  *
 * of their respective values from the user object. You can see  how much    *
 * cleaner this is.                                                          *
 *                                                                           *
 * You can extract as many or few values from the object as you want.        *
 *                                                                           *
 *****************************************************************************
 *                                                                           *
 * Here's how you can give new variable names in the assignment:             *
 *                                                                           *
 *   const { name: userName, age: userAge } = user;                          *
 *   // userName = 'John Doe', userAge = 34                                  *
 *                                                                           *
 * You may read it as "get the value of user.name and assign it to a new     * 
 * variable named userName" and so on.                                       *
 *                                                                           *
 *****************************************************************************
 *                                                                           *
 * You can use the same principles from the previous two lessons to          *
 * destructure values from nested objects.                                   *
 *                                                                           *
 * Using an object similar to previous examples:                             *
 *                                                                           *
 *   const user = {                                                          *
 *     johnDoe: {                                                            *
 *       age: 34,                                                            *
 *       email: 'johnDoe@freeCodeCamp.com'                                   *
 *     }                                                                     *
 *   };                                                                      *
 *                                                                           *
 * Here's how to extract the values of object properties and assign them to  * 
 * them to variables with the same name:                                     *
 *                                                                           *
 *   const { johnDoe: { age, email }} = user;                                *
 *                                                                           *
 * And here's how you can assign an object properties' values to variables   *
 * with different names:                                                     *
 *                                                                           *
 * const { johnDoe: { age: userAge, email: userEmail }} = user;              *
 *                                                                           *
 *****************************************************************************/

const HIGH_TEMPERATURES = {
 	yesterday: 75,
 	today    : 77,
 	tomorrow : 80
};

/* Seperating the properties into new variables: */

const {today, tomorrow } = HIGH_TEMPERATURES;

/* Renemaing the properties of the object: */

const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
 	yesterday: { low: 61, high: 75 },
 	today    : { low: 64, high: 77 },
 	tomorrow : { low: 68, high: 80 }
}

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
