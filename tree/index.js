function getSerials(arr) {
  let nodes = arr;
  let resources = [];
  let node = nodes.shift();
  while (node) {
    if (Array.isArray(node.subTreeNodes) && node.subTreeNodes.length > 0) {
      nodes = nodes.concat(node.subTreeNodes);
    } else {
      resources = resources.concat(node.resources.map(item => item.resourceSerial));
    }
    node = nodes.shift();
  }
  return resources
}