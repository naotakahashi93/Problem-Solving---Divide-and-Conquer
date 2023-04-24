function findRotatedIndex(arr, target) {
    let pivotPoint = findPivot(arr)
    console.log(pivotPoint, "PIVOT POINT")
    if (pivotPoint > 0 && target >= arr[0] && target <= arr[pivotPoint-1]){
        console.log("HITTING")
        return findTargetBinary(arr, target, 0, pivotPoint-1)
    }
    else{
        console.log("HITTING ELSE")
        return findTargetBinary(arr, target, pivotPoint, arr.length-1)
    }
}

function findTargetBinary(arr, target, first, last){
    while (first <= last) {
       
        let middleIdx = Math.floor((first + last)/2)
        let middleVal = arr[middleIdx]

        if (middleVal === target){
            return middleIdx
        }
        if(middleVal <= target){
            first = middleIdx +1
        }
        else{
            last = middleIdx-1
        }
    }
    return -1
}


function findPivot(arr){
        
    let first = 0;
    let last = arr.length -1;

    if(arr[0]< arr[arr.length-1]){
        return 0
    }

    while (first <= last) {
        let middleIdx = Math.floor((first + last)/2)
        let middleVal = arr[middleIdx]
 

        // in these two if conditionals we are trying to find the pivot point using the middle point 
        // 1) if the middle value is larger than the value to the right of it then we found the pivot point - we return the mididx +1 to get the pivot poitn (aka the first number where it pivots and is not ascending)   
        if(middleVal > arr[middleIdx +1]){
            return middleIdx +1
        }
        // 2) similarly here if the middle value is smaller than the value to the left of it then we found the pivot point - we return the mididx to get the pivot poitn    
        if(middleVal < arr[middleIdx -1]){
            return middleIdx 
        }

        // if the middle is not the pivot point then we gotta move the indexes around and get a new middle:
        // 1) if the start of the array is smaller than the middle value then we know that the pivot point is on the right so we adjust the start of the array to the midpoint +1
        if(arr[first] <= middleVal){
            first = middleIdx +1
        }
        // 2) else (aka if the start of the array is more than the middle value) then we know the pivot point is somewhere on the left side so we adjust the end of the array to the middleIdx -1
        else { 
            last = middleIdx -1
        }
    }
}

module.exports = findRotatedIndex
