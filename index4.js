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

function searchBottomLeftValue(root) {
    const queue = [root];
    let leftValue = 0;

    while (queue.length > 0) {
        const currentLevelSize = queue.length;
        leftValue = queue[0].value;

        for (let i = 0; i < currentLevelSize; i++) {
            const current = queue.shift();

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    return leftValue;
}

console.log(searchBottomLeftValue(root))