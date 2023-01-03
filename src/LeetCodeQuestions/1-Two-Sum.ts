function twoSum(nums: number[], target: number): number[] {
  let cache = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (num in cache) {
      res.push(cache[num]);
      res.push(i);
      return res;
    }
    cache[nums[i]] = i;
  }
  return res;
}
