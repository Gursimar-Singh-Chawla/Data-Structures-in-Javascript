//2-D Arrays is nothing but array of arrays

var twoDimensionalArray = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10]
]

console.log(twoDimensionalArray[2][3]);

//3-D Arrays is a collection of 2-D arrays which in turn is a collection of 1-D Arrays

var threeDimensionalArray = [
    [
        [1,2,3,4],
        [5,6,7,8]
    ],[
        [9,10,11,12],
        [13,14,15,16]]
    ]

console.log(threeDimensionalArray[0][0][1]);