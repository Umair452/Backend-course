let myArray = [1, 2, 3, 4, 5, 6]

myArray.forEach(function(element){
    // console.log(element + ' Hi ');
    
})

let newArray = myArray.map((element)=>{
     return   element + 12;
})

// console.log(newArray);

// console.log(newArray.filter((element)=> element > 15));


// console.log(newArray.find((e)=> e == 13));

// console.log(newArray.indexOf((14)));

function myFun (a, b, c) {

}

// console.log(myFun.length);

// async function goes to side stack, the main stack runs all the sync stack functions, when the 
// main stack is empty , checks if async is done? if yes then bring it to main stack and run it


async function newFun () {
    let res = await fetch('url')
    res = await res.json()
} 