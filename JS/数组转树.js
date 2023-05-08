let input = [
    {
        id: 1, val: '学校', parentId: null
    }, 
    {
        id: 2, val: '班级1', parentId: 1
    }, 
    {
        id: 3, val: '班级2', parentId: 1
    }, 
    {
        id: 4, val: '学生1', parentId: 2
    }, 
    {
        id: 5, val: '学生2', parentId: 2
    }, 
    {
        id: 6, val: '学生3', parentId: 3
    }
]

function arrayToTree(input) {
    let firstIndex = input.findIndex(v=>v.id == Math.min(...(input.map(v=>v.id))))
    let { id, val } = input[firstIndex]
    input.splice(firstIndex,1)
    let tree = {
        id,
        val,
        children:input.length?handleChildren(input,id):[]
    }
    return tree
}

function handleChildren(array,parentId) {
    let children = []
    array.forEach(item => {
        if(item.parentId === parentId) {
            let { id, val } = item
            children.push({
                id,
                val,
                children:handleChildren(array,id)
            })
        }
    })
    return children
}
console.log(arrayToTree(input));