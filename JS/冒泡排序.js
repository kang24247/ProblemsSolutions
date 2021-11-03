// 思路：双层for循环	内层循环长度控制优化(一轮一个 极值)		交换位置(比较符决定正序倒序)
for (let i = 0; i < array.length; i++) {
  // 内层循环 执行完一次 数组中极值会移动到数组的首部或者尾部 （通过if语句的逻辑符号决定）
  for (let j = 0; j < array.length-i-1; j++) {
    if(array[j]>array[j+1]){
      let k = array[j]
      array[j] = array[j+1]
      array[j+1] = k
    }    
  }
}