// function to merge two pre-sorted arrays
function merge(arr1, arr2) {

    // create pointers for arr1 and arr2
    let ptr1 = 0; let ptr2 = 0;
    let newArray = [];
    // iterate through both arrays
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2]) {
            newArray.push(arr1[ptr1]);
            ptr1++;
        } else {
            newArray.push(arr2[ptr2]);
            ptr2++;
        }
    }

    // return the new array + remaining array of either arr1 or arr2
    return newArray.concat(arr1.slice(ptr1)).concat(arr2.slice(ptr2));
}


// function to break array down into two and merge
function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    // calculate the middle to split the array
    const middle = Math.floor(unsortedArray.length / 2);
     
    // split the array into two 
     const left = unsortedArray.slice(0,middle);
     const right = unsortedArray.slice(middle);

    // use merge function to merge the now sorted arrays
   return merge(mergeSort(left), mergeSort(right));
}
