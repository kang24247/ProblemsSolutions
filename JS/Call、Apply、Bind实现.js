let customObj = {
  name:'小米',
  test(age,sex) {
    console.log(this);
    console.log(`name==> ${this.name} 、age===> ${age} 、sex===> ${sex}`);
  }
}
let customObj1 = {
  name:'小号'
}

// reWrite call
Function.prototype.customGenerateCall =  function(that,...arg) {
  that = that || window
  let symbolKey = Symbol()
  that[symbolKey] = this
  const result = that[symbolKey](...arg)
  delete that[symbolKey]
  return result
}
customObj.test.customGenerateCall(customObj1,20,'ssssss')

// reWrite apply params instace Array
Function.prototype.customApply = function (target,argArr) {
  if(!(argArr instanceof Array)) throw new Error('second params type error please input <Array> !')
  target = target || window
  let symbolKey = Symbol()
  target[symbolKey] = this
  const result = target[symbolKey](...argArr)
  delete symbolKey
  return result
}
customObj.test.customApply(customObj1,[18,'male'])

// reWrite bind not able immediate call
Function.prototype.customBind = function (target,...arg) {
  target = target || window
  let symbolKey = Symbol()
  target[symbolKey] = this
  return function () {
    return target[symbolKey](...arg)
  }
}

let func = customObj.test.customBind(customObj1,55,'female')
func()
let keys = Reflect.ownKeys(customObj1)
console.log(keys[1]==keys[2]);
