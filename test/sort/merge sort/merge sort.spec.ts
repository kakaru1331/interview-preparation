import mergeSort from "@/sort/merge sort/merge sort";

test("merge sort", () => {
  const unsortedArray = [10,8,6,4,2,0];
  mergeSort(unsortedArray);
  console.log(unsortedArray);
});