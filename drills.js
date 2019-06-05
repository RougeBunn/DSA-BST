/*
1)
          3
        /  \
      1      4
       \       \
        2        6
                /  \
              5     9
                    /  
                  7

          E
       /     \
      A        S
        \     /  \
         E   Q     Y 
            /  \      
           I    \
            \    \
             O   U       
           /   /   
          N   S 
             \
              T      

2)
           4
        /     \
       1        \
        \         6
         2       /  \
              5     9
                    /  
                  7

          S
       /    \ 
      A       Y
        \     / 
         E   Q     
            /  \      
           I    \
            \    \
             O   U       
           /   /   
          N   S 
             \
              T               
*/
const BST = require('./BST');

function main() {
  const newBST = new BST();
  const data = [3, 1, 4, 6, 9, 2, 5, 7];
  // const data = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

  data.forEach(num => {
    newBST.insert(num, num);
  });

  data.forEach(key => {
    // console.log(BST.find(key))
  });

  console.log(BstHeight(newBST));
}

main();

//4.
// It adds the value of all nodes in the BST by calling the function to
// pass in each child node of the current node.
// It will return a final numerical value as the total value of the tree.

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//5. Height

function BstHeight(tree) {
  if (!tree) {
    return 0;
  }
  let lengthL = BstHeight(tree.left);
  let lengthR = BstHeight(tree.right);

  return 1 + Math.max(lengthL, lengthR);
}

//6.

function IsItBST(tree) {
  if (
    tree.left > tree ||
    tree.left > tree.right ||
    tree.right < tree ||
    tree.right < tree.left
  ) {
    return false;
  }
  if (!tree.right && !tree.left) {
    if (!tree.parent) {
      return false;
    } else return;
  }
  if (tree.left) {
    IsItBST(tree.left);
  }
  if (tree.right) {
    IsItBST(tree.right);
  }
  return true;
}

//7.
function FindThird(tree) {
  if (!tree.right) {
    if (tree.left !== null) {
      return tree.parent;
    }
    if (!tree.left) {
      if (!tree.parent) {
        return tree;
      }
      return tree.parent.left;
    }
  }
  return FindThird(tree.right);
}

//8.
function Balanced(tree) {
  if (tree === null) {
    return 0;
  }

  let rightCount = height(tree.right);
  let leftCount = height(tree.left);

  let result = Math.abs(rightCount - leftCount);
  return result > 1 ? false : true;
}

//9.

function AreTheySame(arr1, arr2) {
  if (arr1.length !== arr2.length) false;
  if (arr1[0] !== arr2[0]) false;

  let left1 = [];
  let right1 = [];
  let left2 = [];
  let right2 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr1[0]) {
      left1.push(arr1[i]);
    } else {
      right1.push(arr1[i]);
    }
    if (arr2[i] < arr2[0]) {
      left2.push(arr2[i]);
    } else {
      right2.push(arr2[i]);
    }
  }

  console.log('left1', left1);
  console.log('right1', right1);
  console.log('left2', left2);
  console.log('right2', right2);

  if (right1.length === right2.length) {
    for (let i = 0; i < right1.length; i++) {
      if (right1[i] !== right2[i]) {
        return false;
      } else if (left1[0] !== left2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

//Complexity is O(n^2) since you need to go through each array 2 times to find the
//matching pair in the other.

console.log(AreTheySame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
