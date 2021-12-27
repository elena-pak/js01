// let m = []
// for(let i = 0; i < 3; i++){
//     let a = prompt()
//     m.push(a)
// }
// console.log(m)

// let n = []
// let b = prompt()
// while(b !== 'stop'){
//     n.push(b)
//     b = prompt()
// }
// console.log(n)

// let i = 0
// while(i < 100){             // for (let i = 0; i < 100; i++) {  if (i % 3 === 0){console.log(i)}
//     if(i % 5 === 0){
//         console.log(i)
//     }
//     i++
// }


// let m = []
// let a = Number(prompt())
// while (a !== 0) {
//     if (a % 7 === 0){
//         m.push(a)
//     }
//     a = Number(prompt())
// }
// console.log(m)

//// task 0023
m = [23, 72, 35, 62, 75, 25]
let n = Number(prompt('Your number:'))
while (n !== 0) {
    let found = false
    for (let i = 0; i < m.length; i++){
         if (n === m[i]) {
             found = true
        console.log('There is your number!')
    } 
    }
if(found) console.log('There is your number!') 
else      console.log('There is not your number...')
  n = Number(prompt('Your number:'))
}

// //// task 0023 (2nd way)
// m = [23, 72, 35, 62, 75, 25]
// let n = Number(prompt('Your number:'))
// while (n !== 0) {
//     if (m.includes(n)){
//         console.log('There is your number!')
//          } else {
//         console.log('There is not your number...')}
//         n = Number(prompt('Your number:'))
// }
