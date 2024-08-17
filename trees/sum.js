class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(3);
const node2 = new TreeNode(11);
const node3 = new TreeNode(4);
const node4 = new TreeNode(2);
const node5 = new TreeNode(4);
const node6 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

const traversal = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.value) {
      sum += currentNode.value;
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  return sum;
};

const treeSum = (root) => {
  if (root === null) {
    return 0;
  }

  return root.value + treeSum(root.left) + treeSum(root.right);
};

console.log(traversal(node1));
console.log(treeSum(node1));
