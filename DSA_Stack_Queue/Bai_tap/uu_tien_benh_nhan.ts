class Patient {
    name: string;
    code: number;

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
}

class Queue{
    container: Patient[] = [];

    constructor() {
    }

    enqueue(item: Patient): void {
        this.container.push(item);
    }

    dequeue(): Patient | undefined {
        this.container = this.container.slice().sort((a,b) => {return a.code - b.code;})
        return this.container.shift();
    }

}

let patient1 = new Patient('Smith', 5)
let patient2 = new Patient('Jones', 4)
let patient3 = new Patient('Fehrenbach', 6)
let patient4 = new Patient('Brown', 1)
let patient5 = new Patient('SmitIngramh', 1)
let queue = new Queue()
queue.enqueue(patient1)
queue.enqueue(patient2)
queue.enqueue(patient3)
queue.enqueue(patient4)
queue.enqueue(patient5)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.container)

