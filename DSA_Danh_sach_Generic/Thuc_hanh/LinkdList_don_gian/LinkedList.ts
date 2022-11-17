import {myNode} from "./Node";

export class LinkedList<T> {
    head: myNode<T> | null;
    tail: myNode<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T): void {
        let node = new myNode(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(data: T): void {
        if (!this.tail){
            this.insertFirstNode(data);
        }else {
            let node = new myNode(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    search(data: T) {
        if (this.size){
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    deleteFirstNode() {
        if (this.head) {
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--;
        }
    }

    deleteLastNode() {
        if (this.head) {
            let currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            } else {
                let previousNode = null;
               while(currentNode.next){
                   previousNode = currentNode;
                   currentNode = currentNode.next;
               }
                this.tail = previousNode;
                this.size--;
            }
        }
    }

    getSize() : number{
        return this.size;
    }

    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    addOfIndex(index: number, data: T): void {
        if (index == 0) {
            this.insertFirstNode(data);
        } else {
            let node = new myNode(data);
            if(this.head){
                let preNode: myNode<T> | null = this.head;
                let currNode: myNode<T> | null = this.head;

                for (let i = 1; i < index && currNode.next; i++) {
                    preNode =  currNode;
                    currNode = currNode.next;
                }

                let temLink = currNode.next;
                currNode.next = node;
                node.next = temLink;

            }
            else {
                this.head = node;
            }
            this.size++;
        }
    }
}