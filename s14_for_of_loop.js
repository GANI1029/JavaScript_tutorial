// let nums = []

// nums[0] = [11]

// nums[99] = [9999]

// console.log(nums)

// // for of loop 

// for ( let item of nums){

//     console.log(item)
// }

// // for in loop 
// console.log('------------------------------------')
// for ( let key in nums){

//     console.log(key)

//     console.log(nums[key] )
// }

// // array destructure 

let words = 'my name is raja raghu ram'.split(' ')

console.log(words)

// let [ a , b ,c ,d , e] = words

// console.log(e)

let [ a , b , , ...d] = words

console.log(a)
console.log(b)
console.log(d)