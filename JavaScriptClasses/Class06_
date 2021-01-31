/*****************************************************************************
 * Author: Almério José Venâncio Pains Soares Pamplona                       *
 * E-mail: almeriopamplona@gmail.com                                         *
 *****************************************************************************
 * Reference: https://www.freecodecamp.org/learn/                            *
 *****************************************************************************/
let arr = ['warm', 'sunny'];

/*****************************************************************************/
/* Adding elements at the end of the array:                                  */

arr.push('cool', 'thunderstorms');

/* Adding elements at the begnning of the array:                             */

arr.unshift('cold','rainy');

console.log(arr);

/* Deleting just one element at the end of the array:                        */

arr.pop();

/* Deleting just one elements at the beginnning of the array:                */

arr.shift();

console.log(arr);

/*****************************************************************************/
/* Deleting elements at any place in some array:                             */

arr.push('cool', 'thunderstorms'); arr.unshift('cold','rainy');

let startPoint = 2;
let totalDeletedElem = 2;

arr.splice(startPoint, totalDeletedElem);

console.log(arr);

/*****************************************************************************/
/* Deleting elements at any place and add elements at the same position:     */

let arrArray = ['cold','rainy','warm', 'sunny','cool', 
                'thunderstorms'];

arr.splice(startPoint, totalDeletedElem, 'cloudy','windish');

console.log(arrArray);

/*****************************************************************************/
/* Taking a peace of information from the array                              */

startPoint = 2;
let lessThenUpperLim = 4; /* last place you want plus one                    */

console.log(arrArray(startPoint,lessThenUpperLim));

/*****************************************************************************/
/* Spread syntax is using to copy an entire array into another one           */

function copyMachine(arr, num)
{
    let newArr = [];

    while (num >= 1)
    {
        newArr.push([...arr]);

        num--;
    }

    return newArr;
}

console.log(copyMachine([true, false, true], 2));

function spreadOut()
{
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadOut());

/*****************************************************************************/
/* Check index of arrays:                                                    */

function quickCheck(arr, elem)
{
    if(arr.indexOf(elem) != -1)
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*****************************************************************************/
/* Loop conditions:                                                          */

function filteredArray(arr, elem)
{
    let newArr = [];
    let m = false;

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr[i].length; j++)
        {
            if(arr[i][j] == elem){ m = true; break;}
        }
        if (m == false){newArr.push(arr[i]);}
        m = false;
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], 
    [19, 3, 9]], 3));

console.log(filteredArray([ ["amy", "beth", "sam"], 
    ["dave", "sean", "peter"] ], "peter"));

console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], 
    ["saxophones", 2] ], 2) );

console.log(filteredArray([[10, 8, 3], [14, 6, 23], 
    [3, 18, 6]], 18) );

/* alternative solution: */

function filteredArray2(arr, elem)
{
    let newArr = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].indexOf(elem) == -1)
        {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filteredArray2([[3, 2, 3], [1, 6, 3], [3, 13, 26], 
    [19, 3, 9]], 3));

console.log(filteredArray2([ ["amy", "beth", "sam"], 
    ["dave", "sean", "peter"] ], "peter"));

console.log(filteredArray2([ ["trumpets", 2], ["flutes", 4],
    ["saxophones", 2] ], 2) );

console.log(filteredArray2([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) );

/*****************************************************************************/
/* OBJECTS:                                                                  */

let foods = 
{
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.banana = 13; 
foods['grapes'] = 35; 
foods['strawberries'] = 27;

console.log(foods);

function checkInventory(scannedItem)
{
    return foods[scannedItem];
}

console.log(checkInventory("apples"));

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

let users = 
{
  Alan: 
  {
    age: 27,
    online: true
  },
  Jeff: 
  {
    age: 32,
    online: true
  },
  Sarah: 
  {
    age: 48,
    online: true
  },
  Ryan: 
  {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) 
{
  let names = ['Alan', 'Jeff', 'Sarah','Ryan'];
  for (let i = 0; i < names.length; i++)
  {
    if (obj.hasOwnProperty(names[i]) == false)
    {
      return false;
    }
  }
  return true;
}

console.log(isEveryoneHere(users));

function countOnline(usersObj) 
{
  let i = 0;
  for(let user in usersObj)
  {
    if(usersObj[user].online){i++}
  }
  return i;
}

console.log(countOnline(users));

function getArrayOfUsers(obj) 
{
   return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

let user = 
{
  name: 'Kenneth',
  age: 28,
  data: 
  {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: 
    [
      'Sam',
      'Kira',
      'Tomo'
    ],
    
    location: 
    {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) 
{
     userObj.data.friends.push(friend);
     return userObj.data.friends; 
}

console.log(addFriend(user, 'Pete'));
