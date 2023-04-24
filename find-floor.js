function findFloor(arr, x) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end){
    let middleIdx = Math.floor( (start+end)/2)

    if(arr[middleIdx] <= x && x <= arr[middleIdx+1]){
        return arr[middleIdx]
    }

    if(x < arr[0]){
        return -1
    }
    
    if(arr[middleIdx] < x) {
        console.log("MIDDLE VALUE IS", arr[middleIdx], "WHICH SHOULD BE SMALLER THAN X:", x)
        start = middleIdx +1
        if (middleIdx === arr.length -1){
            return arr[middleIdx]
        }
    }

    else {
        end = middleIdx -1
    }

  }
}

module.exports = findFloor