function findNumberOfDuplicate(numbers: number[], value: number): number {
    let count = 0;
    for (let i of numbers) {
        if (value === i) count++;
    }
    return count;
}

console.log(findNumberOfDuplicate([1,23,4,8,5,2,4,2,1,5,9,6,2,5],2))