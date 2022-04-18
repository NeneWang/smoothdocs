---
sidebar_position: 2
title: Mid algorithm Questions
---

# Medium Algorithms Questions


## Longest Peak
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.
![](/img/2022-04-18-18-22-04.png)
<details>
<summary>
 Javascript Solution
</summary>

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
![](/img/2022-04-18-18-22-56.png)
<details>
<summary>
 Javascript Solution
</summary>

<div>


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

o(n) solution
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



## Longest Peak
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.
![](/img/2022-04-18-17-07-54.png)
<details>
<summary>
 Javascript Solution
</summary>

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



## Longest Peak
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.
![](/img/2022-04-18-17-07-54.png)
<details>
<summary>
 Javascript Solution
</summary>

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

