const swap = require('./swap')

function insertionSort(arr){
  for(i = 1; i < arr.length; i++){
    for(j = i; j > 0 && arr[j-1] > arr[j]; j--){
      swap(arr, j, j-1)
    }
  }
  return arr
}

module.exports = insertionSort
