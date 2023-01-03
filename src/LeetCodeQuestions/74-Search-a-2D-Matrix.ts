function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let start = 0;
  let end = m - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (matrix[mid][0] > target) {
      end = mid - 1;
    } else if (matrix[mid][n - 1] < target) {
      start = mid + 1;
    } else {
      start = mid;
      end = mid;
    }
  }

  const remainingMatrix = [...matrix[start]];
  start = 0;
  end = n - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (remainingMatrix[mid] > target) {
      end = mid - 1;
    } else if (remainingMatrix[mid] < target) {
      start = mid + 1;
    } else {
      start = mid;
      end = mid;
    }
  }

  return remainingMatrix[start] === target;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let start = 0;
  let end = m * n - 1;

  while (start != end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    let midVal = matrix[row][col];

    if (midVal < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return matrix[Math.floor(end / n)][end % n] === target;
}
