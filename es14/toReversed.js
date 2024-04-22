const arr = [1,2,3,4,5,"Hello"]
// const a = arr.reverse() //mutates in place
// const a = [...arr]
// a.reverse()
arr[25] = 99

const a = arr.toReversed() //returns a reversed array
console.log(arr)
console.log(a)