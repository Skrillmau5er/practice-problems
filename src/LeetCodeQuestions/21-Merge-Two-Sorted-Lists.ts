/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // create new list, and compare the front of each list. Whatever one is less, make that the first node.
  // Everytime you put a element to the new list, make the first pointers next the first node
  // While loop until both lists are exhuasted

  // Idea two - Iterate over one of the lists and add elements to that one as you go
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy = new ListNode();
  let curr = dummy;

  while (list2 && list1) {
    if (list2.val < list1.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;

    if (!list2 || !list1) {
      curr.next = list1 || list2;
    }
  }

  return dummy.next;
}
