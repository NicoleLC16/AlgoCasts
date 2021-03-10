// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let currentTier = [root];
  let counters = [];

  while (currentTier.length) {
    counters.push(currentTier.length); //push length of tier into counters
    currentTier = currentTier.reduce(
      (tempArr, node) => tempArr.concat(node.children),
      //concat instead of push because push will add children as array instead of single elements
      //ex: push [1,2,3,[4,5,6]]
      //concat merges arrays
      []
    );
    //unpacking children of each node into a temporary array.
    //then while loop will push length of tier into counters
  }

  return counters;
}

module.exports = levelWidth;
