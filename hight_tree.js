class Node{
    constructor(data){
        this.data =data;
        this.left=this.right=null;
    }
}
function hight(node){
    if(node == null){
        return 0
    }else{
        let d1 = hight(node.left)
        let d2 = hight(node.right)

        if(d1>d2){
            return(d1+1)
        }
        else{
            return(d2+1)
        }
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(hight(root))