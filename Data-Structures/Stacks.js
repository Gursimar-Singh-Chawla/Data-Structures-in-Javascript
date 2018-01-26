var arr = [];

var length = 4; //User defined or system defined stack size


function push(i){
    if(arr.length < length){
        arr.push(i);
        console.log(i + ' pushed into the stack');
    }else{
        console.log('stack full');
    }
}

function pop(){
    if(arr.length>0){
        console.log(arr[arr.length-1] + ' popped out of the stack');
        arr.pop();
    }else{
        console.log('Stack Empty');
    }
}


push(10);
push(20);
push(30);
push(40);
push(50);
pop();
pop();
pop();
pop();
pop();