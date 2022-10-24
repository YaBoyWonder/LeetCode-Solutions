/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

    //1, 2, -> 0

  var starting_point = head; //1 
  var second_point = head; //1

  while (starting_point && second_point) { //while head value + next value != null

    starting_point = starting_point.next; //1 --> 2 --> 1
    second_point = second_point.next ? second_point.next.next : undefined; //1 --> 2 --> 1  --> 2 --> 1

    if (starting_point === second_point) {  //2 != 1 ==> 1 == 1
        return true;
    }

  }
  return false;
};