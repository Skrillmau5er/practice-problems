const isPalindromePermuatation = (str: string) => {
  const charCounts = new Map<string, number>()

  str.split('').forEach(char => {
    const charCount = charCounts.get(char) || 0
    charCounts.set(char, charCount + 1)
  })

  let oddEncountered = false
  let isPossiblePalindrome = true

  charCounts.forEach((value) => {
    if(value % 2 === 1) {
      if(oddEncountered) {
        isPossiblePalindrome = false
      } else {
        oddEncountered = true
      }
    }
  })

  return isPossiblePalindrome
}

console.log(isPalindromePermuatation('asdffdesedddaw'))