function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      if (nums[start] > nums[mid] && nums[start] <= target) {
        end = mid - 1;
        continue;
      }
      start = mid + 1;
    } else if (nums[mid] > target) {
      if (nums[end] < nums[mid] && nums[end] >= target) {
        start = mid + 1;
        continue;
      }
      end = mid - 1;
    }
  }

  return nums[start] === target ? start : -1;
}
