function smallestOfThreeNums(a, b, c) {

    // let arr = new Array(a,b,c);
    // let smallest = arr[0];

    // for (let num in arr) {
    //     if (arr[num] < smallest) {
    //         smallest = arr[num];
    //     }
    // }

    // console.log(smallest);

    function smallestOfTwoNums(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }

    console.log(smallestOfTwoNums(smallestOfTwoNums(a,b), c));
}

smallestNum(600,342,123);