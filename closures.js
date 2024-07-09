let a = 1

// closures = A child function will still have access to 
// its parent's vars, even after the parent is done running
// without closures, the garbage collector (memory cleanup)
// would wipe out all variables
function parent(){
    // console.log(a) //this is fine... parents cookies
    let b = 1 //child var
    function child(){
        // let c = 1
        // console.log(c+b)
        b += 1
        console.log(b)
    }
    return child
}

const count = parent() //run = a function!! child up above
// b inside of child/count, is absolutely private
count() //2
count() //3
count()
count()
// console.log(b) //this is... TROUBLE!