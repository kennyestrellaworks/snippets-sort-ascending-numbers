# Sort ascending array, assuming that the array elements are numbers and does not have duplicates.


This can be done easily using the sort() method in JavaScript as shown below and I got interested if I can create a solution without using that method.

    const arrayToSort = [200, 450, -400, 3000, -650, -130, 70, 1300]
    arrayToSort.sort((a, b) => a - b);
    console.log(arrayToSort)

My solution is long and it was a good experiencing solving it.