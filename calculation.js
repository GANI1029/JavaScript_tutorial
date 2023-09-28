let num = 4

let x = num++ // post increament first assign the value to x then increament value of num 

console.log(x , num )

let num1 =  5

let y = ++num1 // pre increament  , first increamnet the vale than assig the vale to y 

console.log(y , num1 )

// math 

z = 4

console.log(Math.pow(4,3))

// **
console.log( 4 ** 3)

console.log(5 > 6 )
console.log(6 >= 6 )

let xx = "Pen"

let yy = "zoom"

let data = xx  > yy // check the first alphabet in case of strings z is greater than p so yy is greater we are getting true 

console. log( 'checking string relational operations --',data) ;

let xxx = "Pen"
let yyy = "Pencil"

let check = xxx > yyy

console. log('checking string starting with same alphabets ',check) ;

// checking tyep coversion 

let item1 = 5
let item2 = "5"

let item_check  = item1 == item2 // if we use == it converts string 5 to number 5 and perform == operation 

console. log('checking type coercion  ',item_check) ;



let item_check2  = item1 === item2 // if we use === it don't converts string 5 to number 5 and perform == operation 

console. log('checking type coercion  ',item_check2) ;

// using == it only check the values not the type of vale 
// using === it checks type and vale also 