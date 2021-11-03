//  思路：新建左右共两个数组拆分原数组	取出中间值	递归
function quicksort(array) {
  if(array.length <=1){return array}
  const index = Math.floor(array.length/2)
  const pivot = array.splice(index, 1)
  const left = [], right = []
  array.forEach(element => {
    if(item<pivot) {
      left.push(item)
    }else{
      right.push(item)
    }
  })
  return quicksort(left).concat(pivot, quicksort(right))
}