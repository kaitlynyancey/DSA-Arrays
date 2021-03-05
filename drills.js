//5. URLify a string
function urlify(str) {
    let newstr = str.replace(/ /g, '%20')
    console.log(newstr);
}

//urlify('tauhida parveen')
//urlify('www.thinkful.com /tauh ida parv een')

//6. Filtering an array
function filter(arr) {
    let filterArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 5) {
            filterArray.push(arr[i])
        }
    }
    console.log(filterArray)
}

//filter([1, 3, 5, 6, 10, 2])

//7. Max sum in the array
function maxSum(arr){
    let max = 0;
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++){
        sum = sum + arr[i];
        if(sum > max){
            max = sum;
        }
    }
    console.log(max);
}

//maxSum([4, 6, -3, 5, -2, 1])

//8. Merge Arrays
function mergeArrays(arr1, arr2) {
    let sortArr = [];
    let i = 0;
    let j = 0;
    for(let count = 0; count < (arr1.length + arr2.length); count++){
            if(arr1[i] < arr2[j] || !arr2[j]){
                sortArr.push(arr1[i])
                i++;
            }
            else {
                sortArr.push(arr2[j])
                j++;
            }
    }
    console.log(sortArr);
}

//mergeArrays([1,3,6,8,11],[2,3,5,8,9,10])

//9. Remove Characters
function removeCharacters(str){
    let newStr = '';
    newStr = str.replace(/a|e|i|o|u/gi, '');
    console.log(newStr)
}

//removeCharacters('Battle of the Vowels: Hawaii vs. Grozny')
//removeCharacters('aeiou')

//10. Products
function products(arr) {
    let prodArr = [];
    for(let i = 0; i < arr.length; i++) {
        let product = 1;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] !== arr[j]) {
                product = product * arr[j];
            }
        }
        prodArr.push(product);
    }
    console.log(prodArr);
}
//products([1, 3, 9, 4])

// 11. 2D Array

// 12. String Rotation
