
const isPermutationSortMethod = (str1: string, str2: string) => {
  if(str1.length !== str2.length) {
    return false
  }

  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(isPermutationSortMethod('abafds', 'baasdf'))

const isPermutationCharCountingMethod = (str1: string, str2: string) => {
  if(str1.length !== str2.length) {
    return false
  }


}

console.log('f'.localeCompare('d'))