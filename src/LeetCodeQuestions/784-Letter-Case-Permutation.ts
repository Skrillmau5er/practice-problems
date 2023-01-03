function letterCasePermutation(s: string): string[] {
    // This seems like a permuatation problem. Since we will want to return all permuations of the 
    // string with caps or small letters.
    // The difficult part possibly will be to ignore the numbers and continue
        // We might be able to solve this with an array of the indexes of the letters
    
    const sCharPos = []
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if(isLetter(char)) {
            sCharPos.push(i)
        }
    }

    const binaryOptions = []
    
    if(sCharPos.length) {
        for (let i = 0; i < Math.pow(2, sCharPos.length); i++) {
            let binNum = i.toString(2)
            while(binNum.length < sCharPos.length) {
                binNum = '0' + binNum
            }
            binaryOptions.push(binNum)
        }
    }
    
    const result = []
    binaryOptions.forEach(option => {
        let tempS = s
        for (let i = 0; i < s.length; i++) {
            let char = s.charAt(i)
            if(isLetter(char)) {
                const newChar = option.charAt(0) === '1' ? char.toUpperCase() : char.toLowerCase()
                option = option.slice(1,option.length)
                tempS = tempS.slice(0,i) + newChar + tempS.slice(i + 1, tempS.length)
            }
        }
        result.push(tempS)
    })
    
    return sCharPos.length ? result : [s]
};

const isLetter = (char: string) => {
    return char.toLowerCase() != char.toUpperCase()
}


// Try this solution

class Solution(object):
    def letterCasePermutation(self, S):
        def backtrack(sub="", i=0):
            if len(sub) == len(S):
                res.append(sub)
            else:
                if S[i].isalpha():
                    backtrack(sub + S[i].swapcase(), i + 1)
                backtrack(sub + S[i], i + 1)
                
        res = []
        backtrack()
        return res