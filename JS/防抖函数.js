function debounce(fnc, delay=500) {
  let timer = null
  return function(...arg) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fnc.apply(this, arguments)
    }, delay)
  } 
}

// 假设存在一个input 输入框  思路：闭包	定时器	apply	（多次点击	执行最新一次）

const input = document.querySelector('input')
input.oninput = debounce(function() {
  console.log(this.value)
})
