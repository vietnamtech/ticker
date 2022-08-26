/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0;
    let b = 0;
    let l = nums.length;

    for (let i = 0; i < l; i++) {

        if (l - b === i) break;
        
        if (nums[i] === 0) {
            swap(nums, r++, i);
        } else if (nums[i] === 2) {
            b++;
            swap(nums, i--, l - b);
        }

    }

};

function swap(arr, a, b) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

let nums = [1,2,0];
sortColors(nums);

console.log(nums)