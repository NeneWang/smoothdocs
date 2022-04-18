---
sidebar_position: 2
title: Mid algorithm Questions
---

# Medium Algorithms Questions


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

