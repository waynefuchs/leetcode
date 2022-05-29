/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        ListNode firstNode = new ListNode(-1);
        ListNode currentNode = firstNode;
        int carry = 0;

        // Both l1 and l2 have data
        while (l1 != null && l2 != null)
        {
            int sum = l1.val + l2.val + carry;
            int onesPlace = sum % 10;
            carry = sum / 10;
            currentNode.next = new ListNode(onesPlace);
            currentNode = currentNode.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        // l1 has data, l2 is null
        while (l1 != null)
        {
            int sum = l1.val + carry;
            int onesPlace = sum % 10;
            carry = sum / 10;
            currentNode.next = new ListNode(onesPlace);
            currentNode = currentNode.next;
            l1 = l1.next;
        }

        // l2 has data, l1 is null
        while (l2 != null)
        {
            int sum = l2.val + carry;
            int onesPlace = sum % 10;
            carry = sum / 10;
            currentNode.next = new ListNode(onesPlace);
            currentNode = currentNode.next;
            l2 = l2.next;
        }

        // Take care of remaining carry
        if (carry > 0) currentNode.next = new ListNode(carry);

        return firstNode.next;
    }

}
