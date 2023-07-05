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
    void reorderList(ListNode* head) {
        // 1 -> 2 -> 3 -> NULL
        vector<ListNode*> v;
        ListNode* temp = head;
        while (temp) {
            v.push_back(temp);
            temp=temp->next;
        } //place all values of head into vector;

        int left=0, right=v.size() - 1; 
        head=v[left]; //setting the first/second elements
        head->next=v[right];
        left++;
        temp = head->next;
        while (right > left) {
            temp->next = v[left];
            temp = temp->next;
            right--;
            temp->next=v[right];
            temp=temp->next;
            left++;
        }
        temp->next=NULL; //this marks the end pointer, therefore the end of the re-ordering.
    }
};