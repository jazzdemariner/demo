console.log("my name is kylian mbappe")
console.log("mu name is joshiya samuel")
console.log("mu name is andre russell")
console.log("mu name is karim benzema")
console.log("mu name is lionel messi")
console.log("mu name is eden hazard")
// console.log("mu name is andre russell")
let a = 18;
let b = 14;
let c = a+b;
console.log("c",c)

function name(first ,last){
    console.log("first",first)
    console.log("last",last)
}

const update =   function() {
 console.log("in this function we are goin to update therows and columns in the database so that we wont last any ")
 let arr = [1,2,3,4,6]
 arr.map( e => {e+2})
}

let arr2 = [1,4,5,7]
arr2.map(e => e>2)
console.log(arr2);

let pno = [{
    "poId":12345,
    "status":'hot',
    "sno":123456
},
{
    "poId":56784,
    "status":'hot',
    "sno":95656
}]

console.log(pno.map(e =>{
    return e.status
}))

console.log(pno.filter(e =>{
    e.status
}))

console.log("hi da");
