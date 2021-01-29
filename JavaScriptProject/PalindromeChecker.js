/*****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************
 * PALINDROME CHECKER                                                        *
 *                                                                           *
 * Return true if given string is a paindrome. Otherwise, return false.      *
 *                                                                           *
 * A palindrome is a word or sentence that's spelled the same way both       * 
 * forward and backward, ignoring punctuation, case, spacing.                *
 *****************************************************************************/
 
function palindrome(str){

    return  str.toLowerCase().match(/[a-z0-9]+/g).join('') === 
		    str.toLowerCase().match(/[a-z0-9]+/g).join('').split('')
		    .reverse('').join('');

}

let testArr = ['eye', '_eye', 'race car', 'not a palindrome',
    'A man, a plan, a canal. Panama', 'never odd or even', 'nope',
    'almostomla', 'My age is 0, 0 si ega ym.', '0_0 (: /-\\ :) 0-0', 
    'five|\\_/|four'];

console.log('\nPALINDROME CHECKER--------------------------------------\n');

console.log(testArr.map(arr => palindrome(arr)));
