
// Best approach

// const arr = [1,8,6,2,5,4,8,3,7];
const arr = [2,3,4,5,18,17,6]

var maxArea = function (heights) {
    let maxArea = 0;
    let a = 0;
    let b = heights.length - 1;

    while (a !== b) {
        let height = Math.min(heights[a], heights[b]);
        let width = b - a;
        maxArea = Math.max(maxArea, height * width);
        heights[b] > heights[a] ? a++ : b--;
    }
    return maxArea;
};


console.log(maxArea(arr));