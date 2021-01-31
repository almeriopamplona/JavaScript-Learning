/*****************************************************************************
 * CAESARS CIPHER                                                            *
 *                                                                           *
 * One of the simplest and most widely known ciphers is a Caesar cipher,     * 
 * also known as a shift cipher. In a shift cipher the meanings of the       *
 * letters are shifted by some set amount.                                   * 
 *                                                                           *         
 * A common modern use is the ROT13 cipher, where the values of the letters  * 
 * are shifted by 13 places. Thus 'A' <-> 'N', 'B' <-> 'O' and so on.        *    
 *                                                                           *
 * Write a function which takes a ROT13 encoded string as input and returns  * 
 * a decoded string.                                                         * 
 *****************************************************************************/

function rot13(str){

    let alphaToNum = {
        A:  1, B: 2,  C: 3,  D:  4, E:  5, F:  6, G:  7, H:  8, I:  9, J: 10, 
        K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, 
        U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

    let numToAlpha = {
         1:'A' , 2:'B',  3:'C',  4:'D',  5:'E',  6:'F',  7:'G',   8:'H', 9:'I',
        10:'J', 11:'K', 12:'L', 13:'M', 14:'N', 15:'O', 16:'P',  17:'Q', 
        18:'R', 19:'S', 20:'T', 21:'U', 22:'V', 23:'W', 24:'X', 25:'Y', 26:'Z'
    };

    let splitedArr   = str.split(' ').map(arr => arr.split(''));

    return splitedArr
        .map(arr => 
            arr.map(aux => {

                if(/\w/gi.test(aux)){

                    if(alphaToNum[aux]-13 < 0){ 

                        return alphaToNum[aux]-13+26;
                    
                    } else if(alphaToNum[aux] - 13 == 0){

                        return 26;

                    } else { 

                        return alphaToNum[aux]-13 
                    }
                } else { 

                    return aux; 
                } 
            }  
            )
        ).map( arr => 
            arr.map( aux => {

                if(/\w/gi.test(aux)){

                    return numToAlpha[aux];
                    
                } else { 

                    return aux; 
                } 
            }
            )
        ).map( arr => arr.join('')).join(' ');
}

testArr = [
    'SERR PBQR PNZC',
    'SERR CVMMN!',
    'SERR YBIR?',
    'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.',
];

console.log('\nCAESARS CIPHER---------------------------------------------\n');

console.log(testArr.map(arr => rot13(arr)));
