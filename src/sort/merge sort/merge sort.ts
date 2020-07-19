import mergeAndSort from "./merge and sort";

/**
 * merge sort
 * @param array an array which is made of numbers
 */
function mergeSort (array: number[]): void {
  const helper = [...array]; 
  mergeAndSort(array, helper, 0, array.length - 1);
}

export default mergeSort;