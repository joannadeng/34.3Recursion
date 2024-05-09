/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  
  if(i === words.length) return max;
  max = max > words[i].length ? max : words[i].length;
  return longest(words, i+1, max);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr='') {
  if (i === str.length) return newStr;
  if (i%2 === 0) newStr += str[i];
  return everyOther(str,i+1,newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,i = 0) {
  if( i === str.length) return true;
  if (str[i] === str[str.length - 1 - i]) {
    return isPalindrome(str, i+1)
  }else{
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr,val,i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,i=0,revStr = '') {
  if(revStr.length === str.length) return revStr;
  revStr += str[str.length-1-i];
  return revString(str,i+1,revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,arr=[]) {
  for (let key in obj) {
    if(typeof obj[key] === 'string') arr.push(obj[key]);
    if(typeof obj[key] === 'object') gatherStrings(obj[key],arr)
  }
return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length-1 ) {
  
  if (leftIdx > rightIdx) {
    return -1;
  } 
  let middleIdx = Math.floor((leftIdx + rightIdx)/2)
  if (arr[middleIdx] === val) {
    return middleIdx;
  }else if (arr[middleIdx] > val) {
    return binarySearch(arr,val,leftIdx, middleIdx-1)
  } else {
    return binarySearch(arr,val,middleIdx+1,rightIdx)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
