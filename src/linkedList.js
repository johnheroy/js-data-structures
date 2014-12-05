var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  var nodeToAdd = new Node(value);
  if (this.head === null && this.tail === null){
    this.head = this.tail = nodeToAdd;
  } else {
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  }
};

LinkedList.prototype.removeHead = function(){
  if (this.head === null){
    return;
  }
  var head = this.head;
  this.head = this.head.next;
  return head.value;
};

LinkedList.prototype.contains = function(value){
  var currentNode = this.head;
  while (currentNode !== null){
    if (currentNode.value === value){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

module.exports.LinkedList = LinkedList;
