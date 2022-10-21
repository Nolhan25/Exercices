console.log("win")
function binarysearch(array,number_to_insert){
  for (let i = 0; i < array.length; i++) {
      if (array[i]== number_to_insert) {
        return i
      }
    if (number_to_insert<array[i]) {
        return i
    }
  }
  return array.length

}

var pin = binarysearch([1,3,4,5,7,9],15)
console.log(pin)