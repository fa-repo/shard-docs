/**
 * Compare a path to each path in document / folder items and set boolean result on isActive prop.
 * @param  {array} tree fed in from adapters/fromSource()
 * @param  {string} currentPath current url
 * @return {array}
 */

export default function setActiveTreeNode(tree = [], currentPath = "") {
  return tree.map(node => {
    if (node.type === "folder") {
      node.folder = setActiveTreeNode(node.folder, currentPath);
    }
    if (node.type === "folder" || node.type === "document") {
      node.isActive = node.path === currentPath;
    }
    return node;
  });
}
