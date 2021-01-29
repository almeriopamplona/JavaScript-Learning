/*****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************
 * ROMAN NUMERAL CONVERTER                                                   *
 *                                                                           *
 * Convert the given number into a Roman numeral. All Roman numerals answers *
 * should be provided in upper-case.                                         *
 *****************************************************************************/
 
function convertToRoman(num){

    let separetedNum = num.toString().split('');

    let maxDecimal   = separetedNum.length; 

    if( maxDecimal == 4 ){

	    for(let i = maxDecimal - 1; i > -1; i--){

		    if(i == 3){

			    if(     separetedNum[i-3] == '1'){ separetedNum[i-3] = 'M';  } 
			    else if(separetedNum[i-3] == '2'){ separetedNum[i-3] = 'MM'; } 
			    else if(separetedNum[i-3] == '3'){ separetedNum[i-3] = 'MMM';} 
		    
		    } else if(i == 2){
			    
			    if(     separetedNum[i-1] == '1'){ separetedNum[i-1] = 'C';   } 
			    else if(separetedNum[i-1] == '2'){ separetedNum[i-1] = 'CC';  } 
			    else if(separetedNum[i-1] == '3'){ separetedNum[i-1] = 'CCC'; } 
			    else if(separetedNum[i-1] == '4'){ separetedNum[i-1] = 'CD';  } 
			    else if(separetedNum[i-1] == '5'){ separetedNum[i-1] = 'D';   } 
			    else if(separetedNum[i-1] == '6'){ separetedNum[i-1] = 'DC';  } 
			    else if(separetedNum[i-1] == '7'){ separetedNum[i-1] = 'DCC'; } 
			    else if(separetedNum[i-1] == '8'){ separetedNum[i-1] = 'DCCC';} 
			    else if(separetedNum[i-1] == '9'){ separetedNum[i-1] = 'CM';  }
		   
		    } else if (i == 1) {
			    
			    if(     separetedNum[i+1] == '1'){ separetedNum[i+1] = 'X';   } 
			    else if(separetedNum[i+1] == '2'){ separetedNum[i+1] = 'XX';  } 
			    else if(separetedNum[i+1] == '3'){ separetedNum[i+1] = 'XXX'; } 
			    else if(separetedNum[i+1] == '4'){ separetedNum[i+1] = 'XL';  } 
			    else if(separetedNum[i+1] == '5'){ separetedNum[i+1] = 'L';   }
			    else if(separetedNum[i+1] == '6'){ separetedNum[i+1] = 'LX';  } 
			    else if(separetedNum[i+1] == '7'){ separetedNum[i+1] = 'LXX'; } 
			    else if(separetedNum[i+1] == '8'){ separetedNum[i+1] = 'LXXX';} 
			    else if(separetedNum[i+1] == '9'){ separetedNum[i+1] = 'XC';  }
	           
		    } else if(i == 0) {

			    if(     separetedNum[i+3] == '1'){ separetedNum[i+3] = 'I';   } 
			    else if(separetedNum[i+3] == '2'){ separetedNum[i+3] = 'II';  } 
			    else if(separetedNum[i+3] == '3'){ separetedNum[i+3] = 'III'; } 
			    else if(separetedNum[i+3] == '4'){ separetedNum[i+3] = 'IV';  } 
			    else if(separetedNum[i+3] == '5'){ separetedNum[i+3] = 'V';   } 
			    else if(separetedNum[i+3] == '6'){ separetedNum[i+3] = 'VI';  } 
			    else if(separetedNum[i+3] == '7'){ separetedNum[i+3] = 'VII'; } 
			    else if(separetedNum[i+3] == '8'){ separetedNum[i+3] = 'VIII';} 
			    else if(separetedNum[i+3] == '9'){ separetedNum[i+3] = 'IX';  }
		    }
	    }
    
    } else if(maxDecimal == 3){

	    for (let i = maxDecimal -1; i > -1; i--){

		    if(i == 2){
			    
			    if(     separetedNum[i-2] == '1'){ separetedNum[i-2] = 'C';   } 
			    else if(separetedNum[i-2] == '2'){ separetedNum[i-2] = 'CC';  } 
			    else if(separetedNum[i-2] == '3'){ separetedNum[i-2] = 'CCC'; } 
			    else if(separetedNum[i-2] == '4'){ separetedNum[i-2] = 'CD';  } 
			    else if(separetedNum[i-2] == '5'){ separetedNum[i-2] = 'D';   } 
			    else if(separetedNum[i-2] == '6'){ separetedNum[i-2] = 'DC';  } 
			    else if(separetedNum[i-2] == '7'){ separetedNum[i-2] = 'DCC'; } 
			    else if(separetedNum[i-2] == '8'){ separetedNum[i-2] = 'DCCC';} 
			    else if(separetedNum[i-2] == '9'){ separetedNum[i-2] = 'CM';  }

		    } else if(i == 1){

			    if(     separetedNum[i] == '1'){ separetedNum[i] = 'X';   } 
			    else if(separetedNum[i] == '2'){ separetedNum[i] = 'XX';  } 
			    else if(separetedNum[i] == '3'){ separetedNum[i] = 'XXX'; } 
			    else if(separetedNum[i] == '4'){ separetedNum[i] = 'XL';  } 
			    else if(separetedNum[i] == '5'){ separetedNum[i] = 'L';   } 
			    else if(separetedNum[i] == '6'){ separetedNum[i] = 'LX';  } 
			    else if(separetedNum[i] == '7'){ separetedNum[i] = 'LXX'; } 
			    else if(separetedNum[i] == '8'){ separetedNum[i] = 'LXXX';} 
			    else if(separetedNum[i] == '9'){ separetedNum[i] = 'XC';  }

		    } else if(i == 0){

			    if(     separetedNum[i+2] == '1'){ separetedNum[i+2] = 'I';   } 
			    else if(separetedNum[i+2] == '2'){ separetedNum[i+2] = 'II';  } 
			    else if(separetedNum[i+2] == '3'){ separetedNum[i+2] = 'III'; } 
			    else if(separetedNum[i+2] == '4'){ separetedNum[i+2] = 'IV';  } 
			    else if(separetedNum[i+2] == '5'){ separetedNum[i+2] = 'V';   } 
			    else if(separetedNum[i+2] == '6'){ separetedNum[i+2] = 'VI';  } 
			    else if(separetedNum[i+2] == '7'){ separetedNum[i+2] = 'VII'; } 
			    else if(separetedNum[i+2] == '8'){ separetedNum[i+2] = 'VIII';} 
			    else if(separetedNum[i+2] == '9'){ separetedNum[i+2] = 'IX';  }
		    
		    }
	    }
	  
    } else if(maxDecimal == 2){

	    for (let i = maxDecimal - 1; i > -1; i--){
		    
		    if (i == 1){
			    
			    if(     separetedNum[i-1] == '1'){ separetedNum[i-1] = 'X';   } 
			    else if(separetedNum[i-1] == '2'){ separetedNum[i-1] = 'XX';  } 
			    else if(separetedNum[i-1] == '3'){ separetedNum[i-1] = 'XXX'; } 
			    else if(separetedNum[i-1] == '4'){ separetedNum[i-1] = 'XL';  } 
			    else if(separetedNum[i-1] == '5'){ separetedNum[i-1] = 'L';   } 
			    else if(separetedNum[i-1] == '6'){ separetedNum[i-1] = 'LX';  } 
			    else if(separetedNum[i-1] == '7'){ separetedNum[i-1] = 'LXX'; } 
			    else if(separetedNum[i-1] == '8'){ separetedNum[i-1] = 'LXXX';} 
			    else if(separetedNum[i-1] == '9'){ separetedNum[i-1] = 'XC';  }
		    
		    } else if (i == 0){

			    if(     separetedNum[i+1] == '1'){ separetedNum[i+1] = 'I';   } 
			    else if(separetedNum[i+1] == '2'){ separetedNum[i+1] = 'II';  } 
			    else if(separetedNum[i+1] == '3'){ separetedNum[i+1] = 'III'; } 
			    else if(separetedNum[i+1] == '4'){ separetedNum[i+1] = 'IV';  } 
			    else if(separetedNum[i+1] == '5'){ separetedNum[i+1] = 'V';   } 
			    else if(separetedNum[i+1] == '6'){ separetedNum[i+1] = 'VI';  } 
			    else if(separetedNum[i+1] == '7'){ separetedNum[i+1] = 'VII'; } 
			    else if(separetedNum[i+1] == '8'){ separetedNum[i+1] = 'VIII';} 
			    else if(separetedNum[i+1] == '9'){ separetedNum[i+1] = 'IX';  }
		    }
	    }

    } else if(maxDecimal == 1){

	    if(     separetedNum == '1'){ separetedNum = 'I';   } 
	    else if(separetedNum == '2'){ separetedNum = 'II';  } 
	    else if(separetedNum == '3'){ separetedNum = 'III'; } 
	    else if(separetedNum == '4'){ separetedNum = 'IV';  } 
	    else if(separetedNum == '5'){ separetedNum = 'V';   } 
	    else if(separetedNum == '6'){ separetedNum = 'VI';  } 
	    else if(separetedNum == '7'){ separetedNum = 'VII'; } 
	    else if(separetedNum == '8'){ separetedNum = 'VIII';} 
	    else if(separetedNum == '9'){ separetedNum = 'IX';  }
    }

	if(maxDecimal > 1){
		return separetedNum.filter(arr => arr != '0').join('');
	} else {
		return separetedNum;
	}
}

testArr = [2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 400, 500, 501, 
	649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999];

console.log('\nROMAN NUMERAL CONVERTER------------------------------------\n');

console.log(testArr.map(arr => convertToRoman(arr)));	
