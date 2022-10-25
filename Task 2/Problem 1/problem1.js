class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
function newNode(data) {
    temp = new Node();
    temp.data = data;
    temp.next = null;
    return temp;
}


function isCyclic(list) {
    if (list == null)
        return true;
    let node1 = head, node2 = head;
    while (node1 && node1.next) {
        node1 = node1.next.next;
        node2 = node2.next;
        if (node1 == node2) {
            return true;
        }
    }
    return false;
}
head = newNode(3);
head.next = newNode(2);
head.next.next = newNode(0);
head.next.next.next = newNode(4);
head.next.next.next.next = head.next
let example1 = head;
console.log("example 1 : " + isCyclic(example1))

head = newNode(1);
head.next = newNode(2);
head.next.next=head;
let example2 = head;
console.log("example 2 : " + isCyclic(example2))

head=newNode(1);
let example3 = head;
console.log("example 3 : " + isCyclic(example3))
