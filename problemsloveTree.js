class Node{
    constructor(data){
        this.data = data
        this.left = this.right = null;
    }
}
function ifNodeExists(Nodess,key){
    if(Node == null){
        return false
    }
    if(Node.data == key){
        return true
    }
    let res1 = ifNodeExists(Node.left,key)
    // node found, no need to look further
    if(res1){
        return true
    }
    let res2 = ifNodeExists(Node.right,key)
    if(res2){
        return true
    }

}
var root = new Node(0);
        root.left = new Node(1);
        root.left.left = new Node(3);
        root.left.left.left = new Node(7);
        root.left.right = new Node(4);
        root.left.right.left = new Node(8);
        root.left.right.right = new Node(9);
        root.right = new Node(2);
        root.right.left = new Node(5);
        root.right.right = new Node(6);
 
        var key = 4;
 
        if (ifNodeExists(root, key)){
            console.log("its found " ,key)
        }else{
            console.log("not found")
        }