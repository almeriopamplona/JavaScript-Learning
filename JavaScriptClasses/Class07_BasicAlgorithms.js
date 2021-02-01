/*****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************/
function truncateString(str, num) 
{
  if (num < str.length)
  {
    let aux = "";
    for (let i = 0; i < num; i++)
    {
      aux += str[i];
    }
    return aux + "...";

  } 
  else 
  {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and"+" yellow basket", 8))

/******************************************************************************/
function findElement(arr, func) 
{
  let num = 0;
  let aux = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (func(arr[i]))
    {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

/******************************************************************************/
function titleCase(str) 
{
 /* lowercase every word of the sentence: */
   str = str.toLowerCase();

 /* find how many whitespaces the sentece has: */
  let countWhiteSpace = /\s/g;
  let result = str.match(countWhiteSpace);

 /* break the sentence in an array of words: */
  let words = [];
  let aux = "";
  for(let i = 0; i < str.length; i++)
  {
    for(let j = i; j < str.length; j++)
    {
      if (str[j] != " ")
      {
          aux += str[j];
      } 
      else { i = j; break;}
    }
    if (words.length == result.length + 1)
    {
      break;
    }
    words.push(aux);
    aux = [];
  } 

/* iterete over the array to uppercase the first words: */
  for(let i = 0; i < words.length; i++)
  {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  aux = [];

  for(let i = 0; i < words.length; i++)
  {
    if(i < words.length - 1)
    {
      aux += words[i] + " ";
    } 
    else 
    {
      aux += words[i];
    }
  }

  return aux
}

console.log(titleCase("I'm a little tea pot"));

/******************************************************************************/
function frankenSplice(arr1, arr2, n) 
{
  let arr =[];
  for(let i = 0; i < arr1.length + arr2.length; i++)
  {
    if(i < n)
    {
      arr[i] = arr2[i];
    }
    else if(i == n)
    {
      let m = i;
      for(let j = 0; j < arr1.length;j++)
      {
        arr[m] = arr1[j];
        m++;
      }
     i = m - 1;
    }
    else
    {
      arr[i] = arr2[n];
      n++;
    }      
  } 
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/******************************************************************************/
function bouncer(arr)
{
  let arr1 = [];
  
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i])
    {    
      arr1.push(arr[i])
    } 
  }
  return arr1;
}

console.log(bouncer([7, "ate", "", false, 9]));

/******************************************************************************/
function getIndexToIns(arr, num) 
{  
  arr.sort(function(a, b){return a-b});
  
  let position = 0;

  for(let i = 0; i < arr.length - 1; i++)
  {
    if(arr[i] < num && arr[i+1] > num)
    {
      position = i + 1;
    } 
    else if(num == arr[i])
    {
      position = i;
    } 
    else if(num > arr[i+1] && (i+1) == (arr.length-1))
    {
      position = i + 2;
    }
  };
  return position;
}

console.log(getIndexToIns([2, 5, 10], 15));

/******************************************************************************/
function mutation(arr) 
{  
  let arr1 = arr[0];
  let arr2 = arr[1];
  let aux = [...arr2];

  arr1 = arr1.toLowerCase();
  arr2 = arr2.toLowerCase();
  
  for(let i = 0; i < arr2.length; i++)
  {
    for(let j = 0; i < arr1.length; j++)
    {
      if(arr2[i] === arr1[j])
      {
        aux[i] = true;
        break;
      } 
      else
      {
        aux[i] = false;
      }
    }
    return !(aux[i] === false);
  }
  return true;
}

console.log(mutation(["Noel", "Ole"]));

/******************************************************************************/
function chunkArrayInGroups(arr, size) 
{
  let arr1 = [];
  let arr2 = [];
  /* Define the number of rows of the new array: */
  let m = Math.ceil(arr.length/size);
  
  /* Initialize the index to walk through arr: */
  let n = 0;
  
  for(let i = 0; i < m; i++)
  {
    for(let j = 0; j < size; j++)
    {
      if(n < arr.length)
      {
        arr2.push(arr[n]);
        n++;
      } 
      else {break;}
    }
    arr1.push(arr2);
    arr2 = [];
  } 
  return arr1;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
