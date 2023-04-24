function findRotationCount(arr) {
  let start = 0;
  let end = arr.length -1;

    if(arr[start] <= arr[end]){ // if the start of the array is smaller than the end of the array then the array has not been rotated - its just a regular sorted array  
        return 0
        }
  while (start <= end){
    let middleIdx = Math.floor((start+end)/2)
    
        if(arr[middleIdx] > arr[middleIdx +1]){ // if the middle value of the array is BIGGER than the one on the right then we know that is where the pivot took place
            return middleIdx +1 // so we return the middle index+1 becuase that is the first value that doesnt follow the sort
        }

        if(arr[middleIdx] < arr[middleIdx-1]){ //if the middle value is SMALLER than the one on the left then we found the pivot point
            return middleIdx // we return the middle index becuase that value is that is not following the sort
        }

        if(arr[start] <= arr[middleIdx]){// if the start of our array is smaller than the middle of the array then we know the first half of the array is in order
            start = middleIdx +1         //so we need to look on the LATTER half of the array so we need to adjust the start of our array to the middle idx +1
        } 

        else{                  // if the start of the array is bigger than the middle then we know the FIRST half of the array is not sorted
            end = middleIdx -1 // so we need to look at the FIRST half of the array and therefore adjust our end point to the middle index -1
        }
  }
}

module.exports = findRotationCount