//PART 1
class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.right = new Node(3);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

let current = root;
const stack = [];
const result = [];

function inOrder() {
    while(current !== null || stack.length) {
        while(current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }
    return result;
}

console.log(inOrder(root));