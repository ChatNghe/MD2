function findFirstOccurrence(numbers: number[],
                             target: number): number {
    let low: number = 0;
    let high: number = numbers.length - 1;
    let result: number  = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (numbers[mid] == target) {
            result = mid;
            high = mid - 1;
        } else if (numbers[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target: number = 5
let index: number = findFirstOccurrence(data, target);

if (index !== -1) {
    console.log(`Phần tử ${target} xuất hiện đầu tiên tại vị trí ${index}`);
} else {
    console.log(`Phần tử ${target} không tồn tại trong mảng`)
}