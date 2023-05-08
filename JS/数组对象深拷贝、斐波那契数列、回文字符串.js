// 实现一个斐波那契数列 前两位固定为 1  后面每一位都是前两位 之和

function fibonacci(n) {
    let initArr = [NaN,1,1]// 斐波那契数列 不存在0的索引
    for (let index = 3; index < n; index++) {
        initArr[index] = initArr[index-1] + initArr[index-2]
    }
    return initArr
}

// console.log(fibonacci(20));

const entryObject = { a:Infinity, b:'2', c:3, d:undefined, e:null, f:NaN, g:{aa:1}, h:[1,2,3] }
function deepClone(object) {
    let copyObject = {}
    let typeArr = ['simpleType','arrayType','objectType']
    Object.entries(object).forEach(([key,value])=>{
        function checkType (param) {
            let position = 0
            if(typeof param === 'object') {
                if(Array.isArray(param)) {
                    position += 1
                }else if(param instanceof Object){
                    position += 2
                }else{
                    position = 0
                }
            }
            return typeArr[position]
        }
        let currentType = checkType(value)
        switch (currentType) {
            case typeArr[0]:
                copyObject[key] = value
                break;
            case typeArr[1]:
                copyObject[key] = Array.from(value)
                break;
            case typeArr[2]:
                copyObject[key] = deepClone(value)
                break;
        }
    })
    return copyObject
}
let copyObject = deepClone(entryObject)
console.log(copyObject.g == entryObject.g);
console.log('-------',copyObject);

let arr = [1,2,342,4,3,53]
let arr1 = Array.from(arr)
console.log(arr1);

function PalindromeString(str) {
    if (!str || typeof str !== 'string') return false;
    return str.split('').reverse().join('') === str
}
console.log(PalindromeString(''));