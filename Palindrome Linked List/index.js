  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {

    var slow = head;
    var fast = head;
    var left = null;
    var right = null;
    var temp = null;
  
    while (fast && fast.next) { 
      fast = fast.next.next;
      temp = slow.next;
      slow.next = left;
      left = slow;
      slow = temp;
    }

    right = fast ? slow.next : slow;
  
    while (left && right) {
      if (left.val !== right.val) {
        return false;
      }
      left = left.next;
      right = right.next;
    }
  
    return true;

  };