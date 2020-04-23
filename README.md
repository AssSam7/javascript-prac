## 01 - Find a duplicate number in an array of integers

**Problem:**
Identify the duplicate elements from the input and return them. Assume that input to the **function** is array and should return **false** if duplicate not found.

**Approach:**
This approach is implemented using the [**_forEach_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the numbers in the array and [***filter***] to identify the numbers which are duplicate using the [**_indexOf_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method in javascript which just returns the first occurance of the matched element.

## 02 - Find the largest and smallest number in an unsorted array of integers

**Problem:**
Identify the **maximum** and **minimum** numbers in a given unsorted array of integers. Return the **max** and **min** in the form of an object.

**Approach:**
This approach is pretty naive and efficient too but not for someone trying to start programming. It uses the [**_Math.max_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) and [**_Math.min_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) to identify the **maximum** and **minimum** of the numbers. The whole code can be completed in just **3-4 lines** and the body of the function in **1** line.
