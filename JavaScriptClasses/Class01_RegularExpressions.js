/*****************************************************************************
 *                     CLASS 01: REGULAR EXPRESSIONS                         *
 *****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************
 * Description:                                                              *
 *                                                                           *
 * This code have same examples of how to use regular expressions. So it is  *
 * a list for later consult.                                                 *
 *                                                                           *
 *****************************************************************************
 * ALL REGULAR EXPRESSION:                                                   *
 *                                                                           *
 * /^.../    : pattern at first position                                     *
 * /[^...]/  : negation                                                      *
 * /\w/      : alphanumeric with underline characters                        *
 * /\W/      : everything that is not \w                                     *
 * /\d/      : numbers                                                       *
 * /\D/      : not a number                                                  *
 * /...*/    : zero or more occurrences of some pattern                      *
 * /...$/    : pattern at final position                                     *
 * /...{3,6}/: define a interval quantity of some character                  *
 * /...{3,}/ : define minimum quantity of some character                     *
 * /...{,6}/ : define maximum quantity of some character                     *
 * /...{3}/  : define exact   quantity of some character                     *
 * /...?/    : look for one or none of some character                        *
 * /\S/      : non-white-space                                               *
 * /\s/      : white-space                                                   *
 * /.../g    : take every match of some pattern                              *
 * /.../i    : consider low and upper-case variations                        *
 * /...|.../ : conditional OR                                                *
 * /(?=...)/ : positive look ahead                                           *
 * /(?!=...)/: negative look ahead                                           *
 * /[...]/   : define a class                                                *
 * /[A-Z]/   : all upper-cases of alphabet (could be an interval /[H-M]/)    *
 * /[a-z]/   : all lower-case of alphabet                                    *
 * /[0-9]/   : all numbers between 0 and 9                                   *
 * /[A-Za-z0-9_]/ : class equivalent to /\w/.                                *
 * /p0(p1|p2)p3/  : combination of patterns using ()                         *
 *                                                                           *
 *****************************************************************************
 * REFERENCES:                                                               *
 *                                                                           *
 * https://www.freecodecamp.org/learn/                                       *
 *                                                                           *
 *****************************************************************************
// EXAMPLES OF HOW TO USE REGULAR EXPRESSIONS:                               *

/*****************************************************************************
 * REGULAR EXPRESSIONS: EXTRACT MATCHES                                      *
 *                                                                           *
 * So far, you have only been checking if a pattern exists or not within a   *
 * string. You can also extract the actual matches you found with the        * 
 * .match() method.                                                          *
 *                                                                           *
 * To use the .match() method, apply the method on a string and pass in the  * 
 * regex inside the parentheses.                                             *
 *****************************************************************************/

let str   = "Extract the word 'coding' from this string";
let regex = /coding/; 

console.log('\n[\''+str.match(regex)+'\']\n');

// OBS the match returns:
//
//	[ 'coding',
//	  index: 18,
//    input: 'Extract the word \'coding\' from this string',
//    groups: undefined ]

/*****************************************************************************
 * REGULAR EXPRESSIONS: FIND MORE THAN THE FIRST MATCH                       * 
 *                                                                           *
 * So far, you have only been able to extract or search a pattern once.      *
 * However, using the flag "g", one is able to get all the patterns.         *
 *****************************************************************************/

// GETTING the first pattern:

let testStr  = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/;

console.log('[\''+testStr.match(ourRegex)+'\']\n');

// the match returns:
//	[ 'Repeat',
//	  index: 0,
//    input: 'Repeat, Repeat, Repeat',
//    groups: undefined ]

// GETTING all the patterns:

let repeatRegex = /Repeat/g;
console.log('['+testStr.match(repeatRegex)+']\n'); 

// the match returns:
//	[Repeat, Repeat, Repeat]

// GETTING  all the patterns using two flags: g --> all patterns, i --> 
// negates the pattern and search for all different combinations of the 
// pattern 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
console.log('[\''+twinkleStar.match(starRegex) + '\']\n');

// the match returns:
//  ['Twinkle', 'twinkle']

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH ANYTHING WITH WILDCARD PERIOD                  *
 *                                                                           *
 * Sometimes you won't (or don't need to) know the exact characters in your  *
 * patterns. Thinking of all words that match, say, a misspelling would take *
 * a long time. Luckily, you can save time using the wildcard character: "." *
 *                                                                           *
 * The wildcard character "." will match any one character. The wildcard is  *
 * also called dot and period. You can use the wildcard character just like  *  
 * any other character in the regex.                                         *
 *****************************************************************************/

