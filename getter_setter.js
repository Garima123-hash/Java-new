// //getter setter is a method always use in coding
// let course={name:"Cognition",
//     duration: "2 months",
//     details(){
//         return `${this.name} is ${this.duration}`,
//     }
// }
// console.log(`${course.name} is ${course.duration}`)
// console.log(course.details())
let course={name:"Cognition",
    duration: "2 months",
    get  details(){
        return `${this.name} is ${this.duration}`;
    }
    set details(value){

            let part=value.split(' is'),
            this.name=part[0],
            this.duration=part[1]}
       }
course.details='codinginjas in 1 week'
console.log(course.details)