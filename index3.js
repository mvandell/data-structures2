//PART 3
class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(13);
root.left.right = new Node(14);
root.right = new Node(12);
root.right.left = new Node(15);
root.right.right = new Node(16);

function countNodes() {
    let current = root;
    const stack = [];
    let count = 0;

    while(current !== null || stack.length) {
        while(current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        count++;
        current = current.right;
    }
    return count;
}

console.log(countNodes())