const arrayToSort = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log('arrayToSort', arrayToSort)
let sortAscendedArray = []
let tempArray = []
let currentIndex = 0
let nextIndex = 0

// Checking if current 'smallestNumber' exist in 'arrayToSortCopy'. If not, we push it to 'tempArray' and return it.
const mutateArrayToSortCopy = function(arrayToSortCopy, smallestNumber) {
    let tempArray = []
    for (let i = 0; i < arrayToSortCopy.length; i++) {
        if (smallestNumber !== arrayToSortCopy[i]) {
            tempArray.push(arrayToSortCopy[i])
        }        
    }
    return tempArray
}

// Process of finding the 'smallestNumber' of 'arrayToSortCopy'.
const findSmallestNumber = function(theArray) {
    for (let i = 0; i < theArray.length; i++) {
        if (theArray[currentIndex] >= theArray[nextIndex]) {
            currentIndex = nextIndex
        } 
        nextIndex++        
    }
    if (theArray.length === 1) {
        currentIndex = 0
    }
    nextIndex = 0
    return theArray[currentIndex]
}

const processSortAscended = function() {
    let arrayToSortCopy = []
    arrayToSortCopy = [...arrayToSort,]
    let counter = arrayToSort.length
    while (counter !== 0) {
        // Finding the smalles number of 'arrayToSortCopy'.
        let smallestNumber = findSmallestNumber(arrayToSortCopy)
        sortAscendedArray.push(smallestNumber)
        // Supposed to a copy of 'arrayToSortCopy' but excluding the 'smallestNumber'.
        let mutatedArrayToSortCopy = mutateArrayToSortCopy(arrayToSortCopy, smallestNumber)
        arrayToSortCopy = [...mutatedArrayToSortCopy,]
        counter--        
    }    
}

processSortAscended()
console.log('sortAscendedArray', sortAscendedArray)
