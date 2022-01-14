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
// vue3 中使用防抖函数
<template>
  <input style="margin:40px;" type="text" v-model="inputValue" @input="handlerInput" />
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
class Debounce {
  constructor(delay) {
    this.delay = delay ? delay : 500
    this.timeOut = null
  }
  debounceEnd() {
    return new Promise((resolve, reject) => {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        resolve(inputValue.value)
      }, this.delay)
    })
  }
}
const de = new Debounce(1000)
async function handlerInput() {
  const info =  await de.debounceEnd()
  console.log(info);
}
</script>
