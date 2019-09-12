/*
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is 11.

// Use the `getNext' method or 'next' property to get the following node.

node.getNext()
node.next
*/

function loop_size(node) {
   var nodes = [];
   let n = node;

   while (nodes.indexOf(n) === -1) {
      nodes.push(n);
      n = n.getNext();
   }

   let length = nodes.length - nodes.indexOf(n);
   return length;
}