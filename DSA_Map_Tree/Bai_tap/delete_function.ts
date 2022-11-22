class TreeNode<E> {
    public data: E;
    public left: TreeNode<E> | null;
    public right: TreeNode<E> | null;

    constructor(data: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree<E>{
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode<E>(data);
            let currentNode = this.root;

            while (currentNode) {
                /* so sánh giá trị currentNode với data */
                if (data < currentNode.data) {
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên trái */
                    currentNode = currentNode.left;

                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên phải */
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }
    inorder(node: TreeNode<E>): void {
        if (node) {
            console.log(node.data)
            if (node.left) {
                this.inorder(node.left)
            }
            if (node.right) {
                this.inorder(node.right)
            }
        }
    }
    deleteRec(root:TreeNode<E> | null, data:E){
        /* Base Case: If the tree is empty */
        if (root == null)
            return root;

        /* Otherwise, recur down the tree */
        if (data < root.data)
            root.left = this.deleteRec(root.left, data);
        else if (data > root.data)
            root.right = this.deleteRec(root.right, data);

            // if key is same as root's
            // key, then This is the
        // node to be deleted
        else {
            // node with only one child or no child
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;

            // node with two children: Get the inorder
            // successor (smallest in the right subtree)
            root.data = this.minValue(root.right);

            // Delete the inorder successor
            root.right = this.deleteRec(root.right, root.data);
        }
        this.totalNode--;
        return root;
    }
    minValue(root:TreeNode<E>)
    {
        let minv = root.data;
        while (root.left != null)
        {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
    }

}
let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(1);

console.log(`The numbers of nodes ${tree.totalNode}`)
if(tree.root) tree.inorder(tree.root)
tree.deleteRec(tree.root,7)
tree.deleteRec(tree.root,5)
console.log(`The numbers of nodes ${tree.totalNode}`)
if(tree.root) tree.inorder(tree.root)

