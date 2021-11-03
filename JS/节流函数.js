// 思路： 标识切换	定时器	闭包	（多次点击	按照定时器间隔 执行一次）
window.onscroll = throttle(function(e) {
  console.log('页面滚动了');
})

function throttle(fnc, delay=1000) {
  let flag = true
  return function(...arg){
    if(flag) {
      setTimeout(() => {
        fnc.apply(this, arguments)
        flag = true
      }, delay)
    }
    flag = false
  }
}