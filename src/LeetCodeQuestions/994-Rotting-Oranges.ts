function orangesRotting(grid: number[][]): number {
  // Thoughts put all the rotten oranges in a queue to make BFS approach
  // For each rotten orange in the queue, check all its neighbors and turn those ones rotten if so
  // Keep this going one round at a time since we need to keep track of minutes
  // Idea, keep track of recently effected oranges and then add them to the normal queue once the minute has passed
  let m = grid.length;
  let n = grid[0].length;
  let minutesPassed = 0;
  let queue = new Array();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let recentlyRottedOranges = new Array();
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    while (queue.length) {
      let curr = queue.shift();

      for (let i = 0; i < 4; i++) {
        let row = curr[0] + dirs[i][0];
        let col = curr[1] + dirs[i][1];

        if (row < m && row >= 0 && col < n && col >= 0) {
          if (grid[row][col] === 1) {
            grid[row][col] = 2; // Orange is now rotten
            recentlyRottedOranges.push([row, col]);
          }
        }
      }
    }
    if (recentlyRottedOranges.length) {
      minutesPassed++;
      queue = recentlyRottedOranges;
      recentlyRottedOranges = new Array();
    }
  }

  // Check if array has any 1's left, if so, then return -1, otherwise return minutes
  return gridHasRipeOranges(grid) ? -1 : minutesPassed;
}

const gridHasRipeOranges = (grid: number[][]) => {
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return true;
      }
    }
  }
  return false;
};
