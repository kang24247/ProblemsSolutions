// 思路 filter	indexof	/	new	Set( array)
arr =  arr.filter((item, index) => {
  return arr.indexOf(item, 0) === index
})