let exampleStr = [
	'Let\'s have fun with regular expressions!',
	'Let us go on a run.',
	'The sun is out today.',
	'Coding is a lot of fun.',
	'Seven days without a pun makes one week.',
	'One takes a vow to be a nun',
	'She got fired from the hot dog stand for putting her hair in a bun.',
	'There is a bug in my code.',
	'Catch me if you can.'
];

let unRegex = /.un/;

for(let i = 0; i < exampleStr.length; i++){

	console.log(unRegex.test(exampleStr[i]));

} 

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITES    *
 *                                                                           *
 * You learned how to match literal patterns (/literal/) and wildcard        * 
 * character (/./). Those are the extremes of regular expressions, where one * 
 * finds exact matches and the other matches everything. There are options   *
 * that are a balance between the two extremes.                              *
 *                                                                           *
 * You can search for a literal pattern with some flexibility with character * 
 * classes. Character classes allow you to define a group of characters you  *
 * wish to match by placing them inside square([and]) brackets.              * 
 *****************************************************************************/

let quoteSample = 'Beware of bugs in the above code; I have only proved it '+
	'correct, not tried it.';
let vowelRegex = /[aeiou]/gi;

console.log('\n['+quoteSample.match(vowelRegex)+']\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH LETTERS OF THE ALPHABET                        *
 *                                                                           *
 * You saw how you can use character sets to specify a group of characters   * 
 * to match, but that's a lot  typing when you need to match a large range   * 
 * of characters (for example, every letter in the alphabet). Fortunately,   * 
 * there is a built-in feature that makes this short and simple.             *
 *                                                                           *
 * Inside a character set, you can define a range of characters to match     * 
 * using a hyphen character: -                                               * 
 *****************************************************************************/

quoteSample = 'The quick brown fox jumps over the lazy dog';

let alphabetRegex = /[a-z]/gi; 

console.log('['+quoteSample.match(alphabetRegex)+']\n');

quoteSample = 'Blueberry 3.141592635s are delicious.';

let alphaNumericRegex = /[h-s2-6]/gi

console.log('['+quoteSample.match(alphaNumericRegex)+']\n')

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH SINGLE CHARACTERS NOT SPECIFIED                *
 *                                                                           *
 * So far, you have created a set of characters that you want to match, but  *
 * you could also create a set of characters that you do not want to match.  *
 * These types of character sets are called negated character sets.          *
 *                                                                           *
 * To create a negated character set, you place a caret character (^) after  *
 * opening bracket and before the characters you do not want to match.       * 
 *                                                                           *
 * For example, /[^aeiou]/gi matches all characters that are not a vowel.    *
 * Note that characters like ., !, [, @, / and white space are matches -     * 
 * the negated vowel character set only excludes the vowel characters.       *
 *****************************************************************************/

quoteSample = '3 blind mice.';
let myRegex = /[^a^e^i^o^u^0-9]/gi;

console.log('['+quoteSample.match(myRegex)+']\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH CHARACTER THAT OCCUR ONE OR MORE TIMES         *
 *                                                                           *
 * Sometimes, you need to match a character (or group of characters) that    * 
 * appears one or more times in a row. This means it occurs at least once,   * 
 * and may be repeated.                                                      *
 *                                                                           *
 * You can use the + character to check if that is the case. Remember, the   *
 * character or pattern has to be present consecutively. That is, the        * 
 * character has to repeat one after the other.                              * 
 *****************************************************************************/

let difficultSpelling = 'Mississippi';
myRegex = /s+/gi;

console.log('['+difficultSpelling.match(myRegex)+']\n')

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH CHARACTERS THAT OCCUR ZERO OR MORE TIMES       *
 *                                                                           *
 * The last challenge used the plus + sign to look for characters that       * 
 * occurs one or more times. There's also an option that matches characters  * 
 * that occur zero or more times.                                            *
 *                                                                           *
 * The character to do this is the asterisk or star: *                       *
 *****************************************************************************/

let chewieQuote = [
	'Aaaaaaaaaaaaaaaarrrgh!',
	'He made a fair move. Screaming about it can\'t help you',
	'Let him have it. It\'s not wise to upset a Wookiee.'
];
let chewieRegex = /Aa*/;

for(let i = 0; i < chewieQuote.length; i++){
	console.log('['+chewieQuote[i].match(chewieRegex)+']')
}

/*****************************************************************************
 * REGULAR EXPRESSIONS: FIND CHARACTERS WITH LAZY MATCHING                   *
 *                                                                           *
 * In regular expression, a greedy match finds the longest possible part of  * 
 * a string that fits the regex pattern an returns it as match. The          * 
 * alternative is called a lazy match, which finds the smallest possible     *
 * part of the string that satisfies the regex pattern.                      * 
 *                                                                           *
 * You can apply the regex /t[a-z]*i/ to the string 'titanic'. This regex is * 
 * basically a pattern that starts with t ends with i, and has some letters  * 
 * in between.                                                               *
 *                                                                           *
 * Regular expressions are by default greedy, so the match would return      * 
 * ['titanic']. It finds the largest sub-string possible to fit the pattern. *
 *                                                                           *
 * However, you can use the ? character to change it to lazy matching        *   
 * 'titanic' matched against the adjusted regex of /t[a-z]*?i/ returns       *
 * ['ti'].                                                                   *
 *****************************************************************************/

let text = '<h1>Winter is coming</h1>';
myRegex  = /<.*?>/;

console.log('\n['+text.match(myRegex)+']\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: FIND ONE OR MORE CRIMINALS IN A HUNT                 *
 *                                                                           *
 * Time to pause and test your new regex writing skills. A group of          * 
 * criminals escaped from jail and ran away, but you don't know how many.    *
 * However, you do know that they stay close together when they are around   *
 * other people. You are responsible for finding all of the criminals at     *
 * once.                                                                     *
 *****************************************************************************/
let criminals = [
	'P1P5P4CCCP2P3',
	'P6P2P7P4P5CCCCCP3P1',
	' ',
	'P1P2P3',
	'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'
	]

let reCriminals = /C+/g;

for(let i = 0; i < criminals.length; i++){

	console.log(criminals[i].match(reCriminals));

}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH BEGINNING STRING PATTERNS                      * 
 *                                                                           *
 * Prior challenges showed that regular expressions can be used to look for  * 
 * a number of matches. They are also used to search for patterns in         * 
 * specific positions in strings.                                            *
 *                                                                           *
 * In an earlier challenge, you used that caret character (^) inside a       *
 * character set to create a negated character set in the form               *
 * [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is   * 
 * used to search for patterns at the beginning of string.                   *
 *****************************************************************************/

let rickyAndCal = [
	'Cal and Ricky both like racing',
	'Ricky and Cal both like racing'
];

let calRegex = /^Cal/;


for(let i = 0; i < rickyAndCal.length; i++){

	console.log(calRegex.test(rickyAndCal[i]));
} 

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH ENDING STRING PATTERNS                         *
 *                                                                           *
 * In the last challenge, you learned to use the caret character to search   * 
 * for patterns at the beginning of strings. There is also a way to search   * 
 * for patterns at the end of strings.                                       *
 *                                                                           *
 * You can search the end strings using the dollar sign character $ at the   *
 * end of the regex.                                                         *
 *****************************************************************************/

let caboose = [
	'The last car on a train is the caboose',
	'Caboose is the last car on a train'
];

let lastRegex = /caboose$/;

for(let i = 0; i < caboose.length; i++){

	console.log(lastRegex.test(caboose[i]));

}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS:MATCH ALL LETTERS AND NUMBERS                         * 
 *                                                                           *
 * Using character classes, you were able to search for all letters of the   *
 * alphabet with [a-z]. This kind of character class is common enough that   *
 * there is a shortcut for it, although it includes a few extra characters   *
 * as well.                                                                  *
 *                                                                           *
 * The closest character class in JavaScript to match the alphabet is \w.    * 
 * This shortcut is equals to [A-Za-z0-9_]. This character class matches     *
 * upper and lowercase letters plus numbers. Note, this character class also *  
 * includes the underscore character.                                        *
 *****************************************************************************/

quoteSample =[
	'The five boxing wizards jump quickly.',            // 31
	'Pack my box with five dozen liquor jugs.',         // 32
	'How vexingly quick daft zebras jump!',             // 30
	'123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'  // 36
];

let alphabetRegexV2 = /\w/g;

for(let i = 0; i < quoteSample.length; i++){

	console.log(quoteSample[i].match(alphabetRegexV2).length);

}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH EVERYTHING BUT LETTERS AND NUMBERS             *
 *                                                                           *
 * You've learned that you can use a shortcut to match alphanumerics         *
 * [A-Za-z0-9_] using \w. A natural pattern you might want to search for is  *  
 * the opposite of alphanumerics.                                            *
 *                                                                           *
 * You can search for the opposite of \w with \W. Note, the opposite         *
 * patterns uses a capital letter. This shortcut is the same as              *
 * [^A-Za-z9-9_].                                                            *
 *****************************************************************************/

let nonalphabetRegexV2 = /\W/g;

for(let i = 0; i < quoteSample.length; i++){

	console.log(quoteSample[i].match(nonalphabetRegexV2).length);

}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH ALL NUMBERS                                    *
 *                                                                           *
 * You've learned shortcuts for common string patterns like alphanumerics.   *
 * Another common patterns is looking for just digits or numbers.            *
 *                                                                           *
 * The shortcut to look for digit characters is \d, with a lowercase d. This *
 * is equal to the character class [0-9], which looks for a single character * 
 * of any number of between zero and nine.                                   *
 *****************************************************************************/

let movieName = [
	'2001: A Space Odyssey',
	'Catch 22',
	'101 Dalmatians', 
	'One, Two, Three'
];

let numRegex  = /\d/g;

for(let i = 0; i < movieName.length; i++){

	console.log(movieName[i].match(numRegex));
}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH ALL NON-NUMBERS                                *
 *                                                                           *
 * The last challenge showed how to search for digits using shortcut \d with *
 * a lowercase d. You can also search for non-digits using a similar         * 
 * shortcut that uses an uppercase S instead.                                *
 *                                                                           *
 * The shortcut to look for non-digit is \D. This is equal to the character  *
 * class ['^0-9'], which looks for a single character that is not a number   *
 * between zero and nine.                                                    *
 *****************************************************************************/

let noNumRegex  = /\D/g;

for(let i = 0; i < movieName.length; i++){

	console.log(movieName[i].match(noNumRegex));
}

console.log('\n');

/*****************************************************************************
 * REGULAR EXPRESSIONS: RESTRICT POSSIBLE USERNAMES                          *
 *                                                                           *
 * User-names are used everywhere on the internet. They are what give users  * 
 * unique identity on their favourite sites.                                 *
 *                                                                           *
 * You need to check all the user-names in a database. Here are some simple  *
 * rules that users have to follow when creating their user-name.            *
 *                                                                           *
 * 1) User-names can only use alpha-numeric characters.                      *
 * 2) The only numbers in the user-name have to be at the end. There can be  * 
 *    zero or more of them at end. User-name cannot start with the number.   *
 * 3) User-name letters can be lower-case and upper-case.                    *
 * 4) User-names have to be at least two characters long. A two-character    * 
 *    username can only be alphabet letters as characters.                   *
 *****************************************************************************/

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

// ^     - start of input
// [a-z] - first character is a letter
// [a-z] - following characters are letters
// \d*$  - input ends with zero or more digits
// |     - or
// ^[a-z]- first character is a letter
// \d\d+ - following characters are 2 or more digits
// $     - end of input
let userName = [
	'BadUs3ernam3',
	'Z97',
	'c57bT3',
	'A1',
	'9',
	'007',
	'RegexGuru',
	'Oceans11',
	'Jo',
	'J',
	'JACK'
]

console.log('\nRESTRICT POSSIBLE USERNAMES--------------------------------\n');

for( let i = 0; i < userName.length; i++){

	console.log(userCheck.test(userName[i]));
}

/*****************************************************************************
 * REGULAR EXPRESSIONS: MATCH NON-WHITESPACE CHARACTERS                      *
 *                                                                           * 
 * You learned about searching for white-space using \s, with a lower-case   *
 * s; You can also search for everything except white-space.                 *
 *                                                                           *
 * Search for non-white-space using \S, which is an upper-case s. This       *
 * pattern will not match white-space, carriage return, tab, form feed, and  *
 * new line characters. You can think of it being similar to the character   * 
 * class [^\r\t\f\n\v].                                                      *
 *****************************************************************************/

let whiteSample = [
	'White-space is important in separating words.', // 40
	'Men are from Mars and women are from Venus.',   // 35
	'Space: the final frontier.',                    // 23
	'MindYourPersonalSpace'                          // 21
];

let countNonWhiteSpace = /\S/g;

console.log('\nMATCH NON-WHITESPACE CHARACTERS----------------------------\n');

for( let i = 0; i < whiteSample.length; i++){

	console.log(whiteSample[i].match(countNonWhiteSpace).length);
}

/*****************************************************************************
 * REGULAR EXPRESSIONS: SPECIFY UPPER AND LOWER NUMBER OF MATCHES            *
 *                                                                           *
 * Recall that you use the plus sign + for one or more characters and the    *
 * asterisk to look for zero or more characters. These are convenient but    *
 * sometimes you want to match a certain range of patterns.                  *
 *                                                                           *
 * You can specify the lower and upper number of patterns with quantity      *
 * specifiers. Quantity specifiers are used with curly brackets ({ and }).   *
 * You put two numbers between the curly brackets - for the lower and upper  *
 * number of patterns.                                                       *
 *                                                                           *
 * For example, to match only the letter a, appearing between 3 and 5 times  * 
 * in the string "ah", your regex would be /a{3,5}h/.                        *
 *****************************************************************************/

let ohStr = [
	'Ohh no',
	'Ohhh no',
	'Ohhhh no',
	'Ohhhhh no',
	'Ohhhhhh no',
	'Ohhhhhhh no',
];

let ohRegex = /Oh{3,6} no/;

console.log('\nSPECIFY UPPER AND LOWER NUMBER OF MATCHES------------------\n');

for( let i = 0; i < ohStr.length; i++){

	console.log(ohRegex.test(ohStr[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: SPECIFY ONLY THE LOWER NUMBER OF MATCHES

You can specify the lower and upper number of patterns with quality specifies
using curly brackets. Sometimes you only want to specify the lower number of 
patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by
a comma.
---------------------------------------------------------------------------- */

let haStr = [
	'Hazzah',
	'Hazzzah',
	'Hazzzzah',
	'Hazzzzzah',
	'Hazzzzzzah',
];

let haRegex = /Haz{4,}ah/;

console.log('\nSPECIFY ONLY THE LOWER NUMBER OF MATCHES------------------\n');

for(let i = 0; i < haStr.length; i++){

	console.log(haRegex.test(haStr[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: SPECIFY EXACT NUMBER OF MATCHES

You can specify the lower and upper number of patterns with quantity specifiers
using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the
curly brackets. 
---------------------------------------------------------------------------- */

let timStr = [
	'Timber',
	'Timmber',
	'Timmmber',
	'Timmmmber',
];

let timRegex = /Tim{4}ber/;

console.log('\nSPECIFY EXACT NUMBER OF MATCHES----------------------------\n');

for( let i = 0; i < timStr.length; i++){

	console.log(timRegex.test(timStr[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: CHECK FOR ALL OR NONE

Sometimes the patterns you want to search for may have parts of it that may or
may not exit. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. 
This checks for zero or one of the preceding element. You can think of this 
symbol as saying the previous element is optional.  
---------------------------------------------------------------------------- */

let favWord  = ['favorite', 'favourite'];

let favRegex = /favou?rite/;

console.log('\nCHECK FOR ALL OR NONE--------------------------------------\n'); 

for( let i = 0; i < favWord.length; i++){

	console.log(favRegex.test(favRegex[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: POSITIVE AND NEGATIVE LOOKAHEAD

Lookaheads are patterns that tell JavaScript to look-ahead in your string to 
check for patterns further along. This can be useful when you want to for 
multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern
is there, but won't actually match it. A positive lookahead is used as (?=...)
where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in 
the search pattern is not there. A negative lookahead is used as (?!=...)
where ... is the pattern that you not want to be there. The rest of the 
pattern is returned if the negative lookahead part is not present.
---------------------------------------------------------------------------- */

// Use lookaheads in the pwRegex to match passwords that are greater than 5
// characters long, do not begin with numbers, and have two consecutive digits.

let sampWord = [
	'astronaut',      // false
	'banan1',         // false
	'bana12',         // true
	'abc123',         // true
	'1234',           // false
	'8pass99',        // false
	'12abcde',        // false
	'astr1on11aut'    // true
];

let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;

// ^\D : the first element must not be a number (^ = first, \D = non-numeric) 
//(?=\w{5})   : look ahead for 5 alphanumeric characters
//(?=\w*\d{2}): look ahead for a sequence of 2 numbers that can or can not 
//              have alphanumerics character before them.

console.log('\nPOSITIVE AND NEGATIVE LOOKAHEAD----------------------------\n');

for(let i = 0; i < sampWord.length; i++){

	console.log(pwRegex.test(sampWord[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: CHECK FOR MIXED GROUPING OF CHARACTERS 

Something we want to check for groups of characters using a Regular Expression
and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the 
following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using 
the test() method.
---------------------------------------------------------------------------- */
// Fix the regex so that it checks for the names of Franklin Roosevelt or
// Eleanor Roosevelt in a case sensitive manner and it should make concessions 
// for middle names.

// Then fix the code so that the regex that you have created is checked 
// against myString and either true or false is returned depending on whether 
// the regex matches.

myString = [
	'Eleanor Roosevelt',
	'Franklin Roosevelt',
	'Franklin D. Roosevelt',
	'Franklin Rosevelt',
	'Frank Roosevelt'
];

myRegex  = /(Eleanor|Franklin)(\s|\s\w*.\s)Roosevelt/;

console.log('\nCHECK FOR MIXED GROUPING OF CHARACTERS---------------------\n');

for(let i = 0; i < myString.length; i++){

	console.log(myRegex.test(myString[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: REUSE PATTERNS USING CAPTURE GROUPS

Some patterns you search for will occur multiple times in a string. It is 
wasteful to manually repeat that regex. There is a better way to specify when 
you have multiple repeat sub-strings in your string.

You can search for repeat sub-strings using capture groups. Parentheses, ( 
and ), are used to find repeat sub-strings. You put the regex of the pattern
that will repeat in between the parentheses. 

To specify where that repeat string will appear, you use a backslash and then
a number. This number starts at 1 and increases with each additional capture 
group you use. An example would be \1 to match the first group.
---------------------------------------------------------------------------- */
// Use capture groups in reRegex to match numbers that are repeated only three 
// times in a string, each separated by a space.

let repeatNum = [
	'42 42 42',
	'100 100 100',
	'42 42 42 42 42',
	'42 42',
	'101 102 103',
	'1 2 3',
	'10 10 10'
]; 

let reRegex = /^(\d+)(\s)\1\2\1$/;// regex equivalent to /^\d+\s\d+\s\d+$/
//let reRegex = /^\d+\s\d+\s\d+$/;

console.log('\nREUSE PATTERNS USING CAPTURE GROUPS------------------------\n');

for( let i = 0; i < repeatNum.length; i++){

	console.log(reRegex.test(repeatNum[i]));
}

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: USE CAPTURE GROUPS TO SEARCH AND REPLACE

Searching is useful. However, you can make searching even more powerful when 
it also changes (or replaces) the text you match. 

You can search and replace text in a string using .replace() on a string. The 
inputs for .replace() is first the regex pattern you want to search for. The 
second parameter is the string to replace the match or a function to do 
something
---------------------------------------------------------------------------- */
// Write a regex fixRegex using three capture groups that will search for each 
// word in the string "one two three". Then update the replaceText variable to 
// replace "one two three" with the string "three two one" and assign the 
// result to the result variable. Make sure you are utilizing capture groups 
// in the replacement string using the dollar sign ($) syntax.
/*
let finalString = 'one two three';
let fixRegex    = /(\w+)\s(\w+)\s(\w+)/; 

console.log('\nUSE CAPTURE GROUPS TO SEARCH AND REPLACE-------------------\n');

console.log(finalString.replace(fixRegex, '$3 $2 $1'));

/* ----------------------------------------------------------------------------
REGULAR EXPRESSIONS: REMOVE WHITESPACE FROM START AND END

Sometimes white-space characters around strings are not wanted but are there.
Typical processing of string is to remove the white-space at the start and 
end of it.
---------------------------------------------------------------------------- */
/*
let hello   = "  Hello, World!   ";
let wsRegex = /^\s+|\s+$/g;

console.log('\nREMOVE WHITESPACE FROM START AND END-----------------------\n');

console.log(hello.replace(wsRegex,'')); */
