"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myNode = void 0;
class myNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
    readData() {
        return this.data;
    }
}
exports.myNode = myNode;
