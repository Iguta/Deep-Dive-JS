//Node
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



//Linked List 1
const L1_node1 = new Node(2);
const L1_node2 = new Node(4);
const L1_node3 = new Node(3);
//linking the nodes
L1_node1.next = L1_node2;
L1_node2.next = L1_node3;


//Linked List 2
const L2_node1 = new Node(5);
const L2_node2 = new Node(6);
const L2_node3 = new Node(4);
//linking the nodes
L2_node1.next = L2_node2;
L2_node2.next = L2_node3;





//while(node !== null){
//    console.log(node.data + "-->");
//    node = node.next;
//}

var addTwoNumbers = function(L1, L2){
    let num1 ="";
    let count1 = 0;
    let node1 = L1;

    let num2 ="";
    let count2 = 0;
    let node2 = L2;
    while(node1 !== null){
        console.log(node1.data + "-->");
        num1 += node1.data;
        node1 = node1.next;
      
    }
    while(node2 !== null){
        console.log(node2.data + "-->");
        num2 += node2.data;
        node2 = node2.next;
      
    }
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    console.log(num1, num2)
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum) 
    sum += "";
    sumReverse = sum.split("").reverse();
    console.log("sum", sumReverse)
    for(i=0; i<sum.length; i++){
        new Node(parseInt(sum[i]));
    }

}

addTwoNumbers(L1_node1, L2_node1);