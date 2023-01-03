function rob(nums: number[]): number {
  // Idea either the robber can rob this house and the one 2 later, or he can rob the next to it only
  let numbers = nums;
  let houseCache = {};
  const robHouse = (n: number) => {
    if (n < 0) {
      return 0;
    }

    if (houseCache[n] !== undefined) {
      return houseCache[n];
    }

    let result = Math.max(robHouse(n - 2) + numbers[n], robHouse(n - 1));
    houseCache[n] = result;
    return result;
  };
  return robHouse(numbers.length - 1);
}

// [1,2,3,4]

// robHouse(3)
// Math.max(robHouse(1) {2} + 4, robHouse(2)) -> 4
// robHouse(1) -> Math.max(0 + 2, 1) -> 2
// robHouse(2) -> Math.max(1 + 3, robHouse(1)) -> 4
