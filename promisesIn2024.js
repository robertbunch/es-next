
const run = async()=>{
    // 1. Use async/await
        // 1. JS be JS, and let humans write human code
        // 2. Eliminates a callback (tab)!!
    // let res
    // const promise = new Promise((resolve, reject)=>{
        // res = resolve
        // async
    //     setTimeout(()=>{
    //         resolve("done")
    //     },1000)
    // })

    // const data = await promise
    // console.log(data)

    // promise.then(data=>{
    //     console.log(data)
    //     // other stuff that happens after promise resolves
    // })

    // 2. use withResolvers()
        // 1. Eliminate another callback (tab)!
        // 2. resolve and reject are at the same scope as promise
    const { promise, resolve, reject } = Promise.withResolvers()
    // const promise = new Promise((resolve, reject)=>{
    // async
    setTimeout(()=>{
        resolve("done")
    },1000)
    const data = await promise
    console.log(data)
}

run()


function a(){
    //data came async
    (data)=>{
        //
        //
        //
        (data2)=>{
           //
           //
           //
           (data3)=>{

           } 
        }
    }
}


