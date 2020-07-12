function printSumAndProduct (array: number[]) {
  let sum = 0
  let product = 0
  
  sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  product = array.reduce((accumulator, currentValue) => accumulator * currentValue)
  
  console.log(`
    sum: ${sum}
    product: ${product}
  `)
}

const sampleArray: number[] = [1,2,3,4,5]

printSumAndProduct(sampleArray)