---
sidebar_position: 2
title: Medium Algorithms - 2
---


## 16 -  Invert Binary Tree

Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

![](../../static/img/2022-06-12-11-26-16.png)


**Starter Code**

```js
function invertBinaryTree(tree) {
  // Write your code here.
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-12-00-37.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/pqWXSxn-4oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript

function invertBinaryTree(tree) {
    // Write your code here.
    const queue = [tree];
    while (queue.length) {
        const current = queue.shift();
        if (current === null) continue;
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }



}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}
}

```
</div>
</details>




## 17 -  Binary Tree Diameter

Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.

![](../../static/img/2022-06-12-11-57-43.png)


**Starter Code**

```js
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  return -1;
}

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>





## 17b -  Find Successor
Write a fucntion that takes in a Binary Tree ( Where nodes have an additional pointer to their parend node) as welll as a node contained in that tree and return the given node's successor.

![](../../static/img/2022-06-13-22-14-45.png)


**Starter Code**

```js
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
  return null;
}

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    const inOrderTraversalOrder = getInOrderTraversalOrder(tree);

    for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
        const currentNode = inOrderTraversalOrder[idx];
        if (currentNode !== node) continue;

        if (idx === inOrderTraversalOrder.length - 1) return null;

        return inOrderTraversalOrder[idx + 1];
    }
}

function getInOrderTraversalOrder(node, order = []) {
    if (node === null) return order;
    getInOrderTraversalOrder(node.left, order);
    order.push(node);
    getInOrderTraversalOrder(node.right, order);

    return order;
}
```
</div>
</details>

<details>

<summary>
Advanced Solution
</summary>

```js

function findSuccessor(tree, node) {
    if (node.right !== null) return getLeftMostChild(node.right);
    return getRightMostParent(node);
}


function getLeftMostChild(node){
    let currentNode = node;
    while(currentNode.left !== null){
        currentNode = currentNode.left;
    }

    return currentNode;
}

function getRightMostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right == currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}

```

</details>





## 18 -  Height Balanced Binary Tree

You're given the root node of a Binary Tree. Write a function that returns `true` if this Binary Tree is height balanced and `false` if it isn't

![](../../static/img/2022-06-23-01-36-11.png)


**Starter Code**

```js
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
  return false;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;


```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/ofSsDWpqfZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}

function heightBalancedBinaryTree(tree) {
    const treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;
}

function getTreeInfo(node) {
    if (node === null) return new TreeInfo(true, -1);
    const leftSubtreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <=1;
	const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);

}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;

}

```
</div>
</details>





## 19 -  Max Subset Sum No Adjacent

Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

![](../../static/img/2022-06-23-02-40-44.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>





## 20 -  Number of Ways to Make Change
Description

![](../../static/img/2022-05-06-15-44-28.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>





## 21 -  Min Number of Coins for Change
Description

![](../../static/img/2022-05-06-15-44-28.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>





## 22 -  Levenshtein Distance
Description

![](../../static/img/2022-05-06-15-44-28.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>





## 23 -  Kadane's Algorithm
Description

![](../../static/img/2022-05-06-15-44-28.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>






## 24 -  Single Cycle Check
Description

![](../../static/img/2022-05-06-15-44-28.png)


**Starter Code**

```js
starter Code

```

<details>
<summary>
 👨‍🔬 Javascript Solution
</summary>

<div>

![](../../static/img/2022-06-12-02-17-29.png)


<iframe width="380" height="420" src="https://www.youtube.com/embed/9kDaGmTZhVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

```javascript
Solution Code
}

```
</div>
</details>

