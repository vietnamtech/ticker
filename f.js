var searchRange = function (nums, target) {
    let position = sbin(nums, 0, nums.length - 1, target);
    let result = [-1, -1];

    if (position !== null) {
        result = [position, position];
        let i = position, j = position;
        while (true) {

            if (nums[i + 1] === target)
                i++;
            if (nums[j - 1] === target)
                j--;
            
                result = [j, i]
            
            if (nums[i + 1] !== target && nums[j - 1] !== target) {
                break;
            }
        }


    }

    // for(let i = 0; i < nums.length; i++) {
    //     if (target === nums[i]) {
    //         if (result[0] === -1) {
    //             result[0] = i;
    //         }
    //         result[1] = i;
    //     }
    // }
    return result;
};


function sbin(arr, start, end, target) {

    if (end < start) return null;

    // find middle
    let middle = start + Math.floor((end - start) / 2);

    if (arr[middle] === target) {
        return middle;
    }
    
    if (arr[middle] > target)
        return sbin(arr, start, middle - 1, target);

    return sbin(arr, middle + 1, end, target);
}


let nums = [5, 7, 7, 8, 8, 10];
nums = [1];
let target = 1;

console.log(searchRange(nums, target));