class Queue<T> {
    container: T[] = [];

    constructor() {
    }

    enqueue(item: T): void {
        this.container.push(item);
    }

    dequeue(): T | undefined {
        return this.container.shift();
    }

}

class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T): void {
        this.container.push(data)
    }

    pop(): T | undefined {
        return this.container.pop();
    }
}

let readlineSync = require('readline-sync');
let str = readlineSync.question('Enter string that need to check :  ');
let stack = new Stack<string>();
let queue = new Queue<string>();
for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
    queue.enqueue(str[i])
}
let flag = 0;
for (let i = 0; i < str.length; i++) {
    if (stack.pop() !== queue.dequeue()) {
        flag = 1;
    }
}
if (flag === 0){
    console.log('Chuoi doi xung')
}else console.log('Chuoi khong doi xung')
