var findMedianSortedArrays = function(nums1, nums2) {
	nums1 = nums1.concat(nums2)

	nums1 = nums1.sort((a,b)=>a-b)
	console.log(nums1)
console.log(nums1.length)
	let a = nums1.length
	if (a % 2 == 0) {
		// console.log(nums1)
		// console.log(a)
		return (nums1[a/2 - 1] + nums1[a/2]) / 2
	}
	else {
		return nums1[Math.round(a/2-1)]
	}
};

