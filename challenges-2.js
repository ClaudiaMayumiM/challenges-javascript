// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
  let biggest = 0;

  for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].length > biggest) {
          biggest = inputArray[i].length;
      }
  }

  return inputArray.filter( word => word.length === biggest);
}




// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
  const common = [];
  const firstString = [...s1];
  let secondString = s2;

  for (let letter of firstString) {
      if (secondString.includes(letter)) {
          common.push(letter);
          secondString = secondString.replace(letter, '');
      }
  }

  return common.length;
}




// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
  let arr = n.toString().split('');
  let size = arr.length / 2;

  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < size; i++) {
      firstSum += Number(arr[i]);
  }

  for (let i = arr.length - 1; i >= size; i--) {
      secondSum += Number(arr[i]);
  }

  if (firstSum == secondSum) return true;
  else
      return false;
}




// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// Example:
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be:
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a) {
  let heights = [];

  for (let i = 0; i < a.length; i++) {
      if (a[i] != -1) {
          heights.push(a[i]);
      }

      heights = heights.sort((a, b) => a - b);
  }

  let heightsIndex = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] != -1) {
          a[i] = heights[heightsIndex];
          heightsIndex++;
      }
  }

  return a;
}