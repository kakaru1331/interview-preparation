/**
 * merge two arrays together
 * @param array
 * @param helper 
 * @param low 
 * @param middle 
 * @param high 
 */
function merge(array: number[], helper: number[], low: number, middle: number, high: number): void {
  for (let i = low; i <= high; i++) {
    helper[i] = array[i];
  }

  let helperLeft = low;
  let helperRight = middle + 1;
  let current = low;

  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      array[current] = helper[helperLeft];
      helperLeft++;
    } else {
      array[current] = helper[helperRight];
      helperRight++;
    }

    current++;
  }

  const remaining = middle - helperLeft;
  
  for (let i = 0; i <= remaining; i++) {
    array[current + i] = helper[helperLeft + i];
  }
}

export default merge;