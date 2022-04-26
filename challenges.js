// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {

  let centuryCount = 0;
  
  while (year > 0) {
      year = year - 100;
      centuryCount++;
  }
  
  return centuryCount;
}




// Given the string, check if it is a palindrome.

function solution(inputString) {
    
  let splited = inputString.split("");
  let reversed = splited.reverse().join("");
  
  if (inputString == reversed) {
      return true;
  } else {
      return false;
  }


}




// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    
  let product = [];
  
  for (let i = 0; i < (inputArray.length - 1); i++) {
      let multiply = inputArray[i] * inputArray[i + 1];
      product.push(multiply);
  }

  product = product.sort((a, b) => a - b);
  let max = product.reduce(function(a, b) {
      return Math.max(a, b);
  })

  return max;
}




// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// Example:
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues) {

  let ord = statues.sort((a, b) => a - b);

  let missing = 0;

  for (let i = 0; i < ord.length; i++) {
      if (ord[i + 1] - ord[i] > 1) {
          missing += ord[i + 1] - ord[i] - 1;
      }
  }
  
  return missing;
}




// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function solution(sequence) {
    
  let found = 0;

  for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
          found++;

          if (found > 1) return false;

          if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence [i-1])                    return false;
      }

  }
  return true;
}




// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// Example:
// For

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

function solution(matrix) {
  let price = 0;
  let bannedIndex = [];

  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === 0) {
              bannedIndex.push(col);
          } else if (bannedIndex.indexOf(col) === -1) {
              price += matrix[row][col];
          }
      }
  }
  return price;
}