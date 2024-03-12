const express = require('express')
const app = express('app')
app.use(express.static(__dirname))
app.listen('3001')

// console.log(this) // this = {}
// console.log(window) //not a thing in node
// console.log(self)//not a thing in node
// console.log(frames)//not a thing in node
console.log(global)
console.log(global.Math.random())
console.log(Math.random())
console.log(globalThis.Math.random())

