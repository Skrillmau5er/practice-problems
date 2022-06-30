// Rotating the photo 90 degrees
const rotateNxNMatrix = (matrix: number[][]) => {
  const n = matrix.length
  const matrixRotated90Degrees = Array(n)
    .fill(0)
    .map((row) => Array(n).fill(0))

  matrix.forEach((row, i) => {
    for (let j = 0; j < n; j++) {
      matrixRotated90Degrees[j][i] = row[n - 1 - j]
    }
  })

  return matrixRotated90Degrees
}

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const matrix4x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

const matrix5x5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

const rotateNxNMatrixInPlace = (matrix: number[][]) => {
  const n = matrix.length - 1
  const numLevelsToParse = n - 1

  for (let level = 0; level < numLevelsToParse; level++) {
    for (let i = 0; i < n - level * 2; i++) {
      // First switch
      const temp = matrix[n - i - level][level]
      matrix[n - i - level][level] = matrix[level][i + level]

      // // Second switch
      const temp2 = matrix[n - level][n - i - level]
      matrix[n - level][n - i - level] = temp

      // // Third switch
      const temp3 = matrix[i + level][n - level]
      matrix[i + level][n - level] = temp2

      // Fourth switch
      matrix[level][i + level] = temp3
    }
  }
  return matrix
}

console.log(rotateNxNMatrixInPlace(matrix5x5))
