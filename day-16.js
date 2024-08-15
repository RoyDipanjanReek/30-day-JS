/* Activity 1: Basic Recursion */

//* Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. */
function factorial(number) {
    if (number == 0 || number == 1) {
      return 1;
    }
    return number * factorial(number - 1);
  }
  
  console.log(`Factorial of 1 is:`, factorial(1));
  console.log(`Factorial of 5 is:`, factorial(5));
//* Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. 
function fibonacciNumber(num){
    if(num<=1){
        return num;
    }
    return num + fibonacciNumber(num-1)
}
console.log("Fibonacci of 2 is", fibonacciNumber(2));
console.log("Fibonacci of 5 is", fibonacciNumber(5));
console.log("Fibonacci of 10 is", fibonacciNumber(10));

// Task 3: Write a recursive function to find the sum of all the elements in an array. Log the result for a few test cases.
function sumOfNumber(arr){
    if(arr.length == 1){
        return arr[0]
    }

    return arr[0]+sumOfNumber(arr.slice(1))
}

console.log("Sum of [1,2,3,4,5,6] is :", sumOfNumber([1,2,3,4,5,6]));
console.log("Sum of [10,20,30] is :", sumOfNumber([10,20,30]));

//* Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxInArray(arr){
    if(arr.length === 1){
        return arr[0]
    }
    const restNumber = maxInArray(arr.slice(1))
    return arr[0] > restNumber ? arr[0] : restNumber
}
console.log("Maximum from [1,8,3,4,6] is", maxInArray([1,8,3,4,6]));
console.log("Maximum from [1,8,3,4,10] is", maxInArray([1,8,3,4,10]));
console.log("Maximum from [100,8,3,4,10] is", maxInArray([100,8,3,4,10]));

//* Task 5: Write a recursive funciton to reverse a string. Log the result for a few test cases.

function reverseString(str){
    if(str.length <= 1){
        return str
    }
    return str[str.length-1]+reverseString(str.slice(0,str.length-1))
}

console.log("Reverse of abcd is:-", reverseString("abcd"));
console.log("Reverse of Dipanjan is:-", reverseString("Dipanjan"));
console.log("Reverse of D is:-", reverseString("D"));

//* Task 6: Write a recursive function to check if a string is a palindrome. Log the result to for few test cases. */

function palindrome(str){
    if(str.length <= 1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return palindrome(str.slice(1,-1))
}

console.log("maddam", palindrome("maddam"));
console.log("abcd", palindrome("abcd"));

//* Task 7: Write a recursive function to perform a binary search on a sorted array. Log the the index of the target element for a few test cases. 

function binarySearch(arr, target,left = 0, right = arr.length-1){
    if(left>right){
        return false
    }

    const mid = Math.floor((left+right)/2)

    if(arr[mid] == target){
        return mid
    }

    if(arr[mid] > target){
        return binarySearch(arr,target,left,mid-1)
    }

    return binarySearch(arr, target, mid+1, right)
}

console.log("Index of 3 in [1,2,3,4,5,6,7,8,9] is", binarySearch([1,2,3,4,5,6,7,8,9],3));
console.log("Index of 7 in [1,2,3,4,5,6,7,8,9] is", binarySearch([1,2,3,4,5,6,7,8,9],7));

//* Task 8: Write a recursive funtion to count occurrences of a target element in an array. Log the result for few test cases. */

//* Task 9: Write a recursive function to perform in-order traversal of a binary tree. Log the nodes as they visited. 

class Tree{
    constructor(val=0, left=null, right= null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function inOrder(node){
    if(node === null){
        return
    }
    inOrder(node.left)
    console.log(node.val);
    inOrder(node.right)
}

// Creating a binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new Tree(1)
root.left = new Tree(2)
root.right = new Tree(3)
root.left.left = new Tree(4)
root.left.right = new Tree(5)
root.right.right = new Tree(6)

console.log("InOrder Travel");
inOrder(root)


//* Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases. 

function depthCalculate(node){
    if(node === 0 ){
        return
    }
    const left = depthCalculate(node.left)
    const right = depthCalculate(node.right)

    return Math.max(left,right)+1
}
console.log("Depth os the tree:" , depthCalculate(root));

const single_node = new Tree(1);
console.log("Depth of single node tree:", depthCalculate(single-node)); 
