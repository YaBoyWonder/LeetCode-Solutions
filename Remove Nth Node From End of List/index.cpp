/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
      ListNode* temp = head;
      int counter=0;
      while (temp) {
          counter++;
          temp=temp->next;
      }  

      if (head == NULL || head->next == NULL) {
          return NULL; //[] (nothing to point to ...)
      }
     
      if (counter - n == 0) {
          head=head->next;
          return head;
      }

      ListNode* output = head;
      temp = head;
        int placement = counter - n;
        int index=0;
      while (index != placement) {
          output=temp;
          temp=temp->next;
          index++;
      }

      output->next=temp->next;
      return head;
    };
};