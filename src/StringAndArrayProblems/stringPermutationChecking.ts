
const isPermutationSortMethod = (str1: string, str2: string) => {
  if(str1.length !== str2.length) {
    return false
  }

  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

const isPermutationCharCountingMethod = (str1: string, str2: string) => {
  if(str1.length !== str2.length) {
    return false
  }

  let charCount = 0

  for(let i = 0; i < str1.length; i++) {
    charCount += str1.charCodeAt(i)
  }

  for(let i = str2.length - 1; i >= 0; i--) {
    charCount -= str2.charCodeAt(i)

    if(charCount < 0) {
      return false
    }
  }

  return charCount === 0
}

console.log(isPermutationCharCountingMethod('asdfae', 'fdsaad'))