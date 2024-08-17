class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(4);
const two = new TreeNode(2);
const seven = new TreeNode(7);
const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);

root.left = two;
root.right = seven;
two.left = one;
two.right = three;
seven.left = six;
seven.right = nine;

const depthSearch = (root) => {
  if (root === null) return [];

  const left = depthSearch(root.left);
  const right = depthSearch(root.right);
  return [root.value, ...left, ...right];
};

// console.log(depthSearch(root));

const invertTree = (root) => {
  if (root === null) {
    return [];
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// console.log(invertTree(root));
// console.log(depthSearch(root));

const sum = (root) => {
  if (!root) return [];

  const ans = [];
  const queue = [root];
  while (queue.length > 0) {
    const level = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ans.push(level);
  }

  return ans;
};

console.log(sum(root));
