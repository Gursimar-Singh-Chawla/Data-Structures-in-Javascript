var arr = [ 64, 34, 25, 12, 22, 11, 90];

for(var i = 0;i<arr.length;i++){
    let flag;
    for(var j=0;j<arr.length-i;j++){
         if(arr[j]>arr[j+1]){
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
             flag = 1;
         }
    }

    if(!flag){
        break;
    }
}

console.log(arr);