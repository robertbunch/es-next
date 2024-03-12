console.log("This is a test worker")

console.log(this) //this is fine (different than window)
// console.log(window) //this will break!
console.log(self) //this is fine
// console.log(frames) //this will break
// if(typeof window != 'undefined'){
//     console.log(window.Math.random())
// }else{
//     console.log(self.Math.random())
// }

console.log(globalThis.Math.random())