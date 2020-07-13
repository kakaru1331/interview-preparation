function printParis(array: number[]) {
  array.forEach((_, outterIndex) => {
    
    array.forEach((_, innerIndex) => {
      console.log(`outter index: ${outterIndex} and inner index: ${innerIndex}`)
    })
  })
}

const array = [1, 1, 1, 1, 1]
printParis(array)