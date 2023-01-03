function reverseList(head: ListNode | null): ListNode | null {
  // Idea 1 - Add the first element to the back until you get to the last position
  // Idea 2 - Push all the values to a stack, then pop the stack unto a new one
  let newListStack = new Array();

  while (head) {
    newListStack.push(head.val);
    head = head.next;
  }

  let newList = new ListNode();
  let dummy = newList;

  while (newListStack.length) {
    newList.next = new ListNode(newListStack.pop());
    newList = newList.next;
  }
  return dummy.next;
}
