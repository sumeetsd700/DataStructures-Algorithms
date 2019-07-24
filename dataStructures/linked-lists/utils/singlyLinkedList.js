const Node = require('./singlyLinkedNode');

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addNodeAtBeg(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addNodeAtEnd(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
        } else {
            let ptr = this.head;
            while (ptr.next !== null) {
                ptr = ptr.next;
            }

            const node = new Node(value);
            node.next = ptr.next;
            ptr.next = node;
        }
    }

    get linkedList() {
        let ptr = this.head;
        let dataArr = [];

        while (ptr !== null) {
            dataArr.push(ptr.value);
            ptr = ptr.next;
        }

        return dataArr;
    }

    searchElement(value) {
        let ptr = this.head;
        let pos = 1;

        while (ptr !== null && ptr.value !== value) {
            ptr = ptr.next;
            pos += 1;
        }

        if (ptr === null) {
            return -1;
        } else {
            return pos;
        }
    }

    deleteElementWithValue(value) {
        if (this.head.value === value) {
            let ptr = this.head;
            this.head = this.head.next;

            // Make it eligible for automatic garbage collection
            ptr = undefined;
            return true;
        } else {
            let ptr = this.head.next;
            let prevPtr = this.head;

            while (ptr !== null && ptr.value !== value) {
                prevPtr = prevPtr.next;
                ptr = ptr.next;
            }

            if (ptr === null) {
                return false;
            } else {
                prevPtr.next = ptr.next;

                // Making it eligible for automatic garbage collection
                ptr = undefined;
                return true;
            }
        }
    }

    deleteElementAtPosition(pos) {
        if (pos === 1) {
            this.head = this.head.next;
            let ptr = undefined;
            return true;
        } else {
            let itr = 1;
            let prevPtr = null;
            let ptr = this.head;

            while (ptr !== null && itr < pos) {
                itr++;
                prevPtr = ptr;
                ptr = ptr.next;
            }

            if (ptr === null) {
                return false;
            } else {
                if (ptr.next === null) {
                    prevPtr.next = null;
                } else {
                    prevPtr.next = ptr.next;
                }

                ptr = undefined;
                return true;
            }
        }
    }

    swapNodes(val1, val2) {
        let ptr = this.head;
        let ptr1 = null;
        let ptr2 = null;

        while (ptr !== null) {
            console.log('\npre ptr1', ptr1);
            console.log('\npre ptr2', ptr2);

            console.log('\nPTR1 CASE', ptr1 || ((ptr.value === val1) ? ptr : ptr1))
            
            console.log('\nPTR2 CASE', ptr2 || ((ptr.value === val2) ? ptr : ptr2))

            ptr1 = ptr1 || ptr.value === val1 ? ptr : ptr1
            ptr2 = ptr2 || ptr.value === val2 ? ptr : ptr2

            console.log('\nNew ptr1 = ', ptr1);
            console.log('\nNew ptr2 = ', ptr2);

            if (ptr1 && ptr2) {
                break;
            } else {
                ptr = ptr.next;
            }
        }

        console.log(ptr1, ptr2);

        if (ptr === null) {
            return false;
        } else {
            if (ptr1 === ptr2) {
                return true;
            }

            function swapHeadNode(headNode, altNode) {
                let tempPtr = this.head;

                while (tempPtr.next !== altNode) {
                    tempPtr = tempPtr.next;
                }

                headNode.next = altNode.next;
                tempPtr.next = headNode;

                altNode.next = this.head.next;
                this.head = altNode;
            }

            if (ptr1 === head) {
                swapHeadNode(ptr1, ptr2);
                console.log(this.linkedList);
                return true;
            } else if (ptr2 === head) {
                swapHeadNode(ptr2, ptr1);
                console.log(this.linkedList);
                return true;
            } else {
                let tempPtr1 = this.head;
                let tempPtr2 = this.head;

                while (tempPtr1.next !== ptr1 && tempPtr2.next !== ptr2) {
                    if (tempPtr1.next !== ptr1) {
                        tempPtr1 = tempPtr1.next;
                    }

                    if (tempPtr2.next !== ptr2) {
                        tempPtr2 = tempPtr2.next;
                    }
                }

                tempPtr1.next = ptr2;
                tempPtr2.next = ptr1;

                let tempPtr = ptr2.next;
                ptr2.next = ptr1.next;
                ptr1.next = tempPtr;
                
                return true;
            }
        }
    }
}

module.exports = SinglyLinkedList;