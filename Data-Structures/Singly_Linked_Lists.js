function Node(value){
    this.data = value;
    this.next = null;
}

function SinglyList(){
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value){

    var node = new Node(value);
    var currentNode = this.head;

    //If Linked List is empty
    if(!currentNode){
        this.head = node;
        this._length++;

        return node;
    }

    //If linked list is not empty
    while(currentNode.next){
        currentNode = currentNode.next;
    }

    currentNode.next = node

    this._length++;

    return node;
}

var linkedList = new SinglyList();
linkedList.add(1);
linkedList.add(2);
console.log(linkedList);