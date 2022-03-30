
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


// //wallpapers
// let h = Number(prompt('Wall height(m):'))
// let a = Number(prompt('Wall weight(m):'))
// let s = h * a
// console.log('Wall Square is ' + s + ' m2')

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

// //task20
// let a = Number(prompt('First number:'))
// let b = (prompt('Sign:'))
// let c = Number(prompt('Second number:'))
// if (b === '+') {
//     let s = a + c
//     alert(`Answer is ${s}`)
// } else if (b === '-') {
//     let s = a - c
//     alert(`Answer is ${s}`)
// } else if (b === '/'){
//     let s = a / c
//     alert(`Answer is ${s}`)
// } else if (b === '*'){
//     let s = a * c
//     alert(`Answer is ${s}`)
// } else if (b === '%'){
//     let s = a % c
//     alert(`Answer is ${s}`)
// } else if (b === '**'){
//     let s = a ** c
//     alert(`Answer is ${s}`)
// }else {
//     alert('Error! Please try again')
// }

// let myArray = [5, 'hi', false, null, 0]
// console.log(myArray[1])
// let m = 'ultra'
// let myObject = {
//     'ball': 8,
//     'start': true,
//     'void': undefined,
//     7: -5,
//     2: 'test',
//     m: '0000',
//     700: m
// }
// console.log(myObject[2])


// //task21
// let a = Number(prompt('1st number:'))
// let b = Number(prompt('2nd number:'))
// let c = Number(prompt('3rd number:'))
// let d = Number(prompt('4th number:'))
// let e = Number(prompt('5th number:'))
// let f = Number(prompt('6th number:'))
// let g = Number(prompt('7th number:'))
// let even = []
// let odd = []
// if (a % 2 === 0) {
//     even.push(a)
// } else if (b % 2 === 0) {
//     even.push(b)
// } else if (c % 2 === 0) {
//     even.push(c)
// }else if (d % 2 === 0) {
//     even.push(d)
// }else if (e % 2 === 0) {
//     even.push(e)
// }else if (f % 2 === 0) {
//     even.push(f)
// } else if (g % 2 === 0) {
//     even.push(g)
// } else if (a % 3 === 0){
//     odd.push(a)
// } else if (b % 3 === 0){
//     odd.push(b)
// } else if (c % 3 === 0){
//     odd.push(c)
// } else if (d % 3 === 0){
//     odd.push(d)
// } else if (e % 3 === 0){
//     odd.push(e)
// } else if (f % 3 === 0){
//     odd.push(f)
// } else if (g % 3 === 0){
//     odd.push(g)
// }
// console.log(even)
// console.log(odd)


// let a = Number(prompt('1st number:'))
// let b = Number(prompt('2nd number:'))
// if (a > b) {
//     console.log('1st number')
// } else if (a < b) {
//     console.log('2nd number')
// } else {
//     console.log('Numbers are equal')
// }

// let a = Number(prompt('1st number:'))
// let b = Number(prompt('2nd number:'))
// let c = Number(prompt('3rd number:'))
// let d = Number(prompt('4th number:'))
// if (a>b){
//     if (a>c){
//         if (a>d){
//             console.log(a)
//         } else {
//             console.log(d)
//         }
//     } else {
//         if (c>d){
//         console.log(c)
//         }else {
//                 console.log(d)
//             }
//         } 
// } else {
//     if (b>c){
//         if (b>d){
//             console.log(b)
//         } else {
//             console.log(d)
//         }
//     } else{
//         if(c>d){
//             console.log(c)
//         } else{
//             console.log(d)
//         }
//     }
// }


// let c = {
//     one: 452,
//     'two': false,
//     'name surname': 'elena pak',
//     myArray: ['hello', 'world', 'js'],
//     another: {
//         7: 8,
//         'test': true,
//         blabla: null,
//         hi: [
//             52, 
//             73, 
//             {
//                 foo: 'bar', 
//                 'hello': [
//                     [62, 24, 52],
//                     [62, 24, 52],
//                     [62, 0, 52]
//                 ]
//             }
//          ]
//     }
// }
// console.log(c.another.hi[2].hello[2][1])

// console.log(c.myArray[1]) //hello
// console.log(c.another.test) //true
// console.log(c.another['test']) //true
// c.test2 = 'vsv'
// c['test3'] = 'jkijij'

// let key = 'one'
// console.log(c.one)
// console.log(c[key])
// console.log('one')
// console.log('two')
// console.log(c['name surname'])
// console.log(c.two)


// //
// let a =[5, 3, 7, 2, 8, 0, 2]
// for (let i = 0; i<7; i++){
//     console.log(a[i])
// }
// for (let i= 0, i<7, i++){
//         console.log(i, a[i])
    
// }


// //
// let c = [6,42,23]
// let b = [] // [12,84,46]
// for (let i = 0; i < c.length; i++){
//     let x2 = c[i] * 2
//     b.push(x2)
// }
// console.log(b)


// //
// let m = ['hello', 43, true, null, 7]
// let n = {}
// for (let i = 0; i < m.length; i++) {
//     let key = typeof(m[i])
//     if (key in n) {
//         let inside_arr = []
//         inside_arr.push(n[key])
//         inside_arr.push(m[i])
//         n[key] = inside_arr
//     } else {
//         n[key = m[i]]
//     }
//     console.log(n)
// }

