function permute(nums: number[]): number[][] {
    let sol = new Array()
    const numbers = nums
    
    const backTrack = (curr: number[]) => {
        if(curr.length === numbers.length) {
            sol.push([...curr])
            return
        }
        for(let i = 0; i < numbers.length; i++) {
            if(curr.includes(numbers[i])) continue
            curr.push(numbers[i])
            backTrack(curr)
            curr.pop()
        }
    }
    backTrack([])
    
    return sol
};