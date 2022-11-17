import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
linkedList.addOfIndex(0,50);
linkedList.addOfIndex(1,100);
console.log(linkedList.getSize())
console.log(linkedList.readList())