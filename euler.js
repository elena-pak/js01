// ////1st
// let m = []
// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         m.push(i)
//     }
// }
// let sum = 0
// for (let i = 0; i <m.length; i++){
//     sum = sum + m[i]
// }
// console.log(sum)

////2nd
let m = []
for (let i = 0; i < 4000000; i++) {
    if (i % 2 === 0){
        m.push(i)
    }
}
let sum = 0
for (let i = 0; i < m.length; i++){
    sum = sum + m[i]
}
console.log(sum)