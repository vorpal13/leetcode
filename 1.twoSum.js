// Problem:

// <a href="https://leetcode.com/problems/two-sum/">Two Sum</a>

// Solution
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (complement in obj) {
      return [obj[complement], i]
    }
    obj[nums[i]] = i
  }
}
