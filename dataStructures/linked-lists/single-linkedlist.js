const SingleLinkedList = require('./utils/singlyLinkedList');

let ll = new SingleLinkedList();

ll.addNodeAtBeg(10);
ll.addNodeAtBeg(20);

ll.addNodeAtEnd(30);
ll.addNodeAtEnd(40);

console.log('Items in List:', ll.linkedList);
ll.swapNodes(10, 20);

console.log('Items in List - After swap:', ll.linkedList);
ll.deleteElementAtPosition(4);

console.log('\Items in List:', ll.linkedList);
ll.deleteElementWithValue(20);

console.log('Items in List:', ll.linkedList);