// //task0022
// let a = []
// let b = []
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0){
//     a.push(i)}
//  else if (i % 4 === 0) {
//     b.push(i)
// }}
// console.log(a)
// console.log(b)




// let m = [
//     [5,3,6], // '6' == m[0][2]
//     [4,1,0],
//     [9,5,7],
//     [5,8,2],
// ]
// for (let i=0; i < m.length; i++) {
//     for (let j = 0; j < m[i].length; j++){
//         console.log(m[i][j])
//     }
// }


// let c = confirm()
// ///лишний код :
// // if (c === true) {    
// //     console.log(true)
// // } else {
// //     console.log(false)
// // }
// console.log(c)

// let a = []
// let b = []
// for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0){
//     a.push(i)}
//  else if (i % 4 === 0) {
//     b.push(i)
// }}
// console.log(a)
// console.log(b)


// // task 0024
// let number = Number(prompt('your number:'))
// let length1 = ''
// let side1 = '/'
// let length2 = ''
// let side2 = '\\'
// for (let i=0; i<number; i++){
//     length1 = ''
//     for (let j=0; j<number-i; j++){
//         length1 = length1 + ' '
//     }
//     length2 = ''
//     for (let l=0; l<i*2; l++){
//         length2 = length2 + ' '
//     }
//     console.log(length1 + side1 + length2 + side2)
// }

// ////палиндром
// let n = prompt()

// let k = 0

// for (let i=0; i < n.length; i++) {
//     let a = n[i]
//     let b = n[n.length-i-1]
//     if (a===b){
//         k += 1
//     }
// }
// if(k===n.length) console.log('палиндром')
// else console.log('не палиндром')



// //// буква М
// let lines = Number(prompt());
// let m = [];
 
// for (let i = 0; i < lines; i++) {
//     m.push([])
//     for (let j = 0; j < lines; j ++) {
//         m[i].push(' ')
//     }
    
// }
 
// console.log(m)
 
// for ( let i = 0; i < m.length; i++ ) {
//     m[i][0] = "*"
//     m[i][m.length] = '*'
// }
 
// for ( let j = 0; j < m.length / 2 + 1; j++ ) {
//     m[j][j] = "*"
//     m[j][m.length-j] = '*'
// }
 
// let output;
 
// for ( let n = 0; n < m.length; n++ ) {
//     output = ''
//     for ( let o = 0; o < m[n].length; o++ ){
//         output += m[n][o]
//     }
//     console.log(output)
// }

// //// task 0026
// function myMax (){
// if (a>b){
//     if (a>c){
//         if (a>d){
//             console.log(a)
//         } else {
//             console.log(d)
//         }
//     } else {
//         if (c>d){
//         console.log(c)
//         }else {
//                 console.log(d)
//             }
//         } 
// } else {
//     if (b>c){
//         if (b>d){
//             console.log(b)
//         } else {
//             console.log(d)
//         }
//     } else{
//         if(c>d){
//             console.log(c)
//         } else{
//             console.log(d)
//         }
//     }
// }
// }
// let a = Number(prompt('1st number:'))
// let b = Number(prompt('2nd number:'))
// let c = Number(prompt('3rd number:'))
// let d = Number(prompt('4th number:'))
// myMax()

// function myMax (arr){
//     let maxNum = arr[0]
//     for (let i=0; i< arr.length; i++){
//         if (maxNum < arr[i]){
//             maxNum = arr[i]
//         }
//     }
//     return maxNum
// }
// console.log(myMax([5,1,23,3,6]))



// //// diff ways of functions
// function mySum(a,b){
//     return a + b
// }

// let myMult = function (a,b){
//     return a*b
// }

// let myDiv = (a,b) => {return a/b}
// let myExp = (a,b) => a**b

// console.log(mySum(2,5))
// console.log(myMult(2,5))
// console.log(myDiv(10,2))
// console.log(myExp(3,4))

// //// factorial
// n = Number(prompt())
// console.log(factorial(n))

// function factorial (num) {
//     let res = 1
//     for (i=1; i<=num; i++) {
//         res *= i
//     }
//     return res
// }

// let fact = (num) => {let res = 1
//     for (i=1; i<=num; i++) {
//         res *= i
//     }
// return res 
// }




//// task0027
// Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     return (age>18) || confirm('Родители разрешили?');
//   }
// // Функция min(a, b)
// function min(a, b){
//     if (a<b){
//         return a
//     } else {
//         return b
//     }
// }
// // Функция pow(x,n)
// function pow(x, n){
//     let result
//     for (let i = 1; i < n; i++) {
//      result *= x;
//     }
//     return result;
//   }
  
//   let x = prompt('x:');
//   let n = prompt('n:');
  
//   if (n < 1) {
//     alert('Try again');
//   } else {
//     alert(pow(x, n));
//   }
// // Перепишите с использованием функции-стрелки
// let ask = (question, yes, no) => {
//     confirm(question) yes() || no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );


// task0028
// Создайте калькулятор
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


// Цепь вызовов
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep();
