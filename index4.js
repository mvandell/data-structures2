//PART 4
class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(2);
root.left = new Node(1);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(5);
root.right.left.left = new Node(6);

