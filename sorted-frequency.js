function sortedFrequency(arr, target) { 
    let first = findFirst(arr,target)
    let last = findLast(arr, target)
    return last-first+1
}
//           M
//        r
//     m
//        m
// [1, 1, 2, 2, 2, 2, 3]
function findFirst(arr, target){
    let leftIdx = 0;
    let rightIdx = arr.length -1; 

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]
    console.log("1) MIDDLE IDX:", middleIdx, "MIDDLE VALuE:", middleVal, "TARGET", target)

        if(arr[0] === target){
        return 0
    }
        // first IDX of target
        if(middleVal === target && arr[middleIdx - 1] < target) { 
            console.log("FOUND THE first IDX of target")
         return middleIdx
        }

        if(middleVal < target){
            console.log("MIDDLE VALUE IS NOT THE TARGET, TARGET IS ON THE RIGHT SIDE OF ARR ")    
            leftIdx = middleIdx +1
        }
        else{ // if the middle value of the array is 1 then we know the first 0 is on the right of the array so we are adjusting out left idx to the middleidx +1
            console.log("MIDDLE VALUE IS NOT THE TARGET, TARGET IS ON THE LEFT SIDE OF ARR ")    
            rightIdx = middleIdx -1
            }
            middleIdx = Math.floor((leftIdx + rightIdx)/2) // we recalculate the middle idx of the array with the updated left and right idx
    
    }

}

function findLast(arr, target){
    let leftIdx = 0;
    let rightIdx = arr.length -1; 

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]
        console.log("1) MIDDLE IDX:", middleIdx, "MIDDLE VALuE:", middleVal, "TARGET", target)
        // if the last idx in the array is the target then then we return the last idx of the array as the lastIdx of the tartget #
        if(arr[arr.length-1] === target){
            return arr.length-1
        }
        // last IDX of target
        if(middleVal === target && arr[middleIdx + 1] > target) { 
            console.log("!!!!!!!!FOUND THE LAST IDX of target")
         return middleIdx
        }
        if(middleVal > target){
            console.log("MIDDLE VALUE IS NOT THE TARGET, TARGET IS ON THE LEFT SIDE OF ARR ")    
            rightIdx = middleIdx -1
        }
        else{ // if the middle value of the array is 1 then we know the first 0 is on the right of the array so we are adjusting out left idx to the middleidx +1
        console.log("MIDDLE VALUE IS NOT THE TARGET, TARGET IS ON THE RIGHT SIDE OF ARR ")    
        leftIdx = middleIdx +1
        }
        middleIdx = Math.floor((leftIdx + rightIdx)/2) // we recalculate the middle idx of the array with the updated left and right idx

}
}






module.exports = sortedFrequency