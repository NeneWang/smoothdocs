---
title: Medium Algorithms Answers
authors: nelson
tags: [my-answers, white-board, algorithms, algortihms-medium]
---

:::caution Blog Post In Progress
This blog post eventually will have my answers to all provided interview
questions. However for the moment, it just here for demo purposes...


You can see the [trello board of the progress made here](https://trello.com/b/GBKwqnA8/learning-through-projects)

:::

:::tip How to treat this post.
I will be posting some answers for easy algorithm questions.
:::



## Longest Peak
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.
![](/img/2022-04-18-17-07-54.png)
<details>
<summary>
 Javascript Solution
</summary>

As you can see you first fit the the peak, and then start extending the peak
sides (That's whjy it starts from the left to the right. which goes increasing
or decreasing)

![](/img/2022-04-18-17-17-44.png)
<div>


```javascript
function longestPeak(array) {
    let longestPeakLength = 0;
    let i = 1;

    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
        if (!isPeak) {
            i++;
            continue;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
        }

        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
        }

         const currentLongest = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(currentLongest, longestPeakLength);
        i = rightIdx;

    }

    return longestPeakLength;

}

```
</div>
</details>



## Array of Products
Write a function that takes in an array of integers and ran array of the same
length, where each element in the output array is equal to the product of every
other number in the input array

![](/img/2022-04-18-17-28-38.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>

![](/img/2022-04-18-17-51-44.png)

SO this solution is actually very simple, a nested loop with a ignore case if
the i = j so it skips multiplying tiself. 


```javascript

function arrayOfProducts(array) {
    const products = [];

    for (let i = 0; i < array.length; i++) {
        let runningProduct = 1;
        for (let j = 0; j < array.length; j++) {
            if(i!==j){
                runningProduct *= array[j];
            }
            products[i] = runningProduct;
        }
    }
    return products;
}
// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

```

The o(n) solution is a little more interesting, this one 
o(n) solution bases on the following clue: we can get all the multiplication in
the right and the multiplications of all the values in the left we can get the
multiplication of all the values except for the one there:

![](/img/2022-04-18-18-10-10.png)

```javascript
function arrayOfProducts(array){
    const products = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for(let i=0; i<array.length; i++){
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }

    let rightRunningProduct = 1;
    for(let i=array.length -1 ; i>=0;i--){
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }

    return products;

}
```
</div>
</details>



## First Duplicate Value
Given an array of integers between `a` and `n`, inclusive, where `n` is the
length of the array, write a function that returns the first integer that
appears more than once. (when the array is read from left to right)

![](/img/2022-04-18-18-21-15.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>
This happens because you can understand exclusivelly that the array perfectly matches the size of the a to n condition where the values cannot be larger than the array size.
Therefore you can use that property to maximize the effeciency.

![](/img/2022-04-18-18-33-30.png)

```javascript
function firstDuplicateValue(array) {
    for (const value of array) {
        const absValue = Math.abs(value);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;

    }
    return -1;
}

```
</div>
</details>


## Merge Overlapping Intervals

Write a function that takes in a non-empty array of arbitrary intervals, merges
any overalapping intervals, and returns the new intervals in no particular order.

![details](/img/2022-04-18-18-36-02.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>

![](/img/2022-04-18-18-48-33.png)

You can see how the first interval always goes on the merge list, since her
values can be modiyied given that it is an array.

```javascript
function mergeOverlappingIntervals(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    mergedIntervals.push(currentInterval);

    for (const nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;

        if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        else{
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}

```
</div>
</details>


## BST Contruction
Write a BST Class that supports `insert`, `remove`, and `contains` method
![](/img/2022-04-18-18-53-45.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>

- You can observe how the first insertion recursively calls itself if it finds
there is a value
- Also how the contains values checks right and left and returns false, only
  when it is null. It is optimized for binary search.
- 

```javascript
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }


        return this;
    }

    contains(value) {
        // Write your code here.
        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        } else {
            return (true);
        }
    }

    remove(value, parent = null) {
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue() {
        if (this.left == null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}

// Do not edit the line below.
exports.BST = BST;

```
</div>
</details>

## Validate BST
Write a function that takes in a potentially invalid Binary Search Tree (BST)
and returns a boolean representing whther the BST is valid.
![](/img/2022-04-19-01-51-02.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>

This is just about keep evaluating down the tree
![](/img/2022-04-19-01-55-00.png)

```javascript
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    return validateBstHelper(tree, -Infinity, Infinity);
}


function validateBstHelper(tree, minValue, maxValue) {
    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);


}
```
</div>
</details>













