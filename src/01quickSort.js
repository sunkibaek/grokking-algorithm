const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const left = [];
  const pivot = nums[0];
  const right = [];

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];

    if (num > pivot) {
      right.push(num);
      continue;
    }

    left.push(num);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = quickSort;
