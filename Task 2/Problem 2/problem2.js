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
function findNumberOfConnectedComponents(linkedlist, nums) {

    let numberofconnectedcomponents = 0;

    let mark = false;
    let i = 0;
    while (linkedlist != null && i != nums.length) {
        if (nums.indexOf(linkedlist.data) == -1) {
            linkedlist = linkedlist.next;
            mark = false;
            continue;
        }
        if (mark) {
            linkedlist = linkedlist.next;
        } else {
            mark = true;
            numberofconnectedcomponents++;
            linkedlist = linkedlist.next;
        }
        i++;
    }
    return numberofconnectedcomponents;


};


head = newNode(0);
head.next = newNode(1);
head.next.next = newNode(2);
head.next.next.next = newNode(3);
head.next.next.next.next = newNode(4);
let list1 = head;
let nums = [0, 3, 1, 4]
console.log("Number Of Connected Components for Example 1-->  " + findNumberOfConnectedComponents(list1, nums));


head = newNode(0);
head.next = newNode(1);
head.next.next = newNode(2);
head.next.next.next = newNode(3);
let list2 = head;
let nums2 = [0, 1, 3]
console.log("Number Of Connected Components for Example 2-->  " + findNumberOfConnectedComponents(list2, nums2));