//PART 2
class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

let root1 = new Node(1); //Tree 1
root1.right = new Node(3);
root1.left = new Node(2);

let root2 = new Node(1); //Tree 2
root2.right = new Node(3);
root2.left = new Node(2);

function isSameTree() {
    let current1 = root1;
    let current2 = root2;
    const stack1 = [];
    const stack2 = [];
    let result = false;

    while ((current1 !== null || stack1.length) && (current2 !== null || stack2.length)) {
        while (current1 !== null && current2 !== null) {
            stack1.push(current1);
            current1 = current1.left;

            stack2.push(current2);
            current2 = current2.left;
        }
        current1 = stack1.pop();
        current2 = stack2.pop();

        if(current1 === current2){
            result = true
        } else {
            result = false
        } 

        current1 = current1.right;
        current2 = current2.right;
    }
    return result;
}

console.log(isSameTree());