WELCOME4220
const arr = [0,1,2,3,10,5,6,7]
arr[25] = 99
// const a = arr.splice(4,1,4) //mutates the array
// const a = [...arr]
const a = arr.toSpliced(4,1,4) //returns a new array with the new changes
console.log(arr)
console.log(a)
