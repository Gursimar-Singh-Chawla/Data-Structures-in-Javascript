var testArray = [1,2,3,4,5,6,7,8,9,10];
function first(){
 console.log(testArray.indexOf(1));   
}

function second(){
    for(let i=0;i<=testArray.length-1;i++){
        if(testArray[i] === 1){
            console.log(i);
            break;
        }
    }
}


console.time('Function 1');
first();
console.timeEnd('Function 1');

console.time('Function 2');
second();
console.timeEnd('Function 2');