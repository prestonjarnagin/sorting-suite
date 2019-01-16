const swap = require('./swap')

function quickSort(arr, min = 0, max = arr.length-1){
  // Only enter if array is > 1 element
  if(min < max){
    // Chopose a partition index
    parti = partition(arr, min, max)

    // Recursively call quickSort on either side of the partition
    quickSort(arr, min, parti - 1)
    quickSort(arr, parti + 1, max)
  }
  // Return sorted array back up the stack
  return arr
}

function partition(arr, min, max){
  // Set pivor to the last element in the array
  pivot = arr[max]

  i = (min - 1)

  for (j = min; j <= max - 1; j++){
    if(arr[j] <= pivot){
      i++
      swap(arr,i,j)
    }
  }
  swap(arr,i+1,max)
  return (i + 1)
}

module.exports = quickSort
