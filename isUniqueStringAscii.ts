const isUniqueStringAscii = (value: string) => {
  let isUniqueString = true
  const numUniqueChars = 128
  const charExists = Array.from('f'.repeat(numUniqueChars))

  value.split('').every(char => {
    const charCode = char.charCodeAt(0)
    console.log({ char, charCode, valueAtIndex: charExists[charCode] })
    if (charExists[charCode] === 't') {
      isUniqueString = false
      return false
    } else {
      charExists[charCode] = 't'
      return true
    }
  })
  return isUniqueString
}

console.log(isUniqueStringAscii('\nasdfghjklzxcvdbnm,.poiuytrewq1234567890-='))
