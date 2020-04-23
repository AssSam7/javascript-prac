## 01 - Find a duplicate number in an array of integers

**Problem:**
Identify the duplicate elements from the input and return them. Assume that input to the **function** is array and should return **false** if duplicate not found.

**Approach:**
This approach is implemented using the [**_forEach_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the numbers in the array and [***filter***] to identify the numbers which are duplicate using the [**_indexOf_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method in javascript which just returns the first occurance of the matched element.
