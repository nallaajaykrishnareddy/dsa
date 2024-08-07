class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depath first search

const depthFirstSearch = (root) => {
  const stack = [root];
  const result = [];

  if (!root) return result;

  while (stack.length > 0) {
    const currentValue = stack.pop();
    result.push(currentValue.value);

    if (currentValue.right) {
      stack.push(currentValue.right);
    }

    if (currentValue.left) {
      stack.push(currentValue.left);
    }
  }

  return result;
};

//call recursively

const depthFirstSearchRecursively = (root) => {
  if (!root) {
    return [];
  }

  const leftValues = depthFirstSearchRecursively(root.left);
  const rightValues = depthFirstSearchRecursively(root.right);
  return [root.value, ...leftValues, ...rightValues];
};

console.log(depthFirstSearchRecursively(a));

//breadth first search

const breadthFirstSearch = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const currentValue = queue.shift();
    result.push(currentValue.value);

    if (currentValue.left !== null) {
      queue.push(currentValue.left);
    }

    if (currentValue.right !== null) {
      queue.push(currentValue.right);
    }
  }
  return result;
};

const treeIncludes = (root, ele) => {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === ele) {
      return true;
    }

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  return false;
};

//recursively

const treeIncludesRecursively = (root, target) => {
  if (root === null) {
    return false;
  }

  if (root.value === target) {
    return true;
  }

  return (
    treeIncludesRecursively(root.left, target) ||
    treeIncludesRecursively(root.right, target)
  );
};

console.log(breadthFirstSearch(a));
console.log(treeIncludes(a, "n"));
console.log(treeIncludesRecursively(a, "m"));
