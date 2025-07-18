console.log(Math.round(3.14))//3
console.log(Math.round(3.6))//4 output becoz nearest integer
console.log(Math.floor(4.6))//4usse chote ko milega
console.log(Math.floor(4.2))//4
console.log(Math.ceil(4.2))//5
console.log(Math.max(1,2))//2
console.log(Math.max(1,2,8,3,8,9,2))//9
console.log(Math.min(1,3,2))//1
console.log(Math.pow(2,3))//8
console.log(Math.sqrt(4))//2
console.log(Math.random())//between 0 to 1
let min=1
let max=10
const randomnumber=Math.random()*(max-min)+min
let randomint=Math.round(Math.random()*(max-min)+min)///if here let then output will be different i.e 8 
console.log(randomnumber)
console.log(randomint)