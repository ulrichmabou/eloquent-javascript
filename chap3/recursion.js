/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see 
whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven (n) {
  if (n == 0) {
    return true;
  }
  else if (n == 1) {
    return false;
  }
  else {
    return isEven(n -2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/*
RangeError: Maximum call stack size exceeded (line 2 in function isEven) 
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
 called from line 9 in function isEven
*/

/*
When given a negative number, the function will recurse again and again, passing itself an ever more negative number, 
thus getting further and further away from returning a result. It will eventually run out of stack space and abort.
*/

// Solution to the problem:
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
