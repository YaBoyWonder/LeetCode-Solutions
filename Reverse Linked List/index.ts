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

 function reverseList(head: ListNode | null): ListNode | null {

    if (head === null || head.next === null) {
        return head;
    }


    let previous : ListNode = null;
    let current : ListNode = head;

    while (current !== null) {
        let nextVal : ListNode = current.next;

        current.next = previous;
        previous = current;
        current = nextVal;

    }

    return previous;

};