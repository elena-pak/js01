//task21
let a = Number(prompt('1st number:'))
let b = Number(prompt('2nd number:'))
let c = Number(prompt('3rd number:'))
let d = Number(prompt('4th number:'))
let e = Number(prompt('5th number:'))
let f = Number(prompt('6th number:'))
let g = Number(prompt('7th number:'))
let even = []
let odd = []
if (a % 2 === 0) {
    even.push(a)
} else if (b % 2 === 0) {
    even.push(b)
} else if (c % 2 === 0) {
    even.push(c)
}else if (d % 2 === 0) {
    even.push(d)
}else if (e % 2 === 0) {
    even.push(e)
}else if (f % 2 === 0) {
    even.push(f)
} else if (g % 2 === 0) {
    even.push(g)
} else if (a % 3 === 0){
    odd.push(a)
} else if (b % 3 === 0){
    odd.push(b)
} else if (c % 3 === 0){
    odd.push(c)
} else if (d % 3 === 0){
    odd.push(d)
} else if (e % 3 === 0){
    odd.push(e)
} else if (f % 3 === 0){
    odd.push(f)
} else if (g % 3 === 0){
    odd.push(g)
}
console.log(even)
console.log(odd)
