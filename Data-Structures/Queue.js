var arr = [];

var length = 5; //User defined size;
var head = 0;
var tail = 0;

function add(i){
    if(tail < length){
        if(head == tail){
            arr[head] = i;
            tail++;
            console.log(i + ' added');
        }else{
            arr[tail] = i;
            tail++;
            console.log(i + ' added');
        }
    }else{
        console.log('Queue is filled');
    }
};

function remove(){
    if(tail==0){
        console.log('Queue empty');
    }else{
        if(head !== tail && tail>0){
            let elementRemoved = arr.shift();
            tail--;
            console.log(elementRemoved + ' removed');
        }else{
            let elementRemoved = arr.shift();
            tail--
            console.log(elementRemoved + ' removed');
        }
    }
}

add(1);
add(2);
add(3);
add(4);
add(5);
add(6);
console.log('Queue generated : ' + arr);
console.log('Head : ' +  head);
console.log('Tail : ' +  tail);
remove();
remove();
remove();
remove();
remove();
remove();
console.log('Queue generated : ' + arr);
console.log('Head : ' +  head);
console.log('Tail : ' +  tail);



