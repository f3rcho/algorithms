class Nodo {
    val: number;
    next: Nodo | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}
// head -> node -> node -> tail
class LinkedList {
    head: Nodo | null;
    tail: Nodo | null;
    lenght: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0
    }

    push(val: number) {
        let newNode = new Nodo(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail?.next ? this.tail.next : newNode;
            this.tail = newNode;
        }
        this.lenght++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.lenght--;
        if(this.lenght === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined
        let currentHead = this.head
        this.head =currentHead.next
        this.lenght--
        if(this.lenght === 0) {
            this.tail = null
        }
        return currentHead

    }
    traverse() {
        var current = this.head;
        while(current){
            console.log(current.val, "traversing");
            current = current.next;
        }
    }
}

const listTest = new LinkedList()

listTest.push(5)
listTest.push(4)
listTest.push(3)

// listTest.pop()
listTest.traverse()
console.log(listTest, "<<<");
