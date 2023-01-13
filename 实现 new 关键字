function Person(name,age,gender) {
  this.name = name
  this.age = age
  this.gender = gender
  this.sayHello = function () {
    console.log(`I'm ${this.name}, my age is ${this.age} , gender is ${this.gender}`);
  }
}

function customNew(constructorFunc) {
  if(typeof constructorFunc !== 'function') throw new Error('first param must be Function !')
  let args = Array.from(arguments).splice(1)
  let instanceObject = Object.create(constructorFunc.prototype)
  const result = constructorFunc.apply(instanceObject,args)
  if(result instanceof Object || typeof result === 'function') {
    return result
  }
  return instanceObject
}

let instace1 = customNew(Person,'小明',19,'male')
let instace2 = customNew(Person,'小红',16,'female')
console.log(instace1,instace2);
instace1.sayHello()
instace2.sayHello()
