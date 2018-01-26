var arr = [ 64, 34, 25, 12, 22, 11, 90];

for(var i = 1;i<arr.length;i++){
    let key = arr[i];
    let  j = i -1;

    while(j>=0 && key < arr[j]){
       
        arr[j+1] = arr[j]
        j--;
    }

    arr[j+1] = key;
}

console.log(arr);