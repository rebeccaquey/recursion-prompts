/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
  var copyOfArr = array.slice();
  var totalSum = copyOfArr[0];
  if (array.length === 0) {
    return 0;
  } else {
    copyOfArr.shift();
    totalSum += sum(copyOfArr);
  }
  return totalSum;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  // SOLUTION 1: (using flat to flatten array)
  // var copyOfArr = array.slice().flat(Infinity);
  // // console.log(copyOfArr);
  // var totalSum = copyOfArr[0];
  // if (array.length === 0) {
  //   return 0;
  // } else {
  //   copyOfArr.shift();
  //   totalSum += arraySum(copyOfArr);
  // }
  // return totalSum;

  // SOLUTION 2: 
  var totalSum = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      totalSum += arraySum(array[i]);
    } else {
      totalSum += array[i];
    }
  }
  return totalSum;

};

// 4. Check if a number is even.
var isEven = function (n) {
  var bool = true;
  // console.log(n)
  if (n >= 0) {
    if (n === 0) {
      bool = true;
    } else if (n === 1) {
      bool = false;
    } else {
      return isEven(n - 2);
    }
  } else if (n < 0) {
    if (n === -2) {
      bool = true;
    } else if (n === -1) {
      bool = false;
    } else {
      return isEven(n + 2);
    }
  }
  return bool;
  // return bool;
  // return bool;
  // if (Number.isInteger(n / 2)) {
  //   bool = true;;
  // }
  // n
  // return bool;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (n === 0 || n === 1 || n === -1) {
    return 0;
  } else if (n > 1) {
    return (n - 1) + sumBelow(n - 1);
  } else if (n < -1) {
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
  //input: two numbers -- range
  //output: array of numbers in between x and y
  //need to call itself.. 

  // SOLUTION 1: (using inner recursion)
  // var insideRange = [];
  // var newRange = function (a, b) {
  //   if (a <= b) {
  //     if (a === (b - 1) || a === b) {
  //       return insideRange;
  //     } else {
  //       insideRange.push(a + 1);
  //       return newRange(a + 1, b);
  //     }
  //   } else if (a > b) {
  //     if ((a - 1) === b) {
  //       return insideRange;
  //     } else {
  //       insideRange.push(a - 1);
  //       return newRange(a - 1, b);
  //     }
  //   }
  // }
  // newRange(x, y);
  // return insideRange;

  // SOLUTION 2: (using pure recursion)
  //check if x is less than or equal to y
  if (x <= y) {
    //if x equals y or x equals y-1, we return an array
    if (x === y || x === (y - 1)) {
      return [];
      //otherwise, we call our function with a smaller range and check if that number satisfies our first condition
    } else {
      var numbers = range(x, y - 1);
      //after it satisfies the x=y or x=y-1 condition, we will push the number and return
      numbers.push(y - 1);
      return numbers;
    }
    //if x is greater than y:
  } else {
    //if x equals y+1, then we return an array
    if (x === (y + 1)) {
      return [];
      //otherwise, we call our function with a smaller range and check if that number satisfies our first condition
    } else {
      var numbers = range(x, y + 1);
      //after it satisfies the x=y or x=y+1 condition, we will push the number and return
      numbers.push(y + 1);
      return numbers;
    }
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
  var isEven = function (x) {
    if (x % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (exp === 0) {
    return 1;
  } else if (exp > 0) {
    if (isEven(exp)) {
      var x = exponent(base, (exp / 2));
      return x * x;
    } else {
      var y = exponent(base, (exp - 1));
      return base * y;
    }
  } else {
    var z = exponent(base, (-exp));
    return 1 / z;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  //i: number
  //o: true/false

  //check exponents of 2, if n is one of the powers, return true; else, return false;
  //check if poweroftwo(n) === n, then check if poweroftwo(n-1) === n, etc.
  //if n = 0, false; if n = 1, true; if n = 2, true;
  // try loggo ! try the crow wow hehe

  if (n === 1 || n === 2) {
    return true;
  } else if (n <= 0 || n % 2 !== 0) {
    return false;
  }
  return powerOfTwo(n / 2);

  // var logarithm = Math.log2(n)
  // if (Number.isInteger(logarithm)) {
  //   return true;
  // } else {
  //   return false;
  // }
  // if (
  // if (power === powerOfTwo(n - 1)) {
  // return true;
  // } else {
  // console.log(n)
  // powerOfTwo(n - 1);
  // }

};

// 9. Write a function that reverses a string.
var reverse = function (string) {
  //i: string
  //o: string reversed;

  var reversed = '';
  if (string.length <= 1) {
    return string;
  } else {
    reversed += string[string.length - 1];
    // console.log(reversed);
    return reversed += reverse(string.slice(0, -1))
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  //i: string;
  //o: boolean;
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    return palindrome(string.slice(1, -1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

//can't use complex math, only simple. Use - or +.

//i: two numbers
//o: one number
//edgecases: if x is less than y, if x or y are negative, if x is 0, if y is 0

//disregarding the sign, if x is less than y, return value should be x (just do the value, and then add the sign back on after) --- it will always take the sign of the dividend (x)
//if y is 0, return NaN
//if x is 0, return 0
// var absoluteX = Math.abs(x);
// var absoluteY = Math.abs(y);
// if (absoluteX < absoluteY) {
//   return x;
// } else {
//   if (absoluteX - absoluteY === 0) {
//     return 0;
//   } else if (x > 0) {
//     return modulo((x - absoluteY), y)
//   } else {
//     return modulo((x + absoluteY), y)
//   }
// }

var modulo = function (x, y) {

  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  }
  if (x < 0 && y > 0) {
    var absoluteX = -x;
    if (absoluteX < y) {
      return x;
    } else {
      if (absoluteX - y === 0) {
        return 0;
      } else {
        return modulo((x + y), y);
      }
    }
  } else if (x >= 0) {
    if (x < y) {
      return x;
    } else {
      if (x - y === 0) {
        return 0;
      } else {
        return modulo((x - y), y);
      }
    }
  } else {
    if (x > y) {
      return x;
    } else {
      if (y < 0) {
        return modulo((x - y), y);
      } else {
        return modulo((x + y), y);
      }
    }
  }



};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
//i: two numbers
//o: one number
//cant use complex math
//edge:if one or both are negative, if one or both are 0
//create a total variable
//find larger argument (x or y) and add that number to total, then call multiply with the smaller number - 1; or can just add x to total y amount of times. 

var multiply = function (x, y) {
  var product = 0;
  if (x === 0 || y === 0) {
    return product;
  } else {
    if (y > 0) {
      return product += x + multiply(x, y - 1);
    } else if (y < 0) {
      return product -= x - multiply(x, y + 1);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  //i: two strings
  //o: boolean
  //e: empty strings
  //if lengths are different, return false;
  //else compare first index of each string and then substring it and call it with the string
  // if ()
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
};
