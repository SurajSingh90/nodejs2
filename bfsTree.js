class treeNode{
    constructor(value,left = null, right = null){
        this.value = value;
        this.right = left;
        this.left = right;
    }

    levelsreach(){
        let queue = []
        queue.push(this)
        while(queue.length>0){
            let node = queue.shift()
            console.log(node.value)
            if(node.left){
                queue.push(node.left)
            }else if(node.right){
                queue.push(node.right)
            }
        }
        
    }
}

let tree = new treeNode(10)
tree.left = new treeNode(20)
tree.right = new treeNode(30)
tree.left.left = new treeNode(40)
tree.left.right = new treeNode(60)
tree.levelsreach()
// console.log(tree)