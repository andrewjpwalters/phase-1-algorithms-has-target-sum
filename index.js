function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  for loop checking each number
    nested for loop checking the rest of the numbers
      return checking if sum of numbers equals target input
*/

/*
  Add written explanation of your solution here
  Using nested loops, the function checks each number against all
  the following numbers, one by one, until the target number is found
  and true is returned. If it is not, then false is returned. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
