import merge from "./merge";

/**
 * merge and sort arrays recursively
 * @param array 
 * @param helper 
 * @param low 
 * @param high 
 */
function mergeAndSort (array: number[], helper: number[], low: number, high: number):void {
  if (low < high)   {
    const middle = (low + high) / 2;
    
    mergeAndSort(array, helper, low, middle);
    mergeAndSort(array, helper, middle+1, high);

    merge(array, helper, low, middle, high);
  }
}

export default mergeAndSort;