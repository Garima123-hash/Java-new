// function printhello(){
// console.log("A")
// console.log("B")
// console.log("C")
// console.log("D")
// }
// printhello()

//for objects
function getdog(name,breed,age){
    return{name,breed,age,
        eat(){
            console.log(this.name+"Pedigery")
        }
    }
}
const dog2=getdog("tom","bulldog",2)
dog2.eat
console.log(dog2)