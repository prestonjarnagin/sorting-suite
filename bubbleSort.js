const swap = require('./swap')

function bubbleSort(arr){
  sorted = false
  while(!sorted) {
    sorted = true
    for(i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i - 1]){
        swap(arr, i, i-1)
        sorted = false
      }
    }
  }
  return arr
}

module.exports = bubbleSort
