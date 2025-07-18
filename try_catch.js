//to find error in the backend main use
let course={
    name:'cogniton',
    duration:" 2 months",
    get details(){
        return ` ${this.name} is ${this.duration} `;
    },
    set details(value){
        if(typeof value !== "string"){
            throw new Error(`value, ${value} is not string`)
        }
        let part=value.split("is")
        this.name=part[0]
        this.duration=part[1]
    }
}
course.details='codinginjas is 1 week'//if  2 or any thing except string it would show eror shwon above 
console.log(course.details)
try{
    course.details=42
}
catch(e){
    console.log(`caught an error: ${e.message}`)
}