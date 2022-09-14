function containsDuplicate(nums: number[]): boolean {
    let x:number = 0;
    let y:number = 1;
    let orig:number = y;

    while (x < nums.length) {
        while (y < nums.length) {
            if (nums[x] === nums[y]) {
                return true;
            } else {
                ++y;
            }
        }
        x++;
        y = orig+=1;
    }
    return false;
};