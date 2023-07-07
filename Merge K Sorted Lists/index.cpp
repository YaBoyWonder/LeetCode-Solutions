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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* temp;
        vector<int> v;
        for (int i=0; i<lists.size(); i++) {
            temp=lists[i]; //1, 4, 5 --> 1, 3, 4 --> 2, 6
            while (temp) {
                v.push_back(temp->val);
                temp=temp->next;
            }
        }

        sort(v.begin(), v.end());
        ListNode* placer = new ListNode(-1);
        ListNode* tracker = placer;

        for (auto x : v) {
            tracker->next=new ListNode(x);
            tracker=tracker->next;
        }
        return placer->next;
    }
};