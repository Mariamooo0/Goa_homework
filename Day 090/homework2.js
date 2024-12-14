function manualFilter(arr, threshold) {
    return arr.filter(num => num >= threshold);
}

// გამოყენების მაგალითი
const numbers = [5, 3, 8, 4, 2];
const threshold = 4;

console.log("გაფილტრული მასივი:", manualFilter(numbers, threshold));
// შედეგი: [5, 8, 4]