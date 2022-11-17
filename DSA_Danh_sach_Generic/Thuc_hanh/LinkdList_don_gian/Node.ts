export class myNode<T> {
    data: T;
    next: myNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readData(): T {
        return this.data;
    }
}