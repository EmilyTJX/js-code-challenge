// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//using arithmetic progression
var sum_to_nB = function (n) {
    return ((n * (n + 1)) / 2);
};

console.log(sum_to_nB(5));