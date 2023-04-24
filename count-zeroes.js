function countZeroes(arr) {

  let leftIdx = 0;
  let rightIdx = arr.length -1; 

  while (leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2)
    let middleVal = arr[middleIdx]
    console.log("1) MIDDLE IDX:", middleIdx, "MIDDLE VALuE:", middleVal)

    if (arr[0] ===0){// if the first index in the array is 0 then we know the # of 0 is the entire length of the array so we just return the length of the array
        return arr.length
    }
    if(arr[arr.length-1] === 1){// if the last index in the array is 1 then we know there are no 0s so we return 0
        return 0
    }
    if(middleVal === 0 && arr[middleIdx - 1] === 1) {// we are trying to find the first index of 0 in the array so we are seeing first if the middle one is 0 and the one immediate to the left is 1, if so we have found the first index and we can return the length - middle idx 
        return arr.length -middleIdx
    }
    else if(middleVal === 1){ // if the middle value of the array is 1 then we know the first 0 is on the right of the array so we are adjusting out left idx to the middleidx +1
        leftIdx = middleIdx +1
    }
    else{ //if the middle value of the array is 0 then we know the first 0 is on the left of the array so we are adjusting out right idx to the middleidx -1
        rightIdx = middleIdx -1
    }
    middleIdx = Math.floor((leftIdx + rightIdx)/2) // we recalculate the middle idx of the array with the updated left and right idx
    }

}

module.exports = countZeroes

