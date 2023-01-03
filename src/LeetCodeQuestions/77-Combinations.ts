function combine(n: number, k: number): number[][] {
  var solution = new Array();

  const backTrack = (remaining, curr, next) => {
    if (remaining === 0) {
      solution.push([...curr]);
    } else {
      for (let i = next; i < n + 1; i++) {
        curr.push(i);
        backTrack(remaining - 1, curr, i + 1);
        curr.pop();
      }
    }
  };
  backTrack(k, [], 1);
  return solution;
}
