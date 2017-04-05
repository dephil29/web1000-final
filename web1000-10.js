// Write a function which, given a 2-d array and another value x, returns true if x is present in the two d array, and false otherwise.

function containsElement(arr, x) {
    for (var r = 0; r < arr.length; r++) {
        for (var c = 0; c < arr[r].length; c++) {
            if (arr[r].indexOf(x) > -1) {
                return true;
            }
        }
    }
    return false;
};

containsElement([
    ["string1", "string2"],
    ["string3", "string4"]
], "string4");
