// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//using recursion to sum n
var sum_to_nC = function (n) {

    if (n <= 1) {   //base case
        return n;
    } else {
        return n + sum_to_nC(n - 1);

    }
};

console.log(sum_to_nC(5));