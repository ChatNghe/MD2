class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T): void {
        this.container.push(data)
    }
    pop():T | undefined {
        return this.container.pop();
    }

}
let arr:any[] = [1,2,3,4,5,6];
let stack = new Stack<number>()
for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop()
}
console.log(arr)