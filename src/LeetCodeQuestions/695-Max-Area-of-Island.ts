function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;
  const rowMax = grid.length;
  const colMax = grid[0].length;

  const searchArea = (grid: number[][], row: number, col: number) => {
    if (row < 0 || col < 0 || row >= rowMax || col >= colMax || grid[row][col] === -1) {
      return;
    }

    if (grid[row][col] === 1) {
      let currentArea = 0;
      const mapIsland = (grid: number[][], row: number, col: number, area: number) => {
        if (row < 0 || col < 0 || row >= rowMax || col >= colMax || grid[row][col] == 2 || grid[row][col] == -1 || grid[row][col] === 0) {
          return;
        }

        grid[row][col] = 2;
        currentArea++;

        mapIsland(grid, row + 1, col, currentArea + 1);
        mapIsland(grid, row - 1, col, currentArea + 1);
        mapIsland(grid, row, col + 1, currentArea + 1);
        mapIsland(grid, row, col - 1, currentArea + 1);
      };

      const area = mapIsland(grid, row, col, 1);

      if (currentArea > maxArea) maxArea = currentArea;
    } else {
      grid[row][col] = -1;
    }

    searchArea(grid, row + 1, col);
    searchArea(grid, row - 1, col);
    searchArea(grid, row, col + 1);
    searchArea(grid, row, col - 1);
  };

  searchArea(grid, 0, 0);
  return maxArea;
}
