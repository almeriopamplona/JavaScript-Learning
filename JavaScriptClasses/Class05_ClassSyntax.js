/*****************************************************************************
 *                         CLASS 05: CLASS SYNTAX                            *
 *****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************
 *                                                                           *
 * ES6: Use class Syntax to Define a Constructor Function                    *
 *                                                                           *
 * ES6 provides a new syntax to create objects, using the class keyword.     *
 *                                                                           *
 * It should be noted that the class syntax is just syntax, and not a        *
 * full-fledged class-based implementation of an object-oriented paradigm,   *
 * unlike in languages such as Java, Python, Ruby, etc.                      *
 *                                                                           *
 * In ES5, we usually define a constructor function and use the new keyword  * 
 * to instantiate an object.                                                 *
 *                                                                           * 
 *     var SpaceShuttle = function(targetPlanet){this.targetPlanet =         *
 *          targetPlanet;}                                                   *
 *     var zeus = new SpaceShuttle('Jupiter');                               *
 *                                                                           *
 * The class syntax simply replaces the constructor function creation:       *
 *                                                                           *
 *      class SpaceShuttle {                                                 *
 *          constructor(targetPlanet) {                                      *
 *  	        this.targetPlanet = targetPlanet;                            *
 * 	    }                                                                *
 *	}                                                                    *
 *      const zeus = new SpaceShuttle('Jupiter');                            *                                    
 *                                                                           *
 * It should be noted that the class keyword declares a new function, to     * 
 * which a constructor is added. This constructor is invoked when new is     *
 * called to create a new object.                                            *
 *	                                                                     *
 * Notes:                                                                    *
 *                                                                           *
 * UpperCamelCase should be used by convention for ES6 class names, as in    *
 * SpaceShuttle used above.The constructor method is a special method for    * 
 * creating and initializing an object created with a class. You will learn  * 
 * more about it in the Object Oriented Programming section of the           *
 * JavaScript Algorithms And Data Structures Certification.                  *
 *****************************************************************************
 *                                                                           *
 * You can obtain values from an object and set the value of a property      *
 * within an object.                                                         *
 *                                                                           *
 * These are classically called getters and setters.                         *
 *                                                                           *
 * Getter functions are meant to simply return (get) the value  of an        *
 * object's private variable to the user without the user directly accessing *
 * the private variable.                                                     *
 *                                                                           *
 * Setter functions are meant to modify (set) the value of an object's       *
 * private variable based on the value passed into the setter function. This *
 * change could involve calculations, or even overwriting the previous value *
 * completely.                                                               *
 *                                                                           *
 *	class Book {                                                         *
 *		constructor(author) {                                        *
 *		this._author = author;                                       *
 *		 }                                                           *
 * 			                                                     *
 *     // getter                                                             *
 *      get writer() {                                                       *
 *   		return this._author;                                         *
 *	}                                                                    *
 *                                                                           *
 *     // setter                                                             *
 * 		set writer(updatedAuthor) {                                  *
 *   		this._author = updatedAuthor;                                *
 * 		}                                                            *
 *	}                                                                    *
 *		                                                             *
 *	const lol = new Book('anonymous');                                   *
 *	console.log(lol.writer);  // anonymous                               *
 *	lol.writer = 'wut';                                                  *
 *	console.log(lol.writer);  // wut                                     *
 *                                                                           *
 * Notice the syntax used to invoke the getter and setter. They do not even  *
 * look like functions. Getters and setters are important because they hide  *
 * internal implementation details. Note: It is convention to precede the    *
 * name of a private variable with an underscore (_). However, the practice  *
 * itself does not make a variable private.                                  *
 *****************************************************************************/
class Vegetable { 
	constructor(name){
		this.name = name;
	}
}

const carrot = new Vegetable('carrot');

console.log(carrot.name);

class Thermostat{
	constructor(fahrenheit){
		this._fahrenheit = 5/9*(fahrenheit - 32);
	}

	// getter
	get temperature(){
		return this._fahrenheit;
	}

	// setter
	set temperature(updatedTemperature){
		this._fahrenheit = updatedTemperature;
	}
}

const thermos = new Thermostat(76);

let temp = thermos.temperature;

console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
