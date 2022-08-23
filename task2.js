function delay(time, person){
     return new Promise((resolve, reejct) => {
        setTimeout(() => {
            resolve(
                console.log(`it took ${person + 1} about ${time}`)
            )
            
        }, time   )
     })
}



async function test(numUser) { 
    for(i = 0; i<numUser; i++) {
    let randomVal = Math.floor(Math.random() * 3000) 
    await delay(randomVal, i) 
    }
}
let noUser = prompt('enter the number of patients')
test(noUser)