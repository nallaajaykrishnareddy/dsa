const twoSum = (nums, target) => {
  const map = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const element = nums[i];
    const compliment = target - element;
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(element, i);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
