var arr = [1,10,2,9,3,8,4,7,5,6];

for(var i = 0;i < arr.length;i++){

    let minElement = arr[i];
    let minElementIndex = i;

    for(var j = i; j <= arr.length-1;j++){
        if(minElement > arr[j]){
            minElement = arr[j];
            minElementIndex = j;
        }
    }

    let temp = arr[i];
    arr[i] = minElement;
    arr[minElementIndex] = temp;

    console.log(arr);
}
