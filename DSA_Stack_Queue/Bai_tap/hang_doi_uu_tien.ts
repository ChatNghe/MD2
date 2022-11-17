interface IPriorityQueue<T> {
    enqueue(item: T, priority: number): void
    dequeue(): T
    size(): number
    isEmpty(): boolean
}
class PriorityQueue<T> implements IPriorityQueue<T> {

    data: [number, T][] = []

    dequeue(): T {
        if (this.isEmpty()) {
            return null
        }

        let min = this.data[0]
        let minIndex = -1
        this.data.forEach((item, index) => {
            if (item[0] < min[0]) {
                min = item
                minIndex = index
            }
        })

        this.data.splice(minIndex, 1)
        return min[1]
    }

    enqueue(item: T, priority: number): void {
        this.data.push([priority, item])
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    size(): number {
        return this.data.length;
    }
}