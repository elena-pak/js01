// //всплывающее окно
// alert("hello world!")
// //вывод в консоли
// console.log("h3110 w0r1D!")
// //создаем переменную
// let a = "99"
// let name = "elena"
// //вывод значения переменной
// console.log(name)

// //во всплывающем окне вводим значение и выводим в консоль
// let myName = prompt("enter your name")
// console.log(myName)

// //подсчитывание возраста 
// let year = prompt('enter your birthday')
// let age = 2021 - year //string
// console.log(age)
// //подсчитывание возраста
// let year = prompt('enter your birthday')
// let age = 2021 - Number(year) //number
// //вывод ответа в консоли
// console.log('your age is ' + String(age) + ' y.o')

// //периметр прямоугольника
// //ввести стороны
// let a = Number(prompt('side 1:'))
// let b = Number(prompt('side 2:'))
// //вывести периметр
// let p = 2 * (a + b)
// console.log(p)

// //радиус круга
// let r = Number(prompt('radius:'))
// let s = 3.14 * (r ** 2)
// console.log(s)

// //след новое значение увелич на 1
// let n = 7
// n = n + 1 //n += 1
// alert(n)

// let m = 7
// m++
// console.log(m)


// //wallpapers
// let h = Number(prompt('Wall height(m):'))
// let a = Number(prompt('Wall weight(m):'))
// let s = h * a
// console.log('Wall Square is ' + s + ' m2')

////if else task
// let age = Number(prompt('How old are you?'))
// if (age < 18){
//     console.log('Please, leave this site!')
//     console.log('Text text')
// } else if(age < 21){
//     console.log('If you are in USA, leave this site')
// } else if(age < 25){
//     console.log('test')
// } else{
//     console.log('You are welcome!')
// }
// console.log('The end')

// let age = Number(prompt('How old are you?'))
// if(age < 13) {
//     console.log('You are a Child')
// } else if (age < 19) {
//     console.log('You are a Teenager')
// } else if (age < 24) {
//     console.log('You are a Student')
// } else if (age < 65) {
//     console.log('You are an Adult')
// } else {
//     console.log('You are a Pensioner')
// }

// //&& true&false=false
// const a = Number(prompt())
// if (a > 5 && a < 10) {
//     console.log('more than 5 and less than 10')
// }

// //|| true&false=true
// const login = prompt('Login:')
// if (login == 'admin' || login == 'manager'){
//     console.log('hello')
// } else {
//     console.log('No access')
// }

// // !=
// const login = prompt('Login:')
// if (login != 'admin'){
//     console.log('No access')
// }

// let b = false
// 'be or not to be'
// console.log(b || !b) //true

// let s = Number(prompt('room square:'))
// let n = 0
// let error = false
// if (s >= 150) {
//     n = 10
// } else if (s > 30 && s <= 50 ) {
//     n = 2
// } else if (s > 50 && s < 150) {
//     n = 4
// } else if (s > 0 && s <= 30) {
//     n = 1
// } else if (s <= 0) {
//     console.log('error')
//     error = true
// }
// let lamp = 'лампочек'
// if (n==1) {
//     lamp = 'лампочка'
// } else if (n == 2 || n== 4) {
//     lamp = 'лампочки'
// }
// if (!error){
//     console.log('Нужно ' + String(n) + ' ' + lamp)
// }


// let a = 'hello world!'
// console.log(a[4])
// let b = a.length
// let c = b - 1
// console.log(a[c])

// let k = 7
// let ar = [5, 2, 3, 7, 'hello', true, 2.14, k]
// console.log(ar[0])
// ar.push(123)
// ar.pop()
// console.log(ar)

let a = Number(prompt('First number:'))
let b = (prompt('Sign[+ or -]:'))
let c = Number(prompt('Second number:'))
if (b === '+') {
    alert(a + c)
} else if (b === '-') {
    alert(a - c)
} else {
    alert('Error! Please try again')
}





