const person={
    name:'garima'
}
console.log(person)
person.iccream="Vanilla"
console.log(person)
delete person.iccream
console.log(person)
person.eat=function(){
    console.log("Tawa roti")
}
console.log(person)
person.eat()