//getter setter is a method always use in coding
let course={
    name:"Cognition",
    duration: "2 months",
    details(){
        return `${this.name} is ${this.duration}`
    }
}
console.log(`${course.name} is ${course.duration}`)
console.log(course.details())
course={
    name:"Cognition",
    duration: "2 months",
    get  details(){
        return `${course.name} is ${course.duration}`//yha pr course ki jgh this krenge
    },
    set details(value){
         let part=value.split(' is');
         course.name=part[0];//this instead of course
         course.duration=part[1];//this instead of course
       }
}       
course.details='codinginjas is 1 week'
console.log(course.details)