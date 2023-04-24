const findRotatedIndex = require("./find-rotated-index")
const findPivot = require("./find-rotated-index")
const findTargetBinary= require("./find-rotated-index")

describe("#findRotatedIndex", function(){
  it("returns the correct index", function(){
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
  })
})

// describe("#findsPivot", function(){
//   it("returns the correct index", function(){
//     expect(findPivot([3, 4, 1, 2])).toBe(2)
//     expect(findPivot([6, 7, 8, 9, 1, 2, 3, 4])).toBe(4)
//     expect(findPivot([37, 44, 66, 102, 10, 22])).toBe(4)
//     expect(findPivot([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(4)
//   })
// })

// describe("#findTargetBinary", function(){
//   it("returns the correct index", function(){
//     expect(findTargetBinary([1, 2, 3, 4], 4)).toBe(3)
//     expect(findTargetBinary([1, 2, 3, 4, 6, 7, 8, 9], 8)).toBe(6)
//     expect(findTargetBinary([1, 2, 3, 4, 6, 7, 8, 9], 3)).toBe(2)
//     expect(findTargetBinary([10, 22, 37, 44, 66, 102], 14)).toBe(-1)
//   })
// })