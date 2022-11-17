export class Stack<T> {
    container: T[] = [];

    constructor() {
    }
    push(data: T): void {
        this.container.push(data)
    }
    pop():T|undefined {
        return this.container.pop();
    }
    size(): number {
        return this.container.length;
    }
}
