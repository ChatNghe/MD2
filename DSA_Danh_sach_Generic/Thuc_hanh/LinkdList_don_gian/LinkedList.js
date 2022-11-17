"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data) {
        let node = new Node_1.myNode(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }
    insertLastNode(data) {
        if (!this.tail) {
            this.insertFirstNode(data);
        }
        else {
            let node = new Node_1.myNode(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    search(data) {
        if (this.size) {
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
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
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
            }
            else {
                let previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                this.tail = previousNode;
                this.size--;
            }
        }
    }
    getSize() {
        return this.size;
    }
    readList() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    }
    addOfIndex(index, data) {
        if (index == 0) {
            this.insertFirstNode(data);
        }
        else {
            let node = new Node_1.myNode(data);
            if (this.head) {
                let preNode = this.head;
                let currNode = this.head;
                for (let i = 1; i < index && currNode.next; i++) {
                    preNode = currNode;
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
exports.LinkedList = LinkedList;
