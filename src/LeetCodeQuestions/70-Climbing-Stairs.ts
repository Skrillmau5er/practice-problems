function climbStairs(n: number): number {
  let stepOptions = [];
  const numSteps = n;
  let encountered = new Set();
  let times = 0;

  const backTrackStairs = (curr: number[]) => {
    times++;
    if (encountered.has(curr.join(''))) {
      return;
    } else {
      encountered.add(curr.join(''));
    }
    const currSum = curr.reduce((sum, x) => (sum += x), 0);
    if (currSum === numSteps) {
      stepOptions.push([...curr]);
    }
    for (let i = 1; i <= 2; i++) {
      if (i + currSum > numSteps) continue;
      curr.push(i);
      backTrackStairs(curr);
      curr.pop();
    }
  };

  backTrackStairs([]);
  console.log(times);
  return stepOptions.length;
}

// Normal resursive solution
function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// Bottom up approach
function climbStairs(n: number): number {
  if (n <= 2) return n;
  let firstInput = [1, 2];

  for (let i = 2; i < n; i++) {
    firstInput[i] = firstInput[i - 1] + firstInput[i - 2];
  }
  return firstInput.pop();
}

// Recursive memoized approach
function climbStairs(n: number): number {
  let cache = {};

  const climb = (num: number) => {
    if (num <= 2) return 1;
    if (cache[num]) {
      return num;
    } else {
      cache[num] = climb(num - 1) + climb(num - 2);
    }
  };

  climb(n);
  return cache[n];
}
