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





## 19 -  Max Subset Sum No Adjacent
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

