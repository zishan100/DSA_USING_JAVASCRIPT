/*  
    Q1.) RoverQuest Problem

    You have designed a small robot named RoverQuest that can search for treasure blocks on a linear path. The robot has the ability to detect whether there is treasure at specific distances from its current position. However, it can only move toward the treasure if it is certain of its direction; otherwise, it will conserve energy and continue searching.

    Problem Statement:
    You need to determine how many treasure blocks RoverQuest will successfully collect based on its starting position and the treasure's distribution along the path. 

    You are given the following:
    1. The first line indicates RoverQuest's starting position, \( P \).
    2. The second line specifies the number of positions, \( N \), on the path.
    3. The third line contains an array of 0s and 1s, where 1 indicates the presence of treasure and 0 indicates its absence.

    Your task is to compute the number of treasure blocks RoverQuest will collect while operating efficiently.
    
    Input:
    2
    6
    0 1 0 1 1 0

    Output: 2
*/

function roverQuest(p, arr) {
  let countTreasure = 0;

  // Check Initial postion of rover

  if (arr[p] === 1) {
    countTreasure++;
  }

  // Checking for right

  for (let i = p + 1; i < arr.length; i++) {
    if (arr[i] === 1) {
      countTreasure++;
    } else {
      break;
    }
  }

  // Checking for left

  for (let i = p - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      countTreasure++;
    } else {
      break;
    }
  }

  return countTreasure;
}

console.log("Count Treasure Block :", roverQuest(2, [0, 1, 0, 1, 1, 0]));
