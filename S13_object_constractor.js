

function School(name , rollnum , cls)
{
    this.name = name,
    this.rollnum = rollnum,
    this.cls = cls 
}



let stu1 = new School('ravi' , 5 , '10th class')
let stu2 = new School('ramu' , 10 , '8 th class')

console.log(stu1)
delete stu2.cls
console.log(stu2)
