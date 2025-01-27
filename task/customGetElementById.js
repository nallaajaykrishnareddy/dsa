function customGetElementById(tree, id) {
  if (!tree || !id) {
    return null;
  }

  if (tree.id === id) {
    return tree;
  }

  if (tree.children) {
    for (const element of tree.children) {
      const result = customGetElementById(element, id);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
