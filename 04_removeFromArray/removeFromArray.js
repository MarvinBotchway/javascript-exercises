const removeFromArray = function(arr, ...vals) {
    let newArr = [];
    for (let i = 0; i < (vals.length); i++) {
        for (let j = 0; j < (arr.length); j++) {
            if (!(vals[i] === arr[j])) {
                newArr.push(arr[j]);
            }
        }
        arr = newArr;
        newArr = [];
    }
    return (arr);
};

// Do not edit below this line
module.exports = removeFromArray;
