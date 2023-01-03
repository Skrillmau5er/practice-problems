function lengthOfLongestSubstring(s: string): number {
  let sArr = s.split('');
  let current = [];
  let longest = 0;

  sArr.forEach((str) => {
    if (current.includes(str)) {
      let posToCut = current.indexOf(str) + 1;
      current = current.slice(posToCut);
    }
    current.push(str);
    if (current.length > longest) {
      longest = current.length;
    }
  });

  return longest;
}
