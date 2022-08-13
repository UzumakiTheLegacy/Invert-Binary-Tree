function invertBinaryTree(root) {
      if(!root) return null;
      var temp = root.left;
      root.left = root.right;
      root.right = temp;
      invertBinaryTree(root.left);
      invertBinaryTree(root.right);
      return root;
   }

   var root = {
      value: 1,
      left: {
         value: 2,
         left: {
            value: 4,
            left: null,
            right: null
         },
         right: {
            value: 5,
            left: null,
            right: null
         }
      },
      right: {
         value: 3,
         left: {
            value: 6,
            left: null,
            right: null
         },
         right: {
            value: 7,
            left: null,
            right: null
         }
      }
   };
   invertBinaryTree(root);
   console.log(root);